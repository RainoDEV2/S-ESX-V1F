let DroppedInventories = [];
let InUseInventories = [];
let DataEntries = 0;
let hasBrought = [];
let CheckedDeginv = [];
const DROPPED_ITEM_KEEP_ALIVE = 1000 * 60 * 15; 

function clean() {
    for (let Row in DroppedInventories) {
        if (new Date(DroppedInventories[Row].lastUpdated + DROPPED_ITEM_KEEP_ALIVE).getTime() < Date.now() && DroppedInventories[Row].used && !InUseInventories[DroppedInventories[Row].name]) {
               emitNet("Inventory-Dropped-Remove", -1, [DroppedInventories[Row].name])
               delete DroppedInventories[Row];
        }
    }
}

setInterval(clean, 20000)


function db(string) {
    exports.ghmattimysql.execute(string,{}, function(result) {
    });
}


RegisterServerEvent("server-remove-item")
onNet("server-remove-item", async (player,itemidsent,amount,openedInv) => {
    functionRemoveAny(player, itemidsent, amount, openedInv)
});

RegisterServerEvent("server-update-item")
onNet("server-update-item", async (player, itemidsent,slot,data) => {
    let src = source
    let playerinvname = 'ply-' + player
    let string = `UPDATE user_inventory2 SET information='${data}' WHERE item_id='${itemidsent}' and name='${playerinvname}' and slot='${slot}'`

    exports.ghmattimysql.execute(string,{}, function() {
        emit("server-request-update-src",player,src)

    });
});

function functionRemoveAny(player, itemidsent, amount, openedInv) {
    let src = source
    let playerinvname = 'ply-' + player
    let string = `DELETE FROM user_inventory2 WHERE name='${playerinvname}' and item_id='${itemidsent}' LIMIT ${amount}`

    exports.ghmattimysql.execute(string,{},function() {
        emit("server-request-update-src",player,src)
    });
    
}

RegisterServerEvent("request-dropped-items")
onNet("request-dropped-items", async (player) => {
    let src = source;
    emitNet("requested-dropped-items", src, JSON.stringify(Object.assign({},DroppedInventories)));
});


// RegisterServerEvent("inventory-degItem")
// onNet("inventory-degItem", async(itemID) => {
//     let amount = 4000000
//     exports.ghmattimysql.execute(`UPDATE user_inventory2 set creationDate = ${amount} WHERE id = ${itemID}`, {}, function() {});
// });


RegisterServerEvent("server-request-update-src")
onNet("server-request-update-src", async (player,src) => {

    let playerinvname = 'ply-' + player
    let string = `SELECT count(item_id) as amount, item_id, id, name, information, slot, dropped, creationDate, MIN(creationDate) as creationDate FROM user_inventory2 WHERE name = '${playerinvname}' group by slot`; // slot
    exports.ghmattimysql.execute(string, {}, function(inventory) {
    emitNet("inventory-update-player", src, [inventory,0,playerinvname]);
    });
});



function makeid(length) {
    var result           = '';
    var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghikjlmnopqrstuvwxyz'; //abcdef
    var charactersLength = characters.length;
    for ( var i = 0; i < length; i++ ) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
}

