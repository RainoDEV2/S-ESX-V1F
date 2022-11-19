
ESX = nil

TriggerEvent('esx:getSharedObject', function(obj) ESX = obj end)

RegisterServerEvent('cash:remove')
AddEventHandler('cash:remove', function(source, cash)
    local src = source
    local xPlayer = ESX.GetPlayerFromId(src)
    money = xPlayer.getMoney()
    if money >= cash then
        xPlayer.removeMoney(cash)
        --TriggerClientEvent("banking:removeCash", src, cash)
        --TriggerClientEvent('isPed:UpdateCash', src, xPlayer.getMoney())
	end
end)

RegisterServerEvent('ExeLds:repairWeapon')
AddEventHandler('ExeLds:repairWeapon', function(slot, amount, serial)
    local src = source
    local xPlayer = ESX.GetPlayerFromId(src)
    if xPlayer.getAccount('bank').money >= tonumber(amount) then
        xPlayer.removeAccountMoney('bank', tonumber(amount))
        local creationDate = os.time().."000"
        local cid = getCid(xPlayer.identifier) 
        local name = "ply-"..cid
        MySQL.Sync.execute('UPDATE user_inventory2 SET creationDate = @creationDate WHERE name = @name and slot = @slot',
        {
            ['@creationDate'] = creationDate,
            ['@name'] = name,
            ['@slot'] = slot
        })
        TriggerClientEvent('mythic_notify:client:SendAlert', xPlayer.source, { type = 'inform', text = serial..' seri numaralı silahınız tamir edildi', length = 3000, style = { ['background-color'] = '#009900', ['color'] = '#FFFFFF' } })
    else
        TriggerClientEvent('mythic_notify:client:SendAlert', xPlayer.source, { type = 'inform', text = 'Tamir için bankanızda yeterli miktarda para bulunmuyor!', length = 3000, style = { ['background-color'] = '#CC0000', ['color'] = '#FFFFFF' } })
    end
end)

RegisterCommand('envanter', function(source, args, raw) 
    local xPlayer = ESX.GetPlayerFromId(source) 
    if xPlayer.getGroup() == 'superadmin' then
        if args[1] ~= nil then 
            local xTarget = ESX.GetPlayerFromId(args[1]) 
            if not xTarget then
                TriggerClientEvent('chat:addMessage', source, { args = { '^1SYSTEM', ' ID yanlış!' } })
                return
            end 
            
            local cid = getCid(xTarget.identifier) 
            if args[2] == 'envanter' then
                TriggerClientEvent("server-inventory-open", source, "1", "ply-" .. cid)
            elseif args[2] == 'motel' then       
                TriggerClientEvent("server-inventory-open", source, "1", "motel-" .. cid)
            else
                TriggerClientEvent('chat:addMessage', source, { args = { '^1SYSTEM', ' Görmek istediğiniz envanter tipi yanlış! (envanter / motel)' } })
            end  
        else
            TriggerClientEvent('chat:addMessage', source, { args = { '^5ExeLds', ' ^1Oyuncu ID ve Envanter tipi girilmedi!' } })
        end
    else
        TriggerClientEvent('chat:addMessage', source, { args = { '^1SYSTEM', ' Bu komutu kullanmak için yetkiye sahip değilsin!' } })
    end
end)

RegisterServerEvent('people-search')
AddEventHandler('people-search', function(target)
    local _source = source
    local xPlayer = ESX.GetPlayerFromId(target)
    local cid = getCid(xPlayer.identifier) 
    TriggerClientEvent("server-inventory-open", _source, "1", "ply-" .. cid)
end)



RegisterServerEvent('police:SeizeCash')
AddEventHandler('police:SeizeCash', function(target)
    local src = source
    local xPlayer = ESX.GetPlayerFromId(src)
    local identifier = xPlayer.identifier
    local zPlayer = ESX.GetPlayerFromId(target)
    TriggerClientEvent("banking:addBalance", src, zPlayer.getMoney())
    TriggerClientEvent("banking:removeBalance", target, zPlayer.getMoney())
    zPlayer.setMoney(0)
    TriggerClientEvent('notification', target, 'Paranıza el konuldu',1)
    TriggerClientEvent('notification', src, 'Seized persons cash', 1)
 

end)



RegisterServerEvent('Stealtheybread')
AddEventHandler('Stealtheybread', function(target)
    local src = source
    local xPlayer = ESX.GetPlayerFromId(src)
    local identifier = xPlayer.identifier
    local zPlayer = ESX.GetPlayerFromId(target)

    TriggerClientEvent("banking:addBalance", src, zPlayer.getMoney())
    TriggerClientEvent("banking:removeBalance", target, zPlayer.getMoney())
    xPlayer.addMoney(zPlayer.getMoney())
    zPlayer.setMoney(0)
    TriggerClientEvent('notification', target, 'Your cash was robbed off you.', 1)
end)



