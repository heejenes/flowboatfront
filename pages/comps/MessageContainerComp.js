import React from 'react';

import {
  Text, 
  View, 
  TouchableHighlight
} from 'react-native';

import { Message } from './MessageComp.js';

//const request = require('request-promise');
json = require('expo/AppEntry');

export class MessageContainer extends React.Component{
    constructor(props) {
        super(props);
        this.user = this.props.userid;
        this.state = json.data; //oldest messages first
        
        if (this.state){            
            this.listLength = this.state.length
        } 
        else{
            this.state = null;
            this.listLength = 0;
        }
        this.messageList = []; 
        for(var i=0; i<this.listLength; i++) {
            this.messageList.push(React.createElement(Message, {
                key: json.data[i].id,
                id: json.data[i].id,
                data: this.state[i]

            }));
            
        }
    }
    updateList(data) { //to add new messages to the list.
        this.messageList.push(React.createElement(Message), {
            key: data.id,
            id: data.id,
            data: data
        });
    }

    render() {
        return (
            this.messageList
        );
    }
}