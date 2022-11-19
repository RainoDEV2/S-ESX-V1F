ESX = nil
bandana = false
suitcase = false 
Boombox = false 
Box = false 
DuffelBag = false
MedicalBag = false
SecurityCase = false
Toolbox = false
local pedGui = false
local currentWeight = 0
local karakterIsim

Citizen.CreateThread(function()
	while ESX == nil do
		TriggerEvent('esx:getSharedObject', function(obj) ESX = obj end)
		Citizen.Wait(0)
	end

	while ESX.GetPlayerData().job == nil do
		Citizen.Wait(10)
	end

	PlayerData = ESX.GetPlayerData()
    
end)


RegisterNetEvent('esx:setJob')
AddEventHandler('esx:setJob', function(job)
    PlayerData.job = job
    ESX.TriggerServerCallback('ExeLds:GetNameforInventory', function(charName)
        if charName then
            TriggerEvent("ExeLds:sendData", charName)
        end
    end) 
end)

RegisterNetEvent('ExeLds:setInvReady')
AddEventHandler('ExeLds:setInvReady', function() 
    if karakterIsim == nil then
        ESX.TriggerServerCallback('ExeLds:GetNameforInventory', function(charName)
            if charName then
                karakterIsim = charName
                TriggerEvent("ExeLds:sendData", karakterIsim)
            end
        end)
    end
    Citizen.Wait(500) 
    TriggerEvent("SetReadyInv") 
end)


RegisterNetEvent('ExeLds:sendNotify')
AddEventHandler('ExeLds:sendNotify', function(message)
    TriggerEvent('mythic_notify:client:SendAlert', { type = 'inform', text = message, length = 6000, style = { ['background-color'] = '#CC0000', ['color'] = '#FFFFFF' } })
end)

local fixingvehicle = false
local justUsed = false
local retardCounter = 0
local lastCounter = 0 
local HeadBone = 0x796e;


local validWaterItem = {
    ["water"] = true,
    ["vodka"] = true,
    ["beer"] = true,
    ["whiskey"] = true,
    ["coffee"] = true,
    ["fishtaco"] = true,
    ["taco"] = true,
    ["burrito"] = true,
    ["churro"] = true,
    ["hotdog"] = true,
    ["greencow"] = true,
    ["donut"] = true,
    ["eggsbacon"] = true,
    ["icecream"] = true,
    ["mshake"] = true,
    ["sandwich"] = true,
    ["hamburger"] = true,
    ["cola"] = true,
    ["jailfood"] = true,
    ["bleederburger"] = true,
    ["heartstopper"] = true,
    ["torpedo"] = true,
    ["meatfree"] = true,
    ["moneyshot"] = true,
    ["fries"] = true,
    ["slushy"] = true,
}

Citizen.CreateThread(function()    
    while true do 
     Citizen.Wait(1)
        if IsControlJustPressed(0, 289) then   
            if karakterIsim == nil then 
                ESX.TriggerServerCallback('ExeLds:GetNameforInventory', function(charName)
                    if charName then
                        karakterIsim = charName
                        TriggerEvent("ExeLds:sendData", karakterIsim)
                    end
                end)
            Citizen.Wait(1000)
            end          
            TriggerEvent("OpenInv")       
        end
    end
end)

RegisterCommand("envanterkapat", function()
    TriggerEvent("closeInventoryGui")
        pedGui = false
        local menuType = "FE_MENU_VERSION_EMPTY_NO_BACKGROUND"
        ActivateFrontendMenu(GetHashKey(menuType), true, 0)
        Wait(100)
        local clonedPed = ClonePed(PlayerPedId(), 0, false, false)
        FreezeEntityPosition(clonedPed, false)
        --N_0x4668d80430d6c299(clonedPed)
        DeletePed(clonedPed)
        GivePedToPauseMenu(clonedPed, 0)
        SetPauseMenuPedLighting(false)
        SetPauseMenuPedSleepState(false)
        --RequestScaleformMovie("PAUSE_MP_MENU_PLAYER_MODEL")
        --RequestScaleformMovie("PAUSE_MP_MENU_PLAYER_MODEL")
end)


--[[ RegisterCommand("radio", function()
    if exports["r5m-inventory"]:hasEnoughOfItem("radio",1,false) then
        TriggerEvent('radioGui')
    else
        TriggerEvent("DoShortHudText", "You dont have a radio.", 2)
    end
end) ]]

RegisterNetEvent('GiveItem')
AddEventHandler('GiveItem', function(item, amount, itemid, slot)
    if amount == "" then
        amount = 1
    end
    local playerPed = PlayerPedId()
    local players, nearbyPlayer = ESX.Game.GetPlayersInArea(GetEntityCoords(playerPed), 3.0)
    local elements = {}	
	local closestPlayer, closestDistance = ESX.Game.GetClosestPlayer()	
        --if closestPlayer == -1 or closestDistance > 3.0 then
        --    exports['mythic_notify']:SendAlert('inform', 'Yakınında oyuncu bulunmuyor', 3000, { ['background-color'] = '#CC0000', ['color'] = '#FFFFFF' })
        --else
            for i = 1, #players, 1 do
                --if players[i] ~= 1 and players[i] ~= PlayerId() then 
                    ESX.TriggerServerCallback('ExeLds:InventoryGetCharacterNameServer', function(playerss)
                                table.insert(
                                    elements,
                                    {
                                        label = "("..GetPlayerServerId(players[i])..") "..playerss,
                                        value = GetPlayerServerId(players[i])
                                    }
                                )
                                ESX.UI.Menu.Open(
                                        'default', GetCurrentResourceName(), 'confirm',
                                        {
                                            title = amount.." Amount "..item.." Give",
                                            align = 'center',
                                            elements = elements
                                        },
                                        function(data2, menu2)																					
                                            if data2.current.value == 'kapat' then
                                                menu2.close()
                                            else	
                                                local info = GetItemInfo(slot)
                                                TriggerServerEvent("ExeLds:giveItem", itemid, amount, data2.current.value, item, info.information)	
                                                menu2.close()							
                                            end
                                            end, function(data2, menu2)
                                            exports['mythic_notify']:SendAlert('inform', item.. ' You gave up giving items!', 3000, { ['background-color'] = '#CC0000', ['color'] = '#FFFFFF' })
                                            menu2.close()
                                        end
                                    )
                    end, GetPlayerServerId(players[i]))				
                --end
            end 
        --end
end)
RegisterNetEvent('ExeLds:getItem')
AddEventHandler('ExeLds:getItem', function(item, amount, info)
    TriggerEvent('player:receiveItem', item, amount, info)
end)