RegisterServerEvent("Buy:id")
AddEventHandler("Buy:id", function()
    local src = source
    local xPlayer = ESX.GetPlayerFromId(src)
    if xPlayer.getMoney() >= 500 then
        xPlayer.removeMoney(500)
        TriggerClientEvent("giveitem", src)
        TriggerClientEvent("banking:removeBalance", src, 500)
        getIdentity2(source, function(identity)
            TriggerClientEvent("notification", src, "You have just created a Citizen Card with the Name: " .. identity.firstname .. " " .. identity.lastname .."")
        end)
    else
        TriggerClientEvent("notification", src, "You dont have enough money for this.", 2)
    end

end)

function getIdentity2(source, callback)
	local identifier = GetPlayerIdentifiers(source)[1]
	MySQL.Async.fetchAll('SELECT identifier, firstname, lastname FROM `users` WHERE `identifier` = @identifier', {
		['@identifier'] = identifier
	}, function(result)
		if result[1].firstname ~= nil then
			local data = {
				identifier	 = result[1].identifier,
				firstname	 = result[1].firstname,
				lastname	 = result[1].lastname
			}

			callback(data)
		else
			local data = {
				identifier	 = '',
				firstname	 = '',
				lastname	 = ''
			}

			callback(data)
		end
    end)
end


RegisterCommand('evidence', function(source, args)
    local src = source
    local xPlayer = ESX.GetPlayerFromId(src)
    local boxID = args[1]
    if xPlayer.job.name == 'police' and boxID and type(tonumber(boxID)) == 'number' then
        TriggerClientEvent("server-inventory-open", src, "1", "Case-" .. boxID)
    else 
        TriggerClientEvent("notification", src, "Job Required: Police")
    end
end)



-- RegisterServerEvent('trp-inventory:UpdateAmmo')
-- AddEventHandler('trp-inventory:UpdateAmmo', function(hash, count)
--     local player = ESX.GetPlayerFromId(source)
--     local cid = getCid(player.identifier) 
--     print("Server side hash", hash)
--     MySQL.Async.execute('UPDATE trp_ammo SET count = @count WHERE hash = @hash AND owner = @owner', {
--         ['@owner'] = cid,
--         ['@hash'] = hash,
--         ['@count'] = count
--     }, function(results)
--         if results == 0 then
--             MySQL.Async.execute('INSERT INTO trp_ammo (owner, hash, count) VALUES (@owner, @hash, @count)', {
--                 ['@owner'] = cid,
--                 ['@hash'] = hash,
--                 ['@count'] = count
--             })
--         end
--     end)
-- end)


-- ESX.RegisterServerCallback('trp-inventory:CheckForAmmo', function(source, cb, hash, count)
--     local xPlayer = ESX.GetPlayerFromId(source)
--     local cid = getCid(xPlayer.identifier) 
--     MySQL.Async.fetchAll('SELECT * FROM trp_ammo WHERE owner = @owner and hash = @hash', {
--         ['@owner'] =  cid,
--         ['@hash'] = hash
--     }, function(results)
--         if #results == 0 then
--             cb(nil)
--         else
--             cb(results[1].count)
--         end
--     end)

-- end)



RegisterServerEvent("ExeLds:updateLastWeaponSerial")
AddEventHandler("ExeLds:updateLastWeaponSerial", function(serial)
        local src = source
        local xPlayer = ESX.GetPlayerFromId(src)
        MySQL.Sync.execute('UPDATE users SET currentSerial = @currentSerial WHERE identifier = @identifier',
                    {
                        ['@currentSerial'] = serial,
                        ['@identifier'] = xPlayer.identifier
                    })
end)

RegisterServerEvent('cash-checksv')
AddEventHandler('cash-checksv', function(target)
        local src = source
        local xPlayer = ESX.GetPlayerFromId(src)
        local zPlayer = ESX.GetPlayerFromId(target)
        local money = zPlayer.getMoney()
        TriggerClientEvent('chat:addMessage',  src, {
            template =  '<div style="padding: 0.5vw; padding-left: 0.8vw; background-color: rgba(207, 125, 25, 0.7); border-radius: 6px;"><span style="width: 100%; font-weight: bold;"></span>Cash: ${0}</div>',
            args = {money}
        }) 
        TriggerClientEvent("notification", target, "Your Balances were checked")
end)

 function getCid(identifier) 
        local result = MySQL.Sync.fetchAll("SELECT characters.id FROM characters WHERE characters.identifier = @identifier", {
            ['@identifier'] = identifier
        })
        if result[1] ~= nil then
            return result[1].id
        end
        return nil
 end

RegisterServerEvent("server-item-quality-update")
AddEventHandler("server-item-quality-update", function(player, data)
        if data.quality < 1 then
            exports.ghmattimysql:execute("UPDATE user_inventory2 SET `quality` = @quality WHERE name = @name AND slot = @slot AND item_id = @item_id", {
                ['quality'] = "0", 
                ['name'] = player, 
                ['slot'] = data.slot,
                ['item_id'] = data.item_id
            })
        end
end)


