import { Mongo } from 'meteor/mongo';
import SimpleSchema from 'simpl-schema';
SimpleSchema.extendOptions(['autoform']);

export const Chatroom = new Mongo.Collection("chatroom");

export const Messages = new Mongo.Collection("messages");

Chatroom.attachSchema(new SimpleSchema({
    title: {
        type: String,
        label: "Title",
        max: 150
    },
    description: {
        type: String,
        label: "Description",
        max: 400
    },
    chatroomOwner: {
        type: String,
        autoform: {
            type: "hidden",
            label: false
        },
        defaultValue: 'null'
    },
}));

Messages.attachSchema(new SimpleSchema({
    messageText: {
        type: String,
        label: "Message",
        max: 1000
    },
    messageOwner: {
        type: String,
        autoform: {
            type: "hidden",
            label: false
        },
        defaultValue: '0'
    },
    createdOn: {
        type: Date,
        autoform: {
            type: "hidden",
            label: false
        },
        defaultValue: new Date(),
    },
    chatroomId: {
        type: String,
        autoform: {
            type: "hidden",
            label: false
        },
        defaultValue: '0'
    },
}));