RegisterNetEvent('RunUseItem')
AddEventHandler('RunUseItem', function(itemid, slot, inventoryName, isWeapon)
    if itemid == nil then
        return
    end
    local ItemInfo = GetItemInfo(slot)
    if tonumber(ItemInfo.quality) ~= nil then
     if tonumber(ItemInfo.quality) < 1 then
         TriggerEvent("notification","This item is unusable!", 2) 
         if isWeapon then
             TriggerEvent("brokenWeapon")
         end
         return
     end
    end  
    if justUsed then
        retardCounter = retardCounter + 1
        if retardCounter > 10 and retardCounter > lastCounter+5 then
            lastCounter = retardCounter
        end
        return
    end

    justUsed = true

    if (not hasEnoughOfItem(itemid,1,false)) then
        TriggerEvent("notification","You dont appear to have this item on you?",2) 
        justUsed = false
        retardCounter = 0
        lastCounter = 0
        return
    end

    if itemid == "-72657034" then
        TriggerEvent("equipWeaponID",itemid,ItemInfo.information,ItemInfo.id)
        TriggerEvent("inventory:removeItem",itemid, 1,slot)
        justUsed = false
        retardCounter = 0
        lastCounter = 0
        return
    end

    if not isValidUseCase(itemid,isWeapon) then
        justUsed = false
        retardCounter = 0
        lastCounter = 0
        return
    end

    if (itemid == nil) then
        justUsed = false
        retardCounter = 0
        lastCounter = 0
        return
    end

    
    if (isWeapon) then
        TriggerEvent("equipWeaponID",itemid,ItemInfo.information,ItemInfo.id)
        justUsed = false
        retardCounter = 0
        lastCounter = 0
        return
    end



    TriggerEvent("hud-display-item",itemid,"Used")

    Wait(800)

    local player = PlayerPedId()
    local playerVeh = GetVehiclePedIsIn(player, false)

    if (not IsPedInAnyVehicle(player)) then
        if (itemid == "Suitcase") then
            local suitcase = false 
            if not suitcase then
                --print('started')
                TriggerEvent('attach:suitcase')
                suitcase = true
            elseif suitcase then 
                --print('stopped')
                TriggerEvent('attach:removeall')
                suitcase = false
            end
        end
        if (itemid == "Boombox") then
            local Boombox = false 
            if not Boombox then
                --print('started')
                TriggerEvent('attach:boombox')
                Boombox = true
            elseif Boombox then 
                --print('stopped')
                TriggerEvent('attach:removeall')
                Boombox = false
            end
        end
        if (itemid == "Box") then
            local Box = false 
            if not Box then
                --print('started')
                TriggerEvent('attach:box')
                Box = true
            elseif Box then 
                --print('stopped')
                TriggerEvent('attach:removeall')
                Box = false
            end
        end
        if (itemid == "DuffelBag") then
            local DuffelBag = false
            if not DuffelBag then
                --print('started')
                TriggerEvent('attach:blackDuffelBag')
                DuffelBag = true
            elseif DuffelBag then 
                --print('stopped')
                TriggerEvent('attach:removeall')
                DuffelBag = false
            end
        end
        if (itemid == "MedicalBag") then
            local MedicalBag = false
            if not MedicalBag then
                --print('started')
                TriggerEvent('attach:medicalBag')
                MedicalBag = true
            elseif MedicalBag then 
                --print('stopped')
                TriggerEvent('attach:removeall')
                MedicalBag = false
            end
        end
        if (itemid == "SecurityCase") then
            local SecurityCase = false
            if not SecurityCase then
                --print('started')
                TriggerEvent('attach:securityCase')
                SecurityCase = true
            elseif SecurityCase then 
                --print('stopped')
                TriggerEvent('attach:removeall')
                SecurityCase = false
            end
        end
        if (itemid == "Toolbox") then
            local Toolbox = false
            if not Toolbox then
                --print('started')
                TriggerEvent('attach:toolbox')
                Toolbox = true
            elseif Toolbox then 
                --print('stopped')
                TriggerEvent('attach:removeall')
                Toolbox = false
            end
        end
    end

    local remove = false
    local drugitem = false
    local fooditem = false
    local drinkitem = false
    local healitem = false

    if (itemid == "joint" or itemid == "weed5oz" or itemid == "weedq" or itemid == "beer" or itemid == "vodka" or itemid == "whiskey" or itemid == "lsdtab") then
        drugitem = true
    end


    if (itemid == "tuner") then

      local finished = exports["np-taskbar"]:taskBar(2000,"Connecting Tuner Laptop",false,false,playerVeh)
      if (finished == 100) then
        TriggerEvent("tuner:open")
      end
    end

    if (itemid == "huntingbait") then
        print("1")
        TriggerEvent('hunting:use-item', source, "huntingbait")
    end

    if (itemid == "huntingknife") then
        TriggerEvent('hunting:bicakkullan', source, "huntingknife")
    end

    if (itemid == "glucose") then 
        CreateCraftOption("1gcocaine", 80, true)
        
    end

    if (itemid == "ehliyet") then
        TriggerEvent('cylex:wallet')
    end


    if (itemid == "electronickit" or itemid == "lockpick") then
        --   TriggerServerEvent("robbery:triggerItemUsedServer",itemid)
        TriggerServerEvent("robbery:triggerItemUsedServer",itemid)
          
        end
    if (itemid == "locksystem") then
      TriggerServerEvent("robbery:triggerItemUsedServer",itemid)
    end

    if (itemid == "thermite") then

    end

    if (itemid == "lsdtab" or itemid == "badlsdtab") then
        TriggerEvent("animation:PlayAnimation","pill")
        local finished = exports["np-taskbar"]:taskBar(3000,"Placing LSD Strip on 👅",false,false,playerVeh)
        if (finished == 100) then
            TriggerEvent("fx:run", "lsd", 180, nil, (itemid == "badlsdtab" and true or false))
            remove = true
        end
    end


 
     if (itemid == "weedq") then
         local finished = exports["np-taskbar"]:taskBar(1000,"Rolling Joints",false,false,playerVeh)
         if (finished == 100) then
             CreateCraftOption("joint", 80, true)    
             
         end
         
     end

     if (itemid == "weed_og-kush_seed") then
        TriggerEvent('orp:weed:client:plantNewSeed', 'og_kush')
        remove = true
    end

     if (itemid == "weed_bananakush_seed") then
        TriggerEvent('orp:weed:client:plantNewSeed', 'banana_kush')
        remove = true
    end
     if (itemid == "weed_bluedream_seed") then
        TriggerEvent('orp:weed:client:plantNewSeed', 'blue_dream')
        remove = true
    end
     if (itemid == "weed_purple-haze_seed") then
        TriggerEvent('orp:weed:client:plantNewSeed', 'purplehaze')
        remove = true
    end

    if (itemid == "weed_bluedream") then
        TriggerEvent('r5m:bagweedsmall4')
    end

    if (itemid == "weed_purplehaze") then
        TriggerEvent('r5m:bagweedsmall3')
    end

    if (itemid == "weed_og-kush") then
        TriggerEvent('r5m:bagweedsmall2')

    end

    if (itemid == "weed_bananakush") then
        TriggerEvent('r5m:bagweedsmall')

    end

    if (itemid == "qualityscales") then
        -- TriggerEvent('orp:weed:client:plantNewSeed', 'purplehaze')
        -- remove = true
    end

    if (itemid == "kaykay") then
        TriggerEvent('kfzeu:kaykay')
    end

    if (itemid == "emptycartrdige") then
        if exports["r5m-inventory"]:hasEnoughOfItem("weedwax",5,false) then
            local finished = exports["np-taskbar"]:taskBar(1000,"Inserting Wax")
            if finished == 100 then
                TriggerEvent("server-inventory-open", "36", "Craft");	
            end
        end
    end

    if (itemid == "handpress") then
        if exports["r5m-inventory"]:hasEnoughOfItem("weedoz_bananakush",1,false) then
            local finished = exports["np-taskbar"]:taskBar(1000,"Using Press")
            if finished == 100 then
                TriggerEvent("server-inventory-open", "34", "Craft");	
            end
        end
    end

    if (itemid == "weedoz_bluedream") then
        if exports["r5m-inventory"]:hasEnoughOfItem("rollingpaper",1,false) then
            local finished = exports["np-taskbar"]:taskBar(1000,"Rolling Joints")
            if finished == 100 then
                TriggerEvent("server-inventory-open", "38", "Craft");	
            end
        end
    end

    if (itemid == "weedoz_purplehaze") then
        if exports["r5m-inventory"]:hasEnoughOfItem("rollingpaper",1,false) then
            local finished = exports["np-taskbar"]:taskBar(1000,"Rolling Blunts")
            if finished == 100 then
                TriggerEvent("server-inventory-open", "39", "Craft");	
            end
        end
    end

    if (itemid == "weedoz_og-kush") then
        if exports["r5m-inventory"]:hasEnoughOfItem("handpress",1,false) then
            local finished = exports["np-taskbar"]:taskBar(1000,"Making Sweet Gummies")
            if finished == 100 then
                TriggerEvent("server-inventory-open", "44", "Craft");	
            end
        end
    end

    if (itemid == "cgummies") then
        loadAnimDict("mp_suicide")
        TaskPlayAnim( PlayerPedId(), "mp_suicide", "pill", 3.0, 1.0, 2500, 49, 0, 0, 0, 0 ) 
        Citizen.Wait(2500)
            local armor = GetPedArmour(PlayerPedId())
            SetPedArmour(PlayerPedId(),armor+6)
            Wait(1000)
            local armor = GetPedArmour(PlayerPedId())
            SetPedArmour(PlayerPedId(),armor+6)
            Wait(1000)
            local armor = GetPedArmour(PlayerPedId())
            SetPedArmour(PlayerPedId(),armor+6)
            remove = true
    end

    if (itemid == "dabpen") then
        if exports["r5m-inventory"]:hasEnoughOfItem("dabcartridge",1,false) then
            if not bandana then
                --print('started')
                TriggerEvent("Vape:StartVaping", 0)
                bandana = true
            elseif bandana then 
                --print('stopped')
                TriggerEvent("Vape:StopVaping", 0)
                bandana = false
            end
        end
    end

    -- r5m:fillbowl
    if (itemid == "weedgrinder") then
        TriggerEvent('r5m:grindweed')
    end


    if (itemid == "bong") then
        if exports["r5m-inventory"]:hasEnoughOfItem("grindedweed", 1) then
            local lightercount = exports["r5m-inventory"]:getQuantity("lighter")
            if lightercount > 0 then 
            TriggerEvent('r5m:bong:spawn')
            TriggerEvent("inventory:removeItem","grindedweed", 1)
            else
                TriggerEvent('notification', "Yo, anyone got a light?", 2)
            end   
        end
    end

    if (itemid == "weedoz_og-kush") then
        TriggerEvent('r5m:joints')
    end

    if (itemid == "weedoz_purplehaze") then
        TriggerEvent('r5m:blunts')
    end

    -- r5m:blunts


    -- weedoz_og-kush


 
    if (itemid == "joint") then
        local lightercount = exports["r5m-inventory"]:hasEnoughOfItem("lighter",1,false) 
        if lightercount then 
            local finished = exports["np-taskbar"]:taskBar(2000,"Smoking Joint",false,false,playerVeh)
            if (finished == 100) then
                
                Wait(200)
                TriggerEvent("animation:PlayAnimation","weed")     
                TriggerEvent("notification", "Stress Being Relieved")
                TriggerEvent("stress:timed",1000,"WORLD_HUMAN_SMOKING_POT")
                TriggerServerEvent("server:alterStress", false, 1000)

                remove = true
            end
        else
            TriggerEvent('notification', "Yo, anyone got a light?", 2)
        end
    end

    if (itemid == "medicaljoint") then
        local lightercount = exports["r5m-inventory"]:hasEnoughOfItem("lighter",1,false) 
        if lightercount then 
            local finished = exports["np-taskbar"]:taskBar(2000,"Smoking Joint",false,false,playerVeh)
            if (finished == 100) then
                Wait(200)
                TriggerEvent("animation:PlayAnimation","weed")     
                TriggerEvent("notification", "Stress Being Relieved")
                TriggerEvent("stress:timed",1000,"WORLD_HUMAN_SMOKING_POT")
                remove = true
            end
        else
            TriggerEvent('notification', "Yo, anyone got a light?", 2)
        end
    end

    if (itemid == "blunt") then
        local lightercount = exports["r5m-inventory"]:getQuantity("lighter")
        if lightercount > 0 then 
        local finished = exports["np-taskbar"]:taskBar(2000,"Smoking Blunt",false,false,playerVeh)
        if (finished == 100) then
            Wait(200)
            TriggerEvent("animation:PlayAnimation","weed")
            TriggerEvent("notification", "Stress Being Relieved")
            TriggerEvent("stress:timed",1000,"WORLD_HUMAN_SMOKING_POT")
            remove = true
        end
    else
        TriggerEvent('notification', "Yo, anyone got a light?", 2)
    end

    end
 
    if (itemid == "vodka" or itemid == "beer" or itemid == "whiskey") then
         AttachPropAndPlayAnimation("amb@world_human_drinking@coffee@male@idle_a", "idle_c", 49,6000,"You are drinking","changethirst",true,itemid,playerVeh)
         TriggerEvent("r5m-states:stateSet", 8, 600)
         local alcoholStrength = 0.5
         if itemid == "vodka" or itemid == "whiskey" then alcoholStrength = 1.0 end
         TriggerEvent("fx:run", "alcohol", 180, alcoholStrength)
    end
 
    if (itemid == "coffee") then
        AttachPropAndPlayAnimation("amb@world_human_drinking@coffee@male@idle_a", "idle_c", 49,6000,"You are drinking","coffee:drink",true,itemid,playerVeh)
        TriggerEvent('esx_status:add', 'thirst', 300000)
    end
 
    if (itemid == "fishtaco") then
        AttachPropAndPlayAnimation("mp_player_inteat@burger", "mp_player_int_eat_burger", 49,6000,"You are eating","food:FishTaco",true,itemid,playerVeh)
        TriggerEvent('esx_status:add', 'hunger', 300000)
    end
 
    if (itemid == "taco" or itemid == "burrito") then
        AttachPropAndPlayAnimation("mp_player_inteat@burger", "mp_player_int_eat_burger", 49,6000,"You are eating","food:Taco",true,itemid,playerVeh)
        TriggerEvent('esx_status:add', 'hunger', 300000)
    end
 
    if (itemid == "churro" or itemid == "hotdog") then
        TaskItem("mp_player_inteat@burger", "mp_player_int_eat_burger", 49,6000,"You are eating","food:Condiment",true,itemid,playerVeh)
        TriggerEvent('esx_status:add', 'hunger', 300000)
    end
 
    if (itemid == "greencow") then
        AttachPropAndPlayAnimation("amb@world_human_drinking@coffee@male@idle_a", "idle_c", 49,6000,"You are drinking","food:Condiment",true,itemid,playerVeh)
        TriggerEvent('esx_status:add', 'hunger', 300000)
    end

    if (itemid == "bonfiletabak") then
        TaskItem("mp_player_inteat@burger", "mp_player_int_eat_burger", 49,6000,"You are eating","food:IceCream",true,itemid,playerVeh)
        TriggerEvent('esx_status:add', 'hunger', 900000)
   end
 
    if (itemid == "donut" or itemid == "chips" or itemid == "chocobar" or itemid == "popcorn") then
        AttachPropAndPlayAnimation("mp_player_inteat@burger", "mp_player_int_eat_burger", 49,6000,"You are eating","food:Condiment",true,itemid,playerVeh)
        TriggerEvent('esx_status:add', 'hunger', 300000)
    end
 
    if (itemid == "icecream") then
         TaskItem("mp_player_inteat@burger", "mp_player_int_eat_burger", 49,6000,"You are eating","food:IceCream",true,itemid,playerVeh)
         TriggerEvent('esx_status:add', 'thirst', 30000)
    end

    if (itemid == "milk") then
        AttachPropAndPlayAnimation("amb@world_human_drinking@coffee@male@idle_a", "idle_c", 49,6000,"You are drinking","coffee:drink",true,itemid,playerVeh)
        TriggerEvent('esx_status:add', 'thirst', 30000)
   end

    --[[ if (itemid == "Gruppe6Card") then
        local coordA = GetEntityCoords(GetPlayerPed(-1), 1)
        local coordB = GetOffsetFromEntityInWorldCoords(GetPlayerPed(-1), 0.0, 100.0, 0.0)
        local targetVehicle = getVehicleInDirection(coordA, coordB)
        if targetVehicle ~= 0 and GetHashKey("stockade") == GetEntityModel(targetVehicle)  then
            local entityCreatePoint = GetOffsetFromEntityInWorldCoords(targetVehicle, 0.0, -4.0, 0.0)
            local coords = GetEntityCoords(GetPlayerPed(-1))
            local aDist = GetDistanceBetweenCoords(coords["x"], coords["y"],coords["z"], entityCreatePoint["x"], entityCreatePoint["y"],entityCreatePoint["z"])
            local finished = exports["np-taskbar"]:taskBar(3000,"Kapı Açılıyor",false,true)
            if (finished == 100) then
                if aDist < 2.0 then
                    TriggerEvent("sec:PickupCash")
                else
                    TriggerEvent("notification","You need to do this from behind the vehicle.", 2)
                end
            end
        end

    end ]]

    if (itemid == "Gruppe6Card") then
        ESX.TriggerServerCallback('SametK:anycops', function(anycops)
            if anycops >= 6 then -- 6 = istenilen polis sayısı

                local coordA = GetEntityCoords(GetPlayerPed(-1), 1)
                local coordB = GetOffsetFromEntityInWorldCoords(GetPlayerPed(-1), 0.0, 100.0, 0.0)
                -- local countpolice = exports["isPed"]:isPed("countpolice")
                local targetVehicle = getVehicleInDirection(coordA, coordB)
                if targetVehicle ~= 0 and GetHashKey("stockade") == GetEntityModel(targetVehicle) then
                    local entityCreatePoint = GetOffsetFromEntityInWorldCoords(targetVehicle, 0.0, -4.0, 0.0)
                    local coords = GetEntityCoords(GetPlayerPed(-1))
                    local aDist = GetDistanceBetweenCoords(coords["x"], coords["y"],coords["z"], entityCreatePoint["x"], entityCreatePoint["y"],entityCreatePoint["z"])
                    local cityCenter = vector3(-204.92, -1010.13, 29.55) -- alta street train station
                    local timeToOpen = 15000
                    local distToCityCenter = #(coords - cityCenter)
                    if distToCityCenter > 1000 then
                        local multi = math.floor(distToCityCenter / 1000)
                        timeToOpen = timeToOpen + (30000 * multi)
                    end
                    if aDist < 2.0 then
                        FreezeEntityPosition(PlayerPedId(), true)
                        --TriggerEvent("alert:noPedCheck", "banktruck")
                        TaskStartScenarioInPlace(PlayerPedId(), 'PROP_HUMAN_BUM_BIN', 0, true)
                        exports["np-taskbar"]:taskBar(timeToOpen,"Aracı açıyorsun",playerVeh)
                        Citizen.Wait(5)
                        FreezeEntityPosition(PlayerPedId(), false)
                        Citizen.Wait(5)
                        ClearPedTasks(player)
                        remove = true
                        TriggerEvent("sec:AttemptHeist", targetVehicle)

                    else
                        TriggerEvent("notification","Aracın arkasına geçin", 2)
                    end
                end
            else
                TriggerEvent('mythic_notify:client:SendAlert', { type = 'inform', text = 'Devriyede yeterli polis yok.', length = 3000, style = { ['background-color'] = '#CC0000', ['color'] = '#FFFFFF' } })
            end
        end)

    end


    if (itemid == "heavyammo") then
        local playerPed = PlayerPedId()
        local weapon = GetSelectedPedWeapon(playerPed)
        if weapon ~= GetHashKey('WEAPON_UNARMED') then
            TriggerEvent("actionbar:ammo",1788949567,50,true, itemid)
        else
            TriggerEvent('mythic_notify:client:SendAlert', { type = 'inform', text = 'Elinde silah bulunmuyor.', length = 3000, style = { ['background-color'] = '#CC0000', ['color'] = '#FFFFFF' } })
        end
    end

    if (itemid == "pistolammo") then
        local playerPed = PlayerPedId()
        local weapon = GetSelectedPedWeapon(playerPed)
        if weapon ~= GetHashKey('WEAPON_UNARMED') then
            TriggerEvent("actionbar:ammo",1950175060,50,true, itemid)
        else
            TriggerEvent('mythic_notify:client:SendAlert', { type = 'inform', text = 'Elinde silah bulunmuyor.', length = 3000, style = { ['background-color'] = '#CC0000', ['color'] = '#FFFFFF' } })
        end
    end

    if (itemid == "pdammo") then
        local playerPed = PlayerPedId()
        local weapon = GetSelectedPedWeapon(playerPed)
        if weapon ~= GetHashKey('WEAPON_UNARMED') then
            TriggerEvent("actionbar:ammo",1950175060,50,true, itemid)
        else
            TriggerEvent('mythic_notify:client:SendAlert', { type = 'inform', text = 'Elinde silah bulunmuyor.', length = 3000, style = { ['background-color'] = '#CC0000', ['color'] = '#FFFFFF' } })
        end
    end

    if (itemid == "rifleammo") then
        local playerPed = PlayerPedId()
        local weapon = GetSelectedPedWeapon(playerPed)
        if weapon ~= GetHashKey('WEAPON_UNARMED') then
            TriggerEvent("actionbar:ammo",218444191,50,true, itemid)
        else
            TriggerEvent('mythic_notify:client:SendAlert', { type = 'inform', text = 'Elinde silah bulunmuyor.', length = 3000, style = { ['background-color'] = '#CC0000', ['color'] = '#FFFFFF' } })
        end
    end

    if (itemid == "pdrifleammo") then
        local playerPed = PlayerPedId()
        local weapon = GetSelectedPedWeapon(playerPed)
        if weapon ~= GetHashKey('WEAPON_UNARMED') then
            TriggerEvent("actionbar:ammo",218444191,50,true, itemid)
        else
            TriggerEvent('mythic_notify:client:SendAlert', { type = 'inform', text = 'Elinde silah bulunmuyor.', length = 3000, style = { ['background-color'] = '#CC0000', ['color'] = '#FFFFFF' } })
        end
    end

    if (itemid == "shotgunammo") then
        local playerPed = PlayerPedId()
        local weapon = GetSelectedPedWeapon(playerPed)
        if weapon ~= GetHashKey('WEAPON_UNARMED') then
            TriggerEvent("actionbar:ammo",-1878508229,50,true, itemid)
        else
            TriggerEvent('mythic_notify:client:SendAlert', { type = 'inform', text = 'Elinde silah bulunmuyor.', length = 3000, style = { ['background-color'] = '#CC0000', ['color'] = '#FFFFFF' } })
        end
    end

    if (itemid == "subammo") then
        local playerPed = PlayerPedId()
        local weapon = GetSelectedPedWeapon(playerPed)
        if weapon ~= GetHashKey('WEAPON_UNARMED') then
            TriggerEvent("actionbar:ammo",1820140472,50,true, itemid)
        else
            TriggerEvent('mythic_notify:client:SendAlert', { type = 'inform', text = 'Elinde silah bulunmuyor.', length = 3000, style = { ['background-color'] = '#CC0000', ['color'] = '#FFFFFF' } })
        end
    end


    if (itemid == "armor") then
        local armorValue = GetPedArmour(PlayerPedId())
        local maxArmorValue = GetPlayerMaxArmour(PlayerId())
       -- local animasyon = armourAnim()
        if armorValue < maxArmorValue then
            TriggerEvent("inventory:removeItem",itemid, 1)
           -- local finished = exports["np-taskbar"]:taskBar(10000,"Armor",true,false)
            --if (finished == 100) then
            armourAnim()
            exports["np-taskbar"]:taskBar(10000,"you are wearing armor")--TaskItem(animasyon, "Zırh Kullanıyorsun","r5m-hospital:items:bandage",true,itemid,playerVeh)
            SetPlayerMaxArmour(PlayerId(), 100)
            SetPedArmour(player,100)
            TriggerEvent("UseBodyArmor")
           -- end
        else
            TriggerEvent('mythic_notify:client:SendAlert', { type = 'inform', text = 'Zırhın zaten full', length = 3000, style = { ['background-color'] = '#CC0000', ['color'] = '#FFFFFF' } })
        end
    end

    if (itemid == "pdarmor") then
        local armorValue = GetPedArmour(PlayerPedId())
        local maxArmorValue = GetPlayerMaxArmour(PlayerId())
       -- local animasyon = armourAnim()
        if armorValue < maxArmorValue then
            TriggerEvent("inventory:removeItem",itemid, 1)
           -- local finished = exports["np-taskbar"]:taskBar(10000,"Armor",true,false)
            --if (finished == 100) then
            armourAnim()
            exports["np-taskbar"]:taskBar(10000,"you are wearing armor")--TaskItem(animasyon, "Zırh Kullanıyorsun","r5m-hospital:items:bandage",true,itemid,playerVeh)
            SetPlayerMaxArmour(PlayerId(), 100)
            SetPedArmour(player,100)
            TriggerEvent("UseBodyArmor")
           -- end
        else
            TriggerEvent('mythic_notify:client:SendAlert', { type = 'inform', text = 'Your armor is already full.', length = 3000, style = { ['background-color'] = '#CC0000', ['color'] = '#FFFFFF' } })
        end
    end

    if (itemid == "binoculars") then 
        TriggerEvent("binoculars:Activate2")
        
    end

    if (itemid == "heavycutters") then 
        TriggerEvent("2084_cuff_item:demirkesici", source)
	    TriggerEvent("2084_cuff_item:kesiciFalse", source)
    end

    if (itemid == "camera") then
        TriggerEvent("camera:Activate2")
    end
    
    --[[ if (itemid == "radio") then
        TriggerEvent('radioGui')
    end ]]

    if (itemid == "mobilephone") then
        TriggerEvent('phoneGui2')
    end

    if (itemid == "harness") then
        TriggerEvent('vehicleMod:useHarnessItem')
        TriggerEvent("inventory:removeItem","harness",1)
    end

    if (itemid == "nitrous") then
        local currentVehicle = GetVehiclePedIsIn(player, false)

        if not IsToggleModOn(currentVehicle,18) then
            TriggerEvent("notification","You need a Turbo to use NOS!",2)
        else
            local finished = 0
            local cancelNos = false
            Citizen.CreateThread(function()
                while finished ~= 100 and not cancelNos do
                    Citizen.Wait(100)
                    if GetEntitySpeed(GetVehiclePedIsIn(player, false)) > 11 then
                        exports["np-taskbar"]:closeGuiFail()
                        cancelNos = true
                    end
                end
            end)
            finished = exports["np-taskbar"]:taskBar(20000,"Nitrous")
            if (finished == 100 and not cancelNos) then
                TriggerEvent("NosStatus")
                TriggerEvent("noshud", 100, false)
                remove = true
            else
                TriggerEvent("notification","You can't drive and hook up nos at the same time.",2)
            end
        end
    end

    if (itemid == "lockpick") then

        local myJob = exports["isPed"]:isPed("myJob")
        if myJob ~= "news" then
            TriggerEvent("inv:lockPick",false,inventoryName,slot)

        else
            TriggerEvent("notification","Nice news reporting, you shit lord idiot.")
        end       
        
    end

    if (itemid == "fishingrod") then ---------------- DONE

        TriggerEvent('r5m-fish:tryToFish')

    end

   


  
    if (itemid == "repairkit") then
      TriggerEvent('veh:repairing',inventoryName,slot,itemid)
           
    end

    if (itemid =="advrepairkit") then
      TriggerEvent('veh:repairing',inventoryName,slot,itemid)
           
    end
    if (itemid == "securityblue" or itemid == "securityblack" or itemid == "securitygreen" or itemid == "securitygold" or itemid == "securityred")  then
        TriggerEvent("robbery:scanLock",false,itemid)       
    end

    if (itemid == "Gruppe6Card2")  then
        TriggerEvent("electronickit:UseElectronickit")
        remove = true
    end


    --[[ if (itemid == "ciggy") then
        local finished = exports["np-taskbar"]:taskBar(1000,"Lighting Up",false,false,playerVeh)
        if (finished == 100) then
            Wait(300)
            TriggerEvent("animation:PlayAnimation","smoke")
            TriggerEvent("DoShortHudText",'Stress is being relieved', 1)
            Citizen.Wait(10000)
        
            TriggerEvent("client:newStress", false, math.random(100, 550))
        end
    end ]]

    if (itemid == "cigar") then
        local finished = exports["np-taskbar"]:taskBar(1000,"Lighting Up",false,false,playerVeh)
        if (finished == 100) then
            Wait(300)
            TriggerEvent("animation:PlayAnimation","cigar")
        end
    end
    

    if (itemid == "oxygentank") then
        local finished = exports["np-taskbar"]:taskBar(1000,"Oxygen Tank",true,false,playerVeh)
        if (finished == 100) then        
            --TriggerEvent("UseOxygenTank")
            TriggerEvent('esx_tenues:settenueplongee',playerVeh)
            TriggerEvent('sualti:basla',playerVeh_source)
            remove = true
        end
    end

    if (itemid == "bandage") then
        local murocuk = PlayerPedId()
        local maxHealth = 200
        local health = GetEntityHealth(PlayerPedId())
        local newHealth = math.min(maxHealth , math.floor(health + maxHealth/10))
        if health < maxHealth then
            TaskItem("amb@world_human_clipboard@male@idle_a", "idle_c", 49,10000,"You Use Bandages","r5m-hospital:items:bandage",true,itemid,playerVeh)
            SetEntityHealth(PlayerPedId(), newHealth)
            TriggerServerEvent("server:alterStress", false, 1000)
            if health == maxHealth then
                print("yeasdads")
            end
        else
            TriggerEvent("notification","Ben iyiyim kenks")
        end

    end

    if (itemid == "coke50g") then
        CreateCraftOption("coke5g", 80, true)
        
    end

    if (itemid == "idcard") then 
        local ItemInfo = GetItemInfo(slot)     
        local playerPed = PlayerPedId()
        local players = ESX.Game.GetPlayersInArea(GetEntityCoords(playerPed), 3.0)
        
        for i = 1, #players, 1 do
            TriggerServerEvent('ExeLds:showID', ItemInfo.information, GetPlayerServerId(players[i]))
        end
    end

    if (itemid == "aracanahtar") then
        local ItemInfo = GetItemInfo(slot) 
        TriggerEvent('ExeLds:useVehicleKey', ItemInfo.information)
    end

    if (itemid == "kampcadir") then 
        TriggerEvent('nest:kampkur')
    end

    if (itemid == "barbeku") then 
        TriggerEvent('nest:berbekukur')
    end

    if (itemid == "masa") then 
        TriggerEvent('nest:masakur')
    end

    if (itemid == "kampsandalye") then 
        TriggerEvent('nest:kampsandalye')
    end

    if (itemid == "kampates") then 
        TriggerEvent('eon:campfire')
    end

    if (itemid == "notepad") then
        local ItemInfo = GetItemInfo(slot) 
        TriggerServerEvent('ExeLds:openNotepad', ItemInfo.information)
    end

    if (itemid == "blue_phone") then
        local ItemInfo = GetItemInfo(slot) 
        TriggerServerEvent('ExeLds:setLastPhone', ItemInfo.information)
    end

    if (itemid == "cbfarmers") then
       -- local ItemInfo = GetItemInfo(slot) 
       TriggerEvent("inventory:removeItem","cbfarmers", 1)
        TriggerServerEvent('bros-burger:hamburgerpaketk')
    end


    if (itemid == "1gcocaine") then
        TriggerEvent("attachItemObjectnoanim","drugpackage01")
        TriggerEvent("stress:timed",1000)
        TaskItem("anim@amb@nightclub@peds@", "missfbi3_party_snort_coke_b_male3", 49, 5000, "Coke Gaming", "hadcrack", true,itemid,playerVeh)
    end

    if (itemid == "1gcrack") then 
        TriggerEvent("attachItemObjectnoanim","crackpipe01")
        TaskItem("switch@trevor@trev_smoking_meth", "trev_smoking_meth_loop", 49, 5000, "Smoking Quack", "hadcrack", true,itemid,playerVeh)
    end


    if (itemid == "IFAK") then
        local murocuk = PlayerPedId()
        local maxHealth = 200
        local health = GetEntityHealth(PlayerPedId())
        local newHealth = math.min(maxHealth , math.floor(health + maxHealth/10))
        if health < maxHealth then
            TaskItem("amb@world_human_clipboard@male@idle_a", "idle_c", 49,10000,"IFAK Kullanıyorsun","r5m-hospital:items:bandage",true,itemid,playerVeh)
            SetEntityHealth(PlayerPedId(), newHealth)
            TriggerServerEvent("server:alterStress", false, 1000)
            --[[ if health == maxHealth then
                print("yeasdads")
            end ]]
        else
            TriggerEvent("notification","Ben iyiyim kenks")
        end
    end


    if (itemid == "oxy") then
        loadAnimDict("mp_suicide")
        TaskPlayAnim( PlayerPedId(), "mp_suicide", "pill", 3.0, 1.0, 2500, 49, 0, 0, 0, 0 ) 
        Citizen.Wait(2500)
        local maxHealth = GetEntityMaxHealth(PlayerPedId())
		local health = GetEntityHealth(PlayerPedId())
		local newHealth = math.min(maxHealth, math.floor(health + maxHealth / 15))
        SetEntityHealth(PlayerPedId(), newHealth)
        TriggerEvent('r5m-hospital:client:RemoveBleed')
        TriggerEvent('r5m-hospital:client:ResetLimbs')
        ClearPedTasks(PlayerPedId())
        remove = true
    end

    if (itemid == "sandwich" or itemid == "hamburger") then
        AttachPropAndPlayAnimation("mp_player_inteat@burger", "mp_player_int_eat_burger", 49,6000,"You are eating","changehunger",true,itemid,playerVeh)
        TriggerEvent('esx_status:add', 'hunger', 300000)
    end

    if (itemid == "cola" or itemid == "water") then
        AttachPropAndPlayAnimation("amb@world_human_drinking@beer@female@idle_a", "idle_e", 49,6000,"You are drinking","changethirst",true,itemid,playerVeh)
        TriggerEvent('esx_status:add', 'thirst', 300000)
    end


    if (itemid == "jailfood" or itemid == "bleederburger" or itemid == "heartstopper" or itemid == "patates" or itemid == "meatfree" or itemid == "moneyshot" or itemid == "fries") then
        AttachPropAndPlayAnimation("mp_player_inteat@burger", "mp_player_int_eat_burger", 49,6000,"You are eating","inv:wellfed",true,itemid,playerVeh)
        TriggerEvent('esx_status:add', 'hunger', 300000)

    end

    if (itemid == "methbag") then
        local finished = exports["r5m-taskbarskill"]:taskBar(2500,10)
        if (finished == 100) then  
            TriggerEvent("attachItemObjectnoanim","crackpipe01")
            TaskItem("switch@trevor@trev_smoking_meth", "trev_smoking_meth_loop", 49, 1500, "💩 Smoking Ass Meth 💩", "hadcrack", true, itemid,playerVeh)
        end
    end
    if itemid == "slushy" then
        TriggerEvent('r5m-hospital:client:RemoveBleed')
        TriggerEvent('r5m-hospital:client:ResetLimbs')
        AttachPropAndPlayAnimation("amb@world_human_drinking@beer@female@idle_a", "idle_e", 49, 6000,"Tüketiyorsun", "inv:wellfed",true,itemid,playerVeh)
        TriggerEvent('esx_status:add', 'thirst', 300000)
    end


    if (itemid == "advlockpick") then
        TriggerEvent('houseRobberies:attempt', getQuantity("advlockpick"))
        -- TriggerEvent("safe:check")
      --  TriggerEvent('inv:advancedLockpick',inventoryName,slot)
        -- TriggerEvent('esx_shopRobbery:isInCircle')
       
    end

    if (itemid == "uvlight") then
        -- TriggerEvent("safe:check")
        TriggerEvent("core_evidence:checkForFingerprints", playerVeh)
        -- TriggerEvent('esx_shopRobbery:isInCircle')
       
    end


 
    if (itemid == "maleseed") then 
        if exports['r5m-inventory']:hasEnoughOfItem('bucket', 1)  then
            TriggerEvent('r5m:weed:client:plantNewSeed', 'male')
            TriggerEvent("inventory:removeItem","maleseed", 1)
            TriggerEvent("inventory:removeItem","bucket", 1)
        else
            TriggerEvent('notification', 'You dont have a bucket', 2)
        end
    end

    if (itemid == "femaleseed") then 
        if exports['r5m-inventory']:hasEnoughOfItem('bucket', 1)  then
            TriggerEvent('r5m:weed:client:plantNewSeed', 'femaleseed')
            TriggerEvent("inventory:removeItem","maleseed", 1)
            TriggerEvent("inventory:removeItem","bucket", 1)
        else
            TriggerEvent('notification', 'You dont have a bucket', 2)
        end
    end

 

    --[[ if (itemid == "lockpick") then
        TriggerEvent('houseRobberies:attempt', getQuantity("lockpick"))
        -- print("send to fucking house robberies")
    end ]]

    if itemid == "purpleb" then
        TriggerEvent('r5m:ballasbandana')
    end
    
    if itemid == "greenb" then
        TriggerEvent('r5m:greenbandana')
    end

    if itemid == "yellowb" then
        TriggerEvent('r5m:vagosbandana')
    end

    if itemid == "blueb" then
        TriggerEvent('r5m:cripsbandana')
    end

    if itemid == "redb" then
        TriggerEvent('r5m:bloodsbandana')
    end


    if (itemid == "watch") then
        TriggerEvent("carHud:compass")
    end

    if (itemid == "sim") then
        TriggerServerEvent("ExeLds:useSim")
        remove = true
    end

    if (itemid == "phone") then
        TriggerEvent("gc:use")
    end

    if (itemid == "radio") then
        TriggerEvent("ls-radio:use")
    end

    if (itemid == "jumelles") then
        TriggerEvent("jumelles:Active")
    end

    if (itemid == "lockpick") then
        TriggerEvent("lockpick:vehicleUse", "lockpick")
        TriggerEvent("yoda:yazarkasaac", true)
    end

    if (itemid == "cigarette") then
        if getQuantity("lighter") > 0 then
            remove = true
            TriggerEvent("esx_cigarett:startSmoke")
        else
            TriggerEvent('mythic_notify:client:SendAlert', { type = 'inform', text = 'You dont have a lighter!', length = 4500, style = { ['background-color'] = '#ff0000', ['color'] = '#ffffff' } })
        end
    end

    if (itemid == "ciggy") then
        if getQuantity("lighter") > 0 then
            remove = true
            TriggerEvent("esx_cigarett:startSmoke")
        else
            TriggerEvent('mythic_notify:client:SendAlert', { type = 'inform', text = 'You dont have a lighter!', length = 4500, style = { ['background-color'] = '#ff0000', ['color'] = '#ffffff' } })
        end
    end

    if (itemid == "temizlikseti") then
        TriggerEvent("esx_extraitems:temizlikSeti")
    end

    if (itemid == "kulaklik") then
        TriggerEvent("esx_extraitems:kulaklik")
    end

    

    if (itemid == "raki") then
        if getQuantity("water") > 3 and getQuantity("bosrakibardagi") >= 8 then
            TriggerEvent("inventory:removeItem","raki", 1)
            TriggerEvent("inventory:removeItem","water", 3)
            TriggerEvent("inventory:removeItem","bosrakibardagi", 8)
            TriggerEvent('player:receiveItem', "dolurakibardagi", 8)
            TriggerEvent('mythic_notify:client:SendAlert', { type = 'inform', text = '8 adet Dolu Rakı Bardağı elde ettin.', length = 3000, style = { ['background-color'] = '#00CC00', ['color'] = '#000000' } })
        else
            TriggerEvent('mythic_notify:client:SendAlert', { type = 'inform', text = 'Üzerinde 3 adet Su ve 8 adet Boş Rakı Bardağı bulunmalı.', length = 3000, style = { ['background-color'] = '#CC0000', ['color'] = '#FFFFFF' } })
        end
    end

    if (itemid == "fakeplate") then
        TriggerEvent('exelds:bosplaka')
    end

    if (itemid == "spatula") then
        TriggerEvent("exelds:spatula")
    end

    if (itemid == "kirmizikaplama") then
        TriggerEvent('exelds:aracKaplama', 39, 'kirmizikaplama')
    end

    if (itemid == "siyahkaplama") then
        TriggerEvent('exelds:aracKaplama', 12, 'siyahkaplama')
    end

    if (itemid == "beyazkaplama") then
        TriggerEvent('exelds:aracKaplama', 121, 'beyazkaplama')
    end

    if (itemid == "mavikaplama") then
        TriggerEvent('exelds:aracKaplama', 64, 'mavikaplama')
    end

    if (itemid == "yesilkaplama") then
        TriggerEvent('exelds:aracKaplama', 53, 'yesilkaplama')
    end

    if (itemid == "sarikaplama") then
        TriggerEvent('exelds:aracKaplama', 89, 'sarikaplama')
    end

    if (itemid == "morkaplama") then
        TriggerEvent('exelds:aracKaplama', 148, 'morkaplama')
    end

    if (itemid == "fishingrod") then
        TriggerEvent('james_fishing:tryToFish')
    end

    if (itemid == "tequila") then
        TriggerEvent('esx_status:add', 'drunk', 500000)
	    TriggerEvent('esx_optionalneeds:onDrink')
        remove = true
    end

    if (itemid == "sarap") then
        TriggerEvent('esx_status:add', 'drunk', 350000)
	    TriggerEvent('esx_optionalneeds:onDrink')
        remove = true
    end

    if (itemid == "dolurakibardagi") then
        TriggerEvent('player:receiveItem', "bosrakibardagi", 1)
        TriggerEvent('esx_status:add', 'drunk', 120000)
	    TriggerEvent('esx_optionalneeds:onDrink')
        remove = true
    end

    if (itemid == "vodka") then
        TriggerEvent('esx_status:add', 'drunk', 700000)
	    TriggerEvent('esx_optionalneeds:onDrink')
        remove = true
    end

    if (itemid == "whisky") then
        TriggerClientEvent('esx_status:add', 'drunk', 200000)
	    TriggerClientEvent('esx_optionalneeds:onDrink')
        remove = true
    end

    if (itemid == "parasut") then
        TriggerEvent('esx_parasut:startparasut')
        remove = true
    end

    if (itemid == "fixkit") then
        TriggerEvent('esx_mechanicjob:onFixkit')
        remove = true
    end

    if (itemid == "advancedlockpick") then
        TriggerEvent('houseRobberies:attempt', getQuantity("lockpick"))
    end

    if (itemid == "medikit") then
        TriggerEvent('esx_ambulancejob:useItem', 'medikit')
        remove = true
    end

    --[[ if (itemid == "bandage") then
        TriggerEvent('esx_ambulancejob:useItem', 'bandage')
        remove = true
    end ]]

    if (itemid == "blowpipe") then
        TriggerEvent('esx_mechanicjob:onHijack')
        remove = true
    end

    if (itemid == "carokit") then
        TriggerEvent('esx_mechanicjob:onCarokit')
        remove = true
    end

    if (itemid == "screwdriver") then
        TriggerEvent('lsrp-banks:forceCashierDoor')
    end

    if (itemid == "usbhack") then
        TriggerEvent('lsrp-banks:initiateCashierRobbery')
    end

    if (itemid == "truckrobbery") then
        TriggerServerEvent('ExeLds:truckRobbery')
    end

    if (itemid == "weed_femaleseed") then
        TriggerEvent('plt_drugs:Freeze')
    end

    --[[ if (itemid == "bobbypin") then
        TriggerEvent('yoda:yazarkasaac', true)
    end ]]

    if (itemid == "cuffs") then
        TriggerEvent('2084_cuff_item:checkCuff')
    end

    if (itemid == "cuff_keys") then
        TriggerEvent("2084_cuff_item:uncuff")
	    TriggerEvent("2084_cuff_item:getTargetforFalse")
    end

    if (itemid == "demirmakasi") then
        TriggerEvent("2084_cuff_item:uncuff")
	    TriggerEvent("2084_cuff_item:getTargetforFalse")	
    end

    if (itemid == "notepad") then
        TriggerEvent('lkrp_notepad:note')
        TriggerEvent('lkrp_notepad:OpenNotepadGui')
    end

    if (itemid == "nitrous") then
        TriggerEvent('nitrobasla')
    end

    if (itemid == "tuner") then
        TriggerEvent('tuner:open')
        TriggerEvent('tuning:useLaptop')
    end

    if (itemid == "thermite") then
        TriggerEvent('edz-cashdeskrob:attemp')
    end

    if (itemid == "gym_bandage") then
        TriggerEvent('esx_gym:useBandage')
        remove = true
    end

    if (itemid == "protein_shake") then
        TriggerEvent('esx_status:add', 'thirst', 350000)
        TriggerEvent('esx_basicneeds:onDrink')
        TriggerEvent('esx:showNotification', 'Protein karısım ictin.')
        remove = true
    end

    if (itemid == "sportlunch") then
        TriggerClientEvent('esx_status:add', 'hunger', 350000)
        TriggerEvent('esx_basicneeds:onEat')
        TriggerEvent('esx:showNotification', 'Spor yemeği yedin.')
        remove = true
    end

    if (itemid == "powerade") then
        TriggerEvent('esx_status:add', 'thirst', 700000)
        TriggerEvent('esx_basicneeds:onDrink')
        TriggerEvent('esx:showNotification', 'İçtin: ~g~powerade')
        remove = true
    end

    if (itemid == "securityblue") then
        TriggerEvent('hsn-bankrob:client:startrob', "securityblue")
    end

    if (itemid == "securityred") then
        TriggerEvent('hsn-bankrob:client:startrob', "securityred")
    end

    if (itemid == "securityblack") then
        TriggerEvent('hsn-bankrob:client:startrob', "securityblack")
    end

    if (itemid == "securitygreen") then
        TriggerEvent('hsn-bankrob:client:startrob', "securitygreen")
    end

    if (itemid == "securitygold") then
        TriggerEvent('hsn-bankrob:client:startrob', "securitygold")
    end

    if (itemid == "diving_gear") then
        TriggerEvent('qb-diving:client:UseGear', true)
        remove = true
    end

    if (itemid == "alkololcer") then
        if PlayerData.job.name == 'police' then
            TriggerEvent('nest:alkoltest')
        else
            TriggerEvent('mythic_notify:client:SendAlert', { type = 'inform', text = 'Bu eşyayı sadece polisler kullanabilir.', length = 6000, style = { ['background-color'] = '#CC0000', ['color'] = '#FFFFFF' } })
        end
    end

    if (itemid == "akantahlili") then
        if PlayerData.job.name == 'ambulance' then
            TriggerEvent('nest:alkoltest')
        else
            TriggerEvent('mythic_notify:client:SendAlert', { type = 'inform', text = 'Bu eşyayı sadece doktorlar kullanabilir.', length = 6000, style = { ['background-color'] = '#CC0000', ['color'] = '#FFFFFF' } })
        end
    end

    if (itemid == "ukantahlili") then
        if PlayerData.job.name == 'ambulance' then
            TriggerEvent('Nest:uyusturucutest')
        else
        	TriggerEvent('mythic_notify:client:SendAlert', { type = 'inform', text = 'Bu eşyayı sadece doktorlar kullanabilir.', length = 6000, style = { ['background-color'] = '#CC0000', ['color'] = '#FFFFFF' } })
	    end
    end

    if (itemid == "serum") then
        if PlayerData.job.name == 'ambulance' then
            TriggerEvent('Nest:alkoltedavit')
        else
        	TriggerEvent('mythic_notify:client:SendAlert', { type = 'inform', text = 'Bu eşyayı sadece doktorlar kullanabilir.', length = 6000, style = { ['background-color'] = '#CC0000', ['color'] = '#FFFFFF' } })
	    end
    end

    if (itemid == "ucip") then
        if PlayerData.job.name == 'ambulance' then
            TriggerEvent('Nest:uyusturucutedavi')
        else
        	TriggerEvent('mythic_notify:client:SendAlert', { type = 'inform', text = 'Bu eşyayı sadece doktorlar kullanabilir.', length = 6000, style = { ['background-color'] = '#CC0000', ['color'] = '#FFFFFF' } })
	    end
    end

    if (itemid == "kartus") then
        TriggerEvent('nest:taserreload')
    end

    if (itemid == "maske") then
        TriggerEvent('sup_bandana:maske')
    end

    if (itemid == "bloodsbandana") then
        TriggerEvent('sup_bandana:bloodsbandana')
    end

    if (itemid == "greenbandana") then
        TriggerEvent('sup_bandana:greenbandana')
    end

    if (itemid == "ballasbandana") then
        TriggerEvent('sup_bandana:ballasbandana')
    end

    if (itemid == "vagosbandana") then
        TriggerEvent('sup_bandana:vagosbandana')
    end

    if (itemid == "cripsbandana") then
        TriggerEvent('sup_bandana:cripsbandana')
    end

    if (itemid == "whitebandana") then
        TriggerEvent('sup_bandana:whitebandana')
    end

    if (itemid == "blackbandana") then
        TriggerEvent('sup_bandana:blackbandana')
    end

    if (itemid == "orangebandana") then
        TriggerEvent('sup_bandana:orangebandana')
    end
    

    if remove then
        TriggerEvent("inventory:removeItem",itemid, 1)
    end

    Wait(500)
    retardCounter = 0
    justUsed = false
end)



