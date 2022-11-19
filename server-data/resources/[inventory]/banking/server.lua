local balances = {}
ESX = nil

TriggerEvent('esx:getSharedObject', function(obj) ESX = obj end)


AddEventHandler('es:playerLoaded', function(source, user)
    balances[source] = user.getAccount('bank').money
    local xPlayer = ESX.GetPlayerFromId(source)   
    local money
    money = user.getMoney()
    TriggerClientEvent('banking:updateBalance', source, user.getAccount('bank').money)
    TriggerClientEvent('isPed:UpdateCash', source, user.getMoney())
end)

RegisterServerEvent('bank:getDetails')
AddEventHandler('bank:getDetails', function()
  local _src = source
  local player = ESX.GetPlayerFromId(source)
  xPlayer = player.identifier
  MySQL.Async.fetchAll('SELECT * FROM users WHERE identifier = @identifier', {
    ['@identifier'] = player.identifier
  }, function (result)
		for _, v in ipairs(result) do
			items = {["firstname"] = v.firstname, ["lastname"] = v.lastname}
      TriggerClientEvent("updateNameClient", _src, items.firstname, items.lastname)
		end
	end)
end)

AddEventHandler('playerDropped', function()
  balances[source] = nil
end)

-- HELPER FUNCTIONS
function bankBalance(player)
  return ESX.GetPlayerFromId(player).getAccount('bank').money
end

function deposit(player, amount)
  local bankbalance = bankBalance(player)
  local new_balance = bankbalance + math.abs(amount)
  balances[player] = new_balance

  local user = ESX.GetPlayerFromId(player)
  TriggerClientEvent("banking:updateBalance", source, new_balance)
  user.addAccountMoney('bank', math.abs(amount))
  user.removeMoney(math.abs(amount))
end

function withdraw(player, amount)
  local bankbalance = bankBalance(player)
  local new_balance = bankbalance - math.abs(amount)
  balances[player] = new_balance

  local user = ESX.GetPlayerFromId(player)
  TriggerClientEvent("banking:updateBalance", source, new_balance)
  user.removeAccountMoney('bank', math.abs(amount))
  user.addMoney(math.abs(amount))
end

function round(num, numDecimalPlaces)
  local mult = 10^(numDecimalPlaces or 0)
  return math.abs(math.floor(num * mult + 0.5) / mult)
end

local notAllowedToDeposit = {}

AddEventHandler('bank:addNotAllowed', function(pl)
  notAllowedToDeposit[pl] = true

  local savedSource = pl
  SetTimeout(300000, function()
    notAllowedToDeposit[savedSource] = nil
  end)
end)



RegisterServerEvent('bank:deposit')
AddEventHandler('bank:deposit', function(amount)
  local _source = source
  local xPlayer = ESX.GetPlayerFromId(_source)
   local money
   money = xPlayer.getMoney()

  if not amount then return end

    if notAllowedToDeposit[_source] == nil then
      local rounded = math.ceil(tonumber(amount))
      if(string.len(rounded) >= 9) then
        TriggerClientEvent('notification', _source, "The amount is too much", 2)
      else
      	if(rounded <= xPlayer.getAccount('money').money) then
          --TriggerClientEvent("banking:updateBalance", _source, (xPlayer.getAccount('bank').money + rounded))
          --TriggerClientEvent("banking:addBalance", _source, rounded)
          --TriggerClientEvent("banking:removeCash", _source, rounded)
          TriggerClientEvent("banking:updateCash", _source, (money - rounded))

          deposit(_source, rounded)
          TriggerClientEvent('notification', _source, "To your bank $" ..rounded.. "you deposited", 1)
          local new_balance = xPlayer.getAccount('bank').money
        else
          TriggerClientEvent('notification', _source, "not enough money", 2)
        end
      end
    else
        TriggerClientEvent('notification', _source, "You cannot deposit recently stolen money, please wait for 5 minutes", 2)
    end
end)



RegisterServerEvent('bank:withdraw')
AddEventHandler('bank:withdraw', function(amount)
  local _source = source
	local xPlayer = ESX.GetPlayerFromId(_source)
  local money
  money = xPlayer.getMoney()
  if not amount then return end
  
      local rounded = round(tonumber(amount), 0)
      if(string.len(rounded) >= 9) then
        TriggerClientEvent('notification', _source, "Input too high")
      else
        local bankbalance = xPlayer.getAccount('bank').money
        if(tonumber(rounded) <= tonumber(bankbalance)) then
          --TriggerClientEvent("banking:updateBalance", _source, (bankbalance - rounded))
          --TriggerClientEvent("banking:removeBalance", _source, rounded)

          --TriggerClientEvent("banking:addCash", _source, rounded)
          TriggerClientEvent("banking:updateCash", _source, (money + rounded))

          withdraw(_source, rounded)
          TriggerClientEvent('notification', _source, "You took money from the bank. $" ..rounded.. "", 1)
        else
          TriggerClientEvent('notification', _source, "There is not enough money in the account", 2)
        end
      end
end)


