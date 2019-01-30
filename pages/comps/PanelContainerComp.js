import React from 'react';

import { Panel } from './PanelComp.js';

//const request = require('request-promise');
export class PanelContainer extends React.Component{
    constructor(props) {
        super(props);
        //this.jobs = request(url, "utf-8");
        this.json = require('../../data/data.json');
        panelList = [];
        listLength = this.json.data.length;
        for(var i=0; i<listLength; i++) {
            panelList.push(React.createElement(Panel, {
                //job: props.jobs[i]
                navigation: props.navigation, 
                key: this.json.data[i].id,
                id: this.json.data[i].id,
                job: this.json.data[i]

            }));
            
        }
    }
    render() {
        return (
            panelList
        );
    }
}