function AttachPropAndPlayAnimation(dictionary,animation,typeAnim,timer,message,func,remove,itemid,vehicle)
    if itemid == "hamburger" or itemid == "heartstopper" or itemid == "bleederburger" or itemid == "moneyshot" then
        TriggerEvent("attachItem", "hamburger")
        TriggerEvent('esx_status:add', 'hunger', 300000)
    elseif itemid == "sandwich" then
        TriggerEvent("attachItem", "sandwich")
        TriggerEvent('esx_status:add', 'hunger', 300000)
    elseif itemid == "donut" then
        TriggerEvent("attachItem", "donut")
        TriggerEvent('esx_status:add', 'hunger', 300000)
    elseif itemid == "water" or itemid == "cola" or itemid == "vodka" or itemid == "whiskey" or itemid == "beer" or itemid == "coffee" then
        TriggerEvent("attachItem", itemid)
        TriggerEvent('esx_status:add', 'thirst', 300000)
    elseif itemid == "fishtaco" or itemid == "taco" then
        TriggerEvent("attachItem", "taco")
        TriggerEvent('esx_status:add', 'hunger', 300000)
    elseif itemid == "greencow" then
        TriggerEvent("attachItem", "energydrink")
        TriggerEvent('esx_status:add', 'thirst', 300000)
    elseif itemid == "slushy" then
        TriggerEvent("attachItem", "cup")
        TriggerEvent('esx_status:add', 'thirst', 300000)
    end
    TaskItem(dictionary, animation, typeAnim, timer, message, func, remove, itemid,vehicle)