function GenerateInformation(player,itemid,itemdata, durum) {
    let data = Object.assign({}, itemdata);
    let returnInfo = "{}"
    return new Promise((resolve, reject) => {
    if (itemid == "") return resolve(returninfo);
    let timeout = 0;
    if (!isNaN(itemid)) {
        var identifier = Math.floor((Math.random() * 99999) + 1)
        if(itemdata && itemdata.fakeWeaponData) {
            identifier = Math.floor((Math.random() * 99999) + 1)
            identifier = identifier.toString()
        }

        // should I remove that?
        let cartridgeCreated =  makeid(3) + "-" + Math.floor((Math.random() * 999) + 1);
        returnInfo = JSON.stringify({ cartridge: cartridgeCreated, serial: identifier})
        timeout = 1;
        clearTimeout(timeout)
        return resolve(returnInfo);
    } else if (Object.prototype.toString.call(itemid) ===  '[object String]') {
        switch(itemid.toLowerCase()) {
          case "idcard":
          /*if(itemdata == itemdata.fake) { 
              returnInfo = JSON.stringify({
                  identifier: itemdata.charID,
                  Name: itemdata.first.replace(/[^\w\s]/gi, ''),
                  Surname: itemdata.last.replace(/[^\w\s]/gi, ''),
                  Sex: itemdata.sex,
                  DOB: itemdata.dob })
                  timeout = 1
                  clearTimeout(timeout)
                  return resolve(returnInfo);
              } else {*/
                let string = `SELECT firstname,lastname,sex,dateofbirth FROM characters WHERE id = '${player}'`;
                        exports.ghmattimysql.execute(string,{}, function(result) {
                            returnInfo = JSON.stringify({
                                cid: player.toString(),
                                Firstname: result[0].firstname.replace(/[^\w\s]/gi, ''),
                                Lastname: result[0].lastname.replace(/[^\w\s]/gi, ''),
                                Sex: result[0].sex,
                                DOB: result[0].dateofbirth })
                                timeout = 1
                                clearTimeout(timeout)
                                return resolve(returnInfo);
                            });
                    //}
                    break;
                 case "casing":
                        returnInfo = JSON.stringify({ Identifier: itemdata.identifier, type: itemdata.eType, other: itemdata.other})
                        timeout = 1
                        clearTimeout(timeout)
                        return resolve(returnInfo);
                    case "evidence":
                        returnInfo = JSON.stringify({ Identifier:itemdata.identifier, type: itemdata.eType, other: itemdata.other })
                        timeout = 1;
                        clearTimeout(timeout)
                        return resolve(returnInfo);
                    case "notepad":
                        let notepads = `SELECT * FROM notepads`;                     
                        exports.ghmattimysql.execute(notepads,{}, function(result) {
                            let notepadNumber = result.length + 1;                          
                            timeout = 1
                            clearTimeout(timeout)
                            let newNotepad = `INSERT INTO notepads (notepadNumber) VALUES  ('${notepadNumber}');`
                            exports.ghmattimysql.execute(newNotepad,{},function() {});  
                            returnInfo = JSON.stringify({
                                Notepad: notepadNumber
                             })
                            return resolve(returnInfo);
                        });  
                        break; 
                    case "blue_phone":               
                        let phoneInfo = `SELECT identifier FROM characters WHERE id = '${player}'`;                   
                        exports.ghmattimysql.execute(phoneInfo,{}, function(result) {    
                                let phoneNumber =  mathrandom(1000000, 9999999)               
                                returnInfo = JSON.stringify({
                                    PhoneNumber: phoneNumber
                                })
                                timeout = 1
                                clearTimeout(timeout)
                                if (durum != false) {
                                    let newPhoneNumber = `INSERT INTO exeldsphonenumbers (identifier, phone_number) VALUES  ('${result[0].identifier}','${phoneNumber}');`
                                    exports.ghmattimysql.execute(newPhoneNumber,{},function() {});  
                                }
                                return resolve(returnInfo);
                        });                      
                        break;     
                    case "drivingtest":
                         if (data.id) {
                            let string = `SELECT * FROM driving_tests WHERE id = '${data.id}'`;
                            exports.ghmattimysql.execute(string, {}, function(result) {
                                if (result[0]) {
                                    let ts = new Date(parseInt(result[0].timestamp) * 1000)
                                    let testDate = ts.getFullYear() + "-" + ("0"+(ts.getMonth()+1)).slice(-2) + "-" + ("0" + ts.getDate()).slice(-2)
                                    returninfo = JSON.stringify({ ID: result[0].id, CID: result[0].cid, Instructor: result[0].instructor, Date: testdata })
                                    timeout = 1;
                                    clearTimeout(timeout)
                                }
                                return resolve(returninfo);
                            });
                        } else {
                            timeout = 1;
                            clearTimeout(timeout)
                            return resolve(returnInfo);
                        }
                        break;
                    default:
                            timeout = 1
                            clearTimeout(timeout)
                            return resolve(returnInfo);
                        }
                    } else {
                        return resolve(returnInfo);
                    }

                    setTimeout(() => {
                        if (timeout == 0) {
                            return resolve(returnInfo);
                        }
                     },500)
            });
    }

    RegisterServerEvent("server-inventory-give")
    onNet("server-inventory-give", async (player, itemid, slot, amount, generateInformation, itemdata, openedInv, isWeapon) => {
        
        let src = source
        let playerinvname = 'ply-' + player
        let information = "{}"
        let creationDate = Date.now()
    
        if (itemid == "idcard") {
            information = await GenerateInformation(player,itemid,itemdata)
        }

        if (itemid == "evidence") {
            information = await GenerateInformation(player,itemid,itemdata)
        }

        if (itemid == "notepad") {
            information = await GenerateInformation(player,itemid,itemdata)
        }

        if (itemid == "blue_phone") {
            information = await GenerateInformation(player,itemid,itemdata)
        }

        if (generateInformation != null) {
            information = generateInformation
        }

        if (isWeapon == true) {
            information = await GenerateInformation(player,itemid)
        }

          let values = `('${playerinvname}','${itemid}','${information}','${slot}','${creationDate}')`
             if (amount > 1) {
                 for (let i = 2; i <= amount; i++) {
                    values = values + `,('${playerinvname}','${itemid}','${information}','${slot}','${creationDate}')`
               
                }
            }
                     
        let query = `INSERT INTO user_inventory2 (name,item_id,information,slot,creationDate) VALUES ${values};`
        exports.ghmattimysql.execute(query,{},function() {
            emit("server-request-update-src",player,src)
        });
    
    });

    RegisterServerEvent("server-inventory-addStash")
    onNet("server-inventory-addStash", async (player, itemid, slot, amount) => {
        
        let playerinvname = player
        let information = "{}"
        let creationDate = Date.now()
    
          let values = `('${playerinvname}','${itemid}','${information}','${slot}','${creationDate}')`
             if (amount > 1) {
                 for (let i = 2; i <= amount; i++) {
                    values = values + `,('${playerinvname}','${itemid}','${information}','${slot}','${creationDate}')`
               
                }
            }
                     
        let query = `INSERT INTO user_inventory2 (name,item_id,information,slot,creationDate) VALUES ${values};`
        exports.ghmattimysql.execute(query,{},function() {});
    });
    

    RegisterServerEvent("server-inventory-refresh")
    onNet("server-inventory-refresh", async (player, sauce) => {
        let src = source
        if (!src) {
            src = sauce 
        }

        let string = `SELECT count(item_id) as amount, id, name, item_id, information, slot, dropped, quality, creationDate FROM user_inventory2 where name= 'ply-${player}' group by slot`;
        exports.ghmattimysql.execute(string,{}, function(inventory) {
            if (!inventory){}else{
            var invArray = inventory;
            var arrayCount = 0;
       		var playerinvname = player
            emitNet("inventory-update-player", src, [invArray,arrayCount,playerinvname]);
            emitNet('current-items', src, invArray)
            }
        })
    })

    

    RegisterServerEvent("server-inventory-open")
    onNet("server-inventory-open", async ( coords, player, secondInventory, targetName, itemToDropArray, sauce) => {
    
        let src = source
    
        if (!src) {
            src = sauce 
        }
    
        let playerinvname = 'ply-' + player
    
        if ( InUseInventories[targetName] || InUseInventories[playerinvname] ) {
      
            if (InUseInventories[playerinvname]) {
                if ( ( InUseInventories[playerinvname] != player ) ) {
                    return
                } else {
                   
                }
            }
            if (InUseInventories[targetName]) {
                if (InUseInventories[targetName] == player) {
    
                } else {
                    secondInventory = "69"
                }
            }
        }
        let string = `SELECT count(item_id) as amount, id, name, item_id, information, slot, dropped, quality, creationDate FROM user_inventory2 where name= '${playerinvname}' group by slot`;

        exports.ghmattimysql.execute(string,{}, function(inventory) {

            var invArray = inventory;
            var i;
            var arrayCount = 0;
    
               InUseInventories[playerinvname] = player;
     
               emitNet('current-items', src, invArray)
               
               if(secondInventory == "1") {
     
                   var targetinvname = targetName
         
                   let string = `SELECT count(item_id) as amount, id, name, item_id, information, slot, dropped, creationDate FROM user_inventory2 WHERE name = '${targetinvname}' group by slot`;
                   exports.ghmattimysql.execute(string,{}, function(inventory2) { 
                           emitNet("inventory-open-target", src, [invArray, arrayCount,playerinvname,inventory2,0,targetinvname,500,true]);
                      
                           InUseInventories[targetinvname] = player
                   });
               }

           else if (secondInventory == "3") {
        
               let Key = ""+DataEntries+"";
               let NewDroppedName = 'Drop-' + Key;
    
               DataEntries = DataEntries + 1
               var invArrayTarget = [];
               DroppedInventories[NewDroppedName] = { position: { x: coords[0], y: coords[1], z: coords[2] }, name: NewDroppedName, used: false, lastUpdated: Date.now() }


               InUseInventories[NewDroppedName] = player;
       
               invArrayTarget = JSON.stringify(invArrayTarget)
               emitNet("inventory-open-target", src, [invArray,arrayCount,playerinvname,invArrayTarget,0,NewDroppedName,500,false]);
               
}
else if (secondInventory == "13")
{   

    let Key = ""+DataEntries+"";
    let NewDroppedName = 'Drop-'  + Key;
    DataEntries = DataEntries + 1
      for (let Key in itemToDropArray) {
          for (let i = 0; i < itemToDropArray[Key].length; i++) {
              let objectToDrop = itemToDropArray[Key][i];
              db(`UPDATE user_inventory2 SET slot='${i+1}', name='${NewDroppedName}', dropped='1' WHERE name='${Key}' and slot='${objectToDrop.faultySlot}' and item_id='${objectToDrop.faultyItem}' `);
           }
      }
       
      DroppedInventories[NewDroppedName] = { position: { x: coords[0], y: coords[1], z: coords[2] }, name: NewDroppedName, used: false, lastUpdated: Date.now() }
      emitNet("Inventory-Dropped-Addition", -1, DroppedInventories[NewDroppedName] )
    } else if(secondInventory == "2") {
                
        var targetinvname = targetName;
        var shopArray = ConvenienceStore();
        var shopAmount = 12;
        emitNet("inventory-open-target", src, [invArray,arrayCount,playerinvname,shopArray,shopAmount,targetinvname,500,false]);

    }
    else if(secondInventory == "4")
{
    var targetinvname = targetName;
    var shopArray = HardwareStore();
    var shopAmount = 17;
    emitNet("inventory-open-target", src, [invArray,arrayCount,playerinvname,shopArray,shopAmount,targetinvname,500,false]);
}
    else if(secondInventory == "5")
    {
        var targetinvname = targetName;
        var shopArray = GunStore();
        var shopAmount = 9;
        emitNet("inventory-open-target", src, [invArray,arrayCount,playerinvname,shopArray,shopAmount,targetinvname,500,false]);
}
    else if(secondInventory == "10")
{
    var targetinvname = targetName;
    var shopArray = PoliceArmory();
    var shopAmount = 17;
    emitNet("inventory-open-target", src, [invArray,arrayCount,playerinvname,shopArray,shopAmount,targetinvname,500,false]);
}    

else if(secondInventory == "17")
{
    var targetinvname = targetName;
    var shopArray = Thermite();
    var shopAmount = 1;
    emitNet("inventory-open-target", src, [invArray,arrayCount,playerinvname,shopArray,shopAmount,targetinvname,500,false]);
}  

   else if(secondInventory == "18")
{
    var targetinvname = targetName;
    var shopArray = TacoTruck();
    var shopAmount = 14;
    emitNet("inventory-open-target", src, [invArray,arrayCount,playerinvname,shopArray,shopAmount,targetinvname,500,false]);
}  
   else if(secondInventory == "22")
{
    var targetinvname = targetName;
    var shopArray = JailFood();
    var shopAmount = 1;
    emitNet("inventory-open-target", src, [invArray,arrayCount,playerinvname,shopArray,shopAmount,targetinvname,500,false]);
}  
   else if(secondInventory == "25")
{
    var targetinvname = targetName;
    var shopArray = JailMeth();
    var shopAmount = 1;
    emitNet("inventory-open-target", src, [invArray,arrayCount,playerinvname,shopArray,shopAmount,targetinvname,500,false]);
}  
else if(secondInventory == "12")
{
    var targetinvname = targetName;
    var shopArray = burgiestore();
    var shopAmount = 8;
    emitNet("inventory-open-target", src, [invArray,arrayCount,playerinvname,shopArray,shopAmount,targetinvname,500,false]);
}   
    else if(secondInventory == "600")
{
    var targetinvname = targetName;
    var shopArray = policeveding();
    var shopAmount = 9;
    emitNet("inventory-open-target", src, [invArray,arrayCount,playerinvname,shopArray,shopAmount,targetinvname,500,false]);
}  


else if(secondInventory == "700")
{
    var targetinvname = targetName;
    var shopArray = pdmvending();
    var shopAmount = 2;
    emitNet("inventory-open-target", src, [invArray,arrayCount,playerinvname,shopArray,shopAmount,targetinvname,500,false]);
}  

    else if(secondInventory == "27")
{
    var targetinvname = targetName;
    var shopArray = Mechanic();
    var shopAmount = 5;
    emitNet("inventory-open-target", src, [invArray,arrayCount,playerinvname,shopArray,shopAmount,targetinvname,500,false]);
}
else if(secondInventory == "141")
{
    var targetinvname = targetName;
    var shopArray = recycle();
    var shopAmount = 8;
    emitNet("inventory-open-target", src, [invArray,arrayCount,playerinvname,shopArray,shopAmount,targetinvname,500,false]);
}
else if(secondInventory == "611")
{
    var targetinvname = targetName;
    var shopArray = Mechanic();
    var shopAmount = 4;
    emitNet("inventory-open-target", src, [invArray,arrayCount,playerinvname,shopArray,shopAmount,targetinvname,500,false]);
}

else if(secondInventory == "28")
{
    var targetinvname = targetName;
    var shopArray = Tuner();
    var shopAmount = 4;
    emitNet("inventory-open-target", src, [invArray,arrayCount,playerinvname,shopArray,shopAmount,targetinvname,500,false]);
}
else if(secondInventory == "29")
{
    var targetinvname = targetName;
    var shopArray = Smeltery();
    var shopAmount = 1;
    emitNet("inventory-open-target", src, [invArray,arrayCount,playerinvname,shopArray,shopAmount,targetinvname,500,false]);
}
else if(secondInventory == "30")
{
    var targetinvname = targetName;
    var shopArray = PurpleHazeWeedShop();
    var shopAmount = 1;
    emitNet("inventory-open-target", src, [invArray,arrayCount,playerinvname,shopArray,shopAmount,targetinvname,500,false]);
}
else if(secondInventory == "31")
{
    var targetinvname = targetName;
    var shopArray = BlueDreamWeedShop();
    var shopAmount = 1;
    emitNet("inventory-open-target", src, [invArray,arrayCount,playerinvname,shopArray,shopAmount,targetinvname,500,false]);
}
else if(secondInventory == "32")
{
    var targetinvname = targetName;
    var shopArray = OGKushWeedShop();
    var shopAmount = 1;
    emitNet("inventory-open-target", src, [invArray,arrayCount,playerinvname,shopArray,shopAmount,targetinvname,500,false]);
}
else if(secondInventory == "33")
{
    var targetinvname = targetName;
    var shopArray = BananaKushWeedShop();
    var shopAmount = 1;
    emitNet("inventory-open-target", src, [invArray,arrayCount,playerinvname,shopArray,shopAmount,targetinvname,500,false]);
}
else if(secondInventory == "34")
{
    var targetinvname = targetName;
    var shopArray = WeedWaxShop();
    var shopAmount = 1;
    emitNet("inventory-open-target", src, [invArray,arrayCount,playerinvname,shopArray,shopAmount,targetinvname,500,false]);
}

else if(secondInventory == "35")
{
    var targetinvname = targetName;
    var shopArray = Blackmarket();
    var shopAmount = 4;
    emitNet("inventory-open-target", src, [invArray,arrayCount,playerinvname,shopArray,shopAmount,targetinvname,500,false]);
}

else if(secondInventory == "36")
{
    var targetinvname = targetName;
    var shopArray = DabCartridgeShop();
    var shopAmount = 1;
    emitNet("inventory-open-target", src, [invArray,arrayCount,playerinvname,shopArray,shopAmount,targetinvname,500,false]);
}
else if(secondInventory == "37")
{
    var targetinvname = targetName;
    var shopArray = TimmysFlowers();
    var shopAmount = 9;
    emitNet("inventory-open-target", src, [invArray,arrayCount,playerinvname,shopArray,shopAmount,targetinvname,500,false]);
}

else if(secondInventory == "38")
{
    var targetinvname = targetName;
    var shopArray = JointCraft();
    var shopAmount = 1;
    emitNet("inventory-open-target", src, [invArray,arrayCount,playerinvname,shopArray,shopAmount,targetinvname,500,false]);
}
else if(secondInventory == "39")
{
    var targetinvname = targetName;
    var shopArray = BluntCraft();
    var shopAmount = 1;
    emitNet("inventory-open-target", src, [invArray,arrayCount,playerinvname,shopArray,shopAmount,targetinvname,500,false]);
}
else if(secondInventory == "40")
{
    var targetinvname = targetName;
    var shopArray = GrindWeed();
    var shopAmount = 1;
    emitNet("inventory-open-target", src, [invArray,arrayCount,playerinvname,shopArray,shopAmount,targetinvname,500,false]);
}
else if(secondInventory == "410")
{
    var targetinvname = targetName;
    var shopArray = HospitalShop();
    var shopAmount = 10;
    emitNet("inventory-open-target", src, [invArray,arrayCount,playerinvname,shopArray,shopAmount,targetinvname,500,false]);
}

else if(secondInventory == "42")
{
    var targetinvname = targetName;
    var shopArray = advrepairkit();
    var shopAmount = 1;
    emitNet("inventory-open-target", src, [invArray,arrayCount,playerinvname,shopArray,shopAmount,targetinvname,500,false]);
}

else if(secondInventory == "44")
{
    var targetinvname = targetName;
    var shopArray = Gummy();
    var shopAmount = 1;
    emitNet("inventory-open-target", src, [invArray,arrayCount,playerinvname,shopArray,shopAmount,targetinvname,500,false]);
}
else if(secondInventory == "45")
{
    var targetinvname = targetName;
    var shopArray = Eleckit();
    var shopAmount = 1;
    emitNet("inventory-open-target", src, [invArray,arrayCount,playerinvname,shopArray,shopAmount,targetinvname,500,false]);
}
else if(secondInventory == "46")
{
    var targetinvname = targetName;
    var shopArray = License();
    var shopAmount = 1;
    emitNet("inventory-open-target", src, [invArray,arrayCount,playerinvname,shopArray,shopAmount,targetinvname,500,false]);
}
else if(secondInventory == "631")
{
    var targetinvname = targetName;
    var shopArray = MekenikCraft();
    var shopAmount = 8;
    emitNet("inventory-open-target", src, [invArray,arrayCount,playerinvname,shopArray,shopAmount,targetinvname,500,false]);
}
else if(secondInventory == "632")
{
    var targetinvname = targetName;
    var shopArray = BurgerShops();
    var shopAmount = 6;
    emitNet("inventory-open-target", src, [invArray,arrayCount,playerinvname,shopArray,shopAmount,targetinvname,500,false]);
}
else if(secondInventory == "633")
{
    var targetinvname = targetName;
    var shopArray = Copcuitems();
    var shopAmount = 3;
    emitNet("inventory-open-target", src, [invArray,arrayCount,playerinvname,shopArray,shopAmount,targetinvname,500,false]);
}
else if(secondInventory == "634")
{
    var targetinvname = targetName;
    var shopArray = balikmarket();
    var shopAmount = 2;
    emitNet("inventory-open-target", src, [invArray,arrayCount,playerinvname,shopArray,shopAmount,targetinvname,500,false]);
}
else if(secondInventory == "635")
{
    var targetinvname = targetName;
    var shopArray = Belediyeshop();
    var shopAmount = 2;
    emitNet("inventory-open-target", src, [invArray,arrayCount,playerinvname,shopArray,shopAmount,targetinvname,500,false]);
} 
else if(secondInventory == "636")
{
    var targetinvname = targetName;
    var shopArray = sametkcrfatt();
    var shopAmount = 7;
    emitNet("inventory-open-target", src, [invArray,arrayCount,playerinvname,shopArray,shopAmount,targetinvname,500,false]);
} 
else if(secondInventory == "637")
{
    var targetinvname = targetName;
    var shopArray = espaldacraft();
    var shopAmount = 2;
    emitNet("inventory-open-target", src, [invArray,arrayCount,playerinvname,shopArray,shopAmount,targetinvname,500,false]);
} 
else if(secondInventory == "638")
{
    var targetinvname = targetName;
    var shopArray = illegalcraft1();
    var shopAmount = 1;
    emitNet("inventory-open-target", src, [invArray,arrayCount,playerinvname,shopArray,shopAmount,targetinvname,500,false]);
} 
else if(secondInventory == "639")
{
    var targetinvname = targetName;
    var shopArray = illegalcraft2();
    var shopAmount = 3;
    emitNet("inventory-open-target", src, [invArray,arrayCount,playerinvname,shopArray,shopAmount,targetinvname,500,false]);
}
else if(secondInventory == "640")
{
    var targetinvname = targetName;
    var shopArray = illegalcraft3();
    var shopAmount = 1;
    emitNet("inventory-open-target", src, [invArray,arrayCount,playerinvname,shopArray,shopAmount,targetinvname,500,false]);
}  
else if(secondInventory == "642")
{
    var targetinvname = targetName;
    var shopArray = illegalcraft5();
    var shopAmount = 1;
    emitNet("inventory-open-target", src, [invArray,arrayCount,playerinvname,shopArray,shopAmount,targetinvname,500,false]);
} 
else if(secondInventory == "643")
{
    var targetinvname = targetName;
    var shopArray = illegalcraft6();
    var shopAmount = 5;
    emitNet("inventory-open-target", src, [invArray,arrayCount,playerinvname,shopArray,shopAmount,targetinvname,500,false]);
} 
else if(secondInventory == "644")
{
    var targetinvname = targetName;
    var shopArray = illegalcraft7();
    var shopAmount = 1;
    emitNet("inventory-open-target", src, [invArray,arrayCount,playerinvname,shopArray,shopAmount,targetinvname,500,false]);
}  
else if(secondInventory == "645")
{
    var targetinvname = targetName;
    var shopArray = illegalcraft8();
    var shopAmount = 1;
    emitNet("inventory-open-target", src, [invArray,arrayCount,playerinvname,shopArray,shopAmount,targetinvname,500,false]);
} 
else if(secondInventory == "646")
{
    var targetinvname = targetName;
    var shopArray = illegalcraft9();
    var shopAmount = 1;
    emitNet("inventory-open-target", src, [invArray,arrayCount,playerinvname,shopArray,shopAmount,targetinvname,500,false]);
}  
else if(secondInventory == "647")
{
    var targetinvname = targetName;
    var shopArray = illegalcraft9();
    var shopAmount = 3;
    emitNet("inventory-open-target", src, [invArray,arrayCount,playerinvname,shopArray,shopAmount,targetinvname,500,false]);
}    
else if(secondInventory == "648")
{
    var targetinvname = targetName;
    var shopArray = illegalcraft10();
    var shopAmount = 5;
    emitNet("inventory-open-target", src, [invArray,arrayCount,playerinvname,shopArray,shopAmount,targetinvname,500,false]);
}    
else if(secondInventory == "649")
{
    var targetinvname = targetName;
    var shopArray = illegalcraft11();
    var shopAmount = 3;
    emitNet("inventory-open-target", src, [invArray,arrayCount,playerinvname,shopArray,shopAmount,targetinvname,500,false]);
}    
else if(secondInventory == "650")
{
    var targetinvname = targetName;
    var shopArray = illegalcraft12();
    var shopAmount = 1;
    emitNet("inventory-open-target", src, [invArray,arrayCount,playerinvname,shopArray,shopAmount,targetinvname,500,false]);
} 
else if(secondInventory == "651")
{
    var targetinvname = targetName;
    var shopArray = illegalcraft13();
    var shopAmount = 1;
    emitNet("inventory-open-target", src, [invArray,arrayCount,playerinvname,shopArray,shopAmount,targetinvname,500,false]);
} 
else if(secondInventory == "652")
{
    var targetinvname = targetName;
    var shopArray = illegalcraft14();
    var shopAmount = 5;
    emitNet("inventory-open-target", src, [invArray,arrayCount,playerinvname,shopArray,shopAmount,targetinvname,500,false]);
} 
else if(secondInventory == "657")
{
    var targetinvname = targetName;
    var shopArray = AvcilikShop();
    var shopAmount = 4;
    emitNet("inventory-open-target", src, [invArray,arrayCount,playerinvname,shopArray,shopAmount,targetinvname,500,false]);
} 
else if(secondInventory == "658")
{
    var targetinvname = targetName;
    var shopArray = HapisMarket();
    var shopAmount = 2;
    emitNet("inventory-open-target", src, [invArray,arrayCount,playerinvname,shopArray,shopAmount,targetinvname,500,false]);
} 
else if(secondInventory == "621")
{
    var targetinvname = targetName;
    var shopArray = illegalcraft17();
    var shopAmount = 1;
    emitNet("inventory-open-target", src, [invArray,arrayCount,playerinvname,shopArray,shopAmount,targetinvname,500,false]);
} 
// dabcartridge
else if(secondInventory == "7")
{
    var targetinvname = targetName;
    var shopArray = DroppedItem(itemToDropArray);
    
    itemToDropArray = JSON.parse(itemToDropArray)
    var shopAmount = itemToDropArray.length;
     
    emitNet("inventory-open-target", src, [invArray,arrayCount,playerinvname,shopArray,shopAmount,targetinvname,500,false]);
}
else {
    emitNet("inventory-update-player", src, [invArray,arrayCount,playerinvname]);
}
});
});


