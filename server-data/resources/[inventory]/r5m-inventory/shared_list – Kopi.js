let itemList	= {}

// weapons

itemList["-1121678507"]	= {fullyDegrades: true, decayrate: 0.25, displayname: "Skorpion Mk2", price: 250, weight: 1, craft: [ {itemid: "aluminium", amount: 100 }, {itemid: "steel", amount: 100 } ], nonStack: true, model: "", image: "np_mini-smg.png", weapon: true , deg: true}
itemList["-1045183535"]	= {fullyDegrades: true, decayrate: 0.25, displayname: "Revolver", price: 250, weight: 1, craft: [ {itemid: "scrapmetal", amount: 150 } ], nonStack: true, model: "", image: "np_revolver.png", weapon: true , deg: true}

itemList["-879347409"]	= {fullyDegrades: true, decayrate: 0.25, displayname: "Violence", price: 250, weight: 1, craft: [ {itemid: "aluminium", amount: 70 }, {itemid: "steel", amount: 70 } ], nonStack: true, model: "", image: "np_revolvermk2.png", weapon: true , deg: true}


// Fishings

itemList["fishingrod"]	= {fullyDegrades: false, decayrate: 0.0, displayname: "fishingrod", price: 100, weight: 1, nonStack: false, model: "", image: "fishingrod.png" , information: "Balık tutmak için kullanılır" , deg: false} // does not break, unless instructed to do so.
itemList["fishbait"] = {fullyDegrades: true, decayrate: 0.00, displayname: "fish bait", price: 1, weight: 1, nonStack: false, model: "", image: "fishbait.png", information: "Balık yakalamak için kullanılır." , deg: false}// decays like water
itemList["fish"] = {fullyDegrades: true, decayrate: 0.01, displayname: "fish", price: 5, weight: 1, nonStack: false, model: "", image: "fish.png", information: "Balık." , deg: false}// decays like water
itemList["bluefish"] = {fullyDegrades: true, decayrate: 0.01, displayname: "Mavi Balık", price: 5, weight: 1, nonStack: false, model: "", image: "bluefish.png", information: "Mavi balık." , deg: false}// decays like water



itemList["-72657034"] = {fullyDegrades: false, decayrate: 2.0, displayname: "parachute", price: 1250, craft: [ {itemid: "aluminium", amount: 50 }, {itemid: "plastic", amount: 80 }, {itemid: "rubber", amount: 1 } ],  weight: 1, nonStack: true, model:  "", image: "np_parachute.png", weapon: false, deg: true} //'Parachute'
itemList["-1074790547"]	= {fullyDegrades: true, decayrate: 0.4, displayname: "AR Mk2", price: 250, craft: [ {itemid: "aluminium", amount: 50 }, {itemid: "plastic", amount: 80 }, {itemid: "rubber", amount: 1 } ],  weight: 1, nonStack: true, model:  "", image: "np_assault-shotgun.png", weapon: true, deg: true} //'Assault Rifle'
itemList["-1075685676"]	= {fullyDegrades: true, decayrate: 0.4, displayname: "pd 9mm Mod", price: 10, craft: [{itemid: "aluminium", amount: 1 }, {itemid: "plastic", amount: 1 }, {itemid: "rubber", amount: 1 }], weight: 1, nonStack: true, model: "", image: "np_pistol.png", weapon: true , deg: true} //'Pistol'
itemList["-1355376991"]	= {fullyDegrades: true, decayrate: 0.25, displayname: "zınQ Gun  hehe ", price: 250, craft: [ {itemid: "aluminium", amount: 155 }, {itemid: "plastic", amount: 100 }, {itemid: "rubber", amount: 1 } ],  weight: 1, nonStack: true, model:  "", image: "np_pistol-50.png", weapon: true, deg: true} //'Pistol 50'
itemList["-1357824103"]	= {fullyDegrades: true, decayrate: 0.25, displayname: "Adv Rifle Mk2", price: 250, craft: [ {itemid: "aluminium", amount: 140 }, {itemid: "scrapmetal", amount: 40 }, {itemid: "rubber", amount: 1 } ],  weight: 1, nonStack: true, model:  "", image: "np_advanced-rifle.png", weapon: true, deg: true} //'Advanced Rifle'
itemList["-1654528753"]	= {fullyDegrades: true, decayrate: 0.25, displayname: "BP Shotgun Mk2", price: 250, craft: [ {itemid: "aluminium", amount: 80 }, {itemid: "plastic", amount: 80 }, {itemid: "rubber", amount: 1 } ],  weight: 1, nonStack: true, model:  "", image: "np_assault-shotgun.png", weapon: true, deg: true} //'Bullpup Shotgun'
itemList["-1810795771"]	= {fullyDegrades: true, decayrate: 2.0, displayname: "Pool Cue", price: 0, weight: 1, nonStack: true, model: "", image: "np_poolcue.png", weapon: true, information: "-5 Jail <br> +3 Strength <br> -3 Intelligence <br> Its marked -DO NOT TAKE FROM CELLS- <br> Outside Jail this is considered Police Property <br> If it has roleplay stats, it must be roleplay.", deg: true } //'Heavy Shotgun'
itemList["-2066285827"]	= {fullyDegrades: true, decayrate: 0.25, displayname: "BP Rifle Mk2", price: 250, craft: [ {itemid: "aluminium", amount: 80 }, {itemid: "plastic", amount: 80 }, {itemid: "rubber", amount: 1 } ],  weight: 1, nonStack: true, model:  "", image: "np_bullpup-rifle.png", weapon: true, deg: true} //'Bullpup Rifle'
itemList["-2084633992"]	= {fullyDegrades: true, decayrate: 0.25, displayname: "556 Mod", price: 10, craft: [{itemid: "aluminium", amount: 50 }, {itemid: "plastic", amount: 10 }, {itemid: "rubber", amount: 1 }], weight: 1, nonStack: true, model: "", image: "np_carbine-rifle.png", weapon: true , deg: true} //'Carbine Rifle'
itemList["-270015777"]	= {fullyDegrades: true, decayrate: 0.25, displayname: "ASMG Mk2", price: 250, craft: [ {itemid: "aluminium", amount: 155 }, {itemid: "plastic", amount: 100 }, {itemid: "rubber", amount: 1 } ],  weight: 1, nonStack: true, model:  "", image: "np_assault-smg.png", weapon: true, deg: true} //'Assault SMG'
itemList["-538741184"]	= {fullyDegrades: true, decayrate: 2.0, displayname: "Knife", craft: [ {itemid: "methbag", amount: 25 }, {itemid: "ciggy", amount: 100 } ], price: 250, weight: 1, nonStack: true, model: "", image: "np_switchblade.png", weapon: true , deg: true}
itemList["-619010992"]	= {fullyDegrades: true, decayrate: 0.4, displayname: "Tec 9 Mk2", price: 250, weight: 1, craft: [ {itemid: "aluminium", amount: 50 }, {itemid: "plastic", amount: 20 } ], nonStack: true, model: "", image: "np_machine-pistol.png", weapon: true , deg: true}
itemList["-771403250"]	= {fullyDegrades: true, decayrate: 0.4, displayname: "Heavy Pistol", price: 100000, craft: [ {itemid: "silahgovde", amount: 1 }, {itemid: "silahnamlu", amount: 1 }, {itemid: "silahkabza", amount: 1 }, {itemid: "silahyay", amount: 1 }, {itemid: "silahmekanizma", amount: 1 } ], weight: 1, nonStack: true, model:  "", image: "np_heavy-pistol.png", weapon: true, deg: true}
itemList["-86904375"]	= {fullyDegrades: true, decayrate: 0.4, displayname: "M762", price: 10, craft: [{itemid: "aluminium", amount: 50 }, {itemid: "plastic", amount: 10 }, {itemid: "rubber", amount: 1 }], weight: 1, nonStack: true, model: "", image: "np_762saltmaker.png", weapon: true , deg: true} //'Carbine Rifle'
itemList["100416529"]	= {fullyDegrades: true, decayrate: 0.25, displayname: "Hunting gun", price: 150, craft: [ {itemid: "aluminium", amount: 100 }, {itemid: "scrapmetal", amount: 40 }, {itemid: "rubber", amount: 1 } ],  weight: 1, nonStack: true, model:  "", image: "avcisilah.png", weapon: true, deg: true} //'Sniper Rifle'
itemList["101631238"]	= {fullyDegrades: true, decayrate: 2.0, displayname: "Yangın Tüpü", price: 250, craft: [ {itemid: "aluminium", amount: 100 }, {itemid: "scrapmetal", amount: 40 }, {itemid: "rubber", amount: 1 } ],  weight: 1, nonStack: true, model:  "", image: "np_fire-extinguisher.png", weapon: true, deg: true} //'Fire Extinguisher'
itemList["1141786504"]	= {fullyDegrades: false, decayrate: 2.0, displayname: "Golf Bat", price: 250, weight: 1, nonStack: true, model: "", image: "np_golfclub.png", weapon: true , deg: false}
itemList["1198879012"]	= {fullyDegrades: false, decayrate: 2.0, displayname: "Flaregun", price: 250, weight: 1, nonStack: true, model: "", image: "np_flaregun.png", weapon: true , deg: false}
itemList["1233104067"]	= {fullyDegrades: false, decayrate: 2.0, displayname: "Flare", price: 250, weight: 1, nonStack: true, model: "", image: "np_flare.png", weapon: true , deg: false}
itemList["125959754"]	= {fullyDegrades: true, decayrate: 0.25, displayname: "Cmp Launcher", price: 250, weight: 1, nonStack: true, model: "", image: "np_cmp-launcher.png", weapon: true , deg: true}
itemList["126349499"]	= {fullyDegrades: false, decayrate: 2.0, displayname: "Snowball", price: 250, weight: 1, nonStack: true, model: "", image: "np_snowball.png", weapon: true , deg: false}
itemList["1305664598"]	= {fullyDegrades: true, decayrate: 0.25, displayname: "GND Launcher SMK", price: 250, weight: 1, nonStack: true, model: "", image: "np_grenade-launcher.png", weapon: true , deg: true}
itemList["1317494643"]	= {fullyDegrades: true, decayrate: 2.0, displayname: "Hammer", price: 250, weight: 1, nonStack: true, model: "", image: "np_hammer.png", weapon: true , deg: true}
itemList["137902532"]	= {fullyDegrades: true, decayrate: 0.25, displayname: "Vintage Pistol Mod", price: 250,  craft: [ {itemid: "aluminium", amount: 50 }, {itemid: "plastic", amount: 20 }, {itemid: "rubber", amount: 10 } ], weight: 1, nonStack: true, model:  "", image: "np_vintage-pistol.png", weapon: true , deg: true} //'Vintage Pistol'
itemList["1432025498"]	= {fullyDegrades: true, decayrate: 0.25, displayname: "Shotgun Mod", price: 10, craft: [{itemid: "aluminium", amount: 65 }, {itemid: "plastic", amount: 20 }, {itemid: "rubber", amount: 10 }], weight: 1, nonStack: true, model: "", image: "np_pump-shotgun.png", weapon: true , deg: true} //'Pump Shotgun'
itemList["1593441988"]	= {fullyDegrades: true, decayrate: 0.25, displayname: "Combat Pistol Mod", price: 2,  craft: [ {itemid: "steel", amount: 65 }, {itemid: "plastic", amount: 1 }, {itemid: "rubber", amount: 1 } ], weight: 1, nonStack: true, model:  "", image: "np_combat-pistol.png", weapon: true , deg: true} //'Combat Pistol'
itemList["1627465347"]	= {fullyDegrades: true, decayrate: 0.4, displayname: "Gusenberg Thompson mod", price: 250, craft: [ {itemid: "aluminium", amount: 55 }, {itemid: "plastic", amount: 10 }, {itemid: "silahgovde", amount: 3 } ],  weight: 1, nonStack: true, model:  "", image: "np_gusenberg.png", weapon: true, deg: true} //'Gusenberg'
itemList["1649403952"]	= {fullyDegrades: true, decayrate: 0.4, displayname: "AK  MOD", price: 250, craft: [ {itemid: "aluminium", amount: 55 }, {itemid: "plastic", amount: 10 }, {itemid: "copper", amount: 50 }, {itemid: "silahkabza", amount: 3 } ], weight: 1, nonStack: true, model: "", image: "np_cmp-rifle.png", weapon: true , deg: true}
itemList["1672152130"]	= {fullyDegrades: true, decayrate: 0.25, displayname: "Homing Launcher", price: 250, weight: 1, nonStack: true, model: "", image: "np_homing-launcher.png", weapon: true , deg: true}
itemList["171789620"]	= {fullyDegrades: true, decayrate: 0.25, displayname: "Combat PDW Mk2 mod", price: 250, craft: [ {itemid: "aluminium", amount: 155 }, {itemid: "plastic", amount: 100 }, {itemid: "rubber", amount: 1 } ],  weight: 1, nonStack: true, model:  "", image: "np_combat-pdw.png", weapon: true, deg: true} //'Combat PDW
itemList["1737195953"]	= {fullyDegrades: true, decayrate: 2.0, displayname: "Jop", price: 2, weight: 1, nonStack: true, model: "", image: "np_nightstick.png", weapon: true , deg: true}
itemList["2017895192"]	= {fullyDegrades: true, decayrate: 0.25, displayname: "Sawnoff", price: 250, craft: [ {itemid: "aluminium", amount: 80 } ], weight: 1, nonStack: true, model:  "", image: "np_sawnoff-shotgun.png ", weapon: true, deg: true} //'Sawnoff Shotgun'
itemList["2024373456"]	= {fullyDegrades: true, decayrate: 0.25, displayname: "PD MP5 2", price: 250, craft: [ {itemid: "aluminium", amount: 155 }, {itemid: "plastic", amount: 100 }, {itemid: "rubber", amount: 1 } ],  weight: 1, nonStack: true, model:  "", image: "np_smg.png", weapon: true , deg: true} //'SMG'
itemList["2132975508"]	= {fullyDegrades: true, decayrate: 0.25, displayname: "Bullpup Rifle", price: 250, craft: [ {itemid: "aluminium", amount: 80 }, {itemid: "plastic", amount: 80 }, {itemid: "rubber", amount: 1 } ],  weight: 1, nonStack: true, model:  "", image: "np_bullpup-rifle.png", weapon: true, deg: true} //'Bullpup Rifle'
itemList["2138347493"]	= {fullyDegrades: true, decayrate: 0.25, displayname: "Firework Launcher", price: 250, craft: [ {itemid: "aluminium", amount: 100 }, {itemid: "scrapmetal", amount: 40 }, {itemid: "rubber", amount: 1 } ],  weight: 1, nonStack: true, model:  "", image: "np_firework-launcher.png", weapon: true, deg: true} //'Firework Launcher'
itemList["2144741730"]	= {fullyDegrades: true, decayrate: 0.25, displayname: "Combat MG Mk2", price: 250, craft: [ {itemid: "aluminium", amount: 90 }, {itemid: "scrapmetal", amount: 40 }, {itemid: "rubber", amount: 1 } ],  weight: 1, nonStack: true, model:  "", image: "np_mg.png", weapon: true, deg: true} //'Combat MG'
itemList["2210333304"]	= {fullyDegrades: true, decayrate: 0.4, displayname: "M4 Rifle Mod", price: 10, craft: [{itemid: "aluminium", amount: 50 }, {itemid: "plastic", amount: 10 }, {itemid: "rubber", amount: 1 }], weight: 1, nonStack: true, model: "", image: "np_carbine-rifle.png", weapon: true , deg: true} //'Carbine Rifle'
itemList["2227010557"]	= {fullyDegrades: true, decayrate: 2.0, displayname: "Crowbar", price: 35000, weight: 1, nonStack: true, model: "", image: "np_crowbar.png", weapon: true , deg: true}
itemList["2343591895"]	= {fullyDegrades: true, decayrate: 2.0, displayname: "flashlight", price: 50, weight: 1, nonStack: true, model: "", image: "np_flashlight.png", weapon: true , deg: true}
itemList["2460120199"]	= {fullyDegrades: true, decayrate: 2.0, displayname: "Dagger", price: 250, weight: 1, nonStack: true, model: "", image: "np_dagger.png", weapon: true , deg: true}
itemList["2484171525"]	= {fullyDegrades: true, decayrate: 2.0, displayname: "Billiard Stick", price: 250, weight: 1, nonStack: true, model: "", image: "np_pool-cue.png", weapon: true , deg: true}
itemList["2508868239"]	= {fullyDegrades: true, decayrate: 2.0, displayname: "Bat", price: 40000, weight: 1, nonStack: true, model: "", image: "np_baseball-bat.png", weapon: true , deg: true}
itemList["2578377531"]	= {fullyDegrades: true, decayrate: 0.25, displayname: "Pistol 50 Mod", price: 250, craft: [ {itemid: "aluminium", amount: 155 }, {itemid: "plastic", amount: 100 }, {itemid: "rubber", amount: 1 } ],  weight: 1, nonStack: true, model:  "", image: "np_pistol-50.png", weapon: true, deg: true} //'Pistol 50'
itemList["2578778090"]	= {fullyDegrades: true, decayrate: 2.0, displayname: "Knife Mod", price: 250, weight: 1, nonStack: true, model: "", image: "np_knife.png", weapon: true , deg: true}
itemList["2640438543"]	= {fullyDegrades: true, decayrate: 0.25, displayname: "Bullpup Shotgun", price: 250, craft: [ {itemid: "aluminium", amount: 80 }, {itemid: "plastic", amount: 80 }, {itemid: "rubber", amount: 1 } ],  weight: 1, nonStack: true, model:  "", image: "np_assault-shotgun.png", weapon: true, deg: true} //'Bullpup Shotgun'
itemList["2726580491"]	= {fullyDegrades: true, decayrate: 0.25, displayname: "Grenade Launcher", price: 250, craft: [ {itemid: "aluminium", amount: 100 }, {itemid: "scrapmetal", amount: 40 }, {itemid: "rubber", amount: 1 } ],  weight: 1, nonStack: true, model:  "", image: "np_grenade-launcher.png", weapon: true, deg: true}//"Grenade Launcher"
itemList["2828843422"]	= {fullyDegrades: true, decayrate: 0.25, displayname: "Musket", price: 250, weight: 1, nonStack: true, model: "", image: "np_musket.png", weapon: true , deg: true}
itemList["2874559379"]	= {fullyDegrades: true, decayrate: 0.25, displayname: "Proxi Mine", price: 250, weight: 1, nonStack: true, model: "", image: "np_proximity-mine.png", weapon: true , deg: true}
itemList["2937143193"]	= {fullyDegrades: true, decayrate: 0.25, displayname: "Advanced Rifle", price: 250, craft: [ {itemid: "aluminium", amount: 140 }, {itemid: "scrapmetal", amount: 40 }, {itemid: "rubber", amount: 1 } ],  weight: 1, nonStack: true, model:  "", image: "np_advanced-rifle.png", weapon: true, deg: true} //'Advanced Rifle'
itemList["2982836145"]	= {fullyDegrades: true, decayrate: 0.25, displayname: "RPG", price: 250, craft: [ {itemid: "aluminium", amount: 100 }, {itemid: "scrapmetal", amount: 40 }, {itemid: "rubber", amount: 1 } ],  weight: 1, nonStack: true, model:  "", image: "np_rpg.png", weapon: true, deg: true} //'RPG'
itemList["3125143736"]	= {fullyDegrades: true, decayrate: 0.25, displayname: "Pipebomb", price: 250, weight: 1, nonStack: true, model: "", image: "np_pipe-bomb.png", weapon: true , deg: true}
itemList["317205821"]	= {fullyDegrades: true, decayrate: 0.25, displayname: "Autoshotgun", price: 250, craft: [ {itemid: "aluminium", amount: 80 }, {itemid: "plastic", amount: 80 }, {itemid: "rubber", amount: 1 } ],  weight: 1, nonStack: true, model:  "", image: "np_sweeper-shotgun.png", weapon: true, deg: true} //'Autoshotgun'
itemList["3173288789"]	= {fullyDegrades: true, decayrate: 0.25, displayname: "Skorpion", price: 250, weight: 1, craft: [ {itemid: "valuablegoods", amount: 1 }, {itemid: "goldbar", amount: 4 } ], nonStack: true, model: "", image: "np_mini-smg.png", weapon: true , deg: true}
itemList["3218215474"]	= {fullyDegrades: true, decayrate: 0.4, displayname: "SNS Pistol", price: 70000,  craft: [ {itemid: "scrapmetal", amount: 8 } ],  weight: 1, nonStack: true, model:  "", image: "np_sns-pistol.png", weapon: true, deg: true}
itemList["3219281620"]	= {fullyDegrades: true, decayrate: 0.4, displayname: "pistol mod", price: 10, craft: [{itemid: "aluminium", amount: 1 }, {itemid: "plastic", amount: 1 }, {itemid: "rubber", amount: 1 }], weight: 1, nonStack: true, model: "", image: "np_pistol.png", weapon: true , deg: true} //'Pistol'
itemList["3220176749"]	= {fullyDegrades: true, decayrate: 0.4, displayname: "ak mod", price: 250, craft: [ {itemid: "aluminium", amount: 50 }, {itemid: "plastic", amount: 80 }, {itemid: "rubber", amount: 1 } ],  weight: 1, nonStack: true, model:  "", image: "np_assault-shotgun.png", weapon: true, deg: true} //'Assault Rifle'
itemList["3231910285"]	= {fullyDegrades: true, decayrate: 0.25, displayname: "Special Carbine", price: 250, weight: 1, nonStack: true, model: "", image: "np_special-carbine.png", weapon: true , deg: true}
itemList["324215364"]	= {fullyDegrades: true, decayrate: 0.4, displayname: "Micro SMG Mod", price: 250, craft: [ {itemid: "copper", amount: 60 }, {itemid: "plastic", amount: 15 }, {itemid: "scrapmetal", amount: 20 }, {itemid: "aluminium", amount: 10 } ], weight: 1, nonStack: true, model:  "", image: "np_micro-smg.png", weapon: true, deg: true} //'Micro SMG'
itemList["3342088282"]	= {fullyDegrades: true, decayrate: 0.25, displayname: "Mark Rifle", price: 250, weight: 1, nonStack: true, model: "", image: "np_marksman-rifle.png", weapon: true , deg: true}
itemList["3441901897"]	= {fullyDegrades: true, decayrate: 2.0, displayname: "Metal Hatchet", price: 60000, craft: [{itemid: "metal", amount: 4 }, {itemid: "stick", amount: 1 }, {itemid: "string", amount: 1 }], weight: 1, nonStack: true, model: "", image: "np_hatchet.png", weapon: true , deg: true} //'Heavy Shotgun'
itemList["3638508604"]	= {fullyDegrades: true, decayrate: 2.0, displayname: "Muşta", craft: [ {itemid: "aluminium", amount: 25 }, {itemid: "scrapmetal", amount: 10 } ], price: 250, weight: 1, nonStack: true, model: "", image: "np_knuckle-dusters.png", weapon: true , deg: true}
itemList["3675956304"]	= {fullyDegrades: true, decayrate: 0.4, displayname: "Tec 9", price: 100000, weight: 1, craft: [ {itemid: "silahgovde", amount: 1 }, {itemid: "silahnamlu", amount: 1 }, {itemid: "silahkabza", amount: 1 }, {itemid: "silahtetik", amount: 1 } ], nonStack: true, model: "", image: "np_machine-pistol.png", weapon: true , deg: true}
itemList["3696079510"]	= {fullyDegrades: true, decayrate: 0.25, displayname: "Mrk Pistol", price: 250, weight: 1, nonStack: true, model: "", image: "np_pistol.png", weapon: true , deg: true}
itemList["3713923289"]	= {fullyDegrades: true, decayrate: 2.0, displayname: "Machete", price: 250, weight: 1, nonStack: true, model: "", image: "np_machete.png", weapon: true , deg: true}
itemList["3800352039"]	= {fullyDegrades: true, decayrate: 0.25, displayname: "Assault Shotgun", price: 250, craft: [ {itemid: "aluminium", amount: 80 }, {itemid: "plastic", amount: 80 }, {itemid: "rubber", amount: 1 } ],  weight: 1, nonStack: true, model:  "", image: "np_assault-shotgun.png", weapon: true, deg: true} //'Assault Shotgun'
itemList["4019527611"]	= {fullyDegrades: true, decayrate: 0.25, displayname: "DB Shotgun", price: 250, weight: 1, nonStack: true, model: "", image: "np_db-shotgun.png", weapon: true , deg: true}
itemList["4024951519"]	= {fullyDegrades: true, decayrate: 0.25, displayname: "Assault SMG", price: 250, craft: [ {itemid: "aluminium", amount: 155 }, {itemid: "plastic", amount: 100 }, {itemid: "rubber", amount: 1 } ],  weight: 1, nonStack: true, model:  "", image: "np_assault-smg.png", weapon: true, deg: true} //'Assault SMG'
itemList["4191993645"]	= {fullyDegrades: true, decayrate: 2.0, displayname: "ax", price: 250, weight: 1, nonStack: true, model: "", image: "np_hatchet.png", weapon: true , deg: true}
itemList["4192643659"]	= {fullyDegrades: false, decayrate: 0.0, displayname: "Bottle", price: 250, weight: 1, nonStack: true, model: "", image: "np_glass-bottle.png", weapon: true , deg: true}
itemList["419712736"]	= {fullyDegrades: true, decayrate: 2.0, displayname: "wrench", price: 250, weight: 1, nonStack: true, model: "", image: "np_wrench.png", weapon: true , deg: true}
itemList["453432689"]	= {fullyDegrades: true, decayrate: 0.4, displayname: "Pistol", price: 80000, craft: [{itemid: "aluminium", amount: 10 }, {itemid: "steel", amount: 10 }, {itemid: "copper", amount: 10 }, {itemid: "scrapmetal", amount: 10 }], weight: 1, nonStack: true, model: "", image: "np_pistol.png", weapon: true , deg: true} //'Pistol'
itemList["487013001"]	= {fullyDegrades: true, decayrate: 0.25, displayname: "PD Beanbag SG", price: 10, craft: [{itemid: "aluminium", amount: 5 }, {itemid: "plastic", amount: 1 }, {itemid: "rubber", amount: 1 }], weight: 1, nonStack: true, model: "", image: "np_pump-shotgun2.png", weapon: true , deg: true} //'Pump Shotgun'
itemList["584646201"]	= {fullyDegrades: true, decayrate: 0.25, displayname: "AP Pistol Mod", price: 250, craft: [ {itemid: "aluminium", amount: 50 }, {itemid: "scrapmetal", amount: 10 }, {itemid: "goldbar", amount: 1 } ], weight: 1, nonStack: true, model:  "", image: "np_ap-pistol.png", weapon: true, deg: true} //'AP Pistol'
itemList["615608432"]	= {fullyDegrades: true, decayrate: 0.25, displayname: "Molotof", craft: [ {itemid: "1gcocaine", amount: 10 }, {itemid: "ciggy", amount: 25 } ], price: 250, weight: 1, nonStack: true, model: "", image: "np_molotov.png", weapon: true , deg: true}
itemList["736523883"]	= {fullyDegrades: true, decayrate: 0.25, displayname: "MP5 Mod", price: 2, craft: [ {itemid: "aluminium", amount: 155 }, {itemid: "plastic", amount: 100 }, {itemid: "rubber", amount: 1 } ],  weight: 1, nonStack: true, model:  "", image: "np_smg.png", weapon: true , deg: true} //'SMG'
itemList["741814745"]	= {fullyDegrades: true, decayrate: 0.25, displayname: "Sticky Bomb", price: 250, craft: [ {itemid: "aluminium", amount: 150 }, {itemid: "scrapmetal", amount: 150 }, {itemid: "rubber", amount: 100 } ],  weight: 1, nonStack: true, model:  "", image: "np_sticky-bomb.png", weapon: true, deg: true} //'Sticky Bomb'
itemList["883325847"]	= {fullyDegrades: true, decayrate: 2.0, displayname: "Petrol Can", price: 250, weight: 1, nonStack: true, model: "", image: "np_petrol-can.png", weapon: true , deg: true}
itemList["911657153"]	= {fullyDegrades: true, decayrate: 2.0, displayname: "Stun Gun", price: 5,  craft: [ {itemid: "aluminium", amount: 1 }, {itemid: "plastic", amount: 1 }, {itemid: "rubber", amount: 1 } ], weight: 1, nonStack: true, model:  "", image: "np_stun-gun.png", weapon: true , deg: true} //'Stun Gun'
itemList["940833800"]	= {fullyDegrades: true, decayrate: 2.0, displayname: "Battle Ax", price: 250, craft: [{itemid: "stick", amount: 1 }, {itemid: "string", amount: 1 }], weight: 1, nonStack: true, model: "", image: "np_homemade.png", weapon: true , deg: true} //'Heavy Shotgun'
itemList["984333226"]	= {fullyDegrades: true, decayrate: 0.25, displayname: "Heavy SG", price: 250, craft: [ {itemid: "aluminium", amount: 80 }, {itemid: "plastic", amount: 80 }, {itemid: "rubber", amount: 1 } ],  weight: 1, nonStack: true, model:  "", image: "np_heavy-shotgun.png", weapon: true, deg: true} //'Heavy Shotgun'

