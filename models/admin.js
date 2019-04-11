var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var topicSchema = new Schema({
  email: {type:String,required:true,unique:true},
	topicname:[{type:String,required:true,unique:true}],
  member_email: [{type:String,required:true,unique:true}]
});
var adminModel = mongoose.model('admin',adminSchema);
module.exports = adminModel;