RegisterServerEvent("server-inventory-setReady")
onNet("server-inventory-setReady", async (player) => {
        let src = source
    
        let playerinvname = 'ply-' + player

        let string = `SELECT count(item_id) as amount, id, name, item_id, information, slot, dropped, quality, creationDate FROM user_inventory2 where name= '${playerinvname}' group by slot`;

        exports.ghmattimysql.execute(string,{}, function(inventory) {

        var invArray = inventory;
        var arrayCount = 0;
    
        InUseInventories[playerinvname] = player;
     
        emitNet('current-items', src, invArray)
           
        emitNet("inventory-update-player", src, [invArray,arrayCount,playerinvname]);

});
});


RegisterServerEvent("server-inventory-close")
onNet("server-inventory-close", async (player, targetInventoryName) => {
    let src = source
    if(targetInventoryName.startsWith("Trunk"))
    emitNet("toggle-animation", src, false);
    InUseInventories = InUseInventories.filter(item => item != player);
    if (targetInventoryName.indexOf("Drop") > -1 && DroppedInventories[targetInventoryName]) {
        if (DroppedInventories[targetInventoryName].used === false ) {
             delete DroppedInventories[targetInventoryName];
        } else {
            let string = `SELECT count(item_id) as amount, item_id, name, information, slot, dropped FROM user_inventory2 WHERE name='${targetInventoryName}' group by item_id `;
            exports.ghmattimysql.execute(string,{}, function(result) {
                if (result.length == 0 && DroppedInventories[targetInventoryName]) {
                    delete DroppedInventories[targetInventoryName];
                    emitNet("Inventory-Dropped-Remove", -1, [targetInventoryName])
                }
            });
        }
    }

});