itemList["extended_ap"]	= {illegal: true, fullyDegrades: true, decayrate: 0.5, displayname: "extended AP Mag", price: 250, craft: [ {itemid: "aluminium", amount: 30 }, {itemid: "goldbar", amount: 1 } ],  weight: 1, nonStack: true, model:  "", image: "np_ap-pistol-clip.png", deg: true} //'Heavy Sniper'
itemList["extended_micro"]	= {illegal: true, fullyDegrades: true, decayrate: 0.5, displayname: "extended Micro Mag", price: 210, craft: [ {itemid: "copper", amount: 40 }, {itemid: "rubber", amount: 5 } ],  weight: 1, nonStack: true, model:  "", image: "np_micro-smg-clip.png", deg: true} //'Heavy Sniper'
itemList["extended_sns"]	= {illegal: true, fullyDegrades: true, decayrate: 0.5, displayname: "extended SNS Mag", price: 250, craft: [ {itemid: "scrapmetal", amount: 6 } ],  weight: 1, nonStack: true, model:  "", image: "np_sns-pistol-clip.png", deg: true} //'Heavy Sniper',
itemList["extended_tec9"]	= {illegal: true, fullyDegrades: true, decayrate: 0.5, displayname: "extended Tec 9 Mag", price: 250, craft: [ {itemid: "copper", amount: 60 }, {itemid: "rubber", amount: 5 } ],  weight: 1, nonStack: true, model:  "", image: "np_micro-smg-clip.png", deg: true} //'Heavy Sniper'

itemList["silencer_l"]	= {illegal: true, fullyDegrades: true, decayrate: 0.5, displayname: "L Silencer", price: 510, craft: [ {itemid: "goldbar", amount: 3 }, {itemid: "aluminium", amount: 10 }, {itemid: "goldbar", amount: 1 } ],  weight: 1, nonStack: true, model:  "", image: "np_lsilencer.png", deg: true} //'Heavy Sniper'
itemList["silencer_l2"]	= {illegal: true, fullyDegrades: true, decayrate: 0.5, displayname: "L Silencer MkII", price: 510, craft: [ {itemid: "goldbar", amount: 3 }, {itemid: "copper", amount: 10 }, {itemid: "goldbar", amount: 1 } ],  weight: 1, nonStack: true, model:  "", image: "np_lsilencer.png", deg: true} //'Heavy Sniper'
itemList["silencer_s"]	= {illegal: true, fullyDegrades: true, decayrate: 0.5, displayname: "S Silencer", price: 510, craft: [ {itemid: "goldbar", amount: 3 }, {itemid: "copper", amount: 20 }, {itemid: "goldbar", amount: 1 } ],  weight: 1, nonStack: true, model:  "", image: "np_ssilencer.png", deg: true} //'Heavy Sniper'
itemList["silencer_s2"]	= {illegal: true, fullyDegrades: true, decayrate: 0.5, displayname: "S Silencer MKII", price: 510, craft: [ {itemid: "goldbar", amount: 3 }, {itemid: "scrapmetal", amount: 20 }, {itemid: "goldbar", amount: 1 } ],  weight: 1, nonStack: true, model:  "", image: "np_ssilencer.png", deg: true} //'Heavy Sniper'

itemList["SmallScope"]	= {illegal: true, fullyDegrades: true, decayrate: 1.0, displayname: "2x Medium Scope", price: 550, craft: [ {itemid: "goldbar", amount: 1 } ],  weight: 1, nonStack: true, model:  "", image: "np_sscope.png", deg: false} //'Heavy Sniper'

itemList["sniperammo"]	= {fullyDegrades: true, decayrate: 1.0, displayname: "Sniper Bullet x5", craft: [{itemid: "aluminium", amount: 1 }, {itemid: "plastic", amount: 1 }, {itemid: "rubber", amount: 1 }], price: 10, weight: 1, nonStack: false, model: "", image: "np_rifle-ammo.png" , deg: false}

itemList["subammo"]	    = {fullyDegrades: true, decayrate: 1.0, displayname: "Sub Bullet x50", craft: [{itemid: "aluminium", amount: 1 }, {itemid: "plastic", amount: 1 }, {itemid: "rubber", amount: 1 }], price: 100, weight: 1, nonStack: false, model: "", image: "np_sub-ammo.png" , deg: false}

itemList["TinyScope"]	= {illegal: true, fullyDegrades: true, decayrate: 1.0, displayname: "2x S Scope", price: 550, craft: [ {itemid: "goldbar", amount: 1 } ],  weight: 1, nonStack: true, model:  "", image: "np_tscope.png", deg: false} //'Heavy Sniper'


itemList["heavyammo"]	= {fullyDegrades: true, decayrate: 1.0, displayname: "Heavy Bullet x50", craft: [{itemid: "aluminium", amount: 1 }, {itemid: "plastic", amount: 1 }, {itemid: "rubber", amount: 1 }], price: 10, weight: 1, nonStack: false, model: "", image: "np_rifle-ammo.png" , deg: false}

itemList["lmgammo"]	    = {fullyDegrades: true, decayrate: 1.0, displayname: "LMG Bullet x50", craft: [{itemid: "aluminium", amount: 1 }, {itemid: "plastic", amount: 1 }, {itemid: "rubber", amount: 1 }], price: 300, weight: 1, nonStack: false, model: "", image: "np_lmg-ammo.png" , deg: false}

itemList["shotgunammo"]	= {fullyDegrades: true, decayrate: 1.0, displayname: "SG Bullet x50", craft: [{itemid: "aluminium", amount: 1 }, {itemid: "plastic", amount: 1 }, {itemid: "rubber", amount: 1 }], price: 10, weight: 1, nonStack: false, model: "", image: "np_shotgun-ammo.png" , deg: false}

itemList["MediumScope"]	= {illegal: true, fullyDegrades: true, decayrate: 1.0, displayname: "2x L Scope", price: 550, craft: [ {itemid: "goldbar", amount: 1 } ],  weight: 1, nonStack: true, model:  "", image: "np_lscope.png", deg: false} //'Heavy Sniper'

itemList["pistolammo"]	= {fullyDegrades: true, decayrate: 1.0, displayname: "Pistol Bullet x50", craft: [{itemid: "aluminium", amount: 1 }, {itemid: "plastic", amount: 1 }, {itemid: "rubber", amount: 1 }], price: 2500, weight: 1, nonStack: false, model: "", image: "np_pistol-ammo.png" , deg: false}

itemList["skammo"]	= {fullyDegrades: true, decayrate: 1.0, displayname: "Pistol Bullet x50", craft: [{itemid: "aluminium", amount: 1 }, {itemid: "plastic", amount: 1 }, {itemid: "rubber", amount: 1 }], price: 25, weight: 1, nonStack: false, model: "", image: "np_pistol-ammo.png" , deg: false}

// custom items with decay

itemList["tuner"]	    = {fullyDegrades: false, decayrate: 2.0, displayname: "Tuner tablet",       craft: [ {itemid: "electronics", amount: 50 }, {itemid: "aluminium", amount: 50 } ], price: 12500, weight: 0,   nonStack: false, model: "", image: "np_tuner.png", information: "Tuner ayarlamak için aracın içinde kullan..", deg: false}
itemList["tunner"]	    = {fullyDegrades: false, decayrate: 2.0, displayname: "Tuner Chip",       craft: [ {itemid: "electronics", amount: 50 }, {itemid: "aluminium", amount: 50 } ], price: 12500, weight: 0,   nonStack: false, model: "", image: "tunner.png", information: "Sport ve drift modu otomatik..", deg: false}

itemList["repairkit"]	= {fullyDegrades: true, decayrate: 0.25, displayname: "Tamir Kiti", craft: [{itemid: "electronics", amount: 25 }], price: 50, weight: 1, nonStack: false, model: "", image: "np_basic_repair-kit.png" , deg: false}

itemList["csgocase"]	= {fullyDegrades: true, illegal: true, decayrate: 0.5, displayname: "Silah Kasası",    craft: [ {itemid: "glucose", amount: 0.01 }, {itemid: "kasa", amount: 0.1 } ], price: 999999999, weight: 0,   nonStack: false, model: "", image: "csgocase.png", information: "Silah Kasası", deg: false}
itemList["csgocase2"]	= {fullyDegrades: true, illegal: true, decayrate: 0.5, displayname: "Para Kasası",    craft: [ {itemid: "glucose", amount: 0.01 }, {itemid: "kasa2", amount: 0.1 } ], price: 999999999, weight: 0,   nonStack: false, model: "", image: "csgocase2.png", information: "Para Kasası", deg: false}
// drugs

itemList["1gcocaine"]	= {fullyDegrades: true, illegal: true, decayrate: 0.5, displayname: "1gr kokain",    craft: [ {itemid: "glucose", amount: 0.01 }, {itemid: "coke5g", amount: 0.1 } ], price: 100, weight: 0,   nonStack: false, model: "", image: "np_cocaine-baggy.png", information: "35% Kok. ", deg: false}
itemList["1gcrack"]	    = {fullyDegrades: true, illegal: true, decayrate: 0.5, displayname: "5g Crack",  craft: [ {itemid: "bakingsoda", amount: 0.01 } , {itemid: "coke5g", amount: 0.1 } ], price: 100, weight: 0,   nonStack: false, model: "", image: "np_crack.png", information: "Crack... ", deg: false}


itemList["coke50g"]	    = {fullyDegrades: true, illegal: true, decayrate: 0.5, displayname: "coke (50g)", price: 1000, weight: 5, nonStack: false, model: "", image: "np_cocaine-brick.png", information: "Dayanıklılığınızı ve hareket hızınızı arttırır. <br> Ürünlere ayrılır." , deg: false}
itemList["coke5g"]	    = {fullyDegrades: true, illegal: true, decayrate: 0.5, displayname: "coke (5g)", craft: [{itemid: "coke50g", amount: 0.1 }], price: 150, weight: 0, nonStack: false, model: "", image: "np_cocaine-baggy.png", information: "Dayanıklılığınızı ve hareket hızınızı arttırır." , deg: false}


// gvz cocoa
itemList["koko_ham"]	    = {fullyDegrades: true, illegal: true, decayrate: 0.5, displayname: "Ham Kokain", price: 1000, weight: 5, nonStack: false, model: "", image: "koko_ham.png", information: "" , deg: false}
itemList["koko_islenmis"]	    = {fullyDegrades: true, illegal: true, decayrate: 0.5, displayname: "işlenmiş Kokain", price: 1000, weight: 5, nonStack: false, model: "", image: "koko_islenmis.png", information: "" , deg: false}
itemList["koko_islenmis2"]	    = {fullyDegrades: true, illegal: true, decayrate: 0.5, displayname: "Gram Kokainler", price: 1000, weight: 5, nonStack: false, model: "", image: "koko_islenmis2.png", information: "" , deg: false}
itemList["kagit"]	    = {fullyDegrades: true, illegal: true, decayrate: 0.5, displayname: "koko paket kagıdı", price: 1000, weight: 5, nonStack: false, model: "", image: "kagit.png", information: "" , deg: false}


itemList["joint"]	    = {fullyDegrades: true, illegal: true, decayrate: 0.75, displayname: "3g Joint",    craft: [ {itemid: "weedq", amount: 0.5 }, {itemid: "rollingpaper", amount: 1 } ], price: 20, weight: 0,   nonStack: false, model: "", image: "np_joint.png", information: "Its a Joint, man. ", deg: false}
itemList["medicaljoint"]	    = {fullyDegrades: true, illegal: true, decayrate: 0.75, displayname: "Medical Joint",    craft: [ {itemid: "weedq", amount: 0.5 }, {itemid: "rollingpaper", amount: 1 } ], price: 20, weight: 0,   nonStack: false, model: "", image: "np_joint.png", information: "Its a Joint, man. ", deg: false}

itemList["maleseed"]	= {fullyDegrades: true, decayrate: 2.0, displayname: "Erkek Tohum", price: 100, weight: 0,   nonStack: false, model: "", image: "np_weed-seed.png", information: "Erkek tohum", deg: false}
itemList["weed_femaleseed"]	= {fullyDegrades: true, decayrate: 2.0, displayname: "Dişi Tohum", price: 100, weight: 0,   nonStack: false, model: "", image: "np_weed-seed.png", information: "Teşekkürler." , deg: false}
itemList["weed_fertilizer"]	= {fullyDegrades: false, decayrate: 1.0, displayname: "Gübre", craft: [{itemid: "purmuzucu", amount: 1 }, {itemid: "steel", amount: 5 }, {itemid: "aluminium", amount: 2 }, {itemid: "lighter", amount: 1 }], price: 5, weight: 1, nonStack: false, model: "", image: "ffrp_fertilizer.png" , deg: false}
itemList["weed_leaf"]	= {fullyDegrades: false, decayrate: 1.0, displayname: "Esrar Yaprağı", craft: [{itemid: "purmuzucu", amount: 1 }, {itemid: "steel", amount: 5 }, {itemid: "aluminium", amount: 2 }, {itemid: "lighter", amount: 1 }], price: 50, weight: 2, nonStack: false, model: "", image: "np_driedbud.png" , deg: false}


itemList["methbag"]	    = {fullyDegrades: true, illegal: true, decayrate: 2.0, displayname: " Meth (1g)", price: 500, weight: 0, nonStack: false, model: "", image: "np_meth-baggy.png", information: " Dayanıklılığınızı ve hareket hızınızı arttırır. Tuhaf kokusu var." , deg: false}

itemList["oxy"]	        = {fullyDegrades: true, illegal: true, decayrate: 0.75, displayname: "Oxy 100mg", price: 150, weight: 0, nonStack: false, model: "", image: "np_Oxy.png", information: "Bağımlı yapabilir " , deg: false}


itemList["weed12oz"]	= {fullyDegrades: true, illegal: true, decayrate: 0.0025, displayname: "Ot 1kg", price: 250, weight: 3, nonStack: false, model: "", image: "np_box-of-weed-12-18-oz.png", information: "Düşük stress <br> Dikkat kırılmaz<br> Ürünlere ayrılır." , deg: false}
itemList["weed5oz"]	    = {fullyDegrades: true, illegal: true, decayrate: 0.5, displayname: "Ot 250g", price: 500,   weight: 5, nonStack: false, model:  "", image: "np_weed-brick-40-Oz.png", information: "Düşük stress <br> Hmmm" , deg: false}
itemList["weedoz"]	    = {fullyDegrades: true, illegal: true, decayrate: 0.3, displayname: "Ot 100g", price: 200, weight: 2, nonStack: false, model:  "", image: "np_weed-4-Oz.png", information: "Düşük stress" , deg: false}
itemList["weedq"]	    = {fullyDegrades: true, illegal: true, decayrate: 0.3, displayname: "Ot 50g", craft: [{itemid: "weedoz", amount: 0.25 }], price: 65, weight: 1, nonStack: false, model: "", image: "np_weed-oz.png", information: "Düşük stress" , deg: false}


itemList["lsdtab"]	    = {fullyDegrades: true, illegal: true, decayrate: 0.3, displayname: "Acid Tab", price: 200, weight: 1, nonStack: false, model:  "", image: "np_lsdtab.png", information: "For spectacular trips, or whatever." , deg: true}
itemList["badlsdtab"]	    = {fullyDegrades: true, illegal: true, decayrate: 0.3, displayname: "Pure Acid Tab", price: 0, weight: 1, nonStack: false, model:  "", image: "np_badlsdtab.png", information: "For spectacular trips, or whatever." , deg: true}


// other drugy shit

itemList["aspirin"]	    = {fullyDegrades: false, decayrate: 0.0, displayname: "Aspirin", price: 0, weight: 0, nonStack: false, model:  "", image: "np_aspirin.png", information: "Bu Aspirin", deg: false}

// taner uzum portakal
itemList["uzum"]	    = {fullyDegrades: true, decayrate: 0.0, displayname: "grape", price: 0, weight: 3, nonStack: false, model:  "", image: "uzum.png", information: "salkım üzüm", deg: false}
itemList["portakal"]	    = {fullyDegrades: true, decayrate: 0.0, displayname: "Orange", price: 0, weight: 3, nonStack: false, model:  "", image: "portakal.png", information: "portakal", deg: false}
itemList["portakalsuyu"]	    = {fullyDegrades: true, decayrate: 0.0, displayname: "Orange juice", price: 0, weight: 3, nonStack: false, model:  "", image: "portakalsuyu.png", information: "Fanta", deg: false}
itemList["islenmisuzum"]	    = {fullyDegrades: true, decayrate: 0.0, displayname: "processed grape", price: 0, weight: 3, nonStack: false, model:  "", image: "islenmisuzum.png", information: "üzüm suyu", deg: false}
itemList["1grkokain"]	        = {fullyDegrades: true, illegal: true, decayrate: 0.75, displayname: "1gr Coke", price: 150, weight: 3, nonStack: false, model: "", image: "hazirkokain.png", information: "Bağımlı yapabilir " , deg: false}
itemList["hazirkokain"]	        = {fullyDegrades: true, illegal: true, decayrate: 0.75, displayname: "packaged cocaine", price: 150, weight: 3, nonStack: false, model: "", image: "hazirkokain.png", information: "Bağımlı yapabilir " , deg: false}
itemList["jelatin"]	        = {fullyDegrades: true, illegal: true, decayrate: 0.75, displayname: "extacy", price: 150, weight: 3, nonStack: false, model: "", image: "jelatin.png", information: "extacy hap" , deg: false}

// taner hamburger

itemList["burger"]	    = {fullyDegrades: true, decayrate: 0.0, displayname: "Hamburger", price: 0, weight: 3, nonStack: false, model:  "", image: "burger.png", information: "satılır", deg: false}
itemList["burgerbread"]	    = {fullyDegrades: true, decayrate: 0.0, displayname: "Hamburger Bread", price: 0, weight: 3, nonStack: false, model:  "", image: "burgerbread.png", information: "hamburger yapmak için kullanılır", deg: false}
itemList["burgermarul"]	    = {fullyDegrades: true, decayrate: 0.0, displayname: "washed lettuce", price: 0, weight: 3, nonStack: false, model:  "", image: "burgermarul.png", information: "Yıkanmıs marul", deg: false}
itemList["burgermeat"]	    = {fullyDegrades: true, decayrate: 0.0, displayname: "hamburger meat", price: 0, weight: 3, nonStack: false, model:  "", image: "burgermeat.png", information: "Hamburger yapmada kullan", deg: false}
itemList["dirtymarul"]	    = {fullyDegrades: true, decayrate: 0.0, displayname: "frozen lettuce", price: 0, weight: 3, nonStack: false, model:  "", image: "dirtymarul.png", information: "dondurulmus marul", deg: false}
itemList["frozenbread"]	    = {fullyDegrades: true, decayrate: 0.0, displayname: "Frozen Bread", price: 0, weight: 3, nonStack: false, model:  "", image: "frozenbread.png", information: "donmus ekmek", deg: false}
itemList["frozenmeat"]	    = {fullyDegrades: true, decayrate: 0.0, displayname: "frozen meat", price: 0, weight: 3, nonStack: false, model:  "", image: "frozenmeat.png", information: "donmus et", deg: false}



itemList["cabsinthe"] 	= {fullyDegrades: false,  decayrate: 0.0, displayname: "Kenevirli Absinthe", price: 1, weight: 0, nonStack: false, model: "", image: "np_cannabis-absinthe.png", information: "Duuude..bro...", deg: false }

itemList["redwine"]	    = {fullyDegrades: false, decayrate: 0.0, displayname: "Kırmızı Şarap", price: 1, weight: 0, nonStack: false, model:  "", image: "np_red-wine-bottle.png", information: "Sadece şarap", deg: false }
itemList["rum"]	        = {fullyDegrades: false, decayrate: 0.0, displayname: "Rom", price: 1, weight: 0, nonStack: false, model:  "", image: "np_rum.png", information: "Neden gitti?", deg: false }
itemList["tequila"] = {fullyDegrades: false,  decayrate: 0.0, displayname: "Tequila", price: 1, weight: 0, nonStack: false, model: "", image: "np_tequila.png", information: "Tequilya Marka", deg: false }
itemList["tequilashot"] = {fullyDegrades: false,  decayrate: 0.0, displayname: "Shot of Tequila", price: 1, weight: 0, nonStack: false, model: "", image: "np_tequila-shot.png", information: "Kendine iyilik yap", deg: false }
itemList["vodka"]	    = {fullyDegrades: false, decayrate: 0.0, displayname: "Votka", price: 25, weight: 1, nonStack: false, model: "", image: "np_vodka.png", information: "Susuzluğu giderir" , deg: false}

itemList["whiskey"]	    = {fullyDegrades: false, decayrate: 0.0, displayname: "Viski", price: 25, weight: 1, nonStack: false, model: "", image: "np_whiskey.png", information: "Susuzluğu giderir" , deg: false}

