import React from 'react';

import {
  Text, 
  View
} from 'react-native';

export class UserProfilePage extends React.Component {
    constructor (props) {
        super(props);
        this.user = props.navigation.getParam('user');
    }

    render(){

        return (
            <View>
                <Text>{this.user.username}</Text>
                <Text>{this.user.firstname}</Text>
            </View>
        );
    }
}