RegisterServerEvent('bank:transfer')
AddEventHandler('bank:transfer', function(to, amountt)
	local _source = source
	local xPlayer = ESX.GetPlayerFromId(_source)
	local zPlayer = ESX.GetPlayerFromId(to)
	local balance = 0
	balance = xPlayer.getAccount('bank').money
	zbalance = xPlayer.getAccount('bank').money
	
  if tonumber(_source) == tonumber(to) then
    TriggerClientEvent("notification", _source, "You cannot transfer money to yourself.", 2)
	else
    if balance <= 0 or balance < tonumber(amountt) or tonumber(amountt) <= 0 then
      TriggerClientEvent("notification", _source, "Invalid amount.", 2)
		else
      xPlayer.removeAccountMoney('bank', amountt)
      TriggerClientEvent("banking:updateBalance", _source, amountt)
      TriggerClientEvent("banking:updateBalance", to, amountt)
			zPlayer.addAccountMoney('bank', amountt)
      TriggerClientEvent("notification", _source "You sent money from your accountn $".. amountt .. " " .. to .. ".")
      TriggerClientEvent("notification", to "Money arrived in your account $" .. amountt .. "" .. _source .. ".")

		end
		
	end
end)



RegisterServerEvent('bank:balance')
AddEventHandler('bank:balance', function()
	local _source = source
	local xPlayer = ESX.GetPlayerFromId(_source)
	balance = xPlayer.getAccount('bank').money
	TriggerClientEvent('currentbalance1', _source, balance)
end)

RegisterServerEvent('police:targetCheckBank')
AddEventHandler('police:targetCheckBank', function(target)
	local _source = source
	local xPlayer = ESX.GetPlayerFromId(target)
	balance = xPlayer.getAccount('bank').money
  local strng = " Bank: "..balance
  TriggerClientEvent("customNotification",_source,strng)
end)

RegisterServerEvent('bank:active')
AddEventHandler('bank:active', function()
  local _source = source
  local xPlayer = ESX.GetPlayerFromId(_source)
	balance = xPlayer.getAccount('bank').money
	TriggerClientEvent('banking:updateBalance', _source, balance)
end)

RegisterServerEvent('bank:balance2')
AddEventHandler('bank:balance', function()
	local _source = source
	local xPlayer = ESX.GetPlayerFromId(_source)
	balance = xPlayer.getAccount('bank').money
	TriggerClientEvent('currentbalance2', _source, balance)
end)

RegisterServerEvent('bank:cashbal')
AddEventHandler('bank:cashbal', function()
	local _source = source
	local xPlayer = ESX.GetPlayerFromId(_source)
  local money

  money = xPlayer.getMoney()
  TriggerClientEvent('banking:updateCash', _source, money)
  local xPlayer = ESX.GetPlayerFromId(source)
  TriggerClientEvent('isPed:UpdateCash', source, xPlayer.getMoney())
  TriggerClientEvent('updateMyCashHere', source, xPlayer.getMoney())
end)



RegisterServerEvent('bank:bankbal')
AddEventHandler('bank:bankbal', function()
	local _source = source
	local xPlayer = ESX.GetPlayerFromId(_source)
  balance = xPlayer.getAccount('bank').money
  TriggerClientEvent('banking:updateBalance', _source, balance)

end)

RegisterCommand('nakitver', function(source, args)

  local sender = source
  local reciever = args[1]
  local amount = args[2]
  local user = ESX.GetPlayerFromId(sender)


  local playerRec = ESX.GetPlayerFromId(reciever)

  TriggerClientEvent("bank:givecash", source, sender, reciever, amount)

end)

RegisterServerEvent('bank:givemecash')
AddEventHandler('bank:givemecash', function(sender, reciever, amount)
    local user = ESX.GetPlayerFromId(sender)
    local playerRec = ESX.GetPlayerFromId(reciever)
    	if GetPlayerName(reciever) then
		if tonumber(amount) > 0 then
			local amount = tonumber(amount)
			if user.getMoney() >= amount then
				user.removeMoney(amount)
        playerRec.addMoney(amount)
			else
				TriggerClientEvent('notification', source, "You do not have the required amount", 2)
			end
		else
			TriggerClientEvent('notification', source, "Please enter a valid amount", 2)
		end
	else
		TriggerClientEvent('notification', source, "Please enter a valid id", 2)
	end
end)

RegisterServerEvent("inventory:takeMyCash")
AddEventHandler("inventory:takeMyCash", function(user, amount)
  local _source = source
  local xPlayer = ESX.GetPlayerFromId(user)
  xPlayer.removeMoney(amount)
  TriggerClientEvent("banking:updateCash", user, (xPlayer.getMoney()))
end)