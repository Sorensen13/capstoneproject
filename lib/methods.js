import { Chatroom } from '../lib/collections.js';
import { Messages } from '../lib/collections.js';

Meteor.methods({
	'createMessage':function(messageItem){
		if (!Meteor.user()){
			return;
		}
		else {
			messageItem.messageOwner = Meteor.user().username;
			messageItem.createdOn = new Date();
			return Messages.insert(messageItem);
		}
	},
	'createChatroom':function(chatroomItem){
		if (!Meteor.user()){
			return;
		}
		else {
			return Chatroom.insert(chatroomItem);
	}
}});