end

RegisterNetEvent('randPickupAnim')
AddEventHandler('randPickupAnim', function()
    loadAnimDict('pickup_object')
    TaskPlayAnim(PlayerPedId(),'pickup_object', 'putdown_low',5.0, 1.5, 1.0, 48, 0.0, 0, 0, 0)
    Wait(1000)
    ClearPedSecondaryTask(PlayerPedId())
end)

RegisterNetEvent('createjointcraft')
AddEventHandler('createjointcraft', function()
    CreateCraftOption("joint", 80, true)   
end)

RegisterNetEvent('updateCurrentWeight')
AddEventHandler('updateCurrentWeight', function(weight)
    currentWeight = weight
end)

RegisterNetEvent('ExeLds:removePed')
AddEventHandler('ExeLds:removePed', function(weight)
    if pedGui then
        pedGui = false
        local menuType = "FE_MENU_VERSION_EMPTY_NO_BACKGROUND"
        ActivateFrontendMenu(GetHashKey(menuType), true, 0)
        Wait(100)
        local clonedPed = ClonePed(PlayerPedId(), 0, false, false)
        FreezeEntityPosition(clonedPed, false)
        --N_0x4668d80430d6c299(clonedPed)
        DeletePed(clonedPed)
        GivePedToPauseMenu(clonedPed, 0)
        SetPauseMenuPedLighting(false)
        SetPauseMenuPedSleepState(false)
        -- RequestScaleformMovie("PAUSE_MP_MENU_PLAYER_MODEL")
        --RequestScaleformMovie("PAUSE_MP_MENU_PLAYER_MODEL")
    end
end)

local clientInventory = {};
RegisterNetEvent('current-items')
AddEventHandler('current-items', function(inv)
    clientInventory = inv
end)


