import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';
import { Chatroom } from '../lib/collections.js';
import { Messages } from '../lib/collections.js';

import './main.html';

window.Chatroom = Chatroom;
window.Messages = Messages;

Accounts.ui.config({
	passwordSignupFields: 'USERNAME_ONLY',
});


Template.header.helpers({
	nickname:function(){
		if (Meteor.user()){
			return Meteor.user().username;
		}
	}
});

Template.add.events({
	'click .js-create-room':function(event){
		const target = event.target;
		var chatroomName = $('#chatroom-name').val();
		var description = $('#description').val();
		var owner = Meteor.user().username;
		var chatroomItem = {title:chatroomName,
							chatroomOwner:owner,
							description:description,
							createdOn:new Date()};

		Meteor.call('createChatroom', chatroomItem);

		$('#addModal').modal('close');

		return false;
	}
});

Template.availableChatrooms.helpers({
	chatrooms:function(){
		Meteor.subscribe("chatroom");
		return Chatroom.find();
	}
});

Template.chatroomInterface.helpers({
	message:function(){
		Meteor.subscribe("messages.filtered");
		return Messages.find({chatroomId:Session.get("chatroomId")});
	}
});

Template.sendMessage.helpers({
	chatroomId:function(){
		return Session.get("chatroomId");
	}
});