itemList["420bar"] 		= {fullyDegrades: false,  decayrate: 0.0, displayname: "420 Bar", price: 1, weight: 0, nonStack: false, model: "", image: "np_420-bar.png", information: "Duuuude brah...", deg: false }
itemList["69box"] 		= {fullyDegrades: false,  decayrate: 0.0, displayname: "69 Puro Paketi", price: 1, weight: 0, nonStack: false, model: "", image: "np_69-cigar-box.png", information: "Küba'nın tadı", deg: false }
itemList["69pack"] 		= {fullyDegrades: false,  decayrate: 0.0, displayname: "69 Sigara Paketi", price: 1, weight: 0, nonStack: false, model: "", image: "np_69-brand-pack.png", information: "Sadece bir tane daha", deg: false }

itemList["champagne"] 	= {fullyDegrades: false,  decayrate: 0.0, displayname: "Şampanya", price: 1, weight: 0, nonStack: false, model: "", image: "np_champagne.png", information: "Kutlama zamanı", deg: false }

itemList["cgummies"]	= {fullyDegrades: false, decayrate: 0.0, displayname: "Kenevir Sakızları", price: 1, weight: 0, nonStack: false, model:  "", image: "np_cannabis-gummies.png", information: "Duuude...", deg: false }

itemList["chloroform"] 	= {fullyDegrades: false,  decayrate: 0.0, displayname: "Kloroform", price: 1, weight: 0, nonStack: false, model: "", image: "np_chloroform.png", information: "Özel tarif için", deg: false }
itemList["ibuprofen"]	= {fullyDegrades: false, decayrate: 0.0, displayname: "Ibuprofen", price: 150, weight: 0, nonStack: false, model:  "", image: "np_ibuprofen.png", information: "Cures all. Right?" , deg: false}
itemList["drugx"]	    = {fullyDegrades: false, decayrate: 0.0, displayname: "Drug X", price: 1, weight: 0, nonStack: false, model:  "", image: "np_drug-x.png", information: "Human Labs test edilmekte", deg: false }



// food

itemList["beer"]    	= {fullyDegrades: false, decayrate: 0.0, displayname: "Beer", price: 50, weight: 1, nonStack: false, model: "", image: "np_beer.png", information: "7 tane Redbulla eşittir." , deg: false}

itemList["bfsandwich"] 	= {fullyDegrades: false,  decayrate: 0.0, displayname: "Breakfast Sandwich", price: 1, weight: 0, nonStack: false, model: "", image: "np_breakfast-sandwich.png", information: "Rise and shine", deg: false }

itemList["cbballs"]	    = {fullyDegrades: false, decayrate: 0.0, displayname: "Cluckin Balls", price: 1, weight: 0, nonStack: false, model:  "", image: "np_cluckin-balls.png", information: "Ooh..salty. 440Cal", deg: false }
itemList["cbbucket"] 	= {fullyDegrades: false,  decayrate: 0.0, displayname: "Chicken Bucket", price: 1, weight: 0, nonStack: false, model: "", image: "np_chicken-bucket.png", information: "I like chicken! 2350Cal", deg: false }
itemList["cbclucker"]	= {fullyDegrades: false, decayrate: 0.0, displayname: "Little Clucker", price: 1, weight: 0, nonStack: false, model:  "", image: "np_little-clucker.png", information: "Cluckin toy not included", deg: false }
itemList["cbdrink"]	    = {fullyDegrades: false, decayrate: 0.0, displayname: "Cluckin Drink", price: 1, weight: 0, nonStack: false, model:  "", image: "np_cluckin-drink.png", information: "Hell Cluckin Yeah", deg: false }
itemList["cbfarmers"]	= {fullyDegrades: false, decayrate: 0.0, displayname: "Burger Paketi", price: 1, weight: 0, nonStack: false, model:  "", image: "np_farmers-surprise.png", information: "İçerisinde Kola,Patates Kızartması ve Hamburger vardır.", deg: false }
itemList["cbfowl"]	    = {fullyDegrades: false, decayrate: 0.0, displayname: "Fowl Burger", price: 1, weight: 0, nonStack: false, model:  "", image: "np_fowl-burger.png", information: "If you enjoyed it, the chicken didnt die in vain! 900Cal", deg: false }
itemList["cbfries"]	    = {fullyDegrades: false, decayrate: 0.0, displayname: "Cluckin Fries", price: 1, weight: 0, nonStack: false, model:  "", image: "np_cluckin-fries.png", information: "Cluckinsize included. 680Cal", deg: false }
itemList["cbrings"]	    = {fullyDegrades: false, decayrate: 0.0, displayname: "Cluckin Rings", price: 1, weight: 0, nonStack: false, model:  "", image: "np_cluckin-rings.png", information: "Suffering never tasted so good! 850Cal", deg: false }
itemList["cbrownie"]	= {fullyDegrades: false, decayrate: 0.0, displayname: "Cannabis Brownie", price: 1, weight: 0, nonStack: false, model:  "", image: "np_cannabis-brownie.png", information: "Dude...", deg: false }
itemList["cbveggy"]	    = {fullyDegrades: false, decayrate: 0.0, displayname: "Veggy Salad", price: 1, weight: 0, nonStack: false, model:  "", image: "np_veggy-salad.png", information: "Mystery chewy bits included. 750Cal", deg: false }

itemList["cocoab"] 		= {fullyDegrades: false,  decayrate: 0.0, displayname: "Cocoa Butter", price: 1, weight: 0, nonStack: false, model: "", image: "np_cocoa-butter.png", information: "Hecho en Guatemala", deg: false }

itemList["cookie"]	    = {fullyDegrades: false, decayrate: 0.0, displayname: "Cookie", price: 1, weight: 0, nonStack: false, model:  "", image: "np_cookie.png", information: "Baked with love", deg: false }
itemList["crabcakes"] 	= {fullyDegrades: false,  decayrate: 0.0, displayname: "Crab Cakes", price: 1, weight: 0, nonStack: false, model: "", image: "np_crab-cakes.png", information: "Scrumptious", deg: false }

itemList["energybar"]	= {fullyDegrades: false, decayrate: 0.0, displayname: "Energy Bar", price: 1, weight: 0, nonStack: false, model:  "", image: "np_energy-bar.png", information: "Ego Chaser bars for chads", deg: false }


itemList["pizza"]	    = {fullyDegrades: false, decayrate: 0.0, displayname: "Pizza Slice", price: 1, weight: 0, nonStack: false, model:  "", image: "np_pizza-slice.png", information: "Check for pineapple", deg: false }

itemList["sushiplate"]	= {fullyDegrades: false, decayrate: 0.0, displayname: "Sushi Plate", price: 1, weight: 0, nonStack: false, model:  "", image: "np_sushi-plate.png", information: "Dip fish-side first", deg: false }
itemList["sushiroll"]	= {fullyDegrades: false, decayrate: 0.0, displayname: "Sushi Rolls", price: 1, weight: 0, nonStack: false, model:  "", image: "np_sushi-rolls.png", information: "Made fresh", deg: false }


itemList["wings"] = {fullyDegrades: false,  decayrate: 0.0, displayname: "Wings", price: 1, weight: 0, nonStack: false, model: "", image: "np_wings.png", information: "Dont lick your fingers", deg: false }

itemList["chips"]	    = {fullyDegrades: false, decayrate: 0.0, displayname: "Cips", price: 25, weight: 0, nonStack: true, model:  "", image: "np_chips.png", information: "Tamamen doymuş yağlardan yapılmıştır", deg: false }

itemList["chocobar"]	= {fullyDegrades: false, decayrate: 0.0, displayname: "Çikolata", price: 4, weight: 0, nonStack: false, model:  "", image: "np_chocolate-bar.png", information: "Senin kadar tatlı ;)", deg: false }


itemList["maccheese"] = {fullyDegrades: false,  decayrate: 0.0, displayname: "Mac & Cheese", price: 1, weight: 0, nonStack: false, model: "", image: "np_macn-cheese.png", information: "Sapid", deg: false }



itemList["meteorite"]	= {fullyDegrades: false, decayrate: 0.0, displayname: "Fukang Meteorite", price: 1, weight: 0, nonStack: false, model:  "", image: "np_fukang-meteorite.png", information: "Out of this world", deg: false }



itemList["pancakes"]	= {fullyDegrades: false, decayrate: 0.0, displayname: "Pancakes", price: 150, weight: 0, nonStack: false, model:  "", image: "np_pancakes.png", information: "Flat but tasty" , deg: false}
itemList["panini"] = {fullyDegrades: false,  decayrate: 0.0, displayname: "Panini Sandwich", price: 1, weight: 0, nonStack: false, model: "", image: "np_panini-sandwich.png", information: "Piquant", deg: false }

itemList["pinacolada"] = {fullyDegrades: false,  decayrate: 0.0, displayname: "Pina Colada", price: 1, weight: 0, nonStack: false, model: "", image: "np_pina-colada.png", information: "And getting caught in the rain", deg: false }

itemList["popcorn"]	    = {fullyDegrades: false, decayrate: 0.0, displayname: "Patlamış Mısır", price: 25, weight: 0, nonStack: false, model:  "", image: "np_popcorn.png", information: "Eski sevgilin kadar patlak", deg: false }

itemList["ramen"]	    = {fullyDegrades: false, decayrate: 0.0, displayname: "Ramen", price: 150, weight: 0, nonStack: false, model:  "", image: "np_ramen.png", information: "Itadakimasu!" , deg: false}



itemList["spaghetti"]	= {fullyDegrades: false, decayrate: 0.0, displayname: "Spaghetti", price: 150, weight: 0, nonStack: false, model:  "", image: "np_spaghetti.png", information: "Knees weak..." , deg: false}
itemList["spaghettican"] = {fullyDegrades: false, decayrate: 0.0, displayname: "Can of Spaghetti", price: 1, weight: 0, nonStack: false, model: "", image: "np_spaghetti-can.png", information: "Fresh from the trunk, awight?", deg: false }

itemList["torta"] = {fullyDegrades: false,  decayrate: 0.0, displayname: "Torta", price: 1, weight: 0, nonStack: false, model: "", image: "np_torta.png", information: "El mejor jamon", deg: false }



// dayz food   sosisli



itemList["coffee"]	    = {fullyDegrades: true, decayrate: 0.01, displayname: "coffee", craft: [{itemid: "foodingredient", amount: 1 } ], price: 50, weight: 12, nonStack: false, model: "", image: "np_coffee.png", information: "Wow, güçlü." , deg: false}

itemList["cola"]	    = {fullyDegrades: true, decayrate: 0.01, displayname: "cola", price: 5, weight: 1, nonStack: false, model: "", image: "np_coke.png", information: "Susuzluğu giderir" , deg: false}

itemList["burrito"]	    = {fullyDegrades: true, decayrate: 0.01, displayname: "Burrito", craft: [{itemid: "foodingredient", amount: 1 } ], price: 0, weight: 12, nonStack: false, model:  "", image: "np_burrito.png", information: "Burrito" , deg: false}

itemList["eggsbacon"]	= {fullyDegrades: true, decayrate: 0.01, displayname: "Eggs and Bacon", craft: [{itemid: "foodingredient", amount: 1 } ], price: 0, weight: 12, nonStack: false, model:  "", image: "np_eggs-and-bacon.png", information: "Great start to your morning" , deg: false}

itemList["donut"]	    = {fullyDegrades: true, decayrate: 0.01, displayname: "Donut", craft: [{itemid: "foodingredient", amount: 1 } ], price: 30, weight: 1, nonStack: true, model: "", image: "np_donut.png", information: "Sadece yemek amaçlı kullanın.", deg: false}

itemList["sosisli"]	    = {fullyDegrades: true, decayrate: 0.01, displayname: "Hotdog", craft: [{itemid: "foodingredient", amount: 1 } ], price: 30, weight: 1, nonStack: true, model: "", image: "sosisli.png", information: "", deg: false}

itemList["foodgoods"]	= {fullyDegrades: true, decayrate: 0.01, displayname: "Food goods", price: 500, weight: 3, nonStack: false, model: "", image: "np_food-goods.png" , deg: false}

itemList["foodingredient"]	= {fullyDegrades: true, decayrate: 0.01, displayname: "Materials", price: 10, weight: 5, nonStack: false, model: "", image: "np_ingredients.png", information: "Yemek yapmak için kullanılabilir", deg: false}

itemList["greencow"]	= {fullyDegrades: true, decayrate: 0.01, displayname: "Yeşil Enerji", craft: [{itemid: "foodingredient", amount: 1 } ], price: 10, weight: 12, nonStack: false, model: "", image: "np_green-cow.png", information: "Dayanıklı ve hızlı hissedersin" , deg: false}

itemList["churro"]	    = {fullyDegrades: true, decayrate: 0.01, displayname: "Churro", craft: [{itemid: "foodingredient", amount: 1 } ], price: 10, weight: 12, nonStack: false, model: "", image: "np_churro.png", information: "Uzun atıştırmalık", deg: false}

itemList["bakingsoda"]	= {fullyDegrades: true, decayrate: 0.01, displayname: "Karbonat", price: 50,  weight: 0,   nonStack: false, model: "", image: "np_bakingsoda.png", information: "Kabartma tozu..?Crack Kok yapmak için 10g Kok torbası ile karıştırın.", deg: false}

itemList["bleederburger"]	= {fullyDegrades: true, decayrate: 0.01, displayname: "The Bleeder", price: 50,      weight: 1,   nonStack: false, model: "", image: "np_the-bleeder.png", information: "Sates Hunger and reduces stress." , deg: false}

itemList["water"]	    = {fullyDegrades: true, decayrate: 0.01, displayname: "water", craft: [{itemid: "foodingredient", amount: 1 } ], price: 25, weight: 1, craft: [{itemid: "foodingredient", amount: 1 } ], nonStack: true, model: "", image: "np_water.png", information: "Afrika Sad..." , deg: false}

itemList["hotdog"]	    = {fullyDegrades: true, decayrate: 0.01, displayname: "Hot Dog", craft: [{itemid: "foodingredient", amount: 1 } ], price: 10, weight: 12, nonStack: false, model:  "", image: "np_hotdog.png", information: "İçinde ne olduğunu sorma" , deg: false}

itemList["icecream"]	= {fullyDegrades: true, decayrate: 0.01, displayname: "icecream", craft: [{itemid: "foodingredient", amount: 1 } ], price: 5, weight: 1, nonStack: true, model: "", image: "np_icecream.png", information: "Gerçek insan sütünden yapılmıştır LUL.", deg: false}

itemList["jailfood"]	= {fullyDegrades: true, decayrate: 0.001, displayname: "jail food", price: 0, weight: 50, nonStack: false, model: "", image: "np_jailfood.png", information: "Yağsız ve tuzsuz" , deg: false}

itemList["sandwich"]	= {fullyDegrades: true, decayrate: 0.01,craft: [{itemid: "foodingredient", amount: 1 } ],displayname: "Sandwich", price: 5, weight: 1, nonStack: false, model: "", image: "np_sandwich.png", information: "Sates Hunger" , deg: false}

itemList["torpedo"]	    = {fullyDegrades: true, decayrate: 0.01, displayname: "Torpedo", price: 50,      weight: 1,   nonStack: false, model: "", image: "np_torpedo.png", information: "Sates Hunger and reduces stress." , deg: false}

itemList["treat"]	    = {fullyDegrades: true, decayrate: 0.01, displayname: "Köpek Ödül Maması", price: 69, weight: 0, nonStack: false, model:  "", image: "np_treat.png", information: "Köpekler için yemek", deg: false }

itemList["hamburger"]	= {fullyDegrades: true, decayrate: 0.01, displayname: "Hamburger", price: 5, craft: [{itemid: "foodingredient", amount: 1 } ], weight: 1, nonStack: false, model: "", image: "np_hamburger.png", information: "Açlığı giderir." , deg: false}

itemList["weedtaco"]	    = {fullyDegrades: true, decayrate: 0.00012, displayname: "Delivery", craft: [{itemid: "foodingredient", amount: 1 } ], price: 10, weight: 5, nonStack: false, model: "", image: "np_paperbag.png", information: "This aint free taco.", deg: false}

itemList["fishtaco"]	= {fullyDegrades: true, decayrate: 0.01, displayname: "Fish Taco", craft: [{itemid: "foodingredient", amount: 1 } ], price: 10, weight: 12, nonStack: false, model: "", image: "np_fishtaco.png", information: "Make like the fishes.", deg: false}

itemList["heartstopper"] = {fullyDegrades: true, decayrate: 0.01, displayname: "Kalp Durduran Hamburger", price: 50,      weight: 1,   nonStack: false, model: "", image: "np_the-heart-stopper.png", information: "Açlığı giderir." , deg: false}

itemList["meatfree"]	= {fullyDegrades: true, decayrate: 0.01, displayname: "Tavuk Burger", price: 50,      weight: 1,   nonStack: false, model: "", image: "np_meat-free.png", information: "Açlığı giderir." , deg: false}

itemList["mshake"]	    = {fullyDegrades: true, decayrate: 0.01, displayname: "Milkshake", craft: [{itemid: "foodingredient", amount: 1 } ], price: 10, weight: 3, nonStack: false, model:  "", image: "np_milkshake.png", information: "Hand-scooped for you" , deg: false}
itemList["taco"]	    = {fullyDegrades: true, decayrate: 0.01, displayname: "Taco", craft: [{itemid: "foodingredient", amount: 1 } ], price: 10, weight: 3, nonStack: false, model: "", image: "np_taco.png", information: "This aint free taco.", deg: false}



// materials

itemList["aluminium"]	= {fullyDegrades: false, decayrate: 0.0, displayname: "aluminium", craft: [{itemid: "recyclablematerial", amount: 10 } ], price: 10, weight: 1, nonStack: false, model: "", image: "np_aluminum.png" , deg: false}
itemList["plastic"]	    = {fullyDegrades: false, decayrate: 0.0, displayname: "plastic", craft: [{itemid: "recyclablematerial", amount: 10 } ], price: 11, weight: 1, nonStack: false, model: "", image: "np_plastic.png" , deg: false}
itemList["copper"]	    = {fullyDegrades: false, decayrate: 0.0, displayname: "copper", craft: [{itemid: "bakirkablo", amount: 10 } ], price: 10, weight: 1, nonStack: false, model: "", image: "np_copper.png" , deg: false}
itemList["electronics"]	= {fullyDegrades: false, decayrate: 0.0, displayname: "electronics", craft: [{itemid: "stolenpsp", amount: 2 }, {itemid: "stolennokia", amount: 2 } ], price: 15, weight: 1, nonStack: false, model: "", image: "np_electronics.png" , deg: false}
itemList["rubber"]	    = {fullyDegrades: false, decayrate: 0.0, displayname: "rubber", craft: [{itemid: "recyclablematerial", amount: 1 } ], price: 10, weight: 1, nonStack: false, model: "", image: "np_rubber.png" , deg: false}
itemList["scrapmetal"]	= {fullyDegrades: false, decayrate: 0.0, displayname: "scrapmetal", craft: [{itemid: "aracparcalari", amount: 1 } ], price: 15, weight: 1, nonStack: false, model: "", image: "np_scrap-metal.png" , deg: false}
itemList["steel"]	    = {fullyDegrades: false, decayrate: 0.0, displayname: "steel", craft: [{itemid: "aracparcalari", amount: 1 } ], price: 15, weight: 1, nonStack: false, model: "", image: "np_steel.png" , deg: false}
itemList["glass"]	    = {fullyDegrades: false, decayrate: 0.0, displayname: "glass", price: 12, craft: [{itemid: "recyclablematerial", amount: 10 } ] ,weight: 1, nonStack: false, model: "", image: "np_glass.png" , deg: false}
itemList["recyclablematerial"]	= {fullyDegrades: false, decayrate: 0.0, displayname: "Recyclable material", price: 20, weight: 0, nonStack: false, model: "", image: "np_recyclable-material.png" , deg: false}


itemList["advlockpick"]	= {fullyDegrades: true, decayrate: 0.25, displayname: "Adv lockpick", craft: [{itemid: "scrapmetal", amount: 3 }, {itemid: "plastiksise", amount: 5 }, {itemid: "steel", amount: 1 }], price: 2500, weight: 3, nonStack: false, model: "", image: "np_advanced-lockpick.png" , deg: false}
itemList["armor"]	    = {fullyDegrades: true, decayrate: 0.25, displayname: "Armor", craft: [{itemid: "aluminium", amount: 5 }, {itemid: "plastic", amount: 1 }, {itemid: "rubber", amount: 1 }], price: 500, weight: 1, nonStack: false, model: "", image: "np_chest-armor.png", information: "Sizi korur" , deg: false}
itemList["bandage"]	    = {displayname: "bandage", price: 50, weight: 1, nonStack: false, model: "prop_ld_health_pack", image: "np_bandage.png", information: "Yaralı iyileştirir ve kanamayı azaltır" , deg: false}




// general items

itemList["aluminiumoxide"]	= {fullyDegrades: false, decayrate: 0.0, displayname: "aluminiumoxide", price: 55, weight: 1, nonStack: false, model: "", image: "np_aluminum-oxide.png" , deg: false}
itemList["advrepairkit"]	= {fullyDegrades: false, decayrate: 0.0, displayname: "adv repairkit",  craft: [ {itemid: "electronickit", amount: 3 }, {itemid: "glass", amount: 3 }, {itemid: "plastic", amount: 5 } ], price: 170,   weight: 5, nonStack: false, model: "", image: "np_repair-toolkit.png", information: "1 kez kullanılır. Motor aksamını tam olarak tamir eder.", deg: false}
itemList["assphone"]	= {fullyDegrades: false, illegal: true, decayrate: 0.0, displayname: "Ass Phone", price: 500, weight: 5, nonStack: false, model: "", image: "np_poophone.png", information: "-7 Jail <br> +5 Vibrate <br> You cant seem to work out the lock code? <br> If it has roleplay stats, it must be roleplay." , deg: false}







// custom items

itemList["ace"]	        = {fullyDegrades: false, decayrate: 0.0, displayname: "Ace of Spades", price: 1, weight: 0, nonStack: false, model:  "", image: "np_ace-of-spades.png", information: "Up your sleeve", deg: false }
itemList["action"]	    = {fullyDegrades: false, decayrate: 0.0, displayname: "Action Figure", price: 1, weight: 0, nonStack: false, model:  "", image: "np_action-figure.png", information: "Superhero: Impotent Rage", deg: false }
itemList["agothic"] 	= {fullyDegrades: false,  decayrate: 0.0, displayname: "American Gothic", price: 1, weight: 0, nonStack: false, model: "", image: "np_american-gothic.png", information: "Wood 1930", deg: false }
itemList["armxray"]	    = {fullyDegrades: false, decayrate: 0.0, displayname: "Arm X-Ray", price: 1, weight: 0, nonStack: false, model:  "", image: "np_arm-xray.png", information: "Ouch...", deg: false }
itemList["atacos"] 		= {fullyDegrades: false,  decayrate: 0.0, displayname: "Tacos de Asada", price: 1, weight: 0, nonStack: false, model: "", image: "np_tacos-de-asada.png", information: "I could eat ten", deg: false }
itemList["azpapers"] 	= {fullyDegrades: false,  decayrate: 0.0, displayname: "Aztecas Kağıdı", price: 1, weight: 0, nonStack: false, model: "", image: "np_aztecas-papers.png", information: "Orale", deg: false }

itemList["anime"]	    = {fullyDegrades: false, decayrate: 0.0, displayname: "Anime Poster", price: 1, weight: 0, nonStack: false, model:  "", image: "np_anime-poster.png", information: "Weebs in uwu", deg: false }
itemList["antlers"] 	= {fullyDegrades: false,  decayrate: 0.0, displayname: "Geyik Boynuzu", price: 1, weight: 0, nonStack: false, model: "", image: "np_antlers.png", information: "Güzel bir ödül", deg: false }
itemList["aodcut"]      = {fullyDegrades: false, decayrate: 0.0, displayname: "AoD MC Cut", price: 1, weight: 0, nonStack: false, model: "", image: "np_aod-cut.png", information: "The fruits of Lester Arnold's labor", deg: false }

itemList["blackbelt"]	= {fullyDegrades: false, decayrate: 0.0, displayname: "Siyah Kemer", price: 1, weight: 0, nonStack: false, model:  "", image: "np_black-belt.png", information: "Usta seviyesi 4/4", deg: false }
itemList["blackchip"] 	= {fullyDegrades: false,  decayrate: 0.0, displayname: "Siyah Chip", price: 1, weight: 0, nonStack: false, model: "", image: "np_black-chip.png", information: "Elindeyse iyi hissedersin", deg: false }
itemList["bglass"] 		= {fullyDegrades: false,  decayrate: 0.0, displayname: "Beer Glass", price: 1, weight: 0, nonStack: false, model: "", image: "np_glass-of-beer.png", information: "Wait for this all to blow over", deg: false }
itemList["bobross"]	    = {fullyDegrades: false, decayrate: 0.0, displayname: "Bob Ross Photo", price: 1, weight: 0, nonStack: false, model:  "", image: "np_bob-ross-photo.png", information: "Happy little loose ends...", deg: false }
itemList["bondicut"]	= {fullyDegrades: false, decayrate: 0.0, displayname: "Bondi Boys Cut", price: 1, weight: 0, nonStack: false, model:  "", image: "np_bondi-cut.png", information: "And an old rocking chair", deg: false }