RegisterServerEvent('ExeLds:giveItem')
AddEventHandler('ExeLds:giveItem', function(item, amount, targetSource, label, info)
        local src = source
        local xPlayer = ESX.GetPlayerFromId(src)
        local xTarget = ESX.GetPlayerFromId(targetSource)
        if xPlayer ~= nil and xTarget ~= nil then
            amount = tonumber(amount)
            local currentItemCount = xPlayer.getInventoryItem(item).count
            if currentItemCount >= amount then
                xPlayer.removeInventoryItem(item, amount)
                TriggerClientEvent("ExeLds:getItem", xTarget.source, item, amount, info)
                MySQL.Async.execute('INSERT INTO transfer (Sender, Type, Amount, Reciever)VALUES (@Sender, @Type, @Amount, @Reciever) ',{['@Sender']   = xPlayer.name,['@Type']   = item,['@Amount']    = amount,['@Reciever']    = xTarget.name  })	
                TriggerClientEvent('mythic_notify:client:SendAlert', xPlayer.source, { type = 'inform', text = amount..' adet '..label..' verdiniz', length = 3000, style = { ['background-color'] = '#009900', ['color'] = '#FFFFFF' } })
                TriggerClientEvent('mythic_notify:client:SendAlert', xTarget.source, { type = 'inform', text = amount..' adet '..label..' aldınız', length = 3000, style = { ['background-color'] = '#009900', ['color'] = '#FFFFFF' } })
            else
                TriggerClientEvent('mythic_notify:client:SendAlert', src, { type = 'inform', text = 'Vermek istediğin miktarda eşyaya sahip değilsin!', length = 3000, style = { ['background-color'] = '#CC0000', ['color'] = '#FFFFFF' } })
            end
        else
            TriggerClientEvent('mythic_notify:client:SendAlert', src, { type = 'inform', text = 'Eşya vermek istediğin oyuncu aktif değil!', length = 3000, style = { ['background-color'] = '#CC0000', ['color'] = '#FFFFFF' } })
        end
end)

ESX.RegisterServerCallback('ExeLds:InventoryGetCharacterNameServer', function(source, cb, target)
        local xTarget = ESX.GetPlayerFromId(target)

        local result = MySQL.Sync.fetchAll("SELECT firstname, lastname FROM users WHERE identifier = @identifier", {
            ['@identifier'] = xTarget.identifier
        })

        local firstname = result[1].firstname
        local lastname  = result[1].lastname

        cb(''.. firstname .. ' ' .. lastname ..'')
end)

RegisterServerEvent('ExeLds:setLastPhone')
AddEventHandler('ExeLds:setLastPhone', function(info)
        info = json.decode(info)
        local src = source
        local xPlayer = ESX.GetPlayerFromId(src)
        MySQL.Sync.execute('UPDATE users SET phone_number = @phone_number WHERE identifier = @identifier',
            {
                ['@phone_number'] = info.PhoneNumber,
                ['@identifier'] = xPlayer.identifier
            })
        TriggerClientEvent("telefonac", src)
end)

RegisterServerEvent('ExeLds:openRoomStorage')
AddEventHandler('ExeLds:openRoomStorage', function(storageName)
        local _source = source
        local xPlayer = ESX.GetPlayerFromId(_source)
        local cid = getCid(xPlayer.identifier) 
        TriggerClientEvent("server-inventory-open", _source, "1", storageName.."-" .. cid)
end)

RegisterServerEvent('ExeLds:openGeneralStash')
AddEventHandler('ExeLds:openGeneralStash', function(storageName)
        local _source = source
        local xPlayer = ESX.GetPlayerFromId(_source)
        TriggerClientEvent("server-inventory-open", _source, "1", storageName)
end)


ESX.RegisterServerCallback('ExeLds:getCurrentClothes', function(source, cb)
        local xPlayer = ESX.GetPlayerFromId(source)
        local result = MySQL.Sync.fetchAll("SELECT currentClothes FROM characters WHERE identifier = @identifier", {
            ['@identifier'] = xPlayer.identifier
        })
        if tonumber(result[1].currentClothes) ~= 0 then
            local control = MySQL.Sync.fetchAll("SELECT inventory FROM savedclothes WHERE owner = @owner", {
                ['@owner'] = xPlayer.identifier
            })
            if control[1] == nil then
                MySQL.Async.execute('INSERT INTO savedclothes (inventory, label, owner) VALUES (@inventory, @label, @owner)', {
                    ['@inventory'] = "1",
                    ['@label'] = "Başlangıç Kıyafetlerim",
                    ['@owner'] = xPlayer.identifier
                })
            end
        end
        cb(result[1].currentClothes)
end)


ESX.RegisterServerCallback('ExeLds:GetNameforInventory', function(source, cb)
        local xPlayer = ESX.GetPlayerFromId(source)

        if xPlayer ~= nil then
            local result = MySQL.Sync.fetchAll("SELECT firstname, lastname FROM users WHERE identifier = @identifier", {
                ['@identifier'] = xPlayer.identifier
            })

            
            local firstName = firstToUpper(string.lower(result[1].firstname))
            local lastNamme = firstToUpper(string.lower(result[1].lastname))
            local charName = firstName.." "..lastNamme
            local jobName = firstToUpper(string.lower(xPlayer.job.label))

            local name = {name = charName, id = source, job = jobName}

            cb(name)
        end
end)

function firstToUpper(str)
    return (str:gsub("^%l", string.upper))
end
    