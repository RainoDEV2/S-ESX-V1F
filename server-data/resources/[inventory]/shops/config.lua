Config = {}

Config.Shops = {
	{x = 812.1151, y = -2157.40, z = 29.618},
	{x = 1691.803, y = 3758.478, z = 34.705},
	{x = 253.1002, y = -48.1844, z = 69.941},
	{x = 844.4004, y = -1033.94, z = 28.194},
	{x = -331.939, y = 6082.733, z = 31.454},
	{x = -664.264, y = -935.471, z = 21.829},
	{x = -1305.18, y = -392.562, z = 36.695},
	{x = -1119.13, y = 2697.354, z = 18.554},
	{x = 2570.011, y = 293.9617, z = 108.73},
	{x = -3173.08, y = 1086.028, z = 20.838},
	{x = 20.17015, y = -1106.22, z = 29.797}
}

--[[ for i=1, #Config.Shops, 1 do
	Config.Zones['Shop_' .. i] = {
		Pos   = Config.Shops[i],
		Size  = Config.MarkerSize,
		Color = Config.MarkerColor,
		Type  = Config.MarkerType
	}
end ]]