itemList["bspapers"]	= {fullyDegrades: false,  decayrate: 0.0, displayname: "Ballas Kağıdı", price: 1, weight: 0, nonStack: false, model: "", image: "np_ballas-papers.png", information: "İyi misin?", deg: false }
itemList["bucket"]	    = {fullyDegrades: false, decayrate: 0.0, displayname: "Kova", price: 40, weight: 1, nonStack: false, model: "", image: "np_bucket.png" , deg: false}
itemList["burialmask"]	= {fullyDegrades: false, decayrate: 0.0, displayname: "Burial Mask", price: 1, weight: 0, nonStack: false, model:  "", image: "np_burial-mask.png", information: "Mask of Tutankhamun", deg: false }

itemList["braab"]	    = {fullyDegrades: false, decayrate: 0.0, displayname: "Braab Shirt", price: 150, weight: 0, nonStack: false, model:  "", image: "np_braab-tshirt.png", information: "Yikes" , deg: false}
itemList["brain"]	    = {fullyDegrades: false, decayrate: 0.0, displayname: "Brain MRI", price: 1, weight: 0, nonStack: false, model:  "", image: "np_brain-mri.png", information: "Ow...", deg: false }

itemList["bonsai"] 		= {fullyDegrades: false,  decayrate: 0.0, displayname: "Bonsai Tree", price: 1, weight: 0, nonStack: false, model: "", image: "np_bonsai-tree.png", information: "Be one with nature", deg: false }

itemList["cactus"] 		= {fullyDegrades: false,  decayrate: 0.0, displayname: "Cactus", price: 1, weight: 0, nonStack: false, model: "", image: "np_cactus.png", information: "For the lazy", deg: false }

itemList["cathat"] 		= {fullyDegrades: false,  decayrate: 0.0, displayname: "Children's Book", price: 1, weight: 0, nonStack: false, model: "", image: "np_childrens-book.png", information: "Its story time...", deg: false }

itemList["camille"] 	= {fullyDegrades: false,  decayrate: 0.0, displayname: "Camille", price: 1, weight: 0, nonStack: false, model: "", image: "np_camille.png", information: "Monet 1866", deg: false }

itemList["carbattery"]	= {fullyDegrades: false, decayrate: 0.0, displayname: "Akü", price: 150, weight: 0, nonStack: false, model:  "", image: "np_car-battery.png", information: "Car Battery" , deg: false}
itemList["carhood"]	    = {fullyDegrades: false, decayrate: 0.0, displayname: "Araba Kaputu", price: 150, weight: 0, nonStack: false, model:  "", image: "np_car-hood.png", information: "Car Hood" , deg: false}
itemList["cashroll"]	= {fullyDegrades: false, decayrate: 0.0, displayname: "Roll of Cash", price: 1, weight: 0, nonStack: false, model:  "", image: "np_cash-roll.png", information: "Whats the count..", deg: false }

itemList["cashstack"]	= {fullyDegrades: false, decayrate: 0.0, displayname: "Stack of Cash", price: 1, weight: 0, nonStack: false, model:  "", image: "np_cash-stack.png", information: "Hepsi sıralı ve çok güzel.", deg: false }

itemList["bdiamond"]	= {fullyDegrades: false, decayrate: 0.0, displayname: "Mavi Elmas", price: 1, weight: 0, nonStack: false, model:  "", image: "np_blue-diamond.png", information: "Bavaria 1918.", deg: false }


itemList["band"]	= {fullyDegrades: false, decayrate: 0.0, displayname: "band", price: 1, weight: 0, nonStack: false, model:  "", image: "np_cash-stack.png", information: "Çok sayıda düşük miktarda para  - ", deg: false }
itemList["rollcash"]	= {fullyDegrades: false, decayrate: 0.0, displayname: "Küçük Para Rulosu", price: 1, weight: 0, nonStack: false, model:  "", image: "np_cash-roll.png", information: "Çok sayıda düşük miktarda para - ", deg: false }

itemList["battery"]	    = {fullyDegrades: false, decayrate: 0.0, displayname: "Küçük Batarya", price: 10, weight: 1, nonStack: false, model: "", image: "np_battery.png" , deg: false}
itemList["bazooka"]	    = {fullyDegrades: false, decayrate: 0.0, displayname: "Bazooka Suppressor", price: 1, weight: 0, nonStack: false, model:  "", image: "np_bazooka-suppressor.png", information: "Good for a single shot.", deg: false }

itemList["binoculars"]	= {fullyDegrades: false, decayrate: 0.0, displayname: "binoculars", craft: [{itemid: "aluminium", amount: 5 }, {itemid: "plastic", amount: 1 }, {itemid: "rubber", amount: 1 }], price: 300, weight: 10, nonStack: false, model: "", image: "np_binoculars.png" , deg: false}
itemList["bloodbag"] 	= {fullyDegrades: false,  decayrate: 0.0, displayname: "Blood Bag", price: 1, weight: 0, nonStack: false, model: "", image: "np_blood-bag.png", information: "Just my type", deg: false }
itemList["bloodvial"]       = {fullyDegrades: false, decayrate: 0.0, displayname: "Kan Şişesi", price: 1, weight: 0, nonStack: false, model: "", image: "np_blood-tube.png", information: "Not almayı unutma", deg: false }
itemList["blueb"]       = {fullyDegrades: false, decayrate: 0.0, displayname: "Mavi Bandana", price: 1, weight: 0, nonStack: false, model: "", image: "np_blue-bandana.png", information: "Simon ese", deg: false }
itemList["bluechip"] 	= {fullyDegrades: false,  decayrate: 0.0, displayname: "Mavi Chip", price: 1, weight: 0, nonStack: false, model: "", image: "np_blue-chip.png", information: "Çift ya da hiç", deg: false }
itemList["bmary"] 		= {fullyDegrades: false,  decayrate: 0.0, displayname: "Bloody Mary", price: 1, weight: 0, nonStack: false, model: "", image: "np_bloody-mary.png", information: "With a hint of lemon", deg: false }
itemList["Boombox"]	    = {fullyDegrades: false, decayrate: 0.0, displayname: "Boombox", price: 100, weight: 0, nonStack: false, model: "", image: "np_boombox.png", information: "Kafa sikiyorsun!" , deg: false}
itemList["Box"]	        = {fullyDegrades: false, decayrate: 0.0, displayname: "Box", price: 125, weight: 0, nonStack: false, model: "", image: "np_box.png", information: "İçi boş kutu." , deg: false}
itemList["breadboard"]	= {fullyDegrades: false, decayrate: 0.0, displayname: "Breadboard", price: 25, weight: 1, nonStack: false, model: "", image: "np_breadboard.png" , deg: false}


itemList["camera"]	    = {fullyDegrades: false, decayrate: 0.0, displayname: "Kalex N1000", price: 350, weight: 1, nonStack: false, model: "", image: "np_camera.png", information: "Kalex N1000 fotoğraf makinesi", deg: false}

itemList["casing"]	    = {fullyDegrades: false, decayrate: 0.0, displayname: "Bullet Case", price: 10, weight: 0, nonStack: true, model: "", image: "np_pistol-ammo.png" , deg: false}

itemList["certificate"]	= {fullyDegrades: false, decayrate: 0.0, displayname: "Sertifika", price: 1, weight: 0, nonStack: false, model:  "", image: "np_certificate.png", information: "Başardın!", deg: false }
itemList["cgpapers"] 	= {fullyDegrades: false,  decayrate: 0.0, displayname: "CG Papers", price: 1, weight: 0, nonStack: false, model: "", image: "np_cg-papers.png", information: "Wata woozers", deg: false }

itemList["chalice"]	    = {fullyDegrades: false, decayrate: 0.0, displayname: "Pimp Chalice", price: 100, weight: 0,   nonStack: false, model: "", image: "np_pimp-chalice.png", information: "Morgan Freidmans Legendary Pimp Chalice.", deg: false}

itemList["champion"]	= {fullyDegrades: false, decayrate: 0.0, displayname: "Championship Belt", price: 1, weight: 0, nonStack: false, model:  "", image: "np_champion-belt.png", information: "Money is in the rematch.", deg: false }
itemList["chestxray"]	= {fullyDegrades: false, decayrate: 0.0, displayname: "Chest X-Ray", price: 1, weight: 0, nonStack: false, model:  "", image: "np_chest-xray.png", information: "Argh...", deg: false }
itemList["chglass"] 	= {fullyDegrades: false,  decayrate: 0.0, displayname: "Şampanya Bardağı", price: 1, weight: 0, nonStack: false, model: "", image: "np_champagne-glass.png", information: "To us", deg: false }
itemList["cigar"]	    = {fullyDegrades: false, decayrate: 0.0, displayname: "Puro", price: 30, weight: 0, nonStack: false, model: "", image: "np_cigar.png" , deg: false}
itemList["ciggy"]	    = {cigarfullyDegrades: false, decayrate: 0.0, displayname: "Sigara", price: 2, weight: 0, nonStack: false, model: "", image: "np_cigarette.png" , deg: false}
itemList["cigarette"]	= {fullyDegrades: false, decayrate: 0.0, displayname: "cigarette", price: 20, weight: 0, nonStack: false, model:  "", image: "np_cigarette.png", information: "Stres azaltır", deg: false }
itemList["civtrophy"] 	= {fullyDegrades: false,  decayrate: 0.0, displayname: "Civilian of the Year", price: 1, weight: 0, nonStack: false, model: "", image: "np_civ-trophy.png", information: "The greatest law-abiding citizen", deg: false }
itemList["ckatana"] 	= {fullyDegrades: false,  decayrate: 0.0, displayname: "Lanetli Katana", price: 1, weight: 0, nonStack: false, model: "", image: "np_cursed-katana.png", information: "Very honorable katana to slay Gojira", deg: false }
itemList["cleaninggoods"]	= {fullyDegrades: false, decayrate: 0.0, displayname: "Temizlik Ürünleri", price: 500, weight: 3, nonStack: false, model: "", image: "np_cleaning-goods.png" , deg: false}
itemList["clotion"] 	= {fullyDegrades: false,  decayrate: 0.0, displayname: "Kenevir Losyonu", price: 1, weight: 0, nonStack: false, model: "", image: "np_cannabis-lotion.png", information: "Bro..duuudee..", deg: false }
itemList["clover"]	    = {fullyDegrades: false, decayrate: 0.0, displayname: "Four-leaf Clover", price: 1, weight: 0, nonStack: false, model:  "", image: "np_clover.png", information: "+255 Luck", deg: false }
itemList["clutch"]	    = {fullyDegrades: false, decayrate: 0.0, displayname: "Clutch", price: 30, weight: 5, nonStack: false, model: "", image: "np_clutch.png" , deg: false}

itemList["comp"]	    = {fullyDegrades: false, decayrate: 0.0, displayname: "Composition", price: 1, weight: 0, nonStack: false, model:  "", image: "np_composition.png", information: "What do you think it means?", deg: false }

itemList["corpsefeet"]	= {fullyDegrades: false, decayrate: 0.0, displayname: "Feet", price: 50, weight: 0, nonStack: false, model:  "", image: "feet2.png", information: "Wheres the rest of the body?" , deg: false}
itemList["corpsehands"]	= {fullyDegrades: false, decayrate: 0.0, displayname: "Hands", price: 50, weight: 0, nonStack: false, model:  "", image: "hands.png", information: "Wheres the rest of the body?" , deg: false}
itemList["coupon10"]	= {fullyDegrades: false, decayrate: 0.0, displayname: "10% İndirim Kuponu", price: 1, weight: 0, nonStack: false, model:  "", image: "np_coupon-ten.png", information: "Limitli eşyalar için geçerli", deg: false }
itemList["coupon15"]	= {fullyDegrades: false, decayrate: 0.0, displayname: "15% İndirim Kuponu", price: 1, weight: 0, nonStack: false, model:  "", image: "np_coupon-fifteen.png", information: "Hapis cezaları için değil", deg: false }
itemList["coupon25"]	= {fullyDegrades: false, decayrate: 0.0, displayname: "25% İndirim Kuponu", price: 1, weight: 0, nonStack: false, model:  "", image: "np_coupon-25.png", information: "Bitiş Tarihi 01/2045", deg: false }
itemList["cpelt"] 		= {fullyDegrades: false,  decayrate: 0.0, displayname: "Cougar Pelt", price: 1, weight: 0, nonStack: false, model: "", image: "np_cougar-pelt.png", information: "The hunter becomes the hunted", deg: false }

itemList["crane"]	    = {fullyDegrades: false, decayrate: 0.0, displayname: "Origami Crane", price: 1, weight: 0, nonStack: false, model:  "", image: "np_origami-crane.png", information: "Gaff approved", deg: false }
itemList["csuey"] 		= {fullyDegrades: false,  decayrate: 0.0, displayname: "Chop Suey", price: 1, weight: 0, nonStack: false, model: "", image: "np_chop-suey.png", information: "Hopper 1929", deg: false }
itemList["ctooth"] 		= {fullyDegrades: false,  decayrate: 0.0, displayname: "Cougar Tooth", price: 1, weight: 0, nonStack: false, model: "", image: "np_cougar-tooth.png", information: "Stalks its prey", deg: false }
itemList["ctrophy"] 	= {fullyDegrades: false,  decayrate: 0.0, displayname: "Cooking Trophy", price: 1, weight: 0, nonStack: false, model: "", image: "np_cooking-trophy.png", information: "Shokugeki victory", deg: false }
itemList["cuffs"]	    = {fullyDegrades: false, decayrate: 0.0, displayname: "cuffs", craft: [{itemid: "aluminium", amount: 5 }], price: 2, weight: 1, nonStack: false, model: "", image: "np_hand-cuffs.png" , deg: false}
itemList["cultneck"]	= {fullyDegrades: false, decayrate: 0.0, displayname: "Cult Necklace", price: 1, weight: 0, nonStack: false, model:  "", image: "np_cult-necklace.png", information: "One of us...", deg: false }
itemList["dcboard"] 	= {fullyDegrades: false,  decayrate: 0.0, displayname: "Diamond Chessboard", price: 1, weight: 0, nonStack: false, model: "", image: "np_diamond-chessboard.png", information: "Deep Blue cant appreciate this", deg: false }
itemList["dcert"] 		= {fullyDegrades: false,  decayrate: 0.0, displayname: "Death Certificate", price: 1, weight: 0, nonStack: false, model: "", image: "np_d-certificate.png", information: "In memoriam", deg: false }
itemList["decrypterenzo"]	= {fullyDegrades: false, decayrate: 0.0, displayname: "Şifre Çözücü Enzo", price: 300, weight: 5, nonStack: false, model: "", image: "np_decrypter-enzo.png" , deg: false}
itemList["decrypterfv2"]	= {fullyDegrades: false, decayrate: 0.0, displayname: "Şifre Çözücü Fv2", price: 300, weight: 5, nonStack: false, model: "", image: "np_decrypter-fv2.png" , deg: false}
itemList["decryptersess"]	= {fullyDegrades: false, decayrate: 0.0, displayname: "Şifre Çözücü", price: 300, weight: 5, nonStack: false, model: "", image: "np_decrypter-sess.png" , deg: false}
itemList["dhide"] 		= {fullyDegrades: false,  decayrate: 0.0, displayname: "Geyik Postu", price: 1, weight: 0, nonStack: false, model: "", image: "np_deer-hide.png", information: "Call peta", deg: false }
itemList["diamondrec"] 	= {fullyDegrades: false,  decayrate: 0.0, displayname: "Diamond Record", price: 1, weight: 0, nonStack: false, model: "", image: "np_diamond-record.png", information: "10 Million units sold!!", deg: false }
itemList["dice"]	    = {fullyDegrades: false, decayrate: 0.0, displayname: "Çift Zar", price: 1, weight: 0, nonStack: false, model:  "", image: "np_dice.png", information: "Kemik", deg: false }
itemList["dodo"] 		= {fullyDegrades: false,  decayrate: 0.0, displayname: "Dodo Statue", price: 1, weight: 0, nonStack: false, model: "", image: "np_dodo-statue.png", information: "Arent these extinct?", deg: false }
itemList["dodospit"] 	= {fullyDegrades: false,  decayrate: 0.0, displayname: "Dodo Spit", price: 1, weight: 0, nonStack: false, model: "", image: "np_dodo-spit.png", information: "What the..why?!", deg: false }
itemList["doramaar"] 	= {fullyDegrades: false,  decayrate: 0.0, displayname: "Dora Maar au Chat", price: 1, weight: 0, nonStack: false, model: "", image: "np_dora-maar-auchat.png", information: "Picasso 1941", deg: false }
itemList["dragon"]	    = {fullyDegrades: false, decayrate: 0.0, displayname: "Dragon", price: 150, weight: 0, nonStack: false, model:  "", image: "np_dragon.png", information: "Hopefully its not useless like in GOT" , deg: false}
itemList["dream"]	    = {fullyDegrades: false, decayrate: 0.0, displayname: "Dreamcatcher", price: 1, weight: 0, nonStack: false, model:  "", image: "np_dreamcatcher.png", information: "Sleep well", deg: false }

itemList["drill"]	    = {fullyDegrades: false, decayrate: 0.0, displayname: "drill", craft: [{itemid: "aluminium", amount: 25 }, {itemid: "plastic", amount: 1 }, {itemid: "rubber", amount: 1 }], price: 150, weight: 80, nonStack: false, model: "", image: "np_drill.png" , deg: false}
itemList["drillbit"]	= {fullyDegrades: false, decayrate: 0.0, displayname: "drill bit", price: 100, weight: 2, nonStack: false, model: "", image: "np_drill-bit.png" , deg: false}

itemList["ehliyet"]	= {fullyDegrades: false, decayrate: 0.0, displayname: "Driver Licence", price: 25, weight: 1, nonStack: true, model: "", image: "np_driving-test.png" , deg: false}
itemList["dskull"] 		= {fullyDegrades: false,  decayrate: 0.0, displayname: "Elmas İşlemeli Kurukafa", price: 1, weight: 0, nonStack: false, model: "", image: "np_diamond-skull.png", information: "For the Love of God - Hirst 2007", deg: false }
itemList["DuffelBag"]	= {fullyDegrades: false, decayrate: 0.0, displayname: "Black Sports Bag", price: 225, weight: 0, nonStack: false, model: "", image: "np_duffel.png", information: "Havlunuda içine koy! Kokutma salonu" , deg: false}
itemList["dusche"] 		= {fullyDegrades: false,  decayrate: 0.0, displayname: "Dusche Gold", price: 1, weight: 0, nonStack: false, model: "", image: "np_dusche-gold.png", information: "Let it pour", deg: false }
itemList["dye"]	        = {fullyDegrades: false, decayrate: 0.0, displayname: "Aseton", price: 10, weight: 0, nonStack: false, model: "", image: "np_dye.png" , deg: false}


itemList["electronickit"]	= {fullyDegrades: false, decayrate: 0.0, displayname: "Elektronik Kit", craft: [{itemid: "aracparcalari", amount: 1 }], price: 900, weight: 15, nonStack: false, model: "", image: "np_electronic-kit.png" , deg: false}
itemList["emptybaggies"]	= {fullyDegrades: false, decayrate: 0.0, displayname: "Boş Paketler", price: 50, weight: 1, nonStack: false, model: "", image: "np_pack-of-empty-baggies.png" , deg: false}
itemList["enchiladas"] = {fullyDegrades: false,  decayrate: 0.0, displayname: "Enchiladas", price: 1, weight: 0, nonStack: false, model: "", image: "np_enchiladas.png", information: "Mas chile por favor", deg: false }
itemList["ering"]	    = {fullyDegrades: false, decayrate: 0.0, displayname: "Silver ring", price: 150, weight: 0, nonStack: false, model:  "", image: "np_engagement-ring.png", information: "Hayatı yaşamak istiyorsan hayır de" , deg: false}
itemList["erpring"]	    = {fullyDegrades: false, decayrate: 0.0, displayname: "Gold Wedding Ring.", price: 1, weight: 0, nonStack: false, model:  "", image: "np_engagement-ring.png", information: "Uzatılırsa altın bence evet de. " , deg: false}
itemList["evidence"]	= {fullyDegrades: false, decayrate: 0.0, displayname: "evidence", price: 0, weight: 1, nonStack: true, model: "", image: "np_evidence.png" , deg: false}
itemList["evidencebag"]	= {fullyDegrades: false, decayrate: 0.0, displayname: "evidence bag", price: 0, weight: 0, nonStack: true, model: "", image: "np_evidence-bag.png" , deg: false}
itemList["faberge"]	    = {fullyDegrades: false, decayrate: 0.0, displayname: "Faberge Egg", price: 150, weight: 0, nonStack: false, model:  "", image: "np_faberge-egg.png", information: "Rockford Hills easter egg" , deg: false}
itemList["failtest"]	= {fullyDegrades: false, decayrate: 0.0, displayname: "Failed Test", price: 1, weight: 0, nonStack: false, model:  "", image: "np_failed-test.png", information: "Try again later", deg: false }
itemList["fakeplate"]	= {fullyDegrades: false, decayrate: 0.0, displayname: "Sahte Plaka Seti", craft: [ {itemid: "scrapmetal", amount: 2 }, {itemid: "scripted", amount: 3 } ], price: 50, weight: 0,   nonStack: false, model: "", image: "np_plate.png", information: "Aracında kullan", deg: false}
itemList["fbumper"] 	= {fullyDegrades: false,  decayrate: 0.0, displayname: "Ön Tampon", price: 1, weight: 0, nonStack: false, model: "", image: "np_front-bumper.png", information: "Güzel bir tampon, araç için", deg: false }
itemList["feathers"] 	= {fullyDegrades: false,  decayrate: 0.0, displayname: "Feathers", price: 1, weight: 0, nonStack: false, model: "", image: "np_feathers.png", information: "Get plucked", deg: false }
itemList["femmes"] 		= {fullyDegrades: false,  decayrate: 0.0, displayname: "Les Femmes d'Alger", price: 1, weight: 0, nonStack: false, model: "", image: "np_les-femmes-dalger.png", information: "Picasso 1955", deg: false }
itemList["filetm"] 		= {fullyDegrades: false,  decayrate: 0.0, displayname: "Filet Mignon", price: 1, weight: 0, nonStack: false, model: "", image: "np_filet-mignon.png", information: "Succulent", deg: false }
itemList["flowers"]	    = {fullyDegrades: false, decayrate: 0.0, displayname: "Çiçekler", price: 50, weight: 10, nonStack: false, model:  "", image: "np_flowers.png", information: "Vay, çok güzel" , deg: false}
itemList["flyer"]	    = {fullyDegrades: false, decayrate: 0.0, displayname: "Flyer", price: 1, weight: 0, nonStack: false, model:  "", image: "np_flyer.png", information: "İnsanları işinize ve etkinliğinize davet edin.", deg: false }
itemList["flyer"]	    = {fullyDegrades: false, decayrate: 0.0, displayname: "Flyer", price: 150, weight: 0, nonStack: false, model:  "", image: "np_flyer.png", information: "Invite people to your business or event!" , deg: false}
itemList["frappuccino"]	= {fullyDegrades: false, decayrate: 0.0, displayname: "Frappuccino", price: 1, weight: 0, nonStack: false, model:  "", image: "np_frappuccino.png", information: "Its like I have ESPN or something", deg: false }
itemList["frisbee"]	    = {fullyDegrades: false, decayrate: 0.0, displayname: "Frisbee", price: 1, weight: 0, nonStack: false, model:  "", image: "np_frisbee.png", information: "And she would throw it back to me", deg: false }
itemList["ftartlet"] = {fullyDegrades: false,  decayrate: 0.0, displayname: "Fruit Tartlet", price: 1, weight: 0, nonStack: false, model: "", image: "np_fruit-tartlet.png", information: "Flavorsome", deg: false }
itemList["ftoast"] = {fullyDegrades: false,  decayrate: 0.0, displayname: "French Tost", price: 1, weight: 0, nonStack: false, model: "", image: "np_french-toast.png", information: "Nefis", deg: false }
itemList["fuse"]	    = {fullyDegrades: false, decayrate: 0.0, displayname: "Fuse", price: 30, weight: 1, nonStack: false, model: "", image: "np_fuse.png" , deg: false}
itemList["gachet"] = {fullyDegrades: false,  decayrate: 0.0, displayname: "Portrait of Dr.Gachet", price: 1, weight: 0, nonStack: false, model: "", image: "np_portrait-of-drgachet.png", information: "Van Gogh 1890", deg: false }
itemList["glowing"]	    = {fullyDegrades: false, decayrate: 0.0, displayname: "Glowing Substance", price: 1, weight: 0, nonStack: false, model:  "", image: "np_glowing-substance.png", information: "May cause unexpected mutations", deg: false }
itemList["glucose"]	    = {fullyDegrades: false, decayrate: 0.0, displayname: "500g Glikoz", price: 50,  weight: 0,   nonStack: false, model: "", image: "np_glucose.png", information: "Mmmm Glikoz. Sokak kok yapmak için 10g paket ile karıştır.", deg: false}
itemList["goldbar"]	    = {fullyDegrades: false, illegal: true, decayrate: 0.0, displayname: "Altın Külçe", craft: [{itemid: "5graltin", amount: 20 }], price: 550, weight: 1, nonStack: false, model: "", image: "np_gold-bar.png" , deg: false}
itemList["goldchip"] = {fullyDegrades: false,  decayrate: 0.0, displayname: "Altın Chip", price: 1, weight: 0, nonStack: false, model: "", image: "np_gold-chip.png", information: "Hepsi", deg: false }
itemList["goldcoin"]	= {fullyDegrades: false, decayrate: 0.0, displayname: "Altın Para", price: 1, weight: 0, nonStack: false, model:  "", image: "np_gold-coin.png", information: "Kontrol et", deg: false }
itemList["goldrec"]     = {fullyDegrades: false, decayrate: 0.0, displayname: "Gold Record", price: 1, weight: 0, nonStack: false, model: "", image: "np_gold-record.png", information: "500, 000 units sold", deg: false }
itemList["grandtete"] = {fullyDegrades: false,  decayrate: 0.0, displayname: "Grand Tete Mince", price: 1, weight: 0, nonStack: false, model: "", image: "np_grand-tete-mince.png", information: "Giacometti 1954", deg: false }
itemList["greekbust"]	= {fullyDegrades: false, decayrate: 0.0, displayname: "Greek Bust", price: 150, weight: 0, nonStack: false, model:  "", image: "np_greek-bust.png", information: "You sure its Greek?" , deg: false}
itemList["greenb"]	    = {fullyDegrades: false, decayrate: 0.0, displayname: "Yeşil Bandana", price: 1, weight: 0, nonStack: false, model:  "", image: "np_green-bandana.png", information: "Ay yo man", deg: false }
itemList["greenbelt"]	= {fullyDegrades: false, decayrate: 0.0, displayname: "Yeşil Kemer", price: 1, weight: 0, nonStack: false, model:  "", image: "np_green-belt.png", information: "Üst düzey 2/4", deg: false }
itemList["greenchip"] = {fullyDegrades: false,  decayrate: 0.0, displayname: "Yeşil  Chip", price: 1, weight: 0, nonStack: false, model: "", image: "np_green-chip.png", information: "Katla", deg: false }



