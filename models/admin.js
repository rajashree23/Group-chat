var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var adminSchema = new Schema({
  email: {type:String,required:true,unique:true},
	topicname:[{topic:{type:String,required:true},memberemail:[{type:String,required:true}]}],

});
var adminModel = mongoose.model('admin',adminSchema);
module.exports = adminModel;