RegisterNetEvent('ExeLds:openWeaponRepairMenu')
AddEventHandler('ExeLds:openWeaponRepairMenu', function()
    local inv = getInventory()
    local elements = {}
    local repairAmount = 100 -- Tamir ücreti $
    for i=1, #inv.items, 1 do
        
        local invitem = inv.items[i]
        local info = json.decode(invitem.information)
        if invitem.count > 0 and info ~= nil and info.serial ~= nil then
            table.insert(elements, { label = 'Serial number: <span style="color:#009900;">'..info.serial .. '</span> | Repair Fee:<span style="color:#009900;"> '..repairAmount..'$  </span>', slot = invitem.slot, serial = info.serial, amount = repairAmount})
        end
    end
    ESX.UI.Menu.Open(
        'default', GetCurrentResourceName(), 'repairweapon',
        {
          title    = 'Select Weapon to Repair',
          align    = 'left',
          elements = elements
        },
        function(data, menu)
            menu.close()
            local itemSlot = data.current.slot
            ESX.UI.Menu.Open(
				'default', GetCurrentResourceName(), 'confirm',
				{
					title = data.current.serial..' Serial numbered gun repaired?',
					align = 'left',
					elements = {
						{label = 'Confirm', value = 'yes'},
						{label = 'Canceled',  value = 'no'},
					}
				},
				function(data3, menu3)											
					if data3.current.value == 'yes' then
						TriggerServerEvent('ExeLds:repairWeapon', itemSlot, data.current.amount, data.current.serial)                      
						menu3.close()
					else											
						exports['mythic_notify']:SendAlert('inform', "Weapon repair canceled", 2500, { ['background-color'] = '#FF3333', ['color'] = '#FFFFFF' })
						menu3.close()
					end
				end, function(data3, menu3)
					exports['mythic_notify']:SendAlert('inform', "Weapon repair canceled", 2500, { ['background-color'] = '#FF3333', ['color'] = '#FFFFFF' })
					menu3.close()
				end
			)
                   
      
    end, 
    function(data, menu)
     menu.close()
    end)
end)

RegisterNetEvent('ExeLds:openWeaponRepairMenus')
AddEventHandler('ExeLds:openWeaponRepairMenus', function()
    local inv = getInventory()
    local elements = {}
    local repairAmount = 1 -- Tamir ücreti $
    for i=1, #inv.items, 1 do
        
        local invitem = inv.items[i]
        local info = json.decode(invitem.information)
        if invitem.count > 0 and info ~= nil and info.serial ~= nil then
            table.insert(elements, { label = 'Serial Number: <span style="color:#009900;">'..info.serial .. '</span> | Repair Fee:<span style="color:#009900;"> '..repairAmount..'$  </span>', slot = invitem.slot, serial = info.serial, amount = repairAmount})
        end
    end
    ESX.UI.Menu.Open(
        'default', GetCurrentResourceName(), 'repairweapon',
        {
          title    = 'Select Weapon to Repair',
          align    = 'left',
          elements = elements
        },
        function(data, menu)
            menu.close()
            local itemSlot = data.current.slot
            ESX.UI.Menu.Open(
				'default', GetCurrentResourceName(), 'confirm',
				{
					title = data.current.serial..' Serial numbered gun repaired?',
					align = 'left',
					elements = {
						{label = 'Confirm', value = 'yes'},
						{label = 'Canceled',  value = 'no'},
					}
				},
				function(data3, menu3)											
					if data3.current.value == 'yes' then
						TriggerServerEvent('ExeLds:repairWeapon', itemSlot, data.current.amount, data.current.serial)                      
						menu3.close()
					else											
						exports['mythic_notify']:SendAlert('inform', "Weapon repair canceled", 2500, { ['background-color'] = '#FF3333', ['color'] = '#FFFFFF' })
						menu3.close()
					end
				end, function(data3, menu3)
					exports['mythic_notify']:SendAlert('inform', "Weapon repair canceled", 2500, { ['background-color'] = '#FF3333', ['color'] = '#FFFFFF' })
					menu3.close()
				end
			)
                   
      
    end, 
    function(data, menu)
     menu.close()
    end)
end)

function GetItemInfo(checkslot)    
     for i,v in pairs(clientInventory) do
         if (tonumber(v.slot) == tonumber(checkslot)) then
             local info = {["information"] = v.information, ["id"] = v.id, ["quality"] = v.quality }
             return info
         end
     end
     return "No information stored";
 end

-- item id, amount allowed, crafting.
function CreateCraftOption(id, add, craft)
    TriggerEvent("CreateCraftOption", id, add, craft)
end

-- Animations
function loadAnimDict( dict )
    while ( not HasAnimDictLoaded( dict ) ) do
        RequestAnimDict( dict )
        Citizen.Wait( 5 )
    end
end

function TaskItem(dictionary,animation,typeAnim,timer,message,func,remove,itemid,playerVeh)
    if remove then
        TriggerEvent("inventory:removeItem",itemid, 1)
    end
    loadAnimDict( dictionary ) 
    TaskPlayAnim( PlayerPedId(), dictionary, animation, 8.0, 1.0, -1, typeAnim, 0, 0, 0, 0 )
    local timer = tonumber(timer)
    if timer > 0 then
        local finished = exports["np-taskbar"]:taskBar(timer,message,true,false,playerVeh)
        if finished == 100 or timer == 0 then
            TriggerEvent(func)
            ClearPedTasks(PlayerPedId())
            TriggerEvent("destroyProp")
        end
    else
        TriggerEvent(func)
    end    
end


