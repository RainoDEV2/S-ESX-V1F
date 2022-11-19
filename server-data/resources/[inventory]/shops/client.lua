ESX = nil

Citizen.CreateThread(function()
	while ESX == nil do
		TriggerEvent('esx:getSharedObject', function(obj) ESX = obj end)
		Citizen.Wait(0)
	end

	while ESX.GetPlayerData().job == nil do
		Citizen.Wait(100)
	end

	PlayerLoaded = true
	ESX.PlayerData = ESX.GetPlayerData()
end)


RegisterNetEvent('esx:setJob')
AddEventHandler('esx:setJob', function(job)
	ESX.PlayerData.job = job
end)


local vendingMachines = {
	[1] = 690372739,
	[2] = 1114264700,
	[3] = 690372739, 
	[4] = -2015792788,
	[5] = -1318035530,
	[6] = 73774428, 
	[7] = -1317235795, 
	[8] = -654402915,
}

local tool_shops = {
	{ ['x'] = 63.56403, ['y'] = -1728.52, ['z'] = 29.643 },
	{ ['x'] = 2749.2309570313, ['y'] = 3472.3308105469, ['z'] = 55.679393768311 },
}

local meth_spots = {
	{ ['x'] = 1786.5, ['y'] = 2580.77, ['z'] = 45.71 },
	{ ['x'] = 1786.36, ['y'] = 2568.39, ['z'] = 45.71 },
	{ ['x'] = 1765.55, ['y'] = 2586.69, ['z'] = 45.71 },
	{ ['x'] = 1786.55, ['y'] = 2568.39, ['z'] = 49.71 },
	{ ['x'] = 1765.49, ['y'] = 2586.77, ['z'] = 49.73 },
}



local polved = {
	{ ['x'] = 436.144, ['y'] = -985.824, ['z'] = 30.6896 },           
}                                                                              

local twentyfourseven_shops = {
	{ ['x'] = 1961.1140136719, ['y'] = 3741.4494628906, ['z'] = 32.34375 },
	{ ['x'] = 1392.4129638672, ['y'] = 3604.47265625, ['z'] = 34.980926513672 },
	{ ['x'] = 546.98962402344, ['y'] = 2670.3176269531, ['z'] = 42.156539916992 },
	{ ['x'] = 2556.2534179688, ['y'] = 382.876953125, ['z'] = 108.62294769287 },
	{ ['x'] = -1821.9542236328, ['y'] = 792.40191650391, ['z'] = 138.13920593262 },
	{ ['x'] = -1223.6690673828, ['y'] = -906.67517089844, ['z'] = 12.326356887817 },
	{ ['x'] = -708.19256591797, ['y'] = -914.65264892578, ['z'] = 19.215591430664 },
	{ ['x'] = 26.419162750244, ['y'] = -1347.5804443359, ['z'] = 29.497024536133 },
	{ ['x'] = -48.6948, ['y'] = -1757.35, ['z'] = 29.420 },                                
	{ ['x'] = 1163.334, ['y'] = -324.107, ['z'] = 69.205 },     
	{ ['x'] = 374.1074, ['y'] = 325.9482, ['z'] = 103.56 },     
	{ ['x'] = 2678.770, ['y'] = 3280.773, ['z'] = 55.241 },   
	{ ['x'] = 1698.510, ['y'] = 4924.711, ['z'] = 42.063 },     
	{ ['x'] = 1729.291, ['y'] = 6414.456, ['z'] = 35.037 }, 
	{ ['x'] = -3241.80, ['y'] = 1001.58, ['z'] = 12.83 },  
	{ ['x'] = 1136.03, ['y'] = -982.23, ['z'] = 46.415 },
	{ ['x'] = 301.8022,['y'] = -274.671,['z'] = 54.167 }, -- paletopd          301.8022, -274.671, 54.167
}



