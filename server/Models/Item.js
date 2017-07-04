var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var itemSchema = new Schema({
  imagen: {type: String, required: true}
  ,nombre: {type: String, required: true}
  ,precio: {type: Number, required: true}
  ,unidades: {type: Number, required: true}
})

var Item = mongoose.model('Item', itemSchema);
module.exports = Item;
