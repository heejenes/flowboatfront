import React from 'react';

import {
  Text, 
  View
} from 'react-native';


export class Message extends React.Component {
    constructor (props) {
        super(props);
    }

    render(){

        return(
            <View style = {{flexDirection: 'row'}}>
                <Text>{this.props.message}</Text>
                <Text>{this.props.time}</Text>
            </View>
        );
    }
}