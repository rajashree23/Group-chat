var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var topicSchema = new Schema({
	topicname:{type:String,required:true,unique:true},
    messages:{type:Array}
});
var topicModel = mongoose.model('topic',topicSchema);
module.exports = topicModel;