RegisterServerEvent("inv:delete")
onNet("inv:delete", async (inv) => {
    db(`DELECT FROM user_inventory2 WHERE name='${inv}'`);
});


RegisterServerEvent("server-inventory-remove-slot")
onNet("server-inventory-remove-slot", async (player, itemidsent,amount,slot) => {
    var playerinvname = 'ply-' + player
    db(`DELETE FROM user_inventory2 WHERE name='${playerinvname}' and item_id='${itemidsent}' and slot='${slot}' LIMIT ${amount}`);
});

RegisterServerEvent("server-ragdoll-items") 
onNet("server-ragdoll-items", async (player) => {
     let currInventoryName = `ply-${player}`
     let newInventoryName = `wait-${player}`
     db(`UPDATE user_inventory2 SET name='${newInventoryName}', WHERE name='${currInventoryName}' and dropped=0 and item_id="mobilephone" `);
     db(`UPDATE user_inventory2 SET name='${newInventoryName}', WHERE name='${currInventoryName}' and dropped=0 and item_id="idcard" `);
     await db(`DELETE FROM user_inventory2 WHERE name='${currInventoryName}'`);
    db(`UPDATE user_inventory2 SET name='${currInventoryName}', WHERE name='${newInventoryName}' and dropped=0`);
});