function GetCurrentWeapons()
    local returnTable = {}
    for i,v in pairs(clientInventory) do
        if (tonumber(v.item_id)) then
            local t = { ["hash"] = v.item_id, ["id"] = v.id, ["information"] = v.information, ["name"] = v.item_id, ["slot"] = v.slot }
            returnTable[#returnTable+1]=t
        end
    end   
    if returnTable == nil then 
        return {}
    end
    return returnTable
end

function getQuantity(itemid)
    local amount = 0
    for i,v in pairs(clientInventory) do
        if (v.item_id == itemid) then
            amount = amount + v.amount
        end
    end
    return amount
end

function getCurrentWeight()
    return currentWeight 
end


function getInventory()
    local amount = 0 
    local userData = {
		items = {}
	}
    for i,v in pairs(clientInventory) do
        amount = getQuantity(v.item_id)
        if amount > 0 then
            local founded = false
            for i=1, #userData.items, 1 do
                local invitem = userData.items[i]
                if invitem.name == v.item_id and invitem.slot == v.slot then
                    founded = true
                end
            end
            if not founded then
                table.insert(userData.items, {
                    name = v.item_id,
                    count = amount,
                    label =  v.item_id,
                    slot = v.slot,
                    information = v.information
                })
            end
        end
    end
    return userData
end


function hasEnoughOfItem(itemid,amount,shouldReturnText)

    if shouldReturnText == nil then 
        shouldReturnText = true 
    end
        if itemid == nil or itemid == 0 or amount == nil or amount == 0 then
         
        return false 
    end
    amount = tonumber(amount)
    local slot = 0
    local found = false

    if getQuantity(itemid) >= amount then
        return true
    end
    return false
end


function isValidUseCase(itemID,isWeapon)
    local player = PlayerPedId()
    local playerVeh = GetVehiclePedIsIn(player, false)
    if playerVeh ~= 0 then
        local model = GetEntityModel(playerVeh)
        if IsThisModelACar(model) or IsThisModelABike(model) or IsThisModelAQuadbike(model) then
            if IsEntityInAir(playerVeh) then
                Wait(1000)
                if IsEntityInAir(playerVeh) then
                    TriggerEvent("notification","You appear to be flying through the air",2) 
                    return false
                end
            end
        end
    end

    if not validWaterItem[itemID] and not isWeapon then
        if IsPedSwimming(player) then
            local targetCoords = GetEntityCoords(player, 0)
            Wait(700)
            local plyCoords = GetEntityCoords(player, 0)
            if #(targetCoords - plyCoords) > 1.3 then
                TriggerEvent("notification","Cannot be moving while swimming to use this.",2) 
                return false
            end
        end

        if IsPedSwimmingUnderWater(player) then
            TriggerEvent("notification","Cannot be underwater to use this.",2) 
            return false
        end
    end

    return true
end




function GetPlayers()
    local players = {}

    for i = 0, 255 do
        if NetworkIsPlayerActive(i) then
            players[#players+1]= i
        end
    end

    return players
end

function armourAnim()
	local animdict = "missmic4"
	local anim = "michael_tux_fidget"
	local playerPed = PlayerPedId()
	ClearPedSecondaryTask(playerPed)
	loadAnimDict(animdict) 
	TaskPlayAnim(playerPed, animdict, anim, 8.0, 1.0, -1, 51, 0, 0, 0, 0)
	--ClearPedTasks(playerPed)
end

function GetClosestPlayer()
    local players = GetPlayers()
    local closestDistance = -1
    local closestPlayer = -1
    local ply = PlayerPedId()
    local plyCoords = GetEntityCoords(ply, 0)
    
    for index,value in ipairs(players) do
        local target = GetPlayerPed(value)
        if(target ~= ply) then
            local targetCoords = GetEntityCoords(GetPlayerPed(value), 0)
            local distance = #(vector3(targetCoords["x"], targetCoords["y"], targetCoords["z"]) - vector3(plyCoords["x"], plyCoords["y"], plyCoords["z"]))
            if(closestDistance == -1 or closestDistance > distance) then
                closestPlayer = value
                closestDistance = distance
            end
        end
    end
    
    return closestPlayer, closestDistance
end



function getVehicleInDirection(coordFrom, coordTo)
    local offset = 0
    local rayHandle
    local vehicle

    for i = 0, 100 do
        rayHandle = CastRayPointToPoint(coordFrom.x, coordFrom.y, coordFrom.z, coordTo.x, coordTo.y, coordTo.z + offset, 10, PlayerPedId(), 0)   
        a, b, c, d, vehicle = GetRaycastResult(rayHandle)
        
        offset = offset - 1

        if vehicle ~= 0 then break end
    end
    
    local distance = Vdist2(coordFrom, GetEntityCoords(vehicle))
    
    if distance > 25 then vehicle = nil end

    return vehicle ~= nil and vehicle or 0
end
function DrawText3Ds(x,y,z, text)
    local onScreen,_x,_y=World3dToScreen2d(x,y,z)
    local px,py,pz=table.unpack(GetGameplayCamCoords())
    SetTextScale(0.35, 0.35)
    SetTextFont(4)
    SetTextProportional(1)
    SetTextColour(255, 255, 255, 215)
    SetTextEntry("STRING")
    SetTextCentre(1)
    AddTextComponentString(text)
    DrawText(_x,_y)
    local factor = (string.len(text)) / 370
    DrawRect(_x,_y+0.0125, 0.015+ factor, 0.03, 41, 11, 41, 68)

end

local burgies = 0
RegisterNetEvent('inv:wellfed')
AddEventHandler('inv:wellfed', function()
    TriggerEvent("r5m-states:stateSet",25,3600)
    TriggerEvent("changehunger")
    TriggerEvent("changehunger")
    TriggerEvent("client:newStress",false,10)
    TriggerEvent("changehunger")
    TriggerEvent("changethirst")
    burgies = 0
end)

RegisterNetEvent('animation:lockpickinvtestoutside')
AddEventHandler('animation:lockpickinvtestoutside', function()
    local lPed = PlayerPedId()
    RequestAnimDict("veh@break_in@0h@p_m_one@")
    while not HasAnimDictLoaded("veh@break_in@0h@p_m_one@") do
        Citizen.Wait(0)
    end
    
    while lockpicking do        
        TaskPlayAnim(lPed, "veh@break_in@0h@p_m_one@", "low_force_entry_ds", 1.0, 1.0, 1.0, 16, 0.0, 0, 0, 0)
        Citizen.Wait(2500)
    end
    ClearPedTasks(lPed)
end)

RegisterNetEvent('animation:lockpickinvtest')
AddEventHandler('animation:lockpickinvtest', function(disable)
    local lPed = PlayerPedId()
    RequestAnimDict("mini@repair")
    while not HasAnimDictLoaded("mini@repair") do
        Citizen.Wait(0)
    end
    if disable ~= nil then
        if not disable then
            lockpicking = false
            return
        else
            lockpicking = true
        end
    end
    while lockpicking do

        if not IsEntityPlayingAnim(lPed, "mini@repair", "fixing_a_player", 3) then
            ClearPedSecondaryTask(lPed)
            TaskPlayAnim(lPed, "mini@repair", "fixing_a_player", 8.0, -8, -1, 16, 0, 0, 0, 0)
        end
        Citizen.Wait(1)
    end
    ClearPedTasks(lPed)
end)




--[[ RegisterNetEvent('inv:lockPick')
AddEventHandler('inv:lockPick', function(isForced,inventoryName,slot)
    TriggerEvent("robbery:scanLock",true)
    if lockpicking then return end

    lockpicking = true
    playerped = PlayerPedId()
    targetVehicle = GetVehiclePedIsUsing(playerped)
    local itemid = 21

    if targetVehicle == 0 then
        coordA = GetEntityCoords(playerped, 1)
        coordB = GetOffsetFromEntityInWorldCoords(playerped, 0.0, 100.0, 0.0)
        targetVehicle = getVehicleInDirection(coordA, coordB)
        local driverPed = GetPedInVehicleSeat(targetVehicle, -1)
        if targetVehicle == 0 then
            lockpicking = false
            -- print('penios')
            -- TriggerEvent('houseRobberies:attempt')
            return
        end

        if driverPed ~= 0 then
            lockpicking = false
            return
        end
            local d1,d2 = GetModelDimensions(GetEntityModel(targetVehicle))
            local leftfront = GetOffsetFromEntityInWorldCoords(targetVehicle, d1["x"]-0.25,0.25,0.0)

            local count = 5000
            local dist = #(vector3(leftfront["x"],leftfront["y"],leftfront["z"]) - GetEntityCoords(PlayerPedId()))
            while dist > 2.0 and count > 0 do
                dist = #(vector3(leftfront["x"],leftfront["y"],leftfront["z"]) - GetEntityCoords(PlayerPedId()))
                Citizen.Wait(1)
                count = count - 1
                DrawText3Ds(leftfront["x"],leftfront["y"],leftfront["z"],"Move here to lockpick.")
            end

            if dist > 2.0 then
                lockpicking = false
                return
            end


            TaskTurnPedToFaceEntity(PlayerPedId(), targetVehicle, 1.0)
            Citizen.Wait(1000)
            TriggerServerEvent('InteractSound_SV:PlayWithinDistance', 3.0, 'lockpick', 0.4)
            local triggerAlarm = GetVehicleDoorLockStatus(targetVehicle) > 1
            if triggerAlarm then
                SetVehicleAlarm(targetVehicle, true)
                StartVehicleAlarm(targetVehicle)
            end


            -- TriggerEvent("civilian:alertPolice",20.0,"lockpick",targetVehicle)
           
            TriggerEvent("animation:lockpickinvtestoutside")
            TriggerServerEvent('InteractSound_SV:PlayWithinDistance', 3.0, 'lockpick', 0.4)



 
            local finished = exports["r5m-taskbarskill"]:taskBar(25000,3)

            if finished ~= 100 then
                 lockpicking = false
                return
            end

            local finished = exports["r5m-taskbarskill"]:taskBar(2200,10)

            if finished ~= 100 then
                 lockpicking = false
                return
            end


            if finished == 100 then
                if triggerAlarm then
                    SetVehicleAlarm(targetVehicle, false)
                end
                local chance = math.random(50)
                if #(GetEntityCoords(targetVehicle) - GetEntityCoords(PlayerPedId())) < 10.0 and targetVehicle ~= 0 and GetEntitySpeed(targetVehicle) < 5.0 then

                    SetVehicleDoorsLocked(targetVehicle, 1)
                    TriggerEvent("notification", "Vehicle Unlocked.",1)
                    TriggerEvent('InteractSound_CL:PlayOnOne', 'unlock', 0.1)

                end
            end
        lockpicking = false
    else
        if targetVehicle ~= 0 and not isForced then

            TriggerServerEvent('InteractSound_SV:PlayWithinDistance', 3.0, 'lockpick', 0.4)
            local triggerAlarm = GetVehicleDoorLockStatus(targetVehicle) > 1
            if triggerAlarm then
                SetVehicleAlarm(targetVehicle, true)
                StartVehicleAlarm(targetVehicle)
            end

            SetVehicleHasBeenOwnedByPlayer(targetVehicle,true)
            -- TriggerEvent("civilian:alertPolice",20.0,"lockpick",targetVehicle)
           
            TriggerEvent("animation:lockpickinvtest")
            TriggerServerEvent('InteractSound_SV:PlayWithinDistance', 3.0, 'lockpick', 0.4)

           
            local carTimer = GetVehicleHandlingFloat(targetVehicle, 'CHandlingData', 'nMonetaryValue')
            if carTimer == nil then
                carTimer = math.random(25000,180000)
            end
            if carTimer < 25000 then
                carTimer = 25000
            end

            if carTimer > 180000 then
                carTimer = 180000
            end
            
            carTimer = math.ceil(carTimer / 3)


            local myJob = exports["isPed"]:isPed("myJob")
            if myjob == "towtruck" then
                carTimer = 4000
            end

            -- TriggerEvent("civilian:alertPolice",20.0,"lockpick",targetVehicle)

            local finished = exports["r5m-taskbarskill"]:taskBar(math.random(5000,25000),math.random(10,20))
            if finished ~= 100 then
                 lockpicking = false
                return
            end

            local finished = exports["r5m-taskbarskill"]:taskBar(math.random(5000,25000),math.random(10,20))
            if finished ~= 100 then
                 lockpicking = false
                return
            end


            -- TriggerEvent("civilian:alertPolice",20.0,"lockpick",targetVehicle)
            local finished = exports["r5m-taskbarskill"]:taskBar(1500,math.random(5,15))
            if finished ~= 100 then
                TriggerEvent("notification", "The lockpick bent out of shape.",2)
                TriggerEvent("inventory:removeItem","lockpick", 1)                
                 lockpicking = false
                return
            end     


            Citizen.Wait(500)
            if finished == 100 then
                if triggerAlarm then
                    SetVehicleAlarm(targetVehicle, false)
                end
                local chance = math.random(50)
                if #(GetEntityCoords(targetVehicle) - GetEntityCoords(PlayerPedId())) < 10.0 and targetVehicle ~= 0 and GetEntitySpeed(targetVehicle) < 5.0 then
                    local plate = GetVehicleNumberPlateText(targetVehicle)
                    SetVehicleDoorsLocked(targetVehicle, 1)
                    local plate = GetVehicleNumberPlateText(targetVehicle)

                    TriggerEvent("keys:addNew",targetVehicle,plate)
                    TriggerEvent("keys:startvehicle")
                    -- TriggerEvent("civilian:alertPolice",20.0,"lockpick",targetVehicle)
                    TriggerEvent("notification", "Ignition Working.",1)
                    SetEntityAsMissionEntity(targetVehicle,false,true)
                    SetVehicleHasBeenOwnedByPlayer(targetVehicle,true)
                end
                lockpicking = false
            end
        end
    end
    lockpicking = false
end) ]]

local reapiring = false
RegisterNetEvent('veh:repairing')
AddEventHandler('veh:repairing', function(inventoryName,slot,itemid)
    local playerped = PlayerPedId()
    local coordA = GetEntityCoords(playerped, 1)
    local coordB = GetOffsetFromEntityInWorldCoords(playerped, 0.0, 100.0, 0.0)
    local targetVehicle = getVehicleInDirection(coordA, coordB)

    local advanced = false
    if itemid == "advrepairkit" then
        advanced = true
    end

    if targetVehicle ~= 0 then

        local d1,d2 = GetModelDimensions(GetEntityModel(targetVehicle))
        local moveto = GetOffsetFromEntityInWorldCoords(targetVehicle, 0.0,d2["y"]+0.5,0.2)
        local dist = #(vector3(moveto["x"],moveto["y"],moveto["z"]) - GetEntityCoords(PlayerPedId()))
        local count = 1000
        local fueltankhealth = GetVehiclePetrolTankHealth(targetVehicle)

        while dist > 1.5 and count > 0 do
            dist = #(vector3(moveto["x"],moveto["y"],moveto["z"]) - GetEntityCoords(PlayerPedId()))
            Citizen.Wait(1)
            count = count - 1
            DrawText3Ds(moveto["x"],moveto["y"],moveto["z"],"Buradan Onarın")
        end

        if reapiring then return end
        reapiring = true
        
        local timeout = 20

        NetworkRequestControlOfEntity(targetVehicle)

        while not NetworkHasControlOfEntity(targetVehicle) and timeout > 0 do 
            NetworkRequestControlOfEntity(targetVehicle)
            Citizen.Wait(100)
            timeout = timeout -1
        end


        if dist < 1.5 then
            TriggerEvent("animation:repair",targetVehicle)
            fixingvehicle = true

            local repairlength = 1000

            if advanced then
                local timeAdded = 0
                for i=0,5 do
                    if IsVehicleTyreBurst(targetVehicle, i, false) then
                        if IsVehicleTyreBurst(targetVehicle, i, true) then
                            timeAdded = timeAdded + 1200
                        else
                           timeAdded = timeAdded + 800
                        end
                    end
                end
                local fuelDamage = 48000 - (math.ceil(fueltankhealth)*12)
                repairlength = ((3500 - (GetVehicleEngineHealth(targetVehicle) * 3) - (GetVehicleBodyHealth(targetVehicle)) / 2) * 5) + 2000
                repairlength = repairlength + timeAdded + fuelDamage
            else
                local timeAdded = 0
                for i=0,5 do
                    if IsVehicleTyreBurst(targetVehicle, i, false) then
                        if IsVehicleTyreBurst(targetVehicle, i, true) then
                            timeAdded = timeAdded + 1600
                        else
                           timeAdded = timeAdded + 1200
                        end
                    end
                end
                local fuelDamage = 48000 - (math.ceil(fueltankhealth)*12)
                repairlength = ((3500 - (GetVehicleEngineHealth(targetVehicle) * 3) - (GetVehicleBodyHealth(targetVehicle)) / 2) * 3) + 2000
                repairlength = repairlength + timeAdded + fuelDamage
            end



            local finished = exports["r5m-taskbarskill"]:taskBar(15000,math.random(10,20))
            if finished ~= 100 then
                fixingvehicle = false
                reapiring = false
                ClearPedTasks(playerped)
                return
            end

            if finished == 100 then
                
                local myJob = exports["isPed"]:isPed("myJob")
                if myJob == "police" then

                    SetVehicleEngineHealth(targetVehicle, 1000.0)
                    SetVehicleBodyHealth(targetVehicle, 1000.0)
                    SetVehiclePetrolTankHealth(targetVehicle, 4000.0)

                    if math.random(100) > 95 then
                        TriggerEvent("inventory:removeItem","repairtoolkit",1)
                    end

                else

                    TriggerEvent('veh.randomDegredation',30,targetVehicle,3)

                    if advanced then
                        TriggerEvent("inventory:removeItem","advrepairkit", 1)
                        TriggerEvent('veh.randomDegredation',30,targetVehicle,3)
                        if GetVehicleEngineHealth(targetVehicle) < 900.0 then
                            SetVehicleEngineHealth(targetVehicle, 900.0)
                        end
                        if GetVehicleBodyHealth(targetVehicle) < 945.0 then
                            SetVehicleBodyHealth(targetVehicle, 945.0)
                        end

                        if fueltankhealth < 3800.0 then
                            SetVehiclePetrolTankHealth(targetVehicle, 3800.0)
                        end

                    else

                        local timer = math.ceil(GetVehicleEngineHealth(targetVehicle) * 5)
                        if timer < 2000 then
                            timer = 2000
                        end
                        local finished = exports["r5m-taskbarskill"]:taskBar(timer,math.random(5,15))
                        if finished ~= 100 then
                            fixingvehicle = false
                            reapiring = false
                            ClearPedTasks(playerped)
                            return
                        end

                        if math.random(100) > 95 then
                            TriggerEvent("inventory:removeItem","repairtoolkit",1)
                        end

                        if GetVehicleEngineHealth(targetVehicle) < 200.0 then
                            SetVehicleEngineHealth(targetVehicle, 200.0)
                        end
                        if GetVehicleBodyHealth(targetVehicle) < 945.0 then
                            SetVehicleBodyHealth(targetVehicle, 945.0)
                        end

                        if fueltankhealth < 2900.0 then
                            SetVehiclePetrolTankHealth(targetVehicle, 2900.0)
                        end                        

                        if GetEntityModel(targetVehicle) == `BLAZER` then
                            SetVehicleEngineHealth(targetVehicle, 600.0)
                            SetVehicleBodyHealth(targetVehicle, 800.0)
                        end
                    end                    
                end

                for i = 0, 5 do
                    SetVehicleTyreFixed(targetVehicle, i) 
                end
            end
            ClearPedTasks(playerped)
        end
        fixingvehicle = false
    end
    reapiring = false
end)

-- Animations
RegisterNetEvent('animation:load')
AddEventHandler('animation:load', function(dict)
    while ( not HasAnimDictLoaded( dict ) ) do
        RequestAnimDict( dict )
        Citizen.Wait( 5 )
    end
end)

RegisterNetEvent('animation:repair')
AddEventHandler('animation:repair', function(veh)
    SetVehicleDoorOpen(veh, 4, 0, 0)
    RequestAnimDict("mini@repair")
    while not HasAnimDictLoaded("mini@repair") do
        Citizen.Wait(0)
    end

    TaskTurnPedToFaceEntity(PlayerPedId(), veh, 1.0)
    Citizen.Wait(1000)

    while fixingvehicle do
        local anim3 = IsEntityPlayingAnim(PlayerPedId(), "mini@repair", "fixing_a_player", 3)
        if not anim3 then
            TaskPlayAnim(PlayerPedId(), "mini@repair", "fixing_a_player", 8.0, -8, -1, 16, 0, 0, 0, 0)
        end
        Citizen.Wait(1)
    end
    SetVehicleDoorShut(veh, 4, 1, 1)
end)

Citizen.CreateThread(function()
    while true do
        Citizen.Wait(0)
        BlockWeaponWheelThisFrame()
        HideHudComponentThisFrame(19)
        HideHudComponentThisFrame(20)
        HideHudComponentThisFrame(17)
        DisableControlAction(0, 37, true) 
    end
end)



--[[RegisterCommand('exetest2', function(source)
    ESX.TriggerServerCallback('esx_skin:getPlayerSkin', function(skin)
        local info = {}
	    info.item = 1
	    info.texture = 2
        info.sexInfo = skin.sex
        TriggerEvent('player:receiveItem', "water", 1, json.encode(info))
    end)  
end)]]


RegisterNetEvent('police:checkInventory')
AddEventHandler('police:checkInventory', function()
    local player = ESX.GetPlayerData()
    local closestPlayer, closestDistance = ESX.Game.GetClosestPlayer()
    if closestPlayer ~= -1 and closestDistance <= 2.0 then
        if PlayerData.job.name == 'police' then
            local searchPlayerPed = GetPlayerPed(closestPlayer)
            TriggerServerEvent("people-search", GetPlayerServerId(closestPlayer)) --COPY THIS
            TriggerServerEvent("cash-checksv",  GetPlayerServerId(closestPlayer))
        else
            TriggerEvent("notification", "you are not a cop")
        end
    end
end)




RegisterCommand("rob", function(source, args)
    local player = ESX.GetPlayerData()
    local closestPlayer, closestDistance = ESX.Game.GetClosestPlayer()
    if closestPlayer ~= -1 and closestDistance <= 2.0 then
        if PlayerData.job.name == 'police' then
            local searchPlayerPed = GetPlayerPed(closestPlayer)
            TriggerServerEvent("people-search", GetPlayerServerId(closestPlayer)) --COPY THIS
            TriggerServerEvent("cash-checksv",  GetPlayerServerId(closestPlayer))
        else
            TriggerEvent("notification", "you are not a cop")
        end
    end
end)

-- RegisterCommand("wasd", function(source, args)
-- 	local cid = exports["isPed"]:isPed("cids")
--     TriggerServerEvent("ReturnHouses", cid, modifyingTable["house_id"] 
-- end)

RegisterCommand("soy", function(source, args)

	local closestPlayer, closestDistance = ESX.Game.GetClosestPlayer()
	if closestPlayer ~= -1 and closestDistance <= 1.0 then
		local playerPed = PlayerPedId()
		local searchPlayerPed = GetPlayerPed(closestPlayer)
	
		if IsEntityPlayingAnim(searchPlayerPed, 'random@mugging3', 'handsup_standing_base', 3) or IsEntityPlayingAnim(searchPlayerPed, 'dead', 'dead_a', 3) then
			RequestAnimDict("random@shop_robbery")
	
			while not HasAnimDictLoaded("random@shop_robbery") do
	
				Citizen.Wait(0)
	
			end
		
			TaskPlayAnim(PlayerPedId(), "random@shop_robbery" , "robbery_action_b", 8.0, -8, -1, 16, 0, 0, 0, 0)
			local finished = exports["np-taskbar"]:taskBar(3500, "Soyuyorsun")
			TriggerServerEvent("people-search", GetPlayerServerId(closestPlayer)) --COPY THIS
			TriggerServerEvent("Stealtheybread", GetPlayerServerId(closestPlayer)) --COPY THIS
		else
			TriggerEvent('notification', 'The person did not raise her hands')
		end
	end
end)
	




RegisterCommand("paraal", function(source, args)
    local closestPlayer, closestDistance = ESX.Game.GetClosestPlayer()
    if closestPlayer ~= -1 and closestDistance <= 2.0 then
        if PlayerData.job.name == 'police' then
            local searchPlayerPed = GetPlayerPed(closestPlayer)
            TriggerServerEvent("police:SeizeCash",  GetPlayerServerId(closestPlayer))
        else
            TriggerEvent("notification", "you are not a cop")
        end
    end
end)

RegisterCommand("parabak", function(source, args)
    local closestPlayer, closestDistance = ESX.Game.GetClosestPlayer()
    if closestPlayer ~= -1 and closestDistance <= 2.0 then
        if PlayerData.job.name == 'police' then
            local searchPlayerPed = GetPlayerPed(closestPlayer)
            TriggerServerEvent("cash-checksv",  GetPlayerServerId(closestPlayer))
        else
            TriggerEvent("notification", "Job Required: Police")
        end
    end
end)


RegisterNetEvent('check-bank')
AddEventHandler('check-bank', function(target)
    local closestPlayer, closestDistance = ESX.Game.GetClosestPlayer()
    if closestPlayer ~= -1 and closestDistance <= 2.0 then
        if PlayerData.job.name == 'police' then
            local searchPlayerPed = GetPlayerPed(closestPlayer)
            TriggerServerEvent("cash-checksv",  GetPlayerServerId(closestPlayer))
        else
            TriggerEvent("notification", "Job Required: Police")
        end
    end
end)

RegisterNetEvent('ExeLds:weaponCheck')
AddEventHandler('ExeLds:weaponCheck', function(item)
    local playerPed = PlayerPedId()
    local weapon = GetSelectedPedWeapon(playerPed)
    if weapon ~= GetHashKey('WEAPON_UNARMED') and tonumber(item) then
        RemoveWeaponFromPed(playerPed, weapon)
    end
end)

RegisterNetEvent('ExeLds:openClothesInv')
AddEventHandler('ExeLds:openClothesInv', function()
    pedGui = true
    TriggerEvent("ExeLds:setInventoryPed")
    ESX.TriggerServerCallback('ExeLds:getCurrentClothes', function(inventoryNumber)
        if tonumber(inventoryNumber) == 0 then
            TriggerEvent('mythic_notify:client:SendAlert', { type = 'inform', text = 'Şu anda giymiş olduğun bir kıyafet bulunmuyor! Lütfen olan bir kıyafetini giy veya yeni bir kıyafet aç.', length = 7000, style = { ['background-color'] = '#FF3333', ['color'] = '#FFFFFF' } })
        else
            TriggerServerEvent("ExeLds:openRoomStorage", "Kiyafet_"..inventoryNumber)
        end
    end)
end)

RegisterNetEvent('ExeLds:wearClothesDirectly')
AddEventHandler('ExeLds:wearClothesDirectly', function(item, info)
    info = json.decode(info)
    ESX.TriggerServerCallback('esx_skin:getPlayerSkin', function(skin)
        local cinsiyet 
        if tonumber(skin.sex) == 0 then
            cinsiyet = "Erkek"
        elseif tonumber(skin.sex) == 1 then
            cinsiyet = "Kadın"
        end
        if cinsiyet == info.Cinsiyet then           
            TriggerServerEvent("ExeLds:saveSkin", item, info)
        else
            TriggerEvent('mythic_notify:client:SendAlert', { type = 'inform', text = 'Bu kıyafet '..info.Cinsiyet..' için tasarlanmış', length = 6000, style = { ['background-color'] = '#CC0000', ['color'] = '#FFFFFF' } })
        end

    end)
end)

RegisterNetEvent('ExeLds:takeoffClothesDirectly')
AddEventHandler('ExeLds:takeoffClothesDirectly', function(value, label)
    ESX.TriggerServerCallback('esx_skin:getPlayerSkin', function(skin)
        local numbers = {}
        local cinsiyet
        if tonumber(skin.sex) == 0 then
            numbers = Config.numbersMan
            cinsiyet = "Erkek"
        else
            numbers = Config.numbersWoman
            cinsiyet = "Kadın"
        end   
        for i, j in pairs(skin) do
            for k, v in pairs(numbers) do
                if  i == k.."_1" or (string.match(i , k) and i == "arms") then
                    if j ~= v.Numara then
                        TriggerServerEvent("ExeLds:saveSkinDirectly", k, v)
                        Citizen.Wait(200)
                    end
                end
            end    
        end  
        if value ~= nil then
            TriggerServerEvent("ExeLds:wearInventoryClothes", value, label)
            TriggerServerEvent('ExeLds:saveInventroyNumber', value)  
        end   
    end)
end)

RegisterNetEvent('ExeLds:wearClothes')
AddEventHandler('ExeLds:wearClothes', function(item, info)
    info = json.decode(info)
    ESX.TriggerServerCallback('esx_skin:getPlayerSkin', function(skin)
        local cinsiyet 
        if tonumber(skin.sex) == 0 then
            cinsiyet = "Erkek"
        elseif tonumber(skin.sex) == 1 then
            cinsiyet = "Kadın"
        end
        if cinsiyet == info.Cinsiyet then           
            if item == "bags" then
                local playerPed = GetPlayerPed(-1)
                RequestAnimDict('missclothing')
                while not HasAnimDictLoaded('missclothing') do
                    Citizen.Wait(1)
                end
                TaskPlayAnim(playerPed, "missclothing", "wait_choice_a_storeclerk", 3.5, -8, -1, 49, 0, 0, 0, 0)
                Citizen.Wait(3000)
                TriggerServerEvent("ExeLds:saveSkin", item, info)
                ClearPedTasks(playerPed)
                TriggerEvent('mythic_notify:client:SendAlert', { type = 'inform', text = 'Çanta giyildi', length = 6000, style = { ['background-color'] = '#0066CC', ['color'] = '#FFFFFF' } })
            elseif item == "tshirt" then
                local playerPed = GetPlayerPed(-1)
                RequestAnimDict('clothingshirt')
                while not HasAnimDictLoaded('clothingshirt') do
                    Citizen.Wait(1)
                end
                TaskPlayAnim(playerPed, "clothingshirt", "check_out_b", 3.5, -8, -1, 49, 0, 0, 0, 0)
                Citizen.Wait(1300)
                TriggerServerEvent("ExeLds:saveSkin", item, info)
                ClearPedTasks(playerPed)
                TriggerEvent('mythic_notify:client:SendAlert', { type = 'inform', text = 'Tişört giyildi', length = 6000, style = { ['background-color'] = '#0066CC', ['color'] = '#FFFFFF' } })
            elseif item == "torso" then
                local playerPed = GetPlayerPed(-1)
                RequestAnimDict('clothingshirt')
                while not HasAnimDictLoaded('clothingshirt') do
                    Citizen.Wait(1)
                end
                TaskPlayAnim(playerPed, "clothingshirt", "check_out_b", 3.5, -8, -1, 49, 0, 0, 0, 0)
                Citizen.Wait(1300)
                TriggerServerEvent("ExeLds:saveSkin", item, info)
                ClearPedTasks(playerPed)
                TriggerEvent('mythic_notify:client:SendAlert', { type = 'inform', text = 'Ceket giyildi', length = 6000, style = { ['background-color'] = '#0066CC', ['color'] = '#FFFFFF' } })
            elseif item == "chain" then
                local playerPed = GetPlayerPed(-1)
                RequestAnimDict('clothingtie')
                while not HasAnimDictLoaded('clothingtie') do
                    Citizen.Wait(1)
                end
                TaskPlayAnim(playerPed, "clothingtie", "try_tie_neutral_a", 3.5, -8, -1, 49, 0, 0, 0, 0)
                Citizen.Wait(5000)
                TriggerServerEvent("ExeLds:saveSkin", item, info)
                ClearPedTasks(playerPed)
                TriggerEvent('mythic_notify:client:SendAlert', { type = 'inform', text = 'Kolye takıldı', length = 6000, style = { ['background-color'] = '#0066CC', ['color'] = '#FFFFFF' } })
            elseif item == "pants" then
                local playerPed = GetPlayerPed(-1)
                RequestAnimDict('clothingtrousers')
                while not HasAnimDictLoaded('clothingtrousers') do
                    Citizen.Wait(1)
                end
                TaskPlayAnim(playerPed, "clothingtrousers", "try_trousers_negative_a", 3.5, -8, -1, 49, 0, 0, 0, 0)
                Citizen.Wait(3000)
                TriggerServerEvent("ExeLds:saveSkin", item, info)
                ClearPedTasks(playerPed)
                TriggerEvent('mythic_notify:client:SendAlert', { type = 'inform', text = 'Pantolon giyildi', length = 6000, style = { ['background-color'] = '#0066CC', ['color'] = '#FFFFFF' } })
            elseif item == "shoes" then
                local playerPed = GetPlayerPed(-1)
                RequestAnimDict('clothingshoes')
                while not HasAnimDictLoaded('clothingshoes') do
                    Citizen.Wait(1)
                end
            
                TaskPlayAnim(playerPed, "clothingshoes", "check_out_a", 3.5, -8, -1, 49, 0, 0, 0, 0)
                Citizen.Wait(1300)
                TriggerServerEvent("ExeLds:saveSkin", item, info)
                ClearPedTasks(playerPed)
                TriggerEvent('mythic_notify:client:SendAlert', { type = 'inform', text = 'Ayakkabi giyildi', length = 6000, style = { ['background-color'] = '#0066CC', ['color'] = '#FFFFFF' } })
            elseif item == "arms" then
                local playerPed = GetPlayerPed(-1)
                RequestAnimDict('switch@michael@closet')
                while not HasAnimDictLoaded('switch@michael@closet') do
                    Citizen.Wait(1)
                end
                TaskPlayAnim(playerPed, "switch@michael@closet", "closet_c", 3.5, -8, -1, 49, 0, 0, 0, 0) 
                Citizen.Wait(1300)
                TriggerServerEvent("ExeLds:saveSkin", item, info)
                ClearPedTasks(playerPed)
                TriggerEvent('mythic_notify:client:SendAlert', { type = 'inform', text = 'Eldiven takıldı', length = 6000, style = { ['background-color'] = '#0066CC', ['color'] = '#FFFFFF' } })
            elseif item == "mask" then
                local playerPed = GetPlayerPed(-1)
                RequestAnimDict('mp_masks@on_foot')
                while not HasAnimDictLoaded('mp_masks@on_foot') do
                    Citizen.Wait(1)
                end
                TaskPlayAnim(playerPed, "mp_masks@on_foot", "put_on_mask", 3.5, -8, -1, 49, 0, 0, 0, 0) 
                Citizen.Wait(1000)
                TriggerServerEvent("ExeLds:saveSkin", item, info)
                ClearPedTasks(playerPed)
                TriggerEvent('mythic_notify:client:SendAlert', { type = 'inform', text = 'Maske takıldı', length = 6000, style = { ['background-color'] = '#0066CC', ['color'] = '#FFFFFF' } })
            elseif item == "glasses" then
                local playerPed = GetPlayerPed(-1)
                RequestAnimDict('clothingspecs')
                while not HasAnimDictLoaded('clothingspecs') do
                    Citizen.Wait(1)
                end
                TaskPlayAnim(playerPed, "clothingspecs", "put_on", 3.5, -8, -1, 49, 0, 0, 0, 0)
                Citizen.Wait(1200)
                TriggerServerEvent("ExeLds:saveSkin", item, info)
                ClearPedTasks(playerPed)
                TriggerEvent('mythic_notify:client:SendAlert', { type = 'inform', text = 'Gözlük takıldı', length = 6000, style = { ['background-color'] = '#0066CC', ['color'] = '#FFFFFF' } })
            elseif item == "bracelets" then
                local playerPed = GetPlayerPed(-1)
                RequestAnimDict('amb@code_human_wander_idles_fat@male@idle_a')
                while not HasAnimDictLoaded('amb@code_human_wander_idles_fat@male@idle_a') do
                    Citizen.Wait(1)
                end
                TaskPlayAnim(playerPed, "amb@code_human_wander_idles_fat@male@idle_a", "idle_a_wristwatch", 3.5, -8, -1, 49, 0, 0, 0, 0)
                Citizen.Wait(1300)
                TriggerServerEvent("ExeLds:saveSkin", item, info)
                ClearPedTasks(playerPed)
                TriggerEvent('mythic_notify:client:SendAlert', { type = 'inform', text = 'Bileklik takıldı', length = 6000, style = { ['background-color'] = '#0066CC', ['color'] = '#FFFFFF' } })
            elseif item == "watches" then
                local playerPed = GetPlayerPed(-1)
                RequestAnimDict('amb@code_human_wander_idles@male@idle_a')
                while not HasAnimDictLoaded('amb@code_human_wander_idles@male@idle_a') do
                    Citizen.Wait(1)
                end
            
                TaskPlayAnim(playerPed, "amb@code_human_wander_idles@male@idle_a", "idle_a_wristwatch", 3.5, -8, -1, 49, 0, 0, 0, 0)
                Citizen.Wait(1300)
                TriggerServerEvent("ExeLds:saveSkin", item, info)
                ClearPedTasks(playerPed)
                TriggerEvent('mythic_notify:client:SendAlert', { type = 'inform', text = 'Saat takıldı', length = 6000, style = { ['background-color'] = '#0066CC', ['color'] = '#FFFFFF' } })
            elseif item == "helmet" then
                local playerPed = GetPlayerPed(-1)
                RequestAnimDict('missheistdockssetup1hardhat@')
                while not HasAnimDictLoaded('missheistdockssetup1hardhat@') do
                    Citizen.Wait(1)
                end
                TaskPlayAnim(playerPed, "missheistdockssetup1hardhat@", "put_on_hat", 3.5, -8, -1, 49, 0, 0, 0, 0) 
                Citizen.Wait(800)
                TriggerServerEvent("ExeLds:saveSkin", item, info)
                Citizen.Wait(400)
                ClearPedTasks(playerPed)
                TriggerEvent('mythic_notify:client:SendAlert', { type = 'inform', text = 'Şapka takıldı', length = 6000, style = { ['background-color'] = '#0066CC', ['color'] = '#FFFFFF' } })
            elseif item == "ears" then
                local playerPed = GetPlayerPed(-1)
                RequestAnimDict('mini@ears_defenders')
                while not HasAnimDictLoaded('mini@ears_defenders') do
                    Citizen.Wait(1)
                end
                TaskPlayAnim(playerPed, "mini@ears_defenders", "takeoff_earsdefenders_idle", 3.5, -8, -1, 49, 0, 0, 0, 0)
                Citizen.Wait(1300)
                TriggerServerEvent("ExeLds:saveSkin", item, info)
                ClearPedTasks(playerPed)
                TriggerEvent('mythic_notify:client:SendAlert', { type = 'inform', text = 'Küpe takıldı', length = 6000, style = { ['background-color'] = '#0066CC', ['color'] = '#FFFFFF' } })
            elseif item == "bproof" then
                local playerPed = GetPlayerPed(-1)
                RequestAnimDict('clothingtie')
                while not HasAnimDictLoaded('clothingtie') do
                    Citizen.Wait(1)
                end
                TaskPlayAnim(playerPed, "clothingtie", "try_tie_neutral_a", 3.5, -8, -1, 49, 0, 0, 0, 0)
                Citizen.Wait(1300)
                TriggerServerEvent("ExeLds:saveSkin", item, info)
                ClearPedTasks(playerPed)
                TriggerEvent('mythic_notify:client:SendAlert', { type = 'inform', text = 'Çelik yelek kıyafeti giyildi', length = 6000, style = { ['background-color'] = '#0066CC', ['color'] = '#FFFFFF' } })            
            elseif item == "decals" then
                local playerPed = GetPlayerPed(-1)
                RequestAnimDict('clothingshirt')
                while not HasAnimDictLoaded('clothingshirt') do
                    Citizen.Wait(1)
                end
                TaskPlayAnim(playerPed, "clothingshirt", "check_out_b", 3.5, -8, -1, 49, 0, 0, 0, 0)
                Citizen.Wait(1300)
                TriggerServerEvent("ExeLds:saveSkin", item, info)
                ClearPedTasks(playerPed)
                TriggerEvent('mythic_notify:client:SendAlert', { type = 'inform', text = 'Çıkartma takıldı', length = 6000, style = { ['background-color'] = '#0066CC', ['color'] = '#FFFFFF' } })
            
            end
        else
                TriggerEvent('mythic_notify:client:SendAlert', { type = 'inform', text = 'Bu kıyafet '..info.Cinsiyet..' için tasarlanmış', length = 6000, style = { ['background-color'] = '#CC0000', ['color'] = '#FFFFFF' } })
        end

    end)
end)

RegisterNetEvent('ExeLds:takeOffClothes')
AddEventHandler('ExeLds:takeOffClothes', function(item, info)
    info = json.decode(info)
    ESX.TriggerServerCallback('esx_skin:getPlayerSkin', function(skin)
        local numbers = {}
        if tonumber(skin.sex) == 0 then
            numbers = Config.numbersMan
        else
            numbers = Config.numbersWoman
        end
        
        local cinsiyet 
        if tonumber(skin.sex) == 0 then
            cinsiyet = "Erkek"
        elseif tonumber(skin.sex) == 1 then
            cinsiyet = "Kadın"
        end
        if cinsiyet == info.Cinsiyet then          
            if item == "bags" then
                local playerPed = GetPlayerPed(-1)
        
                RequestAnimDict('missclothing')
                while not HasAnimDictLoaded('missclothing') do
                    Citizen.Wait(1)
                end
                 
                TaskPlayAnim(playerPed, "missclothing", "wait_choice_a_storeclerk", 3.5, -8, -1, 49, 0, 0, 0, 0) 
                Citizen.Wait(3000)
                TriggerServerEvent("ExeLds:saveSkin", item, info, numbers)
                ClearPedTasks(playerPed)
                TriggerEvent('mythic_notify:client:SendAlert', { type = 'inform', text = 'Çanta çıkarıldı', length = 6000, style = { ['background-color'] = '#CC0000', ['color'] = '#FFFFFF' } })
        
            elseif item == "tshirt" then
                local playerPed = GetPlayerPed(-1)
                RequestAnimDict('clothingshirt')
                while not HasAnimDictLoaded('clothingshirt') do
                    Citizen.Wait(1)
                end
        
                TaskPlayAnim(playerPed, "clothingshirt", "check_out_b", 3.5, -8, -1, 49, 0, 0, 0, 0) 
                Citizen.Wait(1300)
                TriggerServerEvent("ExeLds:saveSkin","arms", info, numbers)
                Citizen.Wait(200)
                TriggerServerEvent("ExeLds:saveSkin", item, info, numbers)
                ClearPedTasks(playerPed)
                TriggerEvent('mythic_notify:client:SendAlert', { type = 'inform', text = 'Tişört çıkarıldı', length = 6000, style = { ['background-color'] = '#CC0000', ['color'] = '#FFFFFF' } })
        
            elseif item == "torso" then
                local playerPed = GetPlayerPed(-1)
                RequestAnimDict('clothingshirt')
                while not HasAnimDictLoaded('clothingshirt') do
                    Citizen.Wait(1)
                end
        
                TaskPlayAnim(playerPed, "clothingshirt", "check_out_b", 3.5, -8, -1, 49, 0, 0, 0, 0) 
                Citizen.Wait(1300)
                TriggerServerEvent("ExeLds:saveSkin", item, info, numbers)
                ClearPedTasks(playerPed)
                TriggerEvent('mythic_notify:client:SendAlert', { type = 'inform', text = 'Ceket çıkarıldı', length = 6000, style = { ['background-color'] = '#CC0000', ['color'] = '#FFFFFF' } })
                
            elseif item == "chain" then
                local playerPed = GetPlayerPed(-1)
        
                RequestAnimDict('clothingtie')
                while not HasAnimDictLoaded('clothingtie') do
                    Citizen.Wait(1)
                end
        
                TaskPlayAnim(playerPed, "clothingtie", "try_tie_neutral_a", 3.5, -8, -1, 49, 0, 0, 0, 0) 
                Citizen.Wait(5000)
                TriggerServerEvent("ExeLds:saveSkin", item, info, numbers)
                ClearPedTasks(playerPed)
                TriggerEvent('mythic_notify:client:SendAlert', { type = 'inform', text = 'Kolye çıkarıldı', length = 6000, style = { ['background-color'] = '#CC0000', ['color'] = '#FFFFFF' } })
        
            elseif item == "pants" then
                local playerPed = GetPlayerPed(-1)
        
                RequestAnimDict('clothingtrousers')
                while not HasAnimDictLoaded('clothingtrousers') do
                    Citizen.Wait(1)
                end
        
                TaskPlayAnim(playerPed, "clothingtrousers", "try_trousers_negative_a", 3.5, -8, -1, 49, 0, 0, 0, 0) 
                Citizen.Wait(3000)
                TriggerServerEvent("ExeLds:saveSkin", item, info, numbers)
                ClearPedTasks(playerPed)
                TriggerEvent('mythic_notify:client:SendAlert', { type = 'inform', text = 'Kolye çıkarıldı', length = 6000, style = { ['background-color'] = '#CC0000', ['color'] = '#FFFFFF' } })
               
            elseif item == "shoes" then
                local playerPed = GetPlayerPed(-1)
        
                RequestAnimDict('clothingshoes')
                while not HasAnimDictLoaded('clothingshoes') do
                    Citizen.Wait(1)
                end
            
                TaskPlayAnim(playerPed, "clothingshoes", "check_out_a", 3.5, -8, -1, 49, 0, 0, 0, 0) 
                Citizen.Wait(1300)
                TriggerServerEvent("ExeLds:saveSkin", item, info, numbers)
                ClearPedTasks(playerPed)
                TriggerEvent('mythic_notify:client:SendAlert', { type = 'inform', text = 'Ayakkabı çıkarıldı', length = 6000, style = { ['background-color'] = '#CC0000', ['color'] = '#FFFFFF' } })
        
            elseif item == "arms" then
                local playerPed = GetPlayerPed(-1)
        
                RequestAnimDict('switch@michael@closet')
                while not HasAnimDictLoaded('switch@michael@closet') do
                    Citizen.Wait(1)
                end
             
                TaskPlayAnim(playerPed, "switch@michael@closet", "closet_b", 3.5, -8, -1, 49, 0, 0, 0, 0)
                Citizen.Wait(1300)
                TriggerServerEvent("ExeLds:saveSkin", item, info, numbers)
                ClearPedTasks(playerPed)
                TriggerEvent('mythic_notify:client:SendAlert', { type = 'inform', text = 'Eldiven çıkarıldı', length = 6000, style = { ['background-color'] = '#CC0000', ['color'] = '#FFFFFF' } })
                
            elseif item == "mask" then
                local playerPed = GetPlayerPed(-1)
        
                RequestAnimDict('misscommon@std_take_off_masks')
                while not HasAnimDictLoaded('misscommon@std_take_off_masks') do
                    Citizen.Wait(1)
                end
        
                TaskPlayAnim(playerPed, "misscommon@std_take_off_masks", "take_off_mask_rps", 3.5, -8, -1, 49, 0, 0, 0, 0)
                Citizen.Wait(500)
                TriggerServerEvent("ExeLds:saveSkin", item, info, numbers)
                ClearPedTasks(playerPed)
                TriggerEvent('mythic_notify:client:SendAlert', { type = 'inform', text = 'Maske çıkarıldı', length = 6000, style = { ['background-color'] = '#CC0000', ['color'] = '#FFFFFF' } })
        
            elseif item == "glasses" then
                local playerPed = GetPlayerPed(-1)
        
                RequestAnimDict('clothingspecs')
                while not HasAnimDictLoaded('clothingspecs') do
                    Citizen.Wait(1)
                end
        
                TaskPlayAnim(playerPed, "clothingspecs", "take_off", 3.5, -8, -1, 49, 0, 0, 0, 0)
                Citizen.Wait(4000)
                TriggerServerEvent("ExeLds:saveSkin", item, info, numbers)
                ClearPedTasks(playerPed)
                TriggerEvent('mythic_notify:client:SendAlert', { type = 'inform', text = 'Gözlük çıkarıldı', length = 6000, style = { ['background-color'] = '#CC0000', ['color'] = '#FFFFFF' } })
        
            elseif item == "bracelets" then
                local playerPed = GetPlayerPed(-1)
        
                RequestAnimDict('amb@code_human_wander_idles_fat@male@idle_a')
                while not HasAnimDictLoaded('amb@code_human_wander_idles_fat@male@idle_a') do
                    Citizen.Wait(1)
                end
        
                TaskPlayAnim(playerPed, "amb@code_human_wander_idles_fat@male@idle_a", "idle_a_wristwatch", 3.5, -8, -1, 49, 0, 0, 0, 0) 
                Citizen.Wait(1300)
                TriggerServerEvent("ExeLds:saveSkin", item, info, numbers)
                ClearPedTasks(playerPed)
                TriggerEvent('mythic_notify:client:SendAlert', { type = 'inform', text = 'Bileklik çıkarıldı', length = 6000, style = { ['background-color'] = '#CC0000', ['color'] = '#FFFFFF' } })
                
            elseif item == "watches" then
                local playerPed = GetPlayerPed(-1)
        
                RequestAnimDict('amb@code_human_wander_idles@male@idle_a')
                while not HasAnimDictLoaded('amb@code_human_wander_idles@male@idle_a') do
                    Citizen.Wait(1)
                end
            
                TaskPlayAnim(playerPed, "amb@code_human_wander_idles@male@idle_a", "idle_a_wristwatch", 3.5, -8, -1, 49, 0, 0, 0, 0)          
                Citizen.Wait(1300)
                TriggerServerEvent("ExeLds:saveSkin", item, info, numbers)
                ClearPedTasks(playerPed)
                TriggerEvent('mythic_notify:client:SendAlert', { type = 'inform', text = 'Saat çıkarıldı', length = 6000, style = { ['background-color'] = '#CC0000', ['color'] = '#FFFFFF' } })
                
            elseif item == "helmet" then
                local playerPed = GetPlayerPed(-1)
        
                RequestAnimDict('veh@common@fp_helmet@')
                while not HasAnimDictLoaded('veh@common@fp_helmet@') do
                    Citizen.Wait(1)
                end
        
                TaskPlayAnim(playerPed, "veh@common@fp_helmet@", "take_off_helmet_stand", 3.5, -8, -1, 49, 0, 0, 0, 0)
                Citizen.Wait(1300)
                TriggerServerEvent("ExeLds:saveSkin", item, info, numbers)
                ClearPedTasks(playerPed)
                TriggerEvent('mythic_notify:client:SendAlert', { type = 'inform', text = 'Şapka çıkarıldı', length = 6000, style = { ['background-color'] = '#CC0000', ['color'] = '#FFFFFF' } })
                
            elseif item == "ears" then
                local playerPed = GetPlayerPed(-1)
        
                RequestAnimDict('mini@ears_defenders')
                while not HasAnimDictLoaded('mini@ears_defenders') do
                    Citizen.Wait(1)
                end
        
                TaskPlayAnim(playerPed, "mini@ears_defenders", "takeoff_earsdefenders_idle", 3.5, -8, -1, 49, 0, 0, 0, 0)
                Citizen.Wait(1300)
                TriggerServerEvent("ExeLds:saveSkin", item, info, numbers)
                ClearPedTasks(playerPed)
                QTriggerEvent('mythic_notify:client:SendAlert', { type = 'inform', text = 'Küpe çıkarıldı', length = 6000, style = { ['background-color'] = '#CC0000', ['color'] = '#FFFFFF' } })
            elseif item == "bproof" then     
                local playerPed = GetPlayerPed(-1)
                RequestAnimDict('clothingshirt')
                while not HasAnimDictLoaded('clothingshirt') do
                    Citizen.Wait(1)
                end
        
                TaskPlayAnim(playerPed, "clothingshirt", "check_out_b", 3.5, -8, -1, 49, 0, 0, 0, 0) 
                Citizen.Wait(1300)
                TriggerServerEvent("ExeLds:saveSkin", item, info, numbers)
                ClearPedTasks(playerPed)
                TriggerEvent('mythic_notify:client:SendAlert', { type = 'inform', text = 'Çelik yelek kıyafeti çıkarıldı', length = 6000, style = { ['background-color'] = '#CC0000', ['color'] = '#FFFFFF' } })
        
                
            elseif item == "decals" then 
                local playerPed = GetPlayerPed(-1)
                RequestAnimDict('clothingshirt')
                while not HasAnimDictLoaded('clothingshirt') do
                    Citizen.Wait(1)
                end
        
                TaskPlayAnim(playerPed, "clothingshirt", "check_out_b", 3.5, -8, -1, 49, 0, 0, 0, 0) 
                Citizen.Wait(1300)
                TriggerServerEvent("ExeLds:saveSkin", item, info, numbers)
                ClearPedTasks(playerPed)
                TriggerEvent('mythic_notify:client:SendAlert', { type = 'inform', text = 'Çıkartma çıkarıldı', length = 6000, style = { ['background-color'] = '#CC0000', ['color'] = '#FFFFFF' } })
        
                
            end
        end
        
    end)
end)


--[[ Citizen.CreateThread(function()
    Citizen.Wait(1000)
    while true do
    local ped = GetPlayerPed(-1)
    local pos = GetEntityCoords(ped)
    local distance = GetDistanceBetweenCoords(pos.x,pos.y,pos.z,953.09790039063,-976.72509765625,39.499855041504,false)
        if distance <= 1.2 then
            DrawText3Ds(953.09790039063,-976.72509765625,39.499855041504, "[E] - Open Mechanic Shop")
            if IsControlJustReleased(0, 86) and PlayerData.job.name == 'tuner' then
                Citizen.Wait(1)
                
                TriggerEvent("server-inventory-open", "27", "Shop");	
            
            end
        
        end
        Citizen.Wait(5)
    end
end)
 ]]
--[[ Citizen.CreateThread(function()
    Citizen.Wait(1000)
    while true do
    local ped = GetPlayerPed(-1)
    local pos = GetEntityCoords(ped)
    local distance = GetDistanceBetweenCoords(pos.x,pos.y,pos.z,-25.61,-1095.09,26.37,false)
        if distance <= 1.1 then
            DrawText3Ds(-25.61,-1095.01,26.37, "~b~E~w~ - To Grab A Snack.")
            if IsControlJustReleased(0, 86) then
                Citizen.Wait(1)
                TriggerEvent("server-inventory-open", "700", "Shop");
            end

        end
        Citizen.Wait(5)
    end
end) ]]

--[[ Citizen.CreateThread(function()
    Citizen.Wait(1000)
    while true do
    local ped = GetPlayerPed(-1)
    local pos = GetEntityCoords(ped)
    local distance = GetDistanceBetweenCoords(pos.x,pos.y,pos.z,94.137763977051,-1507.0953369141,29.256471633911,false)
        if distance <= 1.2 then
            DrawText3Ds(94.137763977051,-1507.0953369141,29.256471633911, "[E] - Open Timmys Flowers")
            if IsControlJustReleased(0, 86) then
                Citizen.Wait(1)

                TriggerEvent("server-inventory-open", "37", "Shop");	
            end
        
        end
        Citizen.Wait(5)
    end
end) ]]

