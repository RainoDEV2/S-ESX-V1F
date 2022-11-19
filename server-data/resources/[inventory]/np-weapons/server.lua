ESX = nil

Citizen.CreateThread(function()
	while ESX == nil do
		TriggerEvent('esx:getSharedObject', function(obj) ESX = obj end)
		Citizen.Wait(0)
	end
end)

RegisterNetEvent('np-weapons:getAmmo')
AddEventHandler('np-weapons:getAmmo', function()
    local ammoTable = {}
    local _source = source
    local xPlayer = ESX.GetPlayerFromId(source)
    local amm = MySQL.Sync.fetchAll('SELECT type,ammo FROM weapon_ammo WHERE id = @identifier',{['@identifier'] = xPlayer.identifier})
    for i = 1, #amm, 1 do
        if ammoTable["" .. amm[i].type .. ""] == nil then
			ammoTable["" .. amm[i].type .. ""] = {}
			ammoTable["" .. amm[i].type .. ""]["ammo"] = amm[i].ammo
			ammoTable["" .. amm[i].type .. ""]["type"] = ""..amm[i].type..""
		end
    end
    TriggerClientEvent('np-items:SetAmmo', _source, ammoTable)
    Citizen.Wait(100)
end)

RegisterNetEvent('np-weapons:updateAmmo')
AddEventHandler('np-weapons:updateAmmo', function(newammo,ammoType,ammoTable)
    local _source = source
    local xPlayer = ESX.GetPlayerFromId(_source)
    local ammo = MySQL.Sync.fetchAll('SELECT ammo FROM weapon_ammo WHERE type = @type AND id = @identifier',{['@type'] = ammoType, ['@identifier'] = xPlayer.identifier})
    if ammo[1] == nil then
        MySQL.Async.execute('INSERT INTO weapon_ammo (id, type, ammo) VALUES (@identifier, @type, @ammo)', {
            ['@identifier'] = xPlayer.identifier,
            ['@type'] = ammoType,
            ['@ammo'] = newammo
        })
    else
        MySQL.Async.execute('UPDATE weapon_ammo SET `ammo` = @newammo WHERE type = @type AND ammo = @ammo AND id = @identifier', {
            ['@identifier'] = xPlayer.identifier,
            ['@type'] = ammoType,
            ['@ammo'] = ammo[1].ammo,
            ['@newammo'] = newammo
        })
    end
end)