itemList["Gruppe6Card"]	= {fullyDegrades: false, illegal: true, craft: [ {itemid: "sahtekart", amount: 1 }, {itemid: "boskart", amount: 3 } ], decayrate: 0.00, displayname: "G6 C Kart", price: 3500, weight: 0, nonStack: false, model: "", image: "gruppe6.png", information: "Kullandıktan sonra dikkat et." , deg: false}
itemList["Gruppe6Card2"] = {fullyDegrades: false, illegal: true, craft: [ {itemid: "assphone", amount: 5 }, {itemid: "methbag", amount: 35 }, {itemid: "ciggy", amount: 150 } ], decayrate: 0.0, displayname: "G6 HS Kart", price: 3500, weight: 0, nonStack: false, model: "", image: "gruppe62.png", information: "Kullanışlı görünüyor" , deg: false}
itemList["Gruppe6Card22"] = {fullyDegrades: false, illegal: true, craft: [  {itemid: "assphone", amount: 5 }, {itemid: "methbag", amount: 55 }, {itemid: "ciggy", amount: 1000 }  ], decayrate: 0.0, displayname: "G6 V Kart", price: 3500, weight: 0, nonStack: false, model: "", image: "gruppe622.png", information: "Kullanışlı görünüyor" , deg: false}
itemList["Gruppe6Card3"] = {fullyDegrades: false, illegal: true, craft: [ {itemid: "assphone", amount: 5 }, {itemid: "methbag", amount: 15 }, {itemid: "ciggy", amount: 30 } ], decayrate: 0.0, displayname: "G6 P Kart", price: 3500, weight: 0, nonStack: false, model: "", image: "gruppe63.png", information: "Kullanışlı görünüyor" , deg: false}


itemList["gsfpapers"] = {fullyDegrades: false,  decayrate: 0.0, displayname: "GSF Kağıdı", price: 1, weight: 0, nonStack: false, model: "", image: "np_gsf-papers.png", information: "OG onaylı", deg: false }
itemList["gticket"] = {fullyDegrades: false,  decayrate: 0.0, displayname: "Altın Bilet", price: 1, weight: 0, nonStack: false, model: "", image: "np_golden-ticket.png", information: "Değerli", deg: false }
itemList["gum"]	        = {fullyDegrades: false, decayrate: 0.0, displayname: "Gum", price: 1, weight: 0, nonStack: false, model:  "", image: "np_gum.png", information: "Release Gum. You chew, you suck then POW", deg: false }
itemList["hairtonic"] = {fullyDegrades: false,  decayrate: 0.0, displayname: "Hair Tonic", price: 1, weight: 0, nonStack: false, model: "", image: "np_hair-tonic.png", information: "If youre malding try this", deg: false }
itemList["harness"]     = {fullyDegrades: false, decayrate: 0.0, displayname: "Yaırş Kemeri", craft: [{itemid: "rubber", amount: 10 }], price: 8000, weight: 1, nonStack: true, model: "", image: "np_harness.png", information: "Pişman olmanızı engeller." , deg: false}
itemList["heavycutters"]	= {fullyDegrades: true, decayrate: 0.25, displayname: "Demir Kesici", craft: [{itemid: "copper", amount: 3 }, {itemid: "steel", amount: 1 }], price: 1500, weight: 1, nonStack: false, model: "", image: "np_heavy-cutters.png" , deg: false}

itemList["heavydutydrill"] = {fullyDegrades: false, decayrate: 0.0, displayname: "Ağır İş Matkabı", craft: [{itemid: "aluminium", amount: 85 }, {itemid: "plastic", amount: 1 }, {itemid: "rubber", amount: 1 }], price: 300, weight: 5, nonStack: false, model: "", image: "np_heavy-duty-drill.png" , deg: false}
itemList["hlights"] = {fullyDegrades: false,  decayrate: 0.0, displayname: "Farlar", price: 1, weight: 0, nonStack: false, model: "", image: "np_headlights.png", information: "Detaylı ve güzel", deg: false }
itemList["holybook"]	= {fullyDegrades: false, decayrate: 0.0, displayname: "Holy Book", price: 1, weight: 0, nonStack: false, model:  "", image: "np_holy-book.png", information: "For followers only...", deg: false }

itemList["holyhum"] = {fullyDegrades: false,  decayrate: 0.0, displayname: "Holy Hummus", price: 1, weight: 0, nonStack: false, model: "", image: "np_holy-hummus.png", information: "Biraz övgü", deg: false }
itemList["homme"] = {fullyDegrades: false,  decayrate: 0.0, displayname: "L'Homme Qui Marche", price: 1, weight: 0, nonStack: false, model: "", image: "np_lhomme-qui-marche.png", information: "Giacometti 1960", deg: false }
itemList["horchata"] = {fullyDegrades: false,  decayrate: 0.0, displayname: "Horchata", price: 1, weight: 0, nonStack: false, model: "", image: "np_horchata.png", information: "A la gran puchica!", deg: false }
itemList["icbelt"] = {fullyDegrades: false,  decayrate: 0.0, displayname: "Intercontinental Belt", price: 1, weight: 0, nonStack: false, model: "", image: "np_intercontinental-belt.png", information: "Bah gawd!", deg: false }
itemList["idcard"]	    = {fullyDegrades: false, decayrate: 0.0, displayname: "ID Card", price: 25, weight: 0, nonStack: true, model: "", image: "np_citizen-card.png" , deg: false}
itemList["IFAK"]	    = {fullyDegrades: false, decayrate: 0.0, displayname: "IFAK", price: 5, weight: 0, nonStack: false, model: "", image: "ifak.png", information: "Zamanla sizi iyileştirir ve kanamaları durdurur." , deg: false}
itemList["inkedmoneybag"] = {fullyDegrades: false, illegal: true, decayrate: 0.0, displayname: "Inked Money Bag", price: 100000, weight: 35, nonStack: false, model: "", image: "np_inked-money-bag.png", information: "This belongs to the Vault Bank" , deg: false}
itemList["inkset"]	    = {fullyDegrades: false, illegal: true, decayrate: 0.0, displayname: "Inked Set", price: 500, weight: 15, nonStack: false, model: "", image: "np_inked-money-bag.png" , deg: false}
itemList["ironoxide"]	= {fullyDegrades: false, decayrate: 0.0, displayname: "Demir Oksit", price: 50, weight: 1, nonStack: false, model: "", image: "np_iron-oxide.png" , deg: false}
itemList["jadeite"]	    = {fullyDegrades: false, decayrate: 0.0, displayname: "Jadeite Taşı", price: 1, weight: 0, nonStack: false, model:  "", image: "np_jadeite-stone.png", information: "Kıskançlık", deg: false }
itemList["joker"]	    = {fullyDegrades: false, decayrate: 0.0, displayname: "Joker Card", price: 1, weight: 0, nonStack: false, model:  "", image: "np_joker.png", information: "Bir sihir numarasına ne dersin?", deg: false }
itemList["katana"] = {fullyDegrades: false,  decayrate: 0.0, displayname: "Katana", price: 1, weight: 0, nonStack: false, model: "", image: "np_katana.png", information: "1000 kat katlanmış çelikten yapılmış", deg: false }
itemList["key1"]	    = {fullyDegrades: false, decayrate: 0.0, displayname: "Anahtar 1", price: 1, weight: 0, nonStack: false, model:  "", image: "np_key1.png", information: "Numbered Key", deg: false }
itemList["key2"]	    = {fullyDegrades: false, decayrate: 0.0, displayname: "Anahtar 2", price: 1, weight: 0, nonStack: false, model:  "", image: "np_key2.png", information: "Numbered Key", deg: false }
itemList["key3"]	    = {fullyDegrades: false, decayrate: 0.0, displayname: "Anahtar 3", price: 1, weight: 0, nonStack: false, model:  "", image: "np_key3.png", information: "Numbered Key", deg: false }
itemList["keya"]	    = {fullyDegrades: false, decayrate: 0.0, displayname: "Anahtar A", price: 1, weight: 0, nonStack: false, model:  "", image: "np_keya.png", information: "Lettered Key", deg: false }
itemList["keyb"]	    = {fullyDegrades: false, decayrate: 0.0, displayname: "Anahtar B", price: 1, weight: 0, nonStack: false, model:  "", image: "np_keyb.png", information: "Lettered Key", deg: false }
itemList["keyc"]	    = {fullyDegrades: false, decayrate: 0.0, displayname: "Anahtar C", price: 1, weight: 0, nonStack: false, model:  "", image: "np_keyc.png", information: "Lettered Key", deg: false }
itemList["latte"]	    = {fullyDegrades: false, decayrate: 0.0, displayname: "Latte", price: 1, weight: 0, nonStack: false, model:  "", image: "np_latte.png", information: "Çok çekici", deg: false }
itemList["lbpapers"] = {fullyDegrades: false,  decayrate: 0.0, displayname: "LB Papers", price: 1, weight: 0, nonStack: false, model: "", image: "np_lb-papers.png", information: "I plead guilty mon", deg: false }
itemList["lighter"]	    = {fullyDegrades: false, decayrate: 0.0, displayname: "lighter", price: 30, weight: 0,   nonStack: false, model: "", image: "np_lighter.png", information: "Sana bi çakmak lazım", deg: false}
itemList["lockpick"]	= {fullyDegrades: false, decayrate: 0.0, displayname: "lockpick", craft: [{itemid: "scrapmetal", amount: 3 }, {itemid: "plastiksise", amount: 5 }], price: 1500, weight: 1, nonStack: false, model: "", image: "np_lockpick-set.png" , deg: false}
itemList["locksystem"]	= {fullyDegrades: false, illegal: true, decayrate: 0.0, displayname: "Basınclı Lockpick", price: 3500, weight: 0, nonStack: false, model: "", image: "locksystem.png", information: "Küçük kilitleri patlatmak için kullanılır -tek kullanımlık" , deg: false}
itemList["log"]	        = {fullyDegrades: false, decayrate: 0.0, displayname: "Wood", price: 10, weight: 2, nonStack: false, model: "", image: "np_wood.png" , deg: false}
itemList["logger"] = {fullyDegrades: false,  decayrate: 0.0, displayname: "Alman Birası", price: 1, weight: 0, nonStack: false, model: "", image: "np_logger-beer.png", information: "Ming Ha Ling Bev. 2013", deg: false }
itemList["lostcut"]	    = {fullyDegrades: false, decayrate: 0.0, displayname: "Lost MC Cut", price: 1, weight: 0, nonStack: false, model:  "", image: "np_lost-cut.png", information: "Sandy Shores Chapter", deg: false }
itemList["lostcut_aw"]	= {fullyDegrades: false, decayrate: 0.0, displayname: "Lost MC Cut", price: 1, weight: 0, nonStack: false, model:  "", image: "np_lost-cut.png", information: "Sandy Shores Chapter<br />Property of Al Weaselton", deg: false }
itemList["lostcut_cc"]	= {fullyDegrades: false, decayrate: 0.0, displayname: "Lost MC Cut", price: 1, weight: 0, nonStack: false, model:  "", image: "np_lost-cut.png", information: "Sandy Shores Chapter<br />Property of Cooch Cassidy", deg: false }
itemList["lostcut_cs"]	= {fullyDegrades: false, decayrate: 0.0, displayname: "Lost MC Cut", price: 1, weight: 0, nonStack: false, model:  "", image: "np_lost-cut.png", information: "Sandy Shores Chapter<br />Property of Catherine Scratch", deg: false }
itemList["lostcut_ga"]	= {fullyDegrades: false, decayrate: 0.0, displayname: "Lost MC Cut", price: 1, weight: 0, nonStack: false, model:  "", image: "np_lost-cut.png", information: "Sandy Shores Chapter<br />Property of Gary Adams", deg: false }
itemList["lostcut_gm"]	= {fullyDegrades: false, decayrate: 0.0, displayname: "Lost MC Cut", price: 1, weight: 0, nonStack: false, model:  "", image: "np_lost-cut.png", information: "Sandy Shores Chapter<br />Property of Gazza Maloo", deg: false }
itemList["lostcut_gs"]	= {fullyDegrades: false, decayrate: 0.0, displayname: "Lost MC Cut", price: 1, weight: 0, nonStack: false, model:  "", image: "np_lost-cut.png", information: "Sandy Shores Chapter<br />Property of Greyson Sparks", deg: false }
itemList["lostcut_jp"]	= {fullyDegrades: false, decayrate: 0.0, displayname: "Lost MC Cut", price: 1, weight: 0, nonStack: false, model:  "", image: "np_lost-cut.png", information: "Sandy Shores Chapter<br />Property of Jason Paul", deg: false }
itemList["lostcut_ng"]	= {fullyDegrades: false, decayrate: 0.0, displayname: "Lost MC Cut", price: 1, weight: 0, nonStack: false, model:  "", image: "np_lost-cut.png", information: "Sandy Shores Chapter<br />Property of Negan Graham", deg: false }
itemList["lostcut_rc"]	= {fullyDegrades: false, decayrate: 0.0, displayname: "Lost MC Cut", price: 1, weight: 0, nonStack: false, model:  "", image: "np_lost-cut.png", information: "Sandy Shores Chapter<br />Property of Reginald Campbell", deg: false }
itemList["lostcut_rd"]	= {fullyDegrades: false, decayrate: 0.0, displayname: "Lost MC Cut", price: 1, weight: 0, nonStack: false, model:  "", image: "np_lost-cut.png", information: "Sandy Shores Chapter<br />Property of Reid Dankleaf", deg: false }
itemList["lostcut_rr"]	= {fullyDegrades: false, decayrate: 0.0, displayname: "Lost MC Cut", price: 1, weight: 0, nonStack: false, model:  "", image: "np_lost-cut.png", information: "Sandy Shores Chapter<br />Property of Rudi Rinsen", deg: false }
itemList["lostcut_so"]	= {fullyDegrades: false, decayrate: 0.0, displayname: "Lost MC Cut", price: 1, weight: 0, nonStack: false, model:  "", image: "np_lost-cut.png", information: "Sandy Shores Chapter<br />Property of Samuel O'Faolain", deg: false }
itemList["lostcut_vm"]	= {fullyDegrades: false, decayrate: 0.0, displayname: "Lost MC Cut", price: 1, weight: 0, nonStack: false, model:  "", image: "np_lost-cut.png", information: "Sandy Shores Chapter<br />Property of Victor Mason", deg: false }
itemList["lostcut_wd"]	= {fullyDegrades: false, decayrate: 0.0, displayname: "Lost MC Cut", price: 1, weight: 0, nonStack: false, model:  "", image: "np_lost-cut.png", information: "Sandy Shores Chapter<br />Property of Wyatt Derp", deg: false }
itemList["lostpapers"] = {fullyDegrades: false,  decayrate: 0.0, displayname: "Lost MC Papers", price: 1, weight: 0, nonStack: false, model: "", image: "np_lost-papers.png", information: "Meth ile değil ", deg: false }
itemList["lotion"]	    = {fullyDegrades: false, decayrate: 0.0, displayname: "meth inceltici", price: 1, weight: 0, nonStack: false, model:  "", image: "np_hand-lotion.png", information: "meth inceltici", deg: false }
itemList["lspapers"] = {fullyDegrades: false,  decayrate: 0.0, displayname: "LS Kağıdı", price: 1, weight: 0, nonStack: false, model: "", image: "np_ls-papers.png", information: "En iyi yaşam standartları olan şehir", deg: false }
itemList["madamelr"] = {fullyDegrades: false,  decayrate: 0.0, displayname: "Madame LR", price: 1, weight: 0, nonStack: false, model: "", image: "np_madame-lr.png", information: "Brancusi 1918", deg: false }
itemList["maneki"]	    = {fullyDegrades: false, decayrate: 0.0, displayname: "Maneki Neko", price: 1, weight: 0, nonStack: false, model:  "", image: "np_maneki-neko.png", information: "Good fortune beckons", deg: false }
itemList["markedbills"]	= {fullyDegrades: false, illegal: true, decayrate: 0.0, displayname: "İşaretli Faturalar", price: 300, weight: 1, nonStack: false, model: "", image: "np_inked-money-bag.png" , deg: false}
itemList["martini"] = {fullyDegrades: false,  decayrate: 0.0, displayname: "Martini", price: 1, weight: 0, nonStack: false, model: "", image: "np_martini.png", information: "hmmm", deg: false }
itemList["mdiptych"] = {fullyDegrades: false,  decayrate: 0.0, displayname: "Marilyn Diptych", price: 1, weight: 0, nonStack: false, model: "", image: "np_marilyn-diptych.png", information: "Warhol 1962", deg: false }
itemList["MedicalBag"]	= {fullyDegrades: false, decayrate: 0.0, displayname: "Health Bag (P)", price: 20, weight: 0, nonStack: false, model: "", image: "np_medbag.png", information: "Its a prop, wow?" , deg: false}
itemList["mfalcon"]	    = {fullyDegrades: false, decayrate: 0.0, displayname: "Maltese Falcon", price: 150, weight: 0, nonStack: false, model:  "", image: "np_maltese-falcon.png", information: "Highly prized movie prop" , deg: false}
itemList["misfit"]      = {fullyDegrades: false,  decayrate: 0.0, displayname: "Kulaklık", price: 1, weight: 0, nonStack: false, model: "", image: "np_headphones.png", information: "Heyoo", deg: false }
itemList["mixtape"]	    = {fullyDegrades: false, decayrate: 0.0, displayname: "Mixtape", price: 1, weight: 0, nonStack: false, model:  "", image: "np_mixtape.png", information: "Check it, yo", deg: false }
itemList["mk2usbdevice"] = {fullyDegrades: false, decayrate: 0.0, displayname: "MKII USB Cihazı", price: 300, weight: 5, nonStack: false, model: "", image: "np_mkii-usb-device.png" , deg: false}
itemList["mobilephone"]	= {fullyDegrades: false, decayrate: 0.0, displayname: "Phone", price: 400, weight: 1, nonStack: false, model: "", image: "np_mobile-phone.png" , deg: false}
itemList["monalisa"] = {fullyDegrades: false,  decayrate: 0.0, displayname: "Mona Lisa", price: 1, weight: 0, nonStack: false, model: "", image: "np_mona-lisa.png", information: "Da Vinci 1517", deg: false }
itemList["moneyshot"]	= {fullyDegrades: false, decayrate: 0.0, displayname: "Hamburger", price: 50,      weight: 1,   nonStack: false, model: "", image: "np_money-shot.png", information: "Açlığı giderir" , deg: false}
itemList["moonshine"] = {fullyDegrades: false,  decayrate: 0.0, displayname: "Moonshine Sürahi", price: 1, weight: 0, nonStack: false, model: "", image: "np_moonshine-jug.png", information: " 1910'dan beri aynı sürahileri kullanıyor", deg: false }
itemList["moonshinej"] = {fullyDegrades: false,  decayrate: 0.0, displayname: "Moonshine Kavanozu", price: 1, weight: 0, nonStack: false, model: "", image: "np_jar-of-moonshine.png", information: "Neredeyse tiner", deg: false }
itemList["mtrophy"] = {fullyDegrades: false,  decayrate: 0.0, displayname: "Mic Trophy", price: 1, weight: 0, nonStack: false, model: "", image: "np_mic-trophy.png", information: "Bir yıldız doğdu", deg: false }
itemList["muffin"]	    = {fullyDegrades: false, decayrate: 0.0, displayname: "Kek", price: 1, weight: 0, nonStack: false, model:  "", image: "np_muffin.png", information: "Kekin Tereyağlı mı?", deg: false }
itemList["mugbeer"] = {fullyDegrades: false,  decayrate: 0.0, displayname: "Bardak Bira", price: 1, weight: 0, nonStack: false, model: "", image: "np_mug-of-beer.png", information: "Şerefe!", deg: false }
itemList["mvial"]	    = {fullyDegrades: false, decayrate: 0.0, displayname: "Gizemli Flakon", price: 1, weight: 0, nonStack: false, model:  "", image: "np_mysterious-vial.png", information: "İçme!", deg: false }
itemList["nachos"] = {fullyDegrades: false,  decayrate: 0.0, displayname: "Nachos", price: 1, weight: 0, nonStack: false, model: "", image: "np_nachos.png", information: "Lezzetli", deg: false }
itemList["negg"] = {fullyDegrades: false,  decayrate: 0.0, displayname: "Napoleonic Egg", price: 1, weight: 0, nonStack: false, model: "", image: "np_napoleonic-egg.png", information: "Faberge Series (2/3)", deg: false }
itemList["nitrous"]	    = {fullyDegrades: false, decayrate: 0.0, displayname: "Nitrous Oxide", craft: [{itemid: "electronics", amount: 10 }], price: 300, weight: 5, nonStack: false, model: "", image: "np_nitrous-oxide.png" , deg: false}
itemList["nmenu"] = {fullyDegrades: false,  decayrate: 0.0, displayname: "Nanakaze Menu", price: 1, weight: 0, nonStack: false, model: "", image: "np_nanakaze-menu.png", information: "Bir göz at dostum", deg: false }
itemList["no10"] = {fullyDegrades: false,  decayrate: 0.0, displayname: "No. 10", price: 1, weight: 0, nonStack: false, model: "", image: "np_no10.png", information: "Rothko 1950", deg: false }
itemList["no5"] = {fullyDegrades: false,  decayrate: 0.0, displayname: "No. 5", price: 1, weight: 0, nonStack: false, model: "", image: "np_no5.png", information: "Pollock 1948", deg: false }
itemList["oil"]	        = {fullyDegrades: false, decayrate: 0.0, displayname: "Yağ", price: 10, weight: 0, nonStack: false, model: "", image: "np_oil.png" , deg: false}
itemList["okaylockpick"] = {fullyDegrades: false, decayrate: 0.0, displayname: "Not-Shit Ass Lockpick", price: 0, craft: [ {itemid: "shitlockpick", amount: 100 } ], weight: 0, nonStack: false, model: "", image: "np_shitlockpick.png", information: "TBH its still shit, so shit its almost identical... almost.", deg: false } //'Heavy Shotgun'
itemList["onigiri"]	    = {fullyDegrades: false, decayrate: 0.0, displayname: "Onigiri", price: 1, weight: 0, nonStack: false, model:  "", image: "np_onigiri.png", information: "Delicious rice balls", deg: false }
itemList["onion"]	    = {fullyDegrades: false, decayrate: 0.0, displayname: "Soğan", craft: [{itemid: "foodingredient", amount: 1 } ], price: 10, weight: 12, nonStack: false, model:  "", image: "np_onion.png", information: "Gözlerin sulanıyor mu?" , deg: false}
itemList["oxygentank"]	= {fullyDegrades: false, decayrate: 0.0, displayname: "Oksijen Tankı", craft: [{itemid: "electronics", amount: 4 }, {itemid: "copper", amount: 2 }, {itemid: "glass", amount: 1 }, {itemid: "plastic", amount: 1 }], price: 300, weight: 75, nonStack: false, model: "", image: "np_oxygen-tank.png" , deg: false}
itemList["pallet"]	    = {fullyDegrades: false, decayrate: 0.0, displayname: "Pallet of Boxes", price: 150, weight: 0, nonStack: false, model:  "", image: "np_pallet-of-boxes.png", information: "Transportable goods" , deg: false}
itemList["passtest"]	= {fullyDegrades: false, decayrate: 0.0, displayname: "Passed Test", price: 1, weight: 0, nonStack: false, model:  "", image: "np_passed-test.png", information: "Excellent work", deg: false }
itemList["paynepic"] = {fullyDegrades: false,  decayrate: 0.0, displayname: "Portrait of Payne", price: 1, weight: 0, nonStack: false, model: "", image: "np_payne-portrait.png", information: "Cue tongue pop", deg: false }
itemList["pearlneck"]	= {fullyDegrades: false, decayrate: 0.0, displayname: "İnci Kolye", price: 150, weight: 0, nonStack: false, model:  "", image: "np_dragon", information: "Bir randevuyu bitirmenin en iyi yolu" , deg: false}
itemList["pegg"] = {fullyDegrades: false,  decayrate: 0.0, displayname: "Pembe Faberge Yumurtası", price: 1, weight: 0, nonStack: false, model: "", image: "np_pink-faberge-egg.png", information: "Faberge Series (3/3)", deg: false }


