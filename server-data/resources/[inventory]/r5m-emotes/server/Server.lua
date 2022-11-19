ESX = nil
TriggerEvent('esx:getSharedObject', function(obj) ESX = obj end)


RegisterServerEvent('police:setEmoteData')
AddEventHandler('police:setEmoteData', function(emoteTable)
    local src = source
    local xPlayer = ESX.GetPlayerFromId(src)
    local identifier = xPlayer.identifier
    local emote = json.encode(emoteTable)
    exports.ghmattimysql:execute("UPDATE users SET `emotes` = @emotes WHERE identifier = @identifier", {['emotes'] = emote, ['identifier'] = identifier})
end)

RegisterServerEvent('police:setAnimData')
AddEventHandler('police:setAnimData', function(AnimSet)
    local src = source
    local xPlayer = ESX.GetPlayerFromId(src)
    local identifier = xPlayer.identifier
    local metaData = json.encode(AnimSet)
    exports.ghmattimysql:execute("UPDATE users SET `metaData` = @metaData WHERE identifier = @identifier", {['metaData'] = metaData, ['identifier'] = identifier})
end)

RegisterServerEvent('police:getAnimData')
AddEventHandler('police:getAnimData', function()
    local src = source
    local xPlayer = ESX.GetPlayerFromId(src)
    local identifier = xPlayer.identifier
    exports.ghmattimysql:execute("SELECT metaData FROM users WHERE identifier = @identifier", {['identifier'] = identifier}, function(result)
        if result[1] ~= nil then
        
        else
          
        end
        if (result[1]) then
            if not result[1].metaData then
                TriggerClientEvent('checkDNA', src)
            else
                local meta = json.decode(result[1].metaData)
            if meta == nil then
                TriggerClientEvent('CheckDNA',src)
                return
            end
        
            TriggerClientEvent('emote:setAnimsFromDB', src, result[1].metaData)
        end
    end
    end)
end)


RegisterServerEvent('police:getEmoteData')
AddEventHandler('police:getEmoteData', function()
    local src = source
    local xPlayer = ESX.GetPlayerFromId(src)
    local identifier = xPlayer.identifier

    exports.ghmattimysql:execute("SELECT emotes FROM users WHERE identifier = @identifier", {['identifier'] = identifier}, function(result)
        if(result[1]) then
            local emotes = json.decode(result[1].emotes)
            if result[1] ~= nil then
                TriggerClientEvent('emote:setEmotesFromDB', src,emotes)
            else
                local emoteTable = {
                    {['key'] = {289},["anim"] = "Handsup"},
                    {['key'] = {170},["anim"] = "HandsHead"},
                    {['key'] = {166},["anim"] = "Drink"},
                    {['key'] = {167},["anim"] = "Lean"},
                    {['key'] = {168},["anim"] = "Smoke"},
                    {['key'] = {56},["anim"] = "FacePalm"},
                    {['key'] = {57},["anim"] = "Wave"},

                    {['key'] = {289,21},["anim"] = "gangsign1"},
                    {['key'] = {170,21},["anim"] = "gangsign3"},
                    {['key'] = {166,21},["anim"] = "gangsign2"},
                    {['key'] = {167,21},["anim"] = "hug"},
                    {['key'] = {168,21},["anim"] = "Cop"},
                    {['key'] = {56,21},["anim"] = "Medic"},
                    {['key'] = {57,21},["anim"] = "Notepad"},
                }

                local emote = json.encode(emoteTable)
                exports.ghmattimysql:execute("UPDATE users SET `emotes` = @emotes WHERE identifier = @identifier", {['emotes'] = emote, ['identifier'] = identifier})
                TriggerClientEvent("emote:setEmotesFromDB", src, emoteTable)
            
            end
        end
    end)
end)
