var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var adminSchema = new Schema({
  email: {type:String,required:true,unique:true},
	topic:[{
        topicname:{type:String,required:true},
        memberemail:[{type:String,required:true}],
        request:[{type:String,required:true}]
        }],

});
var adminModel = mongoose.model('admin',adminSchema);
module.exports = adminModel;
