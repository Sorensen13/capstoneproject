Meteor.subscribe("chatroom");
import { Chatroom } from '../lib/collections.js';
import { Messages } from '../lib/collections.js';

Router.configure({
	layoutTemplate: 'ApplicationLayout'
});

Router.route('/', function () {
	this.render('header');
});

Router.route('/chatroom/:_id', function () {
	Session.set("chatroomId", this.params._id);
	currentChatroom = Chatroom.findOne({_id:Session.get("chatroomId")});
	this.render('chatroomInterface', {data:currentChatroom});
});