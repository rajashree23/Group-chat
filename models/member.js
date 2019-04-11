var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var memberSchema = new Schema({
  email:{type:String,required:true,unique:true},
	topicname:[{type:String,required:true,unique:true}],

});
var memberModel = mongoose.model('member',memberSchema);
module.exports = memberModel;