local weashop_locations = {
	{entering = {812.0883, -2157.15, 28.3}, inside = {812.0883, -2157.15, 28.3}, outside = {812.0883, -2157.15, 28.3},delay = 900},
	{entering = { 1692.54, 3758.13, 33.71}, inside = { 1692.54, 3758.13, 33.71}, outside = { 1692.54, 3758.13, 33.71},delay = 600},
	{entering = {252.915,-48.186,68.241}, inside = {252.915,-48.186,68.241}, outside = {252.915,-48.186,68.241},delay = 600},
	{entering = {844.352,-1033.517,27.094}, inside = {844.352,-1033.517,27.194}, outside = {844.352,-1033.517,27.194},delay = 780},
	{entering = {-331.487,6082.348,30.354}, inside = {-331.487,6082.348,30.454}, outside = {-331.487,6082.348,30.454},delay = 600},
	{entering = {-664.268,-935.479,20.729}, inside = {-664.268,-935.479,20.829}, outside = {-664.268,-935.479,20.829},delay = 600},
	{entering = {-1305.427,-392.428,35.595}, inside = {-1305.427,-392.428,35.695}, outside = {-1305.427,-392.428,35.695},delay = 600},
	{entering = {-1119.1, 2696.92, 17.56}, inside = {-1119.1, 2696.92, 17.56}, outside = {-1119.1, 2696.92, 17.56},delay = 600},
	{entering = {2569.978,294.472,107.634}, inside = {2569.978,294.472,107.734}, outside = {2569.978,294.472,107.734},delay = 800},
	{entering = {-3172.584,1085.858,19.738}, inside = {-3172.584,1085.858,19.838}, outside = {-3172.584,1085.858,19.838},delay = 600},
	{entering = {20.0430,-1106.469,28.697}, inside = {20.0430,-1106.469,28.797}, outside = {20.0430,-1106.469,28.797},delay = 600},
}


local weashop_blips = {}

