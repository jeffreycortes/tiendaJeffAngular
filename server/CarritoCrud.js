var MongoClient = require('mongodb').MongoClient
    ,mongoose = require('mongoose')
    ,Item = require('./Models/Item.js')
    ,User = require('./Models/User.js');
const urlUsers = "mongodb://localhost/users";
var url = "mongodb://localhost/tiendaDB";

module.exports.login = function(mail,pass, callback){
  mongoose.connect(urlUsers + "/users");
  User.find({mail: mail, pass: pass}).find((error, result)=>{
    mongoose.disconnect();
    if(error) callback("Error en método login -> " + error)
    callback(null, (result.length > 1) ? "Validado": "No Validado")
  })
}

module.exports.consultarItems = function(textSearch, filterName, callback){
  mongoose.connect(url, function(error){
    if(error){
      console.log(error);
    }
  });

  var filter = {};
  if(filterName!="fullData"){
    filter[filterName] = (filterName=="nombre") ? new RegExp(textSearch, "i") : textSearch;
  }

  Item.find(filter).find((error, items)=>{
    mongoose.disconnect();
    if(error) callback("Error en método consultar -> " + error)
    callback(null, items)
  })
}

module.exports.actualizarItem = function(item, callback){
  mongoose.connect(url, function(error){
    if(error){
      console.log(error);
    }
  });

  Item.findById(item.id, function (err, itemBD) {
    itemBD.unidades = itemBD.unidades - item.unidades;
    itemBD.save(function (err, updatedItem) {
      mongoose.disconnect();
      if (err) callback("Error en método consultar -> " + err)
      callback(null, "Ok")
    })
  });
}