itemList["rawchicken"] = {fullyDegrades: true,  decayrate: 1.0, displayname: "Kesilmiş Tavuk", price: 1, weight: 4, nonStack: false, model: "", image: "rawchicken.png", information: "Çiğ tavuk", deg: false }


itemList["livechicken"] = {fullyDegrades: false,  decayrate: 0.0, displayname: "Live Chicken", price: 1, weight: 15, nonStack: false, model: "", image: "np_pet-chicken.png", information: "Careful around Cluckin Bell", deg: true }
itemList["petfish"]	    = {fullyDegrades: false, decayrate: 0.0, displayname: "Pet Fish", price: 1, weight: 0, nonStack: false, model:  "", image: "np_pet-fish.png", information: "Gold fish memory", deg: false }
itemList["petrock"]	    = {fullyDegrades: false, decayrate: 0.0, displayname: "Pet Rock", price: 1, weight: 0, nonStack: false, model:  "", image: "np_pet-rock.png", information: "You dont even have to feed it", deg: false }
itemList["petturtle"] = {fullyDegrades: false,  decayrate: 0.0, displayname: "Küçük Kaplumbağa", price: 1, weight: 0, nonStack: false, model: "", image: "np_pet-turtle.png", information: "Cowabunga", deg: false }

itemList["pix1"]	    = {fullyDegrades: false, illegal: true, decayrate: 0.0, displayname: "Mavi Anahtar", price: 300, weight: 0, nonStack: false, model: "", image: "np_decrypter-fv2.png" , deg: false}
itemList["pix2"]	    = {fullyDegrades: false, illegal: true, decayrate: 0.0, displayname: "Kırmızı Anahtar", price: 1000, weight: 0, nonStack: false, model: "", image: "np_decrypter-enzo.png" , deg: false}

itemList["platinumrec"] = {fullyDegrades: false, decayrate: 0.0, displayname: "Platinum Record", price: 1, weight: 0, nonStack: false, model: "", image: "np_platinum-record.png", information: "1 Million units sold!", deg: false }
itemList["popsicle"]	= {fullyDegrades: false, decayrate: 0.0, displayname: "Buzlu Dondurma", price: 1, weight: 0, nonStack: false, model:  "", image: "np_popsicle.png", information: "Is that sea salt?", deg: false }
itemList["portal"] = {fullyDegrades: false,  decayrate: 0.0, displayname: "Portal", price: 1, weight: 0, nonStack: false, model: "", image: "np_portal.png", information: "Paden 2012", deg: false }
itemList["ppapers"] = {fullyDegrades: false,  decayrate: 0.0, displayname: "Hapishane Kağıdı", price: 1, weight: 0, nonStack: false, model: "", image: "np_prison-papers.png", information: "Nerede olduğunu sorma", deg: false }
itemList["pupusas"] = {fullyDegrades: false,  decayrate: 0.0, displayname: "Pupusas", price: 1, weight: 0, nonStack: false, model: "", image: "np_pupusas.png", information: "Ama ben senden hoşlandım", deg: false }
itemList["purpleb"]	    = {fullyDegrades: false, decayrate: 0.0, displayname: "Mor Bandana", price: 1, weight: 0, nonStack: false, model:  "", image: "np_purple-bandana.png", information: "Bala gang", deg: false }
itemList["qhearts"] = {fullyDegrades: false,  decayrate: 0.0, displayname: "Kalplerin Kraliçesi", price: 1, weight: 0, nonStack: false, model: "", image: "np_queen-of-hearts.png", information: "Bir kraliçe derki; Kafalarını uçurun", deg: false }
itemList["qualityscales"]	= {fullyDegrades: false, decayrate: 0.0, displayname: "Yüksek Kaliteli Terazı", craft: [{itemid: "aluminium", amount: 25 }, {itemid: "plastic", amount: 10 }, {itemid: "rubber", amount: 1 }], price: 1000, weight: 2, nonStack: false, model: "", image: "np_high-quality-scales.png", information: "Kayıp vermeden eşyaları tartar" , deg: false}
itemList["radio"]	    = {fullyDegrades: false, decayrate: 0.0, displayname: "Radio", craft: [{itemid: "glass", amount: 2 }, {itemid: "plastic", amount: 2 }, {itemid: "electronickit", amount: 3 }], price: 2000, weight: 3, nonStack: false, model: "", image: "np_radio.png", information: "Özel radyo kanallarında ve diğer insanlarla sohbet etmek için kullanılır." , deg: false}
itemList["rbumper"] = {fullyDegrades: false,  decayrate: 0.0, displayname: "Arka Tampon", price: 1, weight: 0, nonStack: false, model: "", image: "np_rear-bumper.png", information: "Bana bir araba borçlusun", deg: false }
itemList["recoupon10"]	= {fullyDegrades: false, decayrate: 0.0, displayname: "10% İndirimli", price: 1, weight: 0, nonStack: false, model:  "", image: "np_recoupon10.png", information: "%10 indirim, woow!" , deg: false}
itemList["recoupon15"]	= {fullyDegrades: false, decayrate: 0.0, displayname: "15% İndirimli", price: 1, weight: 0, nonStack: false, model:  "", image: "np_recoupon15.png", information: "%15 indirim, woow!" , deg: false}
itemList["recoupon20"]	= {fullyDegrades: false, decayrate: 0.0, displayname: "20% İndirimli", price: 1, weight: 0, nonStack: false, model:  "", image: "np_recoupon20.png", information: "%20 indirim, woow!" , deg: false}
itemList["recoupon5"]	= {fullyDegrades: false, decayrate: 0.0, displayname: "5% İndirimli", price: 1, weight: 0, nonStack: false, model:  "", image: "np_recoupon5.png", information: "%5 indirim, woow!", deg: false }
itemList["redb"]	    = {fullyDegrades: false, decayrate: 0.0, displayname: "Kırmızı Bandana", price: 1, weight: 0, nonStack: false, model:  "", image: "np_red-bandana.png", information: "Benimle yaslan", deg: false }
itemList["redbelt"]	    = {fullyDegrades: false, decayrate: 0.0, displayname: "Kırmızı Kemer", price: 1, weight: 0, nonStack: false, model:  "", image: "np_red-belt.png", information: "Uzman sıralama 3/4", deg: false }
itemList["redchip"] = {fullyDegrades: false,  decayrate: 0.0, displayname: "Kırmızı Chip", price: 1, weight: 0, nonStack: false, model: "", image: "np_red-chip.png", information: "Blöfünü görüyorum", deg: false }
itemList["redpack"] = {fullyDegrades: false,  decayrate: 0.0, displayname: "Redwood Paketi", price: 1, weight: 0, nonStack: false, model: "", image: "np_redwood-pack.png", information: "Aslında bağımlı değilim.", deg: false }
itemList["refinedwood"]	= {fullyDegrades: false, decayrate: 0.0, displayname: "Odun", price: 15, weight: 1, nonStack: false, model: "", image: "np_wood.png" , deg: false}
itemList["repairtoolkit"]	= {fullyDegrades: false, decayrate: 0.0, displayname: "Advanced Repair Kit", craft: [{itemid: "aluminium", amount: 5 }, {itemid: "plastic", amount: 1 }, {itemid: "rubber", amount: 1 }], price: 50, weight: 15, nonStack: false, model: "", image: "np_repair-toolkit.png", information: "Çekici kamyon sürücüleri ve tamirciler tarafından kullanılır." , deg: false}
itemList["rifleammo"]	= {fullyDegrades: false, decayrate: 0.0, displayname: "SMG Bullet x50", craft: [{itemid: "aluminium", amount: 1 }, {itemid: "plastic", amount: 1 }, {itemid: "rubber", amount: 1 }], price: 2500, weight: 1, nonStack: false, model: "", image: "np_rifle-ammo.png" , deg: false}
itemList["riflebody"]	= {fullyDegrades: false, decayrate: 0.0, displayname: "Rifle Body", price: 70, weight: 10, nonStack: false, model: "", image: "np_rifle-body.png" , deg: false}
itemList["riflebodybox"]	= {fullyDegrades: false, decayrate: 0.0, displayname: "Kutu (10+ Rifle Gövdesi)", price: 200, weight: 85, nonStack: false, model: "", image: "np_rifle-box.png" , deg: false}
itemList["rims"]	    = {fullyDegrades: false, decayrate: 0.0, displayname: "Yarış Jantı", price: 150, weight: 0, nonStack: false, model:  "", image: "np_racing-rims.png", information: "Bu iş için en iyi jant" , deg: false}
itemList["rnovel"]	    = {fullyDegrades: false, decayrate: 0.0, displayname: "Romance Novel", price: 150, weight: 0, nonStack: false, model:  "", image: "np_romance-novel.png", information: "A hurricane of passion" , deg: false}
itemList["rolexwatch"]	= {fullyDegrades: false, decayrate: 0.0, displayname: "Rolex  (p)", craft: [{itemid: "erpring", amount: 2 }, {itemid: "stolen2ctchain", amount: 2 }, {itemid: "ering", amount: 2 }], price: 300, weight: 0, nonStack: false, model: "", image: "np_rolex-watch.png" , deg: false}
itemList["rollingpaper"]	= {fullyDegrades: false, decayrate: 0.0, displayname: "rolling paper", price: 20, weight: 2, nonStack: false, model: "", image: "np_rolling-paper.png", information: "Joint döndürmek keyif verir" , deg: false}
itemList["rooster"]	    = {fullyDegrades: false, decayrate: 0.0, displayname: "Horoz", price: 1, weight: 0, nonStack: false, model:  "", image: "np_rooster-pin.png", information: "Kaybetmek üzer", deg: false }
itemList["rose"]	    = {fullyDegrades: false, decayrate: 0.0, displayname: "Gül", price: 1, weight: 0, nonStack: false, model:  "", image: "np_rose.png", information: "Aşk, dram, sevinç", deg: false }
itemList["rpelt"] = {fullyDegrades: false,  decayrate: 0.0, displayname: "Tavşan Postu", price: 1, weight: 0, nonStack: false, model: "", image: "np_rabbit-pelt.png", information: "Postu mahvetme", deg: false }
itemList["rtrophy"] = {fullyDegrades: false,  decayrate: 0.0, displayname: "Yarış Kupaso", price: 1, weight: 0, nonStack: false, model: "", image: "np_racing-trophy.png", information: "Tek yaptığım kazanmak", deg: false }
itemList["ruby"]	    = {fullyDegrades: false, decayrate: 0.0, displayname: "Yakut", price: 1, weight: 0, nonStack: false, model:  "", image: "np_ruby.png", information: "Gün doğumu gibi", deg: false }
itemList["russian"]     = {fullyDegrades: false, decayrate: 0.0, displayname: "Matryoshka Doll", price: 1, weight: 0, nonStack: false, model: "", image: "np_matryoshka-doll.png", information: "Ölürse, ölür, cyka.", deg: false }
itemList["sake"]	    = {fullyDegrades: false, decayrate: 0.0, displayname: "Sake", price: 1, weight: 0, nonStack: false, model:  "", image: "np_sake.png", information: "Kampai!", deg: false }
itemList["salvator"]	= {fullyDegrades: false, decayrate: 0.0, displayname: "Salvator Mundi", price: 1, weight: 0, nonStack: false, model:  "", image: "np_salvator-mundi.png", information: "Da Vinci 1500", deg: false }
itemList["sbsxray"]	    = {fullyDegrades: false, decayrate: 0.0, displayname: "SBS X-Ray", price: 1, weight: 0, nonStack: false, model:  "", image: "np_sbs-xray.png", information: "Warlord size", deg: false }
itemList["scanner"]	    = {fullyDegrades: false, decayrate: 0.0, displayname: "Radyo Tarayıcı", craft: [{itemid: "aluminium", amount: 5 }, {itemid: "plastic", amount: 1 }, {itemid: "rubber", amount: 1 }], price: 500, weight: 15, nonStack: false, model: "", image: "np_radio-scanner.png", information: "Rastgele radyo konuşmalarını dinlemek için." , deg: false}
itemList["scissors"] = {fullyDegrades: false,  decayrate: 0.0, displayname: "Makas", price: 1, weight: 0, nonStack: false, model: "", image: "np_scissors.png", information: "Makas", deg: false }
itemList["scoin"] = {fullyDegrades: false,  decayrate: 0.0, displayname: "Altın Para", price: 1, weight: 0, nonStack: false, model: "", image: "np_secret-coin.png", information: "Ens causa sui", deg: false }
itemList["scream"] = {fullyDegrades: false,  decayrate: 0.0, displayname: "Çığlık", price: 1, weight: 0, nonStack: false, model: "", image: "np_the-scream.png", information: "Munch 1893", deg: false }
itemList["screen"]	    = {fullyDegrades: false, decayrate: 0.0, displayname: "Ekran", price: 120, weight: 1, nonStack: false, model: "", image: "np_screen.png" , deg: false}
itemList["scripted"]	= {fullyDegrades: false, decayrate: 0.0, displayname: "Değerli Belge", price: 1, weight: 0, nonStack: false, model:  "", image: "np_script.png", information: "İster Nakite Çevir Çorba Parası Çıksın, İster Sahte Plaka Bas Polis Siksin.", deg: false }
itemList["sealedbucket"]	= {fullyDegrades: false, price: 5, decayrate: 0.0, displayname: "Kapalı Kova", weight: 1, nonStack: true, model: "", image: "np_sealed-bucket.png" , deg: false}
itemList["sealedevidencebag"]	= {fullyDegrades: false, decayrate: 0.0, displayname: "Mühürlü Kanıt Çantası", price: 0, weight: 0, nonStack: true, model: "", image: "np_sealed-evidence-bag.png" , deg: false}
itemList["seat"]	    = {fullyDegrades: false, decayrate: 0.0, displayname: "Koltuk", price: 150, weight: 0, nonStack: false, model:  "", image: "np_seat.png", information: "Sadece sert yarışcılar için" , deg: false}
itemList["secretfile"]	= {fullyDegrades: false, decayrate: 0.0, displayname: "Gizli Dosya", price: 1, weight: 0, nonStack: false, model:  "", image: "np_secret-file.png", information: "Rütbeliler dışında kullanmayınız.", deg: false }

itemList["securityblue"]	= {fullyDegrades: false, illegal: true, decayrate: 0.0, displayname: "Güvenlik Kartı", price: 1500,  weight: 1, nonStack: false, model: "", image: 'cb.png', information: "Card ID: 1", deg: false}
itemList["securityblack"]	= {fullyDegrades: false, illegal: true, decayrate: 0.0, displayname: "Güvenlik Kartı", price: 1500,  weight: 1, nonStack: false, model: "", image: 'cblk.png', information: "Card ID: 2", deg: false}
itemList["securitygreen"]	= {fullyDegrades: false, illegal: true, craft: [ {itemid: "Gruppe6Card", amount: 1 }, {itemid: "elektronikkit", amount: 3 } ], decayrate: 0.00, displayname: "Yeşil Güvenlik Kartı", price: 3500, weight: 0, nonStack: false, model: "", image: "cg.png", information: "?" , deg: false}
itemList["securitygold"]	= {fullyDegrades: false, illegal: true, decayrate: 0.0, displayname: "Güvenlik Kartı", price: 1500,   weight: 1, nonStack: false, model: "", image: 'cgld.png', information: "Card ID: 4", deg: false}
itemList["securityred"]	= {fullyDegrades: false, illegal: true, decayrate: 0.0, displayname: "Güvenlik Kartı", price: 1500,   weight: 1, nonStack: false, model: "", image: 'cr.png', information: "Card ID: 5", deg: false}
// itemList["ingredients"] = {fullyDegrades: false,  decayrate: 0.0, displayname: "ingredients", price: 1, weight: 0, nonStack: false, model: "", image: "np_severed-finger.png", information: "Now we're even", deg: false }

itemList["sfinger"] = {fullyDegrades: false,  decayrate: 0.0, displayname: "Kesik Parmak", price: 1, weight: 0, nonStack: false, model: "", image: "np_severed-finger.png", information: "Şimdi ödeştik", deg: false }
itemList["sgrace"] = {fullyDegrades: false,  decayrate: 0.0, displayname: "Zarafet", price: 1, weight: 0, nonStack: false, model: "", image: "np_saying-grace.png", information: "Rockwell 1951", deg: false }
itemList["shampoo"] = {fullyDegrades: false,  decayrate: 0.0, displayname: "Meth kimyasalı", price: 1, weight: 0, nonStack: false, model: "", image: "np_shampoo.png", information: "Meth için", deg: false }
itemList["SecurityCase"]	= {fullyDegrades: false, decayrate: 0.0, displayname: "Güvenli Kasa", price: 350, weight: 0, nonStack: false, model: "", image: "np_securitycase.png", information: "Its a prop, wow?" , deg: false}
itemList["shearsoj"] = {fullyDegrades: false,  decayrate: 0.0, displayname: "Adalet Makası", price: 1, weight: 0, nonStack: false, model: "", image: "np_shears-of-justice.png", information: "Hakim", deg: false }
itemList["shipbox"]	    = {fullyDegrades: false, decayrate: 0.0, displayname: "Nakliye Kutusu", price: 150, weight: 0, nonStack: false, model:  "", image: "np_shipping-box.png", information: "Ücretsiz gönderim" , deg: false}
itemList["shipcrate"]	= {fullyDegrades: false, decayrate: 0.0, displayname: "Nakliye Sandığı", price: 150, weight: 0, nonStack: false, model:  "", image: "np_shipping-crate.png", information: "Bu yüzü yukarı" , deg: false}
itemList["shitlockpick"]	= {fullyDegrades: false, decayrate: 0.0, displayname: "Lockpick A", price: 0, craft: [ {itemid: "jailfood", amount: 1 } ], weight: 1, nonStack: false, model: "", image: "np_shitlockpick.png", information: "Neden?", deg: false } //'Heavy Shotgun'
itemList["silvercoin"]	= {fullyDegrades: false, decayrate: 0.0, displayname: "Gümüş Para", price: 1, weight: 0, nonStack: false, model:  "", image: "np_silver-coin.png", information: "Kaybetme!", deg: false }
itemList["slushy"]	    = {fullyDegrades: false, illegal: true, decayrate: 0.0, displayname: "Atom Karışık.", price: 0, weight: 15, nonStack: false, model: "", image: "np_slushy.png", information: "-5 Hapis <br> +5 Karizma <br> ımhhh mükemmel <br> Ağzın kapalı 3 kez A de. " , deg: false}
itemList["smallscales"]	= {fullyDegrades: false, decayrate: 0.0, displayname: "Small Scales", craft: [{itemid: "aluminium", amount: 25 }, {itemid: "plastic", amount: 1 }, {itemid: "rubber", amount: 1 }], price: 150, weight: 1, nonStack: false, model: "", image: "np_small-scale.png", information: "Weighs Baggies with minimal loss" , deg: false}
itemList["smirror"] = {fullyDegrades: false,  decayrate: 0.0, displayname: "Yan Ayna", price: 1, weight: 0, nonStack: false, model: "", image: "np_side-mirror.png", information: "Aynasız mı? asla", deg: false }
itemList["snakeskin"] = {fullyDegrades: false,  decayrate: 0.0, displayname: "Yılan Derisi", price: 1, weight: 0, nonStack: false, model: "", image: "np_snakeskin.png", information: "Sssss", deg: false }
itemList["snowpic"]	    = {fullyDegrades: false, decayrate: 0.0, displayname: "Photo of Snow", price: 1, weight: 0, nonStack: false, model:  "", image: "np_snow-photo.png", information: "My beloved Jacqueline Snow", deg: false }
itemList["snowvhs"]	    = {fullyDegrades: false, decayrate: 0.0, displayname: "The Ultimate Boomer", price: 1, weight: 0, nonStack: false, model:  "", image: "np_snow-vhs.png", information: "Filmed On the Samsung flip phone from 2003 this high quality boomer production value will have you questioning.... Is that a dick?", deg: false }
itemList["sound"]	    = {fullyDegrades: false, decayrate: 0.0, displayname: "Ses Sistemi", price: 150, weight: 0, nonStack: false, model:  "", image: "np_sound-system.png", information: "Kulaklarının kanamasına neden olur" , deg: false}
itemList["sozepic"] = {fullyDegrades: false,  decayrate: 0.0, displayname: "Photo of Soze", price: 1, weight: 0, nonStack: false, model: "", image: "np_soze-photo.png", information: "The State PO-lice's finest", deg: false }
itemList["spoiler"]	    = {fullyDegrades: false, decayrate: 0.0, displayname: "Spoiler", price: 150, weight: 0, nonStack: false, model:  "", image: "np_spoiler.png", information: "Her seferinde daha iyiye" , deg: false}
itemList["sprunk"]	    = {fullyDegrades: false, decayrate: 0.0, displayname: "Sprunk", price: 1, weight: 0, nonStack: false, model:  "", image: "np_sprunk.png", information: "Hayatın anlamı", deg: false }
itemList["sskirts"] = {fullyDegrades: false,  decayrate: 0.0, displayname: "Side Skirts", price: 1, weight: 0, nonStack: false, model: "", image: "np_side-skirts.png", information: "Sür yada öl, hatırladın mı?", deg: false }
itemList["starrynight"]	= {fullyDegrades: false, decayrate: 0.0, displayname: "Yıldızlı Gece Tablosu", price: 150, weight: 0, nonStack: false, model:  "", image: "np_starry-night.png", information: "Neither ear nor there" , deg: false}
itemList["stolen10ctchain"]	= {fullyDegrades: false, decayrate: 0.0, displayname: "10ct Altın zincir (p)", price: 5, weight: 0, nonStack: false, model: "", image: "np_10ct-gold-chain.png" , deg: false}
itemList["stolen2ctchain"]	= {fullyDegrades: false, decayrate: 0.0, displayname: "2ct Altın zincir (p)", price: 5, weight: 0, nonStack: false, model: "", image: "np_2ct-gold-chain.png" , deg: false}
itemList["stolen5ctchain"]	= {fullyDegrades: false, decayrate: 0.0, displayname: "5ct Altın zincir (p)", price: 5, weight: 0, nonStack: false, model: "", image: "np_5ct-gold-chain.png" , deg: false}
itemList["stolen8ctchain"]	= {fullyDegrades: false, decayrate: 0.0, displayname: "Mücevher", price: 100, weight: 0, nonStack: false, model: "", image: "np_8ct-gold-chain.png" , deg: false}
itemList["stolencasiowatch"]	= {fullyDegrades: false, decayrate: 0.0, displayname: "Casio Saat (p)", price: 5, weight: 0, nonStack: false, model: "", image: "np_casio-watch.png" , deg: false}
itemList["stolengameboy"]	= {fullyDegrades: false, decayrate: 0.0, displayname: "Gameboy (p)", price: 5, weight: 0, nonStack: false, model: "", image: "np_gameboy.png" , deg: false}
itemList["stoleniphone"]	= {fullyDegrades: false, decayrate: 0.0, displayname: "Apple Telefonu (p)", price: 5, weight: 0, nonStack: false, model: "", image: "np_apple-iphone.png" , deg: false}
itemList["stolennokia"]	= {fullyDegrades: false, decayrate: 0.0, displayname: "Nokia Telefonu (p)", price: 5, weight: 0, nonStack: false, model: "", image: "np_nokia-phone.png" , deg: false}
itemList["stolenoakleys"]	= {fullyDegrades: false, decayrate: 0.0, displayname: "Oakley Güneş Gözlüğü (p)", price: 8, weight: 0, nonStack: false, model: "", image: "np_oakley-sunglesses.png" , deg: false}
itemList["stolenpixel3"]	= {fullyDegrades: false, decayrate: 0.0, displayname: "Nest Telefonu(p)", price: 5, weight: 0, nonStack: false, model: "", image: "np_pixel-2-phone.png" , deg: false}
itemList["stolenpsp"]	= {fullyDegrades: false, decayrate: 0.0, displayname: "PSP (p)", price: 5, weight: 0, nonStack: false, model: "", image: "np_psp.png" , deg: false}
itemList["stolenraybans"]	= {fullyDegrades: false, decayrate: 0.0, displayname: "Ray Ban Güneş Gözlüğü (p)", price: 5, weight: 0, nonStack: false, model: "", image: "np_raybans.png" , deg: false}
itemList["stolens8"]	= {fullyDegrades: false, decayrate: 0.0, displayname: "Samsung S8 (p)", price: 5, weight: 0, nonStack: false, model: "", image: "np_samsung-s8.png" , deg: false}
itemList["stooth"] = {fullyDegrades: false,  decayrate: 0.0, displayname: "Köpekbalığı Dişi", price: 1, weight: 0, nonStack: false, model: "", image: "np_shark-tooth.png", information: "Daha büyük bir tekneye ihtiyacım olacak", deg: false }
itemList["Suitcase"]	= {fullyDegrades: false, decayrate: 0.0, displayname: "Suit Çanta", price: 225, weight: 0, nonStack: false, model: "", image: "np_suitcase.png", information: "Sen büyüdünde iş adamı mı olcan?" , deg: false}
itemList["sunflower"] = {fullyDegrades: false,  decayrate: 0.0, displayname: "Ayçiçeği", price: 1, weight: 0, nonStack: false, model: "", image: "np_sunflower.png", information: "Zombilere karşı çok etkili", deg: false }
itemList["swheel"]	    = {fullyDegrades: false, decayrate: 0.0, displayname: "Direksiyon", price: 1, weight: 0, nonStack: false, model:  "", image: "np_steering-wheel.png", information: "Kazanmak kazanmaktır.", deg: false }
itemList["tagbelt"] = {fullyDegrades: false,  decayrate: 0.0, displayname: "X Team Kemeri", price: 1, weight: 0, nonStack: false, model: "", image: "np_tag-team-belt.png", information: "Kazananların kemeri", deg: false }
itemList["tbag"] = {fullyDegrades: false,  decayrate: 0.0, displayname: "Taşıma Çantası", price: 1, weight: 0, nonStack: false, model: "", image: "np_transport-bag.png", information: "Organlarınızı taze tutar.", deg: false }
itemList["tbear"] = {fullyDegrades: false,  decayrate: 0.0, displayname: "Teddy Ayıcık", price: 1, weight: 0, nonStack: false, model: "", image: "np_teddy-bear.png", information: "Sarıl bana", deg: false }
itemList["tealb"]	    = {fullyDegrades: false, decayrate: 0.0, displayname: "Turkuaz Bandana", price: 1, weight: 0, nonStack: false, model:  "", image: "np_teal-bandana.png", information: "Simon ese", deg: false }
itemList["telvis"] = {fullyDegrades: false,  decayrate: 0.0, displayname: "Üçlü Elvis", price: 1, weight: 0, nonStack: false, model: "", image: "np_triple-elvis.png", information: "Warhol 1963", deg: false }
itemList["textbooka"]	= {fullyDegrades: false, decayrate: 0.0, displayname: "Kitap A", price: 1, weight: 0, nonStack: false, model:  "", image: "np_textbook-a.png", information: "Kitap", deg: false }
itemList["thermite"]	= {fullyDegrades: false, decayrate: 0.0, displayname: "Thermite", craft: [{itemid: "bakirkablo", amount: 10 }, {itemid: "stolennokia", amount: 5 }, {itemid: "electronics", amount: 3 }, {itemid: "atesleyici", amount: 1 }], price: 0, weight: 5, nonStack: false, model: "", image: "np_thermite.png" , deg: false}
itemList["ticket"]	    = {fullyDegrades: false, decayrate: 0.0, displayname: "Bilet", price: 1, weight: 0, nonStack: false, model:  "", image: "np_ticket.png", information: "Bir bilet", deg: false }
itemList["tire"]	    = {fullyDegrades: false, decayrate: 0.0, displayname: "Lastik", price: 150, weight: 0, nonStack: false, model:  "", image: "np_tire.png", information: "Başka set almayı unutma" , deg: false}
itemList["tissuebox"]	= {fullyDegrades: false, decayrate: 0.0, displayname: "Peçete Kutusu", price: 1, weight: 0, nonStack: false, model:  "", image: "np_tissue-box.png", information: "Göründüğü gibi değil anlatabilirim", deg: false }
itemList["Toolbox"]	    = {fullyDegrades: false, decayrate: 0.0, displayname: "Alet Kutusu", price: 350, weight: 0, nonStack: false, model: "", image: "np_toolbox.png", information: "Tamir için kullanılır mı?" , deg: false}
itemList["toothneck"]	= {fullyDegrades: false, decayrate: 0.0, displayname: "Diş Kolye", price: 1, weight: 0, nonStack: false, model:  "", image: "np_tooth-necklace.png", information: "O bir güzellik", deg: false }
itemList["trophy"]	    = {fullyDegrades: false, decayrate: 0.0, displayname: "Kupa", price: 1, weight: 0, nonStack: false, model:  "", image: "np_trophy.png", information: "Kazanan!", deg: false }

