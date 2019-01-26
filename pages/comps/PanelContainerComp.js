import React from 'react';

import {
  Text, 
  View, 
  TouchableHighlight
} from 'react-native';

import { Panel } from './PanelComp.js';

//const request = require('request-promise');
json = require('../../data.json');

export class PanelContainer extends React.Component{
    constructor(props) {
        super(props);
        //this.jobs = request(url, "utf-8");
        this.jobs = json.data;
        panelList = [];
        for(var i=0; i<json.data.length; i++) {
            panelList.push(React.createElement(Panel, {
                //job: props.jobs[i]
                navigation: props.navigation, 
                key: json.data[i].id,
                id: json.data[i].id,
                job: json.data[i]

            }));
            
        }
    }
    render() {
        return (
            panelList
        );
    }
}