RegisterNetEvent("shop:createMeth")
AddEventHandler("shop:createMeth", function()
	methlocation = cellcoords[math.random(#cellcoords)]
end)


--[[RegisterNetEvent("shop:isNearPed")
AddEventHandler("shop:isNearPed", function()
	local pedpos = GetEntityCoords(PlayerPedId())
	local found = false
	for k,v in ipairs(twentyfourseven_shops)do
		local dist = #(vector3(v.x, v.y, v.z) - vector3(pedpos.x,pedpos.y,pedpos.z))
		if(dist < 10 and not found)then
			found = true
			TriggerServerEvent("exploiter", "User sold to a shop keeper at store.")
		end
	end
end)]]

local active = false
local activeBlips = {}

RegisterNetEvent('ExeLds:silahciblip')
AddEventHandler('ExeLds:silahciblip', function()

	if active then
		for k, existingBlip in pairs(activeBlips) do
			RemoveBlip(existingBlip)
		end
		TriggerEvent('mythic_notify:client:SendAlert', { type = 'inform', text = 'Silahçı blipleri silindi.', length = 3000, style = { ['background-color'] = '#990000', ['color'] = '#FFFFFF' } })
		active = false
	else	
		for i=1, #Config.Shops, 1 do

			local blip = AddBlipForCoord(Config.Shops[i].x, Config.Shops[i].y, Config.Shops[i].z)
	
			SetBlipSprite (blip, 110)
			SetBlipScale  (blip, 0.6)
			SetBlipColour (blip, 17)
			SetBlipAsShortRange(blip, true)
	
			BeginTextCommandSetBlipName("STRING")
			AddTextComponentString('Silahçı')
			EndTextCommandSetBlipName(blip)
			table.insert(activeBlips, blip)
	
		end
		TriggerEvent('mythic_notify:client:SendAlert', { type = 'inform', text = 'Silahçı blipleri aktif edildi.', length = 3000, style = { ['background-color'] = '#009900', ['color'] = '#000000' } })
		active = true
 	end

end) 

function setShopBlip()

	--[[ local blip = AddBlipForCoord(-1218.6767578125, -1516.858764648, 4.3803339004517)
	SetBlipSprite(blip, 427)
	SetBlipScale(blip, 0.6)
	SetBlipColour(blip, 2)
	SetBlipAsShortRange(blip, true)
	BeginTextCommandSetBlipName("STRING")
	AddTextComponentString("Surf and Dive Shop")
	EndTextCommandSetBlipName(blip) ]]

	for station,pos in pairs(weashop_locations) do
		local loc = pos
		pos = pos.entering
		--[[ local blip = AddBlipForCoord(pos[1],pos[2],pos[3])
		-- 60 58 137
		SetBlipSprite(blip,110)
		SetBlipScale(blip, 0.6)
		SetBlipColour(blip, 17)
		BeginTextCommandSetBlipName("STRING")
		AddTextComponentString('Ammunation')
		EndTextCommandSetBlipName(blip)
		SetBlipAsShortRange(blip,true)
		SetBlipAsMissionCreatorBlip(blip,true) ]]
		weashop_blips[#weashop_blips+1]= {blip = blip, pos = loc}
	end

	--[[for k,v in ipairs(twentyfourseven_shops)do
		local blip = AddBlipForCoord(v.x, v.y, v.z)
		SetBlipSprite(blip, 52)
		SetBlipScale(blip, 0.6)
		SetBlipColour(blip, 2)
		SetBlipAsShortRange(blip, true)
		BeginTextCommandSetBlipName("STRING")
		AddTextComponentString("Shop")
		EndTextCommandSetBlipName(blip)
	end]]

	for k,v in ipairs(polved)do
		local blip = AddBlipForCoord(v.x, v.y, v.z)
		SetBlipSprite(blip, 52)
		SetBlipScale(blip, 0.0)
		SetBlipColour(blip, 2)
		SetBlipAsShortRange(blip, true)
		BeginTextCommandSetBlipName("STRING")
		AddTextComponentString("Shop")
		EndTextCommandSetBlipName(blip)
	end

	for k,v in ipairs(tool_shops)do
		local blip = AddBlipForCoord(v.x, v.y, v.z)
		SetBlipSprite(blip, 544)
		SetBlipScale(blip, 0.8)
		SetBlipColour(blip, 43)
		SetBlipAsShortRange(blip, true)
		BeginTextCommandSetBlipName("STRING")
		AddTextComponentString("Hırdavatçı")
		EndTextCommandSetBlipName(blip)
	end	
end
function DisplayHelpText(str)
	SetTextComponentFormat("STRING")
	AddTextComponentString(str)
	DisplayHelpTextFromStringLabel(0, 0, 1, -1)
end

RegisterNetEvent("sametk:mekanikcraft")
AddEventHandler("sametk:mekanikcraft", function()
	mekanikcraftac()
end)

RegisterNetEvent("sametk:burgershopac")
AddEventHandler("sametk:burgershopac", function()
	burgershopac()
end)


RegisterNetEvent("sametk:kahveac")
AddEventHandler("sametk:kahveac", function()
	kahvedukkanac()
end)

RegisterNetEvent("sametk:muroke")
AddEventHandler("sametk:muroke", function()
	ananananya()
end)



RegisterNetEvent("sametk:pddepoac")
AddEventHandler("sametk:pddepoac", function()
	pddepoac()
end)

RegisterNetEvent("sametk:copcucraft")
AddEventHandler("sametk:copcucraft", function()
	copcucraftac()
end)

RegisterNetEvent("sametk:balikciac")
AddEventHandler("sametk:balikciac", function()
	balikmarketac()
end)

RegisterNetEvent("sametk:marketac")
AddEventHandler("sametk:marketac", function()
	marketci()
end)

RegisterNetEvent("sametk:burgerstahs")
AddEventHandler("sametk:burgerstahs", function()
	burgerstashac()
end)

RegisterNetEvent("sametk:belediyecik")
AddEventHandler("sametk:belediyecik", function()
	belediyeshopac()
end)

RegisterNetEvent("sametk:sametkcraftcik")
AddEventHandler("sametk:sametkcraftcik", function()
	sametkcraftcik()
end)

RegisterNetEvent("sametk:espaldacraft")
AddEventHandler("sametk:espaldacraft", function()
	espaldacraft()
end)

RegisterNetEvent("sametk:illegalcraft1")
AddEventHandler("sametk:illegalcraft1", function()
	illegalcraft1()
end)

RegisterNetEvent("sametk:illegalcraft2")
AddEventHandler("sametk:illegalcraft2", function()
	illegalcraft2()
end)

RegisterNetEvent("sametk:illegalcraft3")
AddEventHandler("sametk:illegalcraft3", function()
	illegalcraft3()
end)

RegisterNetEvent("sametk:illegalcraft4")
AddEventHandler("sametk:illegalcraft4", function()
	illegalcraft4()
end)

RegisterNetEvent("sametk:illegalcraft5")
AddEventHandler("sametk:illegalcraft5", function()
	illegalcraft5()
end)

RegisterNetEvent("sametk:illegalcraft6")
AddEventHandler("sametk:illegalcraft6", function()
	illegalcraft6()
end)

RegisterNetEvent("sametk:illegalcraft7")
AddEventHandler("sametk:illegalcraft7", function()
	illegalcraft7()
end)

RegisterNetEvent("sametk:illegalcraft8")
AddEventHandler("sametk:illegalcraft8", function()
	illegalcraft8()
end)

RegisterNetEvent("sametk:illegalcraft9")
AddEventHandler("sametk:illegalcraft9", function()
	illegalcraft9()
end)

RegisterNetEvent("sametk:illegalcraft10")
AddEventHandler("sametk:illegalcraft10", function()
	illegalcraft10()
end)

RegisterNetEvent("sametk:illegalcraft11")
AddEventHandler("sametk:illegalcraft11", function()
	illegalcraft11()
end)

RegisterNetEvent("sametk:illegalcraft12")
AddEventHandler("sametk:illegalcraft12", function()
	illegalcraft12()
end)

RegisterNetEvent("sametk:illegalcraft13")
AddEventHandler("sametk:illegalcraft13", function()
	illegalcraft13()
end)

RegisterNetEvent("sametk:illegalcraft14")
AddEventHandler("sametk:illegalcraft14", function()
	illegalcraft14()
end)

RegisterNetEvent("sametk:illegalcraft15")
AddEventHandler("sametk:illegalcraft15", function()
	illegalcraft15()
end)

RegisterNetEvent("sametk:illegalcraft16")
AddEventHandler("sametk:illegalcraft16", function()
	illegalcraft16()
end)

RegisterNetEvent("sametk:illegalcraft19")
AddEventHandler("sametk:illegalcraft19", function()
	illegalcraft19()
end)

RegisterNetEvent("sametk:avshopac")
AddEventHandler("sametk:avshopac", function()
	avcilikshop()
end)

RegisterNetEvent("sametk:silahciac")
AddEventHandler("sametk:silahciac", function()
	silahciac()
end)

RegisterNetEvent("sametk:hapismarket")
AddEventHandler("sametk:hapismarket", function()
	hapismarket()
end)

function hapismarket()
	TriggerEvent("server-inventory-open", "658", "Shop")
end


function avcilikshop()
	TriggerEvent("server-inventory-open", "657", "Shop")
end

function illegalcraft19()
	TriggerEvent("server-inventory-open", "621", "Craft")
end

function illegalcraft16()
	TriggerEvent("server-inventory-open", "652", "Craft")
end

function illegalcraft15()
	TriggerEvent('mythic_notify:client:SendAlert', { type = 'inform', text = 'Sen kimsin aq, büyüde gel!!', length = 3000, style = { ['background-color'] = '#990000', ['color'] = '#FFFFFF' } })
	--TriggerEvent("server-inventory-open", "651", "Craft")
end

function illegalcraft14()
	TriggerEvent("server-inventory-open", "651", "Craft")
end

function illegalcraft13()
	TriggerEvent("server-inventory-open", "650", "Craft")
end

function illegalcraft12()
	TriggerEvent("server-inventory-open", "649", "Craft")
end

function illegalcraft11()
	TriggerEvent("server-inventory-open", "648", "Craft")
end

function illegalcraft10()
	TriggerEvent("server-inventory-open", "647", "Craft")
end

function illegalcraft9()
	TriggerEvent("server-inventory-open", "646", "Craft")
end

function illegalcraft8()
	TriggerEvent("server-inventory-open", "645", "Craft")
end

function illegalcraft7()
	TriggerEvent("server-inventory-open", "644", "Craft")
end

function illegalcraft6()
	TriggerEvent("server-inventory-open", "643", "Craft")
end

function illegalcraft5()
	TriggerEvent("server-inventory-open", "642", "Craft")
end

function illegalcraft4()
	TriggerEvent("server-inventory-open", "641", "Craft")
end

function illegalcraft3()
	TriggerEvent("server-inventory-open", "640", "Craft")
end

function illegalcraft2()
	TriggerEvent("server-inventory-open", "639", "Craft")
end

function illegalcraft1()
	TriggerEvent("server-inventory-open", "638", "Craft")
end

function espaldacraft()
	TriggerEvent("server-inventory-open", "637", "Craft")
end

function sametkcraftcik()
	TriggerEvent("server-inventory-open", "636", "Craft")
end

function belediyeshopac()
	TriggerEvent("server-inventory-open", "635", "Shop")
end

function burgerstashac()
	TriggerEvent("server-inventory-open", "1", "BurgerStash")
end

function copcucraftac()
	TriggerEvent("server-inventory-open", "633", "Craft")
end

function pddepoac()
	if ESX.PlayerData.job.name  == 'police' then
		TriggerEvent("server-inventory-open", "10", "Shop")
	end
end

function silahciac()
	TriggerEvent("server-inventory-open", "5", "Shop")
end


function ananananya()
	TriggerEvent("server-inventory-open", "4", "Shop")
end

function kahvedukkanac()
	TriggerEvent("server-inventory-open", "600", "Shop")
end

function mekanikcraftac()
	if ESX.PlayerData.job.name  == 'mechanic' then
		TriggerEvent("server-inventory-open", "631", "Craft")
	end
end

function burgershopac()
	if ESX.PlayerData.job.name  == 'bufeci' then
		TriggerEvent("server-inventory-open", "632", "Shop")
	end
end

function marketci()
	TriggerEvent("server-inventory-open", "2", "Shop")
end

function balikmarketac()
	TriggerEvent("server-inventory-open", "634", "Shop")
end

Citizen.CreateThread(function()
	
	setShopBlip()

	while true do

		local found = false
		Citizen.Wait(1)
		local dstscan = 3.0
		local pos = GetEntityCoords(PlayerPedId(), false)

		--for i,b in ipairs(weashop_blips) do
			--local scanned = #(vector3(b.pos.entering[1],b.pos.entering[2],b.pos.entering[3]) - pos)
			--if scanned < dstscan then
			--	dstscan = scanned
			--end
			--if dstscan < 2.5 then
				--DrawMarker(27,b.pos.entering[1],b.pos.entering[2],b.pos.entering[3],0,0,0,0,0,0,1.001,1.0001,0.5001,0,155,255,50,0,0,0,0)
				--if IsPedInAnyVehicle(PlayerPedId(), true) == false and dstscan < 3.0 then
					--DisplayHelpText("~g~silahcı ~INPUT_CONTEXT~ Bas")
					--if IsControlJustPressed(1, 38)  then	
						--TriggerServerEvent("bank:cashbal")
						--TriggerEvent("server-inventory-open", "5", "Shop");	
						--Wait(1000)
				   -- end
				--end
			--end
		--end

		--POLİS HAPİSANE
		--[[ if(Vdist(1773.92, 2517.05, 45.83, pos.x, pos.y, pos.z) < 20.0)then
			found = true
			DrawMarker(27, 1773.92, 2517.05, 45.83 - 1, 0, 0, 0, 0, 0, 0, 1.0001, 1.0001, 1.5001, 0, 25, 165, 165, 0,0, 0,0)
			if(Vdist(1773.92, 2517.05, 45.83, pos.x, pos.y, pos.z) < 2.0)then
				local job = exports["isPed"]:isPed("myjob")
				DisplayHelpText("Press ~INPUT_CONTEXT~ to open the ~g~shop.")
				if IsControlJustPressed(1, 38) and job == "police" then	
					TriggerServerEvent("bank:cashbal")
					TriggerEvent("server-inventory-open", "10", "Shop");	
					Wait(1000)
					--TriggerEvent("openSubMenu","shop")
			    end
			end
		end ]]



		--[[ if(Vdist(256.18,-368.91,-44.13, pos.x, pos.y, pos.z) < 20.0)then
			found = true
			DrawMarker(27, 256.18,-368.91,-44.13 - 1, 0, 0, 0, 0, 0, 0, 1.0001, 1.0001, 1.5001, 0, 25, 165, 165, 0,0, 0,0)
			if(Vdist(256.18,-368.91,-44.13, pos.x, pos.y, pos.z) < 3.0)then
				DisplayHelpText("Press ~INPUT_CONTEXT~ to open the ~g~shop.")
				if IsControlJustPressed(1, 38) then	
					TriggerServerEvent("bank:cashbal")
					TriggerEvent("server-inventory-open", "14", "Shop");	
					Wait(1000)
					--TriggerEvent("openSubMenu","shop")
			    end
			end
		end ]]


		--[[ if(Vdist(105.2,3600.14, 40.73, pos.x, pos.y, pos.z) < 20.0)then
			found = true
			DrawMarker(27, 105.2,3600.14, 40.73 - 1, 0, 0, 0, 0, 0, 0, 1.0001, 1.0001, 1.5001, 0, 25, 165, 165, 0,0, 0,0)
			if(Vdist(105.2,3600.14, 40.73, pos.x, pos.y, pos.z) < 3.0)then
				DisplayHelpText("Press ~INPUT_CONTEXT~ to ~g~ Craft.")
				if IsControlJustPressed(1, 38) and exports["isPed"]:GroupRank("lost_mc") >= 3 then	
					TriggerServerEvent("bank:cashbal")
  					pos = GetEntityCoords(PlayerPedId(), false)
  					if(Vdist(105.2,3600.14, 40.73, pos.x, pos.y, pos.z) < 3.0)then
						TriggerEvent("server-inventory-open", "9", "Craft");
						Wait(1000)	
					end
			    end
			end
		end ]]

		--[[for k,v in ipairs(twentyfourseven_shops) do
			if(Vdist(v.x, v.y, v.z, pos.x, pos.y, pos.z) < 20.0)then
				found = true
				DrawMarker(27, v.x, v.y, v.z - 1, 0, 0, 0, 0, 0, 0, 1.0001, 1.0001, 1.5001, 0, 25, 165, 165, 0,0, 0,0)
				if(Vdist(v.x, v.y, v.z, pos.x, pos.y, pos.z) < 2.0)then
					DisplayHelpText("~g~Market ~INPUT_CONTEXT~ Bas")
					if IsControlJustPressed(1, 38) then	
						TriggerServerEvent("bank:cashbal")
						TriggerEvent("server-inventory-open", "2", "Shop");	
						Wait(1000)
						--TriggerEvent("openSubMenu","shop")
				    end
                end
            end
		end]]

		--[[ for k,v in ipairs(polved) do
			if(Vdist(v.x, v.y, v.z, pos.x, pos.y, pos.z) < 20.0)then
				found = true
				DrawMarker(27, v.x, v.y, v.z - 1, 0, 0, 0, 0, 0, 0, 1.0001, 1.0001, 1.5001, 0, 25, 165, 165, 0,0, 0,0)
				if(Vdist(v.x, v.y, v.z, pos.x, pos.y, pos.z) < 3.0)then
					DisplayHelpText("Press ~INPUT_CONTEXT~ to open the ~g~shop.")
					if IsControlJustPressed(1, 38) then	
						TriggerServerEvent("bank:cashbal")
						TriggerEvent("server-inventory-open", "600", "Shop");	
						Wait(1000)
						--TriggerEvent("openSubMenu","shop")
				    end
                end
            end
		end ]]

		--[[ if(Vdist(1783.16, 2557.02, 45.68, pos.x, pos.y, pos.z) < 10.0)then
			found = true
			DrawMarker(27, 1783.16, 2557.02, 45.68 - 1, 0, 0, 0, 0, 0, 0, 1.0001, 1.0001, 1.5001, 0, 25, 165, 165, 0,0, 0,0)
			if(Vdist(1783.16, 2557.02, 45.68, pos.x, pos.y, pos.z) < 2.0)then
				DisplayHelpText("Press ~INPUT_CONTEXT~ to look at food")
				if IsControlJustPressed(1, 38) then
					TriggerServerEvent("bank:cashbal")
					TriggerEvent("server-inventory-open", "22", "Shop");
					Wait(1000)
					--TriggerEvent("openSubMenu","burgershot")
			    end
            end
		end ]]
		
		--[[ if(Vdist(1775.8272705078,2587.4946289063,45.712657928467, pos.x, pos.y, pos.z) < 10.0)then
			found = true
			DrawMarker(27, 1775.8272705078,2587.4946289063,45.712657928467 - 1, 0, 0, 0, 0, 0, 0, 1.0001, 1.0001, 1.5001, 0, 25, 165, 165, 0,0, 0,0)
			if(Vdist(1775.8272705078,2587.4946289063,45.712657928467, pos.x, pos.y, pos.z) < 2.0)then
				DisplayHelpText("Press ~INPUT_CONTEXT~ to look at food")
				if IsControlJustPressed(1, 38) then
					TriggerServerEvent("bank:cashbal")
					TriggerEvent("server-inventory-open", "22", "Shop");
					Wait(1000)
					--TriggerEvent("openSubMenu","burgershot")
			    end
            end
        end ]]

		--[[ for k,v in ipairs(meth_spots) do
			if(Vdist(v.x, v.y, v.z, pos.x, pos.y, pos.z) < 2.5)then
				DisplayHelpText("Press ~INPUT_CONTEXT~ what dis?")
				if IsControlJustPressed(1, 38) then
					TriggerServerEvent("bank:cashbal")
					local finished = exports["np-taskbar"]:taskBar(60000,"Searching...")
      				if (finished == 100) then
						TriggerEvent("server-inventory-open", "25", "Shop");
						Wait(1000)
					end
					--TriggerEvent("openSubMenu","burgershot")
			    end
            end
        end   ]]

    	--[[ if(Vdist(1663.36, 2512.99, 46.87, pos.x, pos.y, pos.z) < 10.0)then
			found = true
			if(Vdist(1663.36, 2512.99, 46.87, pos.x, pos.y, pos.z) < 2.0)then
				DisplayHelpText("Press ~INPUT_CONTEXT~ what dis?")
				if IsControlJustPressed(1, 38) and (Vdist(1663.36, 2512.99, 46.87, pos.x, pos.y, pos.z) < 2.0) then
					TriggerServerEvent("bank:cashbal")
					local finished = exports["np-taskbar"]:taskBar(60000,"Searching...")
      				if (finished == 100) then
						TriggerEvent("server-inventory-open", "5115", "Shop");
						Wait(1000)
					end
					--TriggerEvent("openSubMenu","burgershot")
			    end
            end
		end    ]]
		
		--[[ if(Vdist(1788.87109375,2597.8020019531,45.71720123291, pos.x, pos.y, pos.z) < 10.0)then
			found = true
			if(Vdist(1788.87109375,2597.8020019531,45.71720123291, pos.x, pos.y, pos.z) < 2.0)then
				DisplayHelpText("Press ~INPUT_CONTEXT~ what dis?")
				if IsControlJustPressed(1, 38) and (Vdist(1788.87109375,2597.8020019531,45.71720123291, pos.x, pos.y, pos.z) < 2.0) then
					local finished = exports["np-taskbar"]:taskBar(60000,"Searching...")
      				if (finished == 100) then
						TriggerEvent("player:receiveItem", "shitlockpick", 1)
						Wait(1000)
					end
					--TriggerEvent("openSubMenu","burgershot")
			    end
            end
        end    ]]

    	--[[ if(Vdist(1775.6893310547,2593.6455078125,45.723571777344, pos.x, pos.y, pos.z) < 10.0)then
			found = true
			if(Vdist(1775.6893310547,2593.6455078125,45.723571777344, pos.x, pos.y, pos.z) < 2.0)then
				DisplayHelpText("Press ~INPUT_CONTEXT~ what dis?")
				if IsControlJustPressed(1, 38) and (Vdist(1775.6893310547,2593.6455078125,45.723571777344, pos.x, pos.y, pos.z) < 2.0) then
					TriggerServerEvent("bank:cashbal")
					local finished = exports["np-taskbar"]:taskBar(60000,"Making a god slushy...")
      				if (finished == 100) then
						TriggerEvent("server-inventory-open", "322", "Shop");
						Wait(1000)
					end
			    end
            end
        end    ]]



		--[[ if(Vdist(1777.58, 2565.15, 45.68, pos.x, pos.y, pos.z) < 10.0)then
			found = true
			if(Vdist(1777.58, 2565.15, 45.68, pos.x, pos.y, pos.z) < 2.0)then
				DisplayHelpText("Press ~INPUT_CONTEXT~ what dis?")
				if IsControlJustPressed(1, 38) then
					TriggerServerEvent("bank:cashbal")
					local finished = exports["np-taskbar"]:taskBar(60000,"Searching...")
      				if (finished == 100) and (Vdist(1777.58, 2565.15, 45.68, pos.x, pos.y, pos.z) < 2.0) then
						TriggerEvent("server-inventory-open", "23", "Craft");
						Wait(1000)
					end
					--TriggerEvent("openSubMenu","burgershot")
			    end
            end
        end ]]

		--- BURGERCİ
		--[[ if(Vdist(-1193.2514648438,-892.27075195313,13.995166778564, pos.x, pos.y, pos.z) < 10.0)then
			found = true
			DrawMarker(27, -1193.2514648438,-892.27075195313,13.995166778564 - 1, 0, 0, 0, 0, 0, 0, 1.0001, 1.0001, 1.5001, 0, 25, 165, 165, 0,0, 0,0)
			if(Vdist(-1193.2514648438,-892.27075195313,13.995166778564, pos.x, pos.y, pos.z) < 5.0)then
				DisplayHelpText("Press ~INPUT_CONTEXT~ to purchase from BurgerShot")
				if IsControlJustPressed(1, 38) then
					TriggerServerEvent("bank:cashbal")
					TriggerEvent("server-inventory-open", "12", "Shop");
					Wait(1000)
					--TriggerEvent("openSubMenu","burgershot")
			    end
            end
		end ]]

		--Doktor shop
		if(Vdist(304.17446899414,-599.82318115234,43.284069061279, pos.x, pos.y, pos.z) < 10.0)then
			found = true
			if ESX.PlayerData.job.name  == 'ambulance' then
				DrawMarker(27, 304.17446899414,-599.82318115234,43.284069061279 - 1, 0, 0, 0, 0, 0, 0, 1.0001, 1.0001, 1.5001, 0, 25, 165, 165, 0,0, 0,0)
				if(Vdist(304.17446899414,-599.82318115234,43.284069061279, pos.x, pos.y, pos.z) < 2.5)then
					DisplayHelpText("Press ~INPUT_CONTEXT~ to enter ems shop")
					if IsControlJustPressed(1, 38) then
						TriggerServerEvent("bank:cashbal")
						TriggerEvent("server-inventory-open", "410", "Shop");
						Wait(1000)
					end
				end
			end
		end 
		

		--[[ if(Vdist( 1108.45, -2007.2, 30.95, pos.x, pos.y, pos.z) < 20.0)then
			found = true
			DrawMarker(27,  1108.45, -2007.2, 30.95 - 1, 0, 0, 0, 0, 0, 0, 1.0001, 1.0001, 1.5001, 0, 25, 165, 165, 0,0, 0,0)
			if(Vdist( 1108.45, -2007.2, 30.95, pos.x, pos.y, pos.z) < 2.0)then
				DisplayHelpText("Press ~INPUT_CONTEXT~ to open the ~g~smelter.")
				if IsControlJustPressed(1, 38) then	
					local finished = exports["np-taskbar"]:taskBar(500,"Readying Smelter")
      				if (finished == 100) then
      					pos = GetEntityCoords(PlayerPedId(), false)
      					if(Vdist( 1108.45, -2007.2, 30.95, pos.x, pos.y, pos.z) < 2.0)then
							TriggerEvent("server-inventory-open", "29", "Craft");	
							Wait(1000)
						end
					end
					--TriggerEvent("openSubMenu","shop")
			    end
			end
		end ]]


		--[[ if(Vdist( 1108.45, -2007.2, 30.95, pos.x, pos.y, pos.z) < 20.0)then
			found = true
			if(Vdist( 1108.45, -2007.2, 30.95, pos.x, pos.y, pos.z) < 2.0)then
				DrawText3Ds(1108.45, -2007.2, 31.15, "[E] - Whats this print for?")
				if IsControlJustPressed(1, 38) then	
					pos = GetEntityCoords(PlayerPedId(), false)
					if(Vdist( 1108.45, -2007.2, 30.95, pos.x, pos.y, pos.z) < 2.0)then
						TriggerEvent("server-inventory-open", "17", "Craft");	
						Wait(1000)
					end
				end
			end
		end ]]
		

		--SİLAH CRAFT
		if(Vdist(22.22238, -1109.88, 29.797, pos.x, pos.y, pos.z) < 20.0)then
			found = true
			DrawMarker(27, 22.22238, -1109.88, 29.797 - 1, 0, 0, 0, 0, 0, 0, 1.0001, 1.0001, 1.5001, 0, 25, 165, 165, 0,0, 0,0)
			if(Vdist(22.22238, -1109.88, 29.797, pos.x, pos.y, pos.z) < 1.0)then
				DisplayHelpText("~g~ AK CRAFT ~INPUT_CONTEXT~ Bas")
				if IsControlJustPressed(1, 38) then	
					pos = GetEntityCoords(PlayerPedId(), false)
					if(Vdist(22.22238, -1109.88, 29.797, pos.x, pos.y, pos.z) < 1.0)then
						TriggerEvent("server-inventory-open", "35", "Craft");
						Wait(1000)	
					end
				end
			end
		end

		----burası sikerim
		--[[ if(Vdist(887.4104, -3195.96, -98.19, pos.x, pos.y, pos.z) < 20.0)then
			found = true
			DrawMarker(27, 887.4104, -3195.96, -98.19 - 1, 0, 0, 0, 0, 0, 0, 1.0001, 1.0001, 1.5001, 0, 25, 165, 165, 0,0, 0,0)
			if(Vdist(887.4104, -3195.96, -98.19, pos.x, pos.y, pos.z) < 3.0)then
				DisplayHelpText("Press ~INPUT_CONTEXT~ to ~g~ CRAFT.")
				if IsControlJustPressed(1, 38) then	
					pos = GetEntityCoords(PlayerPedId(), false)
					if(Vdist(887.4104, -3195.96, -98.19, pos.x, pos.y, pos.z) < 3.0)then
						TriggerEvent("server-inventory-open", "631", "Craft");
						Wait(1000)	
					end
				end
			end
		end ]]

		
		--[[ for k,v in ipairs(tool_shops) do
			if(Vdist(v.x, v.y, v.z, pos.x, pos.y, pos.z) < 20.0)then
				found = true
				DrawMarker(27, v.x, v.y, v.z - 1, 0, 0, 0, 0, 0, 0, 1.0001, 1.0001, 1.5001, 0, 25, 165, 165, 0,0, 0,0)
				if(Vdist(v.x, v.y, v.z, pos.x, pos.y, pos.z) < 3.0)then
					DisplayHelpText("Press ~INPUT_CONTEXT~ to open the ~g~tool shop.")
					if IsControlJustPressed(1, 38) then
						TriggerServerEvent("bank:cashbal")
						TriggerEvent("server-inventory-open", "4", "Shop");
						Wait(1000)
						--TriggerEvent("openSubMenu","tool")
				    end
                end
            end
		end ]]

		if not found and dstscan > 2.5 then
			Wait(1200)
		end

	end

end)

--[[ Citizen.CreateThread(function()
    Citizen.Wait(1000)
    while true do
    local ped = GetPlayerPed(-1)
    local pos = GetEntityCoords(ped)
    local distance = GetDistanceBetweenCoords(pos.x,pos.y,pos.z,2328.1733398438,2569.7163085938,46.876948547363,false)
        if distance <= 1.1 then
            DrawText3Ds(2328.1733398438,2569.7163085938,46.876948547363, "[E] - What does this do?")
            if IsControlJustReleased(0, 86) then
				Citizen.Wait(1)               
				TriggerEvent("server-inventory-open", "45", "Craft");	  
            end       
        end
        Citizen.Wait(5)
    end
end) ]]


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