itemList["umbrella"]	= {fullyDegrades: false, decayrate: 0.0, displayname: "umbrella", price: 500, weight: 3, nonStack: false, model: "", image: "np_umbrella.png" , deg: false}
itemList["umetal"] = {fullyDegrades: false,  decayrate: 0.0, displayname: "Bilinmeyen Metal", price: 1, weight: 0, nonStack: false, model: "", image: "np_unknown-metal.png", information: "Parmaklarını yalama", deg: false }

itemList["usbdevice"]	= {fullyDegrades: false, decayrate: 0.0, displayname: "Bilinmeyen USB Aygıtı", price: 300, weight: 5, nonStack: false, model: "", image: "np_unknown-usb-device.png" , deg: false}
itemList["valuablegoods"]	= {fullyDegrades: false, decayrate: 0.0, displayname: "Değerli Malzemeleri", craft: [{itemid: "goldbar", amount: 7 }], price: 4000, weight: 4, nonStack: false, model: "", image: "np_valuable-goods.png" , deg: false}
itemList["viagra"]	    = {fullyDegrades: false, decayrate: 0.0, displayname: "Viagra", price: 1, weight: 0, nonStack: false, model:  "", image: "np_viagra.png", information: "Sihirli küçük mavi hap", deg: false }
itemList["voodoo"]	    = {fullyDegrades: false, decayrate: 0.0, displayname: "Voodoo Bebeği", price: 1, weight: 0, nonStack: false, model:  "", image: "np_voodoo-doll.png", information: "Ruhlara dikkat edin", deg: false }
itemList["vpapers"] = {fullyDegrades: false,  decayrate: 0.0, displayname: "Vagos Kağıtları", price: 1, weight: 0, nonStack: false, model: "", image: "np_vagos-papers.png", information: "Si sii", deg: false }
itemList["vpnxj"]	    = {fullyDegrades: false, decayrate: 0.0, displayname: "VPN Kırıcı", price: 300, weight: 5, nonStack: false, model: "", image: "np_vpn-xj.png" , deg: false}
itemList["vulture"] = {fullyDegrades: false,  decayrate: 0.0, displayname: "Akbaba Heykeli", price: 1, weight: 0, nonStack: false, model: "", image: "np_vulture-statue.png", information: "Kültür için", deg: false }
itemList["wallet"]	    = {fullyDegrades: false, decayrate: 0.0, displayname: "wallet", price: 150, weight: 0, nonStack: false, model:  "", image: "np_wallet.png", information: "Cüzdan?" , deg: false}
itemList["watch"]       = {fullyDegrades: false, decayrate: 0.0, displayname: "Saat", price: 100, weight: 0, nonStack: false, model: "", image: "np_watch.png", information: "Bu bir Saat", deg: false}
itemList["wedding"]	    = {fullyDegrades: false, decayrate: 0.0, displayname: "Evlilik Yüzüğü", price: 150, weight: 0, nonStack: false, model:  "", image: "np_wedding-ring.png", information: "Ömür boyu..." , deg: false}
itemList["weeping"]	    = {fullyDegrades: false, decayrate: 0.0, displayname: "Ağlayan Kadın", price: 1, weight: 0, nonStack: false, model:  "", image: "np_weeping-woman.png", information: "Picasso 1937", deg: false }
itemList["wglass"] = {fullyDegrades: false,  decayrate: 0.0, displayname: "Viski", price: 1, weight: 0, nonStack: false, model: "", image: "np_glass-of-whiskey.png", information: "SERT!", deg: false }
itemList["whitebelt"]	= {fullyDegrades: false, decayrate: 0.0, displayname: "Beyaz Kuşak", price: 1, weight: 0, nonStack: false, model:  "", image: "np_white-belt.png", information: "Acemi Sıralama 1/4", deg: false }
itemList["whitechip"] = {fullyDegrades: false,  decayrate: 0.0, displayname: "Beyaz Chip", price: 1, weight: 0, nonStack: false, model: "", image: "np_white-chip.png", information: "Hit me", deg: false }
itemList["whitepearl"]	= {fullyDegrades: false, decayrate: 0.0, displayname: "Beyaz İnci", price: 0, weight: 1, nonStack: false, model: "", image: "np_white-pearl.png" , deg: false}
itemList["whitewine"]	= {fullyDegrades: false, decayrate: 0.0, displayname: "Beyaz Şarap", price: 1, weight: 0, nonStack: false, model:  "", image: "np_white-wine-bottle.png", information: "Kaliteli bir beyaz şarap -SARAFİN CHARDONNAY", deg: false }
itemList["wineglass"]	= {fullyDegrades: false, decayrate: 0.0, displayname: "Şarap Kadehi", price: 1, weight: 0, nonStack: false, model:  "", image: "np_glass-wine.png", information: "Oldukça zarif", deg: false }
itemList["wlilies"] = {fullyDegrades: false,  decayrate: 0.0, displayname: "Su Zambakları Tablosu", price: 1, weight: 0, nonStack: false, model: "", image: "np_water-lilies.png", information: "Monet 1907", deg: false }
itemList["xscondom"]	= {fullyDegrades: false, decayrate: 0.0, displayname: "XSmall Kondom", price: 150, weight: 0, nonStack: false, model:  "", image: "np_xs-condom.png", information: "Hareketlenmeye hazırlan" , deg: false}
itemList["ydiamond"]	= {fullyDegrades: false, decayrate: 0.0, displayname: "Sarı Elmas", price: 1, weight: 0, nonStack: false, model:  "", image: "np_yellow-diamond.png", information: "Sonsuza dek", deg: false }
itemList["yellowb"]	    = {fullyDegrades: false, decayrate: 0.0, displayname: "Sarı  Bandana", price: 1, weight: 0, nonStack: false, model:  "", image: "np_yellow-bandana.png", information: "Sana söylüyorum", deg: false }
itemList["zebra"] = {fullyDegrades: false,  decayrate: 0.0, displayname: "Zebra Tablosu", price: 1, weight: 0, nonStack: false, model: "", image: "np_zebra.png", information: "Vasarely 1937", deg: false }
itemList["fakesnowvhs"]	= {fullyDegrades: false, decayrate: 0.0, displayname: "Bootleg Boomer", price: 1, weight: 0, nonStack: false, model:  "", image: "np_fake-snow-vhs.png", information: "At this point you can not even tell if it is a dick or the roundhay garden scene from 1888.", deg: false }
itemList["wigglue"]	    = {fullyDegrades: false, decayrate: 0.0, displayname: "Peruk Tutkalı", price: 1, weight: 0, nonStack: false, model:  "", image: "np_wig-glue.png", information: "Tavsiyemizdir.", deg: false }
itemList["marstonrevolver"]	    = {fullyDegrades: false, decayrate: 0.0, displayname: "John Marston's Cattleman Revolver", price: 1, weight: 0, nonStack: false, model:  "", image: "np_marston-revolver.png", information: "John Marston'a ait olan, bu Cattleman Revolver siyah çelik çerceve ve özel bir kemik kabzaya sahiptir.", deg: false }
itemList["stone"] = {fullyDegrades: false,  decayrate: 0.0, displayname: "stone", price: 1, weight: 2, nonStack: false, model: "", image: "np_stone.png", information: "Kirli taş yıkayıp kullanılabilir.", deg: false }
itemList["washedstone"] = {fullyDegrades: false,  decayrate: 0.0, displayname: "washed stone", price: 1, weight: 0, nonStack: false, model: "", image: "np_washedstone.png", information: "Yıkanmış güzel bir taş.", deg: false }
itemList["pickaxe"] = {fullyDegrades: false,  decayrate: 0.0, displayname: "Kazma", price: 100, weight: 10, nonStack: false, model: "", image: "np_pickaxe.png", information: "", deg: false }
itemList["washedpan"] = {fullyDegrades: false,  decayrate: 0.0, displayname: "Yıkama Tavası", price: 100, weight: 2, nonStack: false, model: "", image: "np_washpan.png", information: "Bunun içinde biraz altın bulabilirsin.", deg: false }
itemList["silverbar"] = {fullyDegrades: false,  decayrate: 0.0, displayname: "Gümüş Külçe", price: 1, weight: 1, nonStack: false, model: "", image: "np_silverbar.png", information: "Saf Gümüş Külçe.", deg: false }
itemList["ironbar"] = {fullyDegrades: false,  decayrate: 0.0, displayname: "Demir Külçe", price: 1, weight: 1, nonStack: false, model: "", image: "np_ironbar.png", information: "Saf Demir Külçe", deg: false }
itemList["copperbar"] = {fullyDegrades: false,  decayrate: 0.0, displayname: "Bakır Külçe", price: 1, weight: 1, nonStack: false, model: "", image: "np_copperbar.png", information: "Saf Bakır Külçesi.", deg: false }
itemList["wetbud"] = {fullyDegrades: true, decayrate: 0.3, displayname: "Taze Tomurcuk (2 Grams)", price: 30, weight: 5, nonStack: false, model: "", image: "np_wetbud.png", information: "Kurut?" , deg: false}
itemList["driedbud"] = {fullyDegrades: true, decayrate: 0.3, displayname: "Kurutulmuş Tomurcuk (2 Grams)", price: 30, weight: 2, nonStack: false, model: "", image: "np_driedbud.png", information: "Kurut?" , deg: false}
itemList["smallbud"] = {fullyDegrades: true, decayrate: 0.3, displayname: "Paketlenmiş Tomurcuk (2 Grams)", price: 30, weight: 2, nonStack: false, model: "", image: "np_weed-Oz.png", information: "Sat ?" , deg: false}
itemList["weed_bananakush"] = { fullyDegrades: true, decayrate: 0.5, craft: [{ itemid: "iron", amount: 3 }, { itemid: "copper", amount: 5 }], displayname: "Muz Kush 2G", price: 100000, weight: 0, nonStack: false, model: "", image: "weedqyellow.png", deg: false }
itemList["weed_bluedream"] = { fullyDegrades: true, decayrate: 0.5, craft: [{ itemid: "iron", amount: 3 }, { itemid: "copper", amount: 5 }], displayname: "Mavi Rüya 2G", price: 100000, weight: 0, nonStack: false, model: "", image: "weedqblue.png", deg: false }
itemList["weed_purplehaze"] = { fullyDegrades: true, decayrate: 0.5, craft: [{ itemid: "iron", amount: 3 }, { itemid: "copper", amount: 5 }], displayname: "Mor  Haze 2G", price: 100000, weight: 0, nonStack: false, model: "", image: "weedqpurp.png", deg: false }
itemList["weed_og-kush"] = { fullyDegrades: true, decayrate: 0.5, craft: [{ itemid: "iron", amount: 3 }, { itemid: "copper", amount: 5 }], displayname: "OGKush 2G", price: 100000, weight: 0, nonStack: false, model: "", image: "np_weed-Oz.png", deg: false }
itemList["weed_og-kush_seed"] = { fullyDegrades: true, decayrate: 0.5, craft: [{ itemid: "iron", amount: 3 }, { itemid: "copper", amount: 5 }], displayname: "OGKush Tohumu", price: 100000, weight: 0, nonStack: false, model: "", image: "np_weed-seed.png", deg: false }
itemList["weed_bananakush_seed"] = { fullyDegrades: true, decayrate: 0.5, craft: [{ itemid: "iron", amount: 3 }, { itemid: "copper", amount: 5 }], displayname: "Muz Kush Tohumu", price: 100000, weight: 0, nonStack: false, model: "", image: "np_weed-seedyellow.png", deg: false }
itemList["weed_bluedream_seed"] = { fullyDegrades: true, decayrate: 0.5, craft: [{ itemid: "iron", amount: 3 }, { itemid: "copper", amount: 5 }], displayname: "Mavi Rüya 2G", price: 100000, weight: 0, nonStack: false, model: "", image: "np_weed-seedblue.png", deg: false }
itemList["weed_purple-haze_seed"] = { fullyDegrades: true, decayrate: 0.5, craft: [{ itemid: "iron", amount: 3 }, { itemid: "copper", amount: 5 }], displayname: "Mor  Haze 2G", price: 100000, weight: 0, nonStack: false, model: "", image: "np_weed-seedpurp.png", deg: false }
itemList["water_bottle"] = { fullyDegrades: true, decayrate: 0.5, craft: [{ itemid: "iron", amount: 3 }, { itemid: "copper", amount: 5 }], displayname: "Arıtılmış Su", price: 100000, weight: 0, nonStack: false, model: "", image: "purifiedwater.png", deg: false }
itemList["fertilizer"] = { fullyDegrades: true, decayrate: 0.5, craft: [{ itemid: "iron", amount: 3 }, { itemid: "copper", amount: 5 }], displayname: "Gübre", price: 5, weight: 10, nonStack: false, model: "", image: "np_fertilizer.png", deg: false }
itemList["plantpot"] = { fullyDegrades: false, decayrate: 0.0, craft: [{ itemid: "plastic", amount: 10 }], displayname: "Saksı", price: 100000, weight: 2, nonStack: false, model: "", image: "plantpot.png", deg: false }
itemList["weedpapers"] = { fullyDegrades: true, decayrate: 0.5, displayname: "Sarma", price: 5, weight: 0, nonStack: false, model: "", image: "weedpapers.png", deg: false }
itemList["contract"] = { fullyDegrades: false, decayrate: 0.0, displayname: "Kontrat", craft: [{ itemid: "electronics", amount: 25 }], price: 400, weight: 1, nonStack: false, model: "", image: "contract.png", deg: false }
itemList["coffeebean"] = { fullyDegrades: false, decayrate: 0.5, displayname: "Kahve Çekirdeği", price: 1000, weight: 0, nonStack: false, model: "", image: "coffeebean.png", deg: false }
itemList["coffeecup"] = { fullyDegrades: false, decayrate: 0.1, displayname: "Kutu Kahve", price: 1000, weight: 1, nonStack: false, model: "", image: "coffeecup.png", deg: false }
itemList["milk"] = { fullyDegrades: true, decayrate: 0.5, displayname: "milk", price: 25, weight: 0, nonStack: true, model: "", image: "milk.png", deg: false }
itemList["beanmachinetake"] = { fullyDegrades: true, decayrate: 0.5, displayname: "Kahve Paketi", price: 100000, weight: 1, nonStack: false, model: "", image: "beanmachinetake.png", deg: false }
itemList["meat"] = { fullyDegrades: true, decayrate: 0.025, displayname: "meat", price: 5, weight: 1, nonStack: false, model: "", image: "meat.png", deg: false }
itemList["leather"] = { fullyDegrades: true, decayrate: 0.025, displayname: "leather", price: 5, weight: 1, nonStack: false, model: "", image: "leather.png", deg: false }
itemList["drugscales"] = { fullyDegrades: true, decayrate: 0.1, displayname: "Tartı", price: 1000, weight: 7, nonStack: true, model: "", image: "drugscales.png", deg: false }
itemList["acetone"] = { fullyDegrades: true, decayrate: 0.65, displayname: "Aseton", price: 20, weight: 5, nonStack: false, model: "", image: "acetone.png", deg: false }
itemList["meth"] = { fullyDegrades: true, decayrate: 0.65, displayname: "Meth Torbası", price: 100000, weight: 1, nonStack: false, model: "", image: "meth1g.png", deg: false }
itemList["batteryacid"] = { fullyDegrades: true, decayrate: 0.5, displayname: "Batarya Asidi", price: 100000, weight: 3, nonStack: false, model: "", image: "batteryacid.png", deg: false }
 // illegal
itemList["airbag"] = { fullyDegrades: false, decayrate: 0.0, displayname: "Airbag", price: 100000, weight: 6, nonStack: false, model: "", image: "airbag.png", deg: false }
itemList["atari"] = { fullyDegrades: false, decayrate: 0.0, displayname: "Atari", price: 100000, weight: 6, nonStack: false, model: "", image: "atari.png", deg: false }
itemList["ayi"] = { fullyDegrades: false, decayrate: 0.0, displayname: "Peluş Ayıcık", price: 100000, weight: 6, nonStack: false, model: "", image: "ayi.png", deg: false }
itemList["gps"] = { fullyDegrades: false, decayrate: 0.0, displayname: "GPS", price: 2, weight: 6, nonStack: false, model: "", image: "gps.png", deg: false }
itemList["green_phone"] = { fullyDegrades: false, decayrate: 0.0, displayname: "Green Telefon", price: 100000, weight: 6, nonStack: false, model: "", image: "green_phone.png", deg: false }
itemList["blue_phone"] = { fullyDegrades: false, decayrate: 0.0, displayname: "Phone", price: 250, weight: 6, nonStack: true, model: "", image: "telefonpng.png", deg: false }
itemList["phone"] = { fullyDegrades: false, decayrate: 0.0, displayname: "Race Phone", price: 10000, weight: 6, nonStack: false, model: "", image: "phone.png", deg: false }


itemList["cuff_keys"]	    = {fullyDegrades: false, decayrate: 0.0, displayname: "Cuff Keys", craft: [{itemid: "aluminium", amount: 5 }], price: 2, weight: 1, nonStack: false, model: "", image: "cuff-keys.png" , deg: false}
itemList["gymkart"]	    = {fullyDegrades: false, decayrate: 0.0, displayname: "GYM Üyelik Kartı", craft: [{itemid: "aluminium", amount: 5 }], price: 250, weight: 1, nonStack: true, model: "", image: "gymkart.png" , deg: false}



itemList["piggy"] = { fullyDegrades: true, decayrate: 1, displayname: "Pig", price: 500, weight: 25, nonStack: false, model: "", image: "pig.png", deg: false }
 // MESLEK
itemList["domates"] = { fullyDegrades: false, decayrate: 0.0, displayname: "Tomatoes", price: 100000, weight: 6, nonStack: false, model: "", image: "domates.png", deg: false }
itemList["temizdomates"] = { fullyDegrades: false, decayrate: 0.0, displayname: "Clean Tomatoes", price: 100000, weight: 6, nonStack: false, model: "", image: "temizdomates.png", deg: false }
itemList["ketcap"] = { fullyDegrades: false, decayrate: 0.0, displayname: "Ketchup", price: 100000, weight: 6, nonStack: false, model: "", image: "ketcap.png", deg: false }

itemList["alive_chicken"] = { fullyDegrades: false, decayrate: 0.0, displayname: "Meat", price: 100000, weight: 6, nonStack: false, model: "", image: "meat.png", deg: false }
itemList["packaged_chicken"] = { fullyDegrades: false, decayrate: 0.0, displayname: "Packaged Meat", price: 100000, weight: 6, nonStack: false, model: "", image: "packaged_chicken.png", deg: false }
itemList["slaughtered_chicken"] = { fullyDegrades: false, decayrate: 0.0, displayname: "Cut Meat", price: 100000, weight: 6, nonStack: false, model: "", image: "slaughtered_chicken.png", deg: false }

