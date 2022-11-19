fx_version 'bodacious'
games { 'rdr3', 'gta5' }

author 'whitewingz'
description 'One City Shops'
version '1.0.0'

client_script{'client.lua',
	'config.lua',
	'gui.lua',
}

server_scripts {
	'config.lua',
	'server/main.lua'
}
