import React from 'react';

import {
  Text, 
  View, 
  TouchableHighlight
} from 'react-native';

import { Panel } from './PanelComp.js';

//const request = require('request-promise');

export class PanelContainer extends React.Component{
    constructor(props) {
        super(props);
        //this.jobs = request(url, "utf-8");
        panelList = [];
        for(var i=0; i<props.jobs.length; i++) {
            panelList.push(React.createElement(Panel, {
                job: props.jobs[i], 
                navigation: props.navigation, 
                key: props.jobs[i].id,
                id: props.jobs[i].id
            }));
            
        }
    }
    render() {
        return (
            panelList
        );
    }
}