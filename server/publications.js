import { Chatroom } from '../lib/collections.js';
import { Messages } from '../lib/collections.js';

Meteor.publish('messages.filtered',function (chatroomId) {
	if (this.userId){
		return Messages.find({})
	}
});
Meteor.publish("chatroom", function(){
	if (this.userId){
		return Chatroom.find({});
	}
});