function removecash(src,amount) {
    emit('cash:remove', src, amount)
}


setTimeout(CleanDroppedInventory, 5)



function DroppedItem(itemArray) {
    itemArray = JSON.parse(itemArray)
    var shopItems = [];

    shopItems[0] = { item_id: itemArray[0].itemid, id: 0, name: "shop", information: "{}", slot: 1, amount: itemArray[0].amount};

    return JSON.stringify(shopItems);
}
function BuildInventory(Inventory) {
    let buildInv = Inventory
    let invArray = {};
    itemCount = 0;
    for (let i = 0; i < buildInv.length; i++) {
        invArray[itemCount] = { item_id: buildInv[i].item_id, id: buildInv[i].id, name: buildInv[i].name, information: buildInv[i], slot: buildInv[i].slot};
        itemCount = itemCount + 1
    }
    return [JSON.stringify(invArray),itemCount]
}

function mathrandom(min, max) {
    return Math.floor(Math.random() * (max+1 - min) ) + min;
}


const DEGREDATION_INVENTORY_CHECK = 1000 * 60 * 60;
const DEGREDATION_TIME_BROKEN = 1000 * 60 * 40320;
const DEGREDATION_TIME_WORN = 1000 * 60 * 201000;



RegisterServerEvent("server-inventory-move")
onNet("server-inventory-move", async (player, data, coords) => {
    let targetslot = data[0]
    let startslot = data[1]
    let targetName = data[2].replace(/"/g, "");
    let startname = data[3].replace(/"/g, "");
    let purchase = data[4]
    let itemCosts = data[5]
    let itemidsent = data[6]
    let amount = data[7]
    let crafting = data[8]
    let isWeapon = data[9]
    let PlayerStore = data[10]
    let creationDate = Date.now()

    if ((targetName.indexOf("Drop") > -1 || targetName.indexOf("hidden") > -1) && DroppedInventories[targetName]) {

        if (DroppedInventories[targetName].used === false) {

            DroppedInventories[targetName] = { position: { x: coords[0], y: coords[1], z: coords[2]}, name: targetName, used: true, lastUpdated: Date.now() }
            emitNet("Inventory-Dropped-Addition", -1, DroppedInventories[targetName] )
        }
    }

    let info = "{}"

    if (purchase) {
        if(isWeapon) {


        }
        info = await GenerateInformation(player,itemidsent)
        removecash(source,itemCosts)

        if (!PlayerStore) {
            for (let i = 0; i < parseInt(amount); i++) {
        
                db(`INSERT INTO user_inventory2 (item_id, name, information, slot, creationDate) VALUES ('${itemidsent}','${targetName}','${info}','${targetslot}','${creationDate}' );`);
            }
        } else if (PlayerStore) {
             payStore(startname,itemCosts,itemidsent)
           
                db(`INSERT INTO user_inventory2 (item_id, name, information, slot, creationDate) VALUES ('${itemidsent}','${targetName}','${info}','${targetslot}','${creationDate}' );`);

            for (let i = 0; i < parseInt(amount); i++) {
                db(`UPDATE user_inventory2 SET slot='${targetslot}', name='${targetName}', dropped='0' WHERE slot='${startslot}' and name='${startname}'`);
 
            }
        } else if (crafting) {
     
            info - await GenerateInformation(player,itemidsent)
            for (let i = 0; i < parseInt(amount); i++) {
                db(`INSERT INTO user_inventory2 (item_id, name, information, slot, creationDate) VALUES ('${itemidsent}','${targetName}','${info}','${targetslot}','${creationDate}' );`);
            }
        } else {
            if (targetName.indexOf("Drop") > -1 || targetName.indexOf("hidden") > -1) {

            db(`INSERT INTO user_inventory2 SET slot='${targetslot}', name='${targetName}', dropped='1' WHERE slot='${startslot}' AND name='${startname}'`);

           } else {
            db(`UPDATE user_inventory2 SET slot='${targetslot}', name='${targetName}', dropped='0' WHERE slot='${startslot}' and name='${startname}'`);

           }
        }
     } else {

        if (crafting == true) {
            info - await GenerateInformation(player,itemidsent, null, false)
            for (let i = 0; i < parseInt(amount); i++) {
                db(`INSERT INTO user_inventory2 (item_id, name, information, slot, creationDate) VALUES ('${itemidsent}','${targetName}','${info}','${targetslot}','${creationDate}' );`);
            }
        }
           
        db(`UPDATE user_inventory2 SET slot='${targetslot}', name='${targetName}', dropped='0' WHERE slot='${startslot}' and name='${startname}'`);
     
    }
});


function CleanDroppedInventory() {
    onNet("server-ragdoll-items", async (player) => {
    let currInventoryName = `ply-${player}`
    let newInventoryName = player
    db(`UPDATE user_inventory2 SET name='${newInventoryName}', WHERE name='${currInventoryName}' and dropped=0 and item_id="mobilephone" `);
    db(`UPDATE user_inventory2 SET name='${newInventoryName}', WHERE name='${currInventoryName}' and dropped=0 and item_id="idcard" `);
    db(`UPDATE user_inventory2 SET name='${currInventoryName}', WHERE name='${newInventoryName}' and dropped=0`);  
    })
};

RegisterServerEvent("server-inventory-stack")
onNet("server-inventory-stack", async (player, data, coords) => {
    let targetslot = data[0]
    let moveAmount = data[1]
    let targetName = data[2].replace(/"/g, "");
    let src = source
    let originSlot = data[3]
    let originInventory = data[4].replace(/"/g, "");
    let purchase = data[5]
    let itemCosts = data[6]
    let itemidsent = data[7]
    let amount = data[8]
    let crafting = data[9]
    let isWeapon = data[10]
    let PlayerStore = data[11]
    let amountRemaining = data[12]
    let creationDate = Date.now()
    if ( (targetName.indexOf("Drop") > -1 || targetName.indexOf("hidden") > -1) && DroppedInventories[targetName] ) {

         if (DroppedInventories[targetName].used === false ) {
             DroppedInventories[targetName] =  { position: { x: coords[0], y: coords[1], z: coords[2] }, name: targetName, used: true, lastUpdated: Date.now() }
             emitNet("Inventory-Dropped-Addition", -1, DroppedInventories[targetName] )
         }
    }

     let info = "{}"

     if (purchase) {

         /*if (isWeapon) {
            db(`INSERT INTO user_inventory2 (item_id, name, information, slot, creationDate) VALUES ('${itemidsent}','${targetName}','${info}','${targetslot}','${creationDate}' );`);
     
         }*/
         info = await GenerateInformation(player,itemidsent)
         removecash(src,itemCosts)

         if (!PlayerStore) {
             for (let i = 0; i < parseInt(amount); i++) {

              db(`INSERT INTO user_inventory2 (item_id, name, information, slot, creationDate) VALUES ('${itemidsent}','${targetName}','${info}','${targetslot}','${creationDate}' );`);
          

             }
         }

         if (PlayerStore) {
            payStore(startname, itemCosts, itemidsent)
            db(`UPDATE user_inventory2 SET slot='${targetslot}', name='${targetname}', dropped = '0' WHERE slot='${startslot}' AND name='${startname}'`);
         }


     } else if (crafting) {
        info = await GenerateInformation(player,itemidsent)
         for (let i = 0; i < parseInt(amount); i++) {

             db(`INSERT INTO user_inventory2 (item_id, name, information, slot, creationDate) VALUES ('${itemidsent}','${targetName}','${info}','${targetslot}','${creationDate}' );`);
         }
     } else {
         let string = `SELECT item_id, id FROM user_inventory2 WHERE slot='${originSlot}' and name='${originInventory}' LIMIT ${moveAmount}`;

         exports.ghmattimysql.execute(string,{}, function(result) {

            var itemids = "0"
            for (let i = 0; i < result.length; i++) {
                itemids = itemids + "," + result[i].id
            }
            
             if (targetName.indexOf("Drop") > -1 || targetName.indexOf("hidden") > -1) {
                db(`UPDATE user_inventory2 SET slot='${targetslot}', name='${targetName}', dropped='1' WHERE id IN (${itemids})`);

             } else {
                 db(`UPDATE user_inventory2 SET slot='${targetslot}', name='${targetName}', dropped='0' WHERE id IN (${itemids})`);
            }
         });
     }
 });


RegisterServerEvent("server-inventory-swap")
onNet("server-inventory-swap", (player, data, coords) => {
     let targetslot = data[0]
     let targetname = data[1].replace(/"/g, "");
     let startslot = data[2]
     let startname = data[3].replace(/"/g, "");

     let string = `SELECT id FROM user_inventory2 WHERE slot='${targetslot}' AND name='${targetname}'`;
         
    exports.ghmattimysql.execute(string,{}, function(startid) {
        var itemids = "0"
        for (let i = 0; i < startid.length; i++) {
            itemids = itemids + "," + startid[i].id

        }

        let string = false;
        if (targetname.indexOf("Drop") > -1 || targetname.indexOf("hidden") > -1) {
            string = `UPDATE user_inventory2 SET slot='${targetslot}', name ='${targetname}', dropped='1' WHERE slot='${startslot}' AND name='${startname}'`;
        } else {
            string = `UPDATE user_inventory2 SET slot='${targetslot}', name ='${targetname}', dropped='0' WHERE slot='${startslot}' AND name='${startname}'`;
        }
 
        exports.ghmattimysql.execute(string,{}, function(inventory) {
            if (startname.indexOf("Drop") > -1 || startname.indexOf("hidden") > -1) {
                db(`UPDATE user_inventory2 SET slot='${startslot}', name='${startname}', dropped='1' WHERE id IN (${itemids})`);
            } else {
                db(`UPDATE user_inventory2 SET slot='${startslot}', name='${startname}', dropped='0' WHERE id IN (${itemids})`);
            }
        });
    });
});


onNet('onResourceStart', (resource) => {
    if (resource == GetCurrentResourceName()){
     db(`DELETE FROM user_inventory2 WHERE name like '%Drop%' OR name like '%Hidden%' OR name like '%Çöp%' OR name like '%WORK%'`)
    }
})