itemList["narsuyu"] = { fullyDegrades: false, decayrate: 0.0, displayname: "Pomegranate juice", price: 100000, weight: 6, nonStack: false, model: "", image: "narsuyu.png", deg: false }
itemList["temiznar"] = { fullyDegrades: false, decayrate: 0.0, displayname: "Clean Pomegranate", price: 100000, weight: 6, nonStack: false, model: "", image: "temiznar.png", deg: false }
itemList["nar"] = { fullyDegrades: false, decayrate: 0.0, displayname: "Pomegranate", price: 100000, weight: 6, nonStack: false, model: "", image: "nar.png", deg: false }
itemList["nartaneleri"] = { fullyDegrades: false, decayrate: 0.0, displayname: "Pomegranate Seeds", price: 100000, weight: 6, nonStack: false, model: "", image: "nartaneleri.png", deg: false }
itemList["tacomeet"] = { fullyDegrades: false, decayrate: 0.0, displayname: "Taco Eti", price: 100000, weight: 0, nonStack: false, model: "", image: "tacomeet.png", deg: false }
itemList["mucevher"] = { fullyDegrades: false, decayrate: 0.0, displayname: "Mücevher", price: 100000, weight: 0, nonStack: false, model: "", image: "mucevher.png", deg: false }
itemList["huntingbait"] = { fullyDegrades: false, decayrate: 0.0, displayname: "Sahte Yem", price: 1, weight: 0, nonStack: false, model: "", image: "hbait.png", deg: false }
itemList["huntingknife"] = { fullyDegrades: false, decayrate: 0.0, displayname: "Hunter Knife", price: 10, weight: 1, nonStack: false, model: "", image: "avcibicak.png", deg: false }
itemList["et4"] = { fullyDegrades: false, decayrate: 0.0, displayname: "Geyik Eti", price: 100000, weight: 1, nonStack: false, model: "", image: "et4.png", deg: false }
itemList["uvlight"] = { fullyDegrades: false, decayrate: 0.0, displayname: "UV Flashlight", price: 10, weight: 6, nonStack: false, model: "", image: "uvlight.png", deg: false }
itemList["elmasuclumatkap"] = { fullyDegrades: false, decayrate: 0.0, displayname: "Elmasuclu Matkap", price: 100000, weight: 6, nonStack: false, model: "", image: "uvlight.png", deg: false }
itemList["kalitelimaymuncuk"] = { fullyDegrades: false, decayrate: 0.0, displayname: "Kaliteli Maymuncuk", price: 100000, weight: 6, nonStack: false, model: "", image: "kalitelimaymuncuk.png", deg: false }
itemList["bobbypin"] = { fullyDegrades: false, decayrate: 0.0, displayname: "Maymuncuk K", price: 100000, weight: 6, nonStack: false, model: "", image: "bobbypin.png", deg: false }
itemList["elektronikkit"] = { fullyDegrades: false, decayrate: 0.0, displayname: "Elektronik Hurda", price: 100000, weight: 6, nonStack: false, model: "", image: "elektronikkit.png", deg: false }

//MEKANİK CRAFT 
itemList["aksparcalari"]	= {fullyDegrades: true, decayrate: 0.25, displayname: "Araç Aks Parçaları", craft: [{itemid: "steel", amount: 15 }, {itemid: "plastic", amount: 1 }, {itemid: "scrapmetal", amount: 1 }], price: 500, weight: 3, nonStack: false, model: "", image: "aksparcalari.png" , deg: false}
itemList["govdeparca"]	= {fullyDegrades: true, decayrate: 0.25, displayname: "Araç Panelleri", craft: [{itemid: "aluminium", amount: 15 }, {itemid: "plastic", amount: 1 }, {itemid: "glass", amount: 1 }], price: 500, weight: 3, nonStack: false, model: "", image: "govdeparca.png" , deg: false}
itemList["elektronik"]	= {fullyDegrades: true, decayrate: 0.25, displayname: "Araç Elektronik", craft: [{itemid: "electronics", amount: 15 }, {itemid: "elektronikkit", amount: 1 }, {itemid: "glass", amount: 1 }], price: 500, weight: 3, nonStack: false, model: "", image: "elektronik.png" , deg: false}
itemList["frenparca"]	= {fullyDegrades: true, decayrate: 0.25, displayname: "Araç Fren Parçaları", craft: [{itemid: "aluminium", amount: 15 }, {itemid: "steel", amount: 1 }, {itemid: "elektronikkit", amount: 1 }], price: 500, weight: 3, nonStack: false, model: "", image: "frenparca.png" , deg: false}
itemList["debriyaj"]	= {fullyDegrades: true, decayrate: 0.25, displayname: "Araç Debriyaj Parçaları", craft: [{itemid: "aluminium", amount: 15 }, {itemid: "plastic", amount: 1 }, {itemid: "elektronikkit", amount: 1 }], price: 500, weight: 3, nonStack: false, model: "", image: "debriyaj.png" , deg: false}
itemList["radyator"]	= {fullyDegrades: true, decayrate: 0.25, displayname: "Araç Radyatör Parçaları", craft: [{itemid: "aluminium", amount: 15 }, {itemid: "electronics", amount: 1 }, {itemid: "elektronikkit", amount: 1 }, {itemid: "copper", amount: 15 }], price: 500, weight: 3, nonStack: false, model: "", image: "radyator.png" , deg: false}
itemList["motor"]	= {fullyDegrades: true, decayrate: 0.25, displayname: "Araç Motor Parçaları", craft: [{itemid: "steel", amount: 15 }, {itemid: "copper", amount: 1 }, {itemid: "scrapmetal", amount: 1 }], price: 500, weight: 3, nonStack: false, model: "", image: "motor.png" , deg: false}
itemList["yakit"]	= {fullyDegrades: true, decayrate: 0.25, displayname: "Araç Enjektor Parçaları", craft: [{itemid: "plastic", amount: 15 }, {itemid: "electronics", amount: 1 }, {itemid: "aluminium", amount: 1 }], price: 500, weight: 3, nonStack: false, model: "", image: "yakit.png" , deg: false}
//BURGER MESLEK ITEM
itemList["burgereti"]	= {fullyDegrades: true, decayrate: 0.25, displayname: "Et", craft: [{itemid: "plastic", amount: 15 }, {itemid: "electronics", amount: 1 }, {itemid: "aluminium", amount: 1 }], price: 500, weight: 3, nonStack: false, model: "", image: "burgereti.png" , deg: false}
itemList["tavukkofte"]	= {fullyDegrades: true, decayrate: 0.25, displayname: "Tavuk Köfte", craft: [{itemid: "plastic", amount: 15 }, {itemid: "electronics", amount: 1 }, {itemid: "aluminium", amount: 1 }], price: 500, weight: 3, nonStack: false, model: "", image: "tavukkofte.png" , deg: false}
itemList["patates"]	    = {fullyDegrades: true, decayrate: 0.01, displayname: "Patates Kızartması", price: 50, weight: 1,   nonStack: false, model: "", image: "np_fries.png", information: "Açlığı giderir" , deg: false}
itemList["burgerekmegi"]	    = {fullyDegrades: true, decayrate: 0.01, displayname: "Burger Ekmeği", price: 2, weight: 1,   nonStack: false, model: "", image: "burgerekmegi.png", information: "Burger yapımında kullanılır" , deg: false}
itemList["mayonez"]	    = {fullyDegrades: true, decayrate: 0.01, displayname: "Mayonez", price: 1, weight: 1,   nonStack: false, model: "", image: "mayonez.png", information: "Yemek yapımında kullanılır" , deg: false}
itemList["chedar"]	    = {fullyDegrades: true, decayrate: 0.01, displayname: "Çedar Peyniri", price: 2, weight: 1,   nonStack: false, model: "", image: "chedar.png", information: "Yemek yapımında kullanılır" , deg: false}
itemList["susamliekmek"]	    = {fullyDegrades: true, decayrate: 0.01, displayname: "Ekmek", price: 2, weight: 1,   nonStack: false, model: "", image: "susamliekmek.png", information: "Tavuk Burger yapımında kullanılır" , deg: false}
itemList["paketpatates"]	    = {fullyDegrades: true, decayrate: 0.01, displayname: "Dondurulmuş Patates Dilimleri", price: 2, weight: 1,   nonStack: false, model: "", image: "paketpatates.png", information: "Dondurulmuş patates" , deg: false}
itemList["kolabardak"]	    = {fullyDegrades: true, decayrate: 0.01, displayname: "Boş kola bardağı", price: 1, weight: 1,   nonStack: false, model: "", image: "kolabardak.png", information: "Dondurulmuş patates" , deg: false}


// ExeLds Meta Clothes

itemList["bags"]	    = {fullyDegrades: false, decayrate: 0.0, displayname: "bags", price: 500, weight: 0, nonStack: true, model: "", image: "bags.png" , deg: false}
itemList["tshirt"]	    = {fullyDegrades: false, decayrate: 0.0, displayname: "tshirt", price: 500, weight: 0, nonStack: true, model: "", image: "tshirt.png" , deg: false}
itemList["torso"]	    = {fullyDegrades: false, decayrate: 0.0, displayname: "torso", price: 500, weight: 0, nonStack: true, model: "", image: "torso.png" , deg: false}
itemList["chain"]	    = {fullyDegrades: false, decayrate: 0.0, displayname: "chain", price: 500, weight: 0, nonStack: true, model: "", image: "chain.png" , deg: false}
itemList["pants"]	    = {fullyDegrades: false, decayrate: 0.0, displayname: "pants", price: 500, weight: 0, nonStack: true, model: "", image: "pants.png" , deg: false}
itemList["shoes"]	    = {fullyDegrades: false, decayrate: 0.0, displayname: "shoes", price: 500, weight: 0, nonStack: true, model: "", image: "shoes.png" , deg: false}
itemList["arms"]	    = {fullyDegrades: false, decayrate: 0.0, displayname: "arms", price: 500, weight: 0, nonStack: true, model: "", image: "arms.png" , deg: false}
itemList["mask"]	    = {fullyDegrades: false, decayrate: 0.0, displayname: "mask", price: 500, weight: 0, nonStack: true, model: "", image: "mask.png" , deg: false}
itemList["glasses"]	    = {fullyDegrades: false, decayrate: 0.0, displayname: "glasses", price: 500, weight: 0, nonStack: true, model: "", image: "glasses.png" , deg: false}
itemList["bracelets"]	    = {fullyDegrades: false, decayrate: 0.0, displayname: "bracelets", price: 500, weight: 0, nonStack: true, model: "", image: "bracelets.png" , deg: false}
itemList["watches"]	    = {fullyDegrades: false, decayrate: 0.0, displayname: "watches", price: 500, weight: 0, nonStack: true, model: "", image: "watches.png" , deg: false}
itemList["helmet"]	    = {fullyDegrades: false, decayrate: 0.0, displayname: "helmet", price: 500, weight: 0, nonStack: true, model: "", image: "helmet.png" , deg: false}
itemList["ears"]	    = {fullyDegrades: false, decayrate: 0.0, displayname: "ears", price: 500, weight: 0, nonStack: true, model: "", image: "ears.png" , deg: false}
itemList["bproof"]	    = {fullyDegrades: false, decayrate: 0.0, displayname: "Steel Vest", price: 500, weight: 0, nonStack: true, model: "", image: "bproof.png" , deg: false}
itemList["decals"]	    = {fullyDegrades: false, decayrate: 0.0, displayname: "decals", price: 500, weight: 0, nonStack: true, model: "", image: "decals.png" , deg: false}

itemList["aracanahtar"]	    = {fullyDegrades: false, decayrate: 0.0, displayname: "Car Key", price: 500, weight: 0, nonStack: true, model: "", image: "aracanahtar.png" , deg: false}
itemList["notepad"]	    = {fullyDegrades: false, decayrate: 0.0, displayname: "Noteped", price: 50, weight: 0, nonStack: true, model: "", image: "notepad.png" , deg: false}


itemList["kartus"]	    = {fullyDegrades: false, decayrate: 0.0, displayname: "Tazer Cartridge", price: 10, weight: 0, nonStack: true, model: "", image: "kartus.png" , deg: false}
itemList["pdammo"]	= {fullyDegrades: true, decayrate: 1.0, displayname: "PD Pistol Bullet x50", craft: [{itemid: "aluminium", amount: 1 }, {itemid: "plastic", amount: 1 }, {itemid: "rubber", amount: 1 }], price: 2, weight: 3, nonStack: false, model: "", image: "np_pistol-ammo.png" , deg: false}
itemList["pdrifleammo"]	= {fullyDegrades: false, decayrate: 0.0, displayname: "PD SMG Bullet x50", craft: [{itemid: "aluminium", amount: 1 }, {itemid: "plastic", amount: 1 }, {itemid: "rubber", amount: 1 }], price: 2, weight: 7, nonStack: false, model: "", image: "np_rifle-ammo.png" , deg: false}
itemList["pdarmor"]	    = {fullyDegrades: true, decayrate: 0.25, displayname: "PD Armor", craft: [{itemid: "aluminium", amount: 5 }, {itemid: "plastic", amount: 1 }, {itemid: "rubber", amount: 1 }], price: 2, weight: 1, nonStack: false, model: "", image: "np_chest-armor.png", information: "Sizi korur" , deg: false}
itemList["marketsifre"] = {fullyDegrades: false,  decayrate: 0.0, displayname: "Şifreli Kağıt", price: 100, weight: 2, nonStack: false, model: "", image: "marketsifre.png", information: "Kağıdı doğru yerde kullanırsan binlerce dolar kazanırsın.", deg: false }
itemList["hurdakova"] = {fullyDegrades: false,  decayrate: 0.0, displayname: "Recycling Bucket", price: 100, weight: 2, nonStack: false, model: "", image: "hurdakova.png", information: "Bununla bazı malzemeleri takas edebilirsin.", deg: false }
itemList["medikit"]	= {fullyDegrades: false, decayrate: 0.0, displayname: "Medikit", price: 1000, weight: 0, nonStack: false, model: "", image: "np_medbag.png", information: "Sağlık çantası" , deg: false}
itemList["aracparcalari"]	= {fullyDegrades: false, decayrate: 0.0, displayname: "Araç Parçaları", price: 1, weight: 0, nonStack: false, model: "", image: "aracparcalari.png", information: "Bu kutuda araç parçaları var" , deg: false}
itemList["purmuzucu"]	= {fullyDegrades: false, decayrate: 0.0, displayname: "Pürmüz Ucu", price: 5, weight: 0, nonStack: false, model: "", image: "purmuzucu.png" , deg: false}
itemList["yosun"]	= {fullyDegrades: false, decayrate: 0.0, displayname: "Yosun", price: 5, weight: 0, nonStack: false, model: "", image: "yosun.png" , deg: false}
itemList["sahtekart"]	= {fullyDegrades: false, illegal: true, craft: [ {itemid: "boskart", amount: 1 }, {itemid: "kcip", amount: 1 } ], decayrate: 0.00, displayname: "Sahte Güvenlik Kartı", price: 3500, weight: 0, nonStack: false, model: "", image: "cb.png", information: "Parıltılı görünüyor!" , deg: false}
itemList["kcip"]	= {fullyDegrades: false, decayrate: 0.0, displayname: "Bozuk Çip", price: 1, weight: 0, nonStack: false, model: "", image: "kcip.png", information: "Bozuk ama işe yarar gibi duruyor" , deg: false}
itemList["boskart"]	= {fullyDegrades: false, decayrate: 0.0, displayname: "Blank Card", price: 1, weight: 0, nonStack: false, model: "", image: "boskart.png", information: "Boş yerin doldurulması lazım :)" , deg: false}
itemList["plastiksise"]	= {fullyDegrades: false, decayrate: 0.0, displayname: "Plastic bottle", price: 1, weight: 0, nonStack: false, model: "", image: "plastiksise.png", information: "En az senin kadar boş ve ezilmiş şise" , deg: false}
//itemList["plastiksise"]	= {fullyDegrades: false, decayrate: 0.0, displayname: "Plastik Şişe", price: 1, weight: 0, nonStack: false, model: "", image: "plastiksise.png", information: "En az senin kadar boş ve ezilmiş şife" , deg: false}
itemList["5graltin"]	= {fullyDegrades: true, decayrate: 1.0, displayname: "5GR Altın", craft: [{itemid: "erpring", amount: 1 }, {itemid: "stolen2ctchain", amount: 1 }, {itemid: "ering", amount: 1 }], price: 2, weight: 3, nonStack: false, model: "", image: "5graltin.png" , deg: false}
itemList["bakirkablo"]	= {fullyDegrades: false, decayrate: 0.0, displayname: "Copper wire", craft: [{itemid: "erpring", amount: 1 }, {itemid: "stolen2ctchain", amount: 1 }], price: 2, weight: 3, nonStack: false, model: "", image: "bakirkablo.png" , deg: false}
itemList["silahgovde"]	= {fullyDegrades: true, decayrate: 1.0, displayname: "Gun Body", craft: [{itemid: "copper", amount: 10 }, {itemid: "plastic", amount: 5 }], price: 2, weight: 3, nonStack: false, model: "", image: "silahgovde.png" , deg: false}
itemList["silahkabza"]	= {fullyDegrades: true, decayrate: 1.0, displayname: "Gun Grip", craft: [{itemid: "scrapmetal", amount: 10 }, {itemid: "glass", amount: 5 }], price: 2, weight: 3, nonStack: false, model: "", image: "silahkabza.png" , deg: false}
itemList["silahmekanizma"]	= {fullyDegrades: true, decayrate: 1.0, displayname: "Weapon Mechanism", craft: [{itemid: "electronickit", amount: 10 }, {itemid: "electronics", amount: 5 }], price: 2, weight: 3, nonStack: false, model: "", image: "silahmekanizma.png" , deg: false}
itemList["silahnamlu"]	= {fullyDegrades: true, decayrate: 1.0, displayname: "gun barrel", craft: [{itemid: "aluminium", amount: 10 }, {itemid: "steel", amount: 5 }], price: 2, weight: 3, nonStack: false, model: "", image: "silahnamlu.png" , deg: false}
itemList["silahtetik"]	= {fullyDegrades: true, decayrate: 1.0, displayname: "Gun Trigger", craft: [{itemid: "aluminium", amount: 10 }, {itemid: "steel", amount: 5 }], price: 250, weight: 1, nonStack: false, model: "", image: "silahtetik.png" , deg: false}
itemList["silahyay"]	= {fullyDegrades: true, decayrate: 1.0, displayname: "Weapon Bow", craft: [{itemid: "plastic", amount: 5 }, {itemid: "steel", amount: 5 }, {itemid: "glass", amount: 5 }], price: 250, weight: 1, nonStack: false, model: "", image: "silahyay.png" , deg: false}
itemList["purmuz"]	= {fullyDegrades: true, decayrate: 1.0, displayname: "blower", craft: [{itemid: "purmuzucu", amount: 1 }, {itemid: "steel", amount: 5 }, {itemid: "aluminium", amount: 2 }, {itemid: "lighter", amount: 1 }], price: 250, weight: 1, nonStack: false, model: "", image: "purmuz.png" , deg: false}
itemList["atesleyici"]	= {fullyDegrades: true, decayrate: 1.0, displayname: "igniter", craft: [{itemid: "purmuzucu", amount: 1 }, {itemid: "steel", amount: 5 }, {itemid: "aluminium", amount: 2 }, {itemid: "lighter", amount: 1 }], price: 5000, weight: 1, nonStack: false, model: "", image: "atesleyici.png" , deg: false}
itemList["kaykay"]	= {fullyDegrades: true, decayrate: 1.0, displayname: "Skateboard", craft: [{itemid: "purmuzucu", amount: 1 }, {itemid: "steel", amount: 5 }, {itemid: "aluminium", amount: 2 }, {itemid: "lighter", amount: 1 }], price: 200, weight: 1, nonStack: true, model: "", image: "kaykay.png" , deg: false}
itemList["kampcadir"]	= {fullyDegrades: true, decayrate: 1.0, displayname: "Camping tent", craft: [{itemid: "purmuzucu", amount: 1 }, {itemid: "steel", amount: 5 }, {itemid: "aluminium", amount: 2 }, {itemid: "lighter", amount: 1 }], price: 300, weight: 1, nonStack: true, model: "", image: "kampcadir.png" , deg: false}
itemList["kampsandalye"]	= {fullyDegrades: true, decayrate: 1.0, displayname: "Camping Chair", craft: [{itemid: "purmuzucu", amount: 1 }, {itemid: "steel", amount: 5 }, {itemid: "aluminium", amount: 2 }, {itemid: "lighter", amount: 1 }], price: 300, weight: 1, nonStack: true, model: "", image: "kampsandalye.png" , deg: false}
itemList["kampcadir"]	= {fullyDegrades: true, decayrate: 1.0, displayname: "Camping tent", craft: [{itemid: "purmuzucu", amount: 1 }, {itemid: "steel", amount: 5 }, {itemid: "aluminium", amount: 2 }, {itemid: "lighter", amount: 1 }], price: 50, weight: 1, nonStack: true, model: "", image: "kampcadir.png" , deg: false}
itemList["kampsandalye"]	= {fullyDegrades: true, decayrate: 1.0, displayname: "Camping Chair", craft: [{itemid: "purmuzucu", amount: 1 }, {itemid: "steel", amount: 5 }, {itemid: "aluminium", amount: 2 }, {itemid: "lighter", amount: 1 }], price: 50, weight: 1, nonStack: true, model: "", image: "kampsandalye.png" , deg: false}
itemList["kampates"]	= {fullyDegrades: true, decayrate: 1.0, displayname: "Camp Fire", craft: [{itemid: "purmuzucu", amount: 1 }, {itemid: "steel", amount: 5 }, {itemid: "aluminium", amount: 2 }, {itemid: "lighter", amount: 1 }], price: 350, weight: 1, nonStack: true, model: "", image: "kampates.png" , deg: false}
itemList["barbeku"]	    = {fullyDegrades: false, decayrate: 0.0, displayname: "Barbecue", price: 500, weight: 0, nonStack: true, model: "", image: "berbeku.png" , deg: false}
itemList["bonfiletabak"]	    = {fullyDegrades: false, decayrate: 0.0, displayname: "Bonfile Tabağı", price: 500, weight: 0, nonStack: true, model: "", image: "bonfiletabak.png" , deg: false}
itemList["masa"]	    = {fullyDegrades: false, decayrate: 0.0, displayname: "Camp Table", price: 500, weight: 0, nonStack: true, model: "", image: "masa.png" , deg: false}
itemList["bonfile"]	    = {fullyDegrades: false, decayrate: 0.0, displayname: "Bonfile", price: 500, weight: 0, nonStack: true, model: "", image: "bonfile.png" , deg: false}
itemList["pickaxe"]	= {fullyDegrades: true, decayrate: 1.0, displayname: "Camping Chair", craft: [{itemid: "purmuzucu", amount: 1 }, {itemid: "steel", amount: 5 }, {itemid: "aluminium", amount: 2 }, {itemid: "lighter", amount: 1 }], price: 50, weight: 1, nonStack: true, model: "", image: "np_pickaxe.png" , deg: false}
itemList["das"]	= {fullyDegrades: true, decayrate: 1.0, displayname: "Camping Chair", craft: [{itemid: "purmuzucu", amount: 1 }, {itemid: "steel", amount: 5 }, {itemid: "aluminium", amount: 2 }, {itemid: "lighter", amount: 1 }], price: 50, weight: 1, nonStack: true, model: "", image: "np_stone.png" , deg: false}
itemList["dastoken"]	= {fullyDegrades: true, decayrate: 1.0, displayname: "Camping Chair", craft: [{itemid: "purmuzucu", amount: 1 }, {itemid: "steel", amount: 5 }, {itemid: "aluminium", amount: 2 }, {itemid: "lighter", amount: 1 }], price: 50, weight: 1, nonStack: true, model: "", image: "ffrp_silver-coin.png" , deg: false}
itemList["sametke"]	= {fullyDegrades: true, decayrate: 1.0, displayname: "Camping Chair", craft: [{itemid: "purmuzucu", amount: 1 }, {itemid: "steel", amount: 5 }, {itemid: "aluminium", amount: 2 }, {itemid: "lighter", amount: 1 }], price: 50, weight: 1, nonStack: true, model: "", image: "ffrp_silver-coin.png" , deg: false}




// yeni eklenecek itemler buradan devem etmeli
itemList["nitrous_oxide"]	= {fullyDegrades: false, decayrate: 2.0, displayname: "Nitro", price: 5000, weight: 0,   nonStack: false, model: "", image: "nitrous_oxide.png", information: "Araç Nitrosu" , deg: false}
itemList["tunner"]	= {fullyDegrades: false, decayrate: 2.0, displayname: "Tunner Chip", price: 100, weight: 0,   nonStack: false, model: "", image: "tunner.png", information: "Araç Bilgisayarı" , deg: false}
itemList["nitro"]	= {fullyDegrades: false, decayrate: 2.0, displayname: "Nitro", price: 100, weight: 0,   nonStack: false, model: "", image: "nitro.png", information: "" , deg: false}
itemList["black_paint"]	= {fullyDegrades: false, decayrate: 2.0, displayname: "Siyah Araç Boyası", price: 100, weight: 0,   nonStack: false, model: "", image: "black_paint.png", information: "Aracınızın rengini değiştirir" , deg: false}
itemList["blue_paint"]	= {fullyDegrades: false, decayrate: 2.0, displayname: "Mavi Araç Boyası", price: 100, weight: 0,   nonStack: false, model: "", image: "blue_paint.png", information: "Aracınızın rengini değiştirir" , deg: false}
itemList["green_paint"]	= {fullyDegrades: false, decayrate: 2.0, displayname: "Yeşil Araç Boyası", price: 100, weight: 0,   nonStack: false, model: "", image: "green_paint.png", information: "Aracınızın rengini değiştirir" , deg: false}
itemList["red_paint"]	= {fullyDegrades: false, decayrate: 2.0, displayname: "Kırmızı Araç Boyası", price: 100, weight: 0,   nonStack: false, model: "", image: "red_paint.png", information: "Aracınızın rengini değiştirir" , deg: false}
itemList["white_paint"]	= {fullyDegrades: false, decayrate: 2.0, displayname: "Beyaz Araç Boyası", price: 100, weight: 0,   nonStack: false, model: "", image: "white_paint.png", information: "Aracınızın rengini değiştirir" , deg: false}