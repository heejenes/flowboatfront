
import React from 'react';

import {
  Text, 
} from 'react-native';

export class JobProfilePage extends React.Component {
    constructor (props) {
        super(props);
        job = props.navigation.getParam('job');
    }

    render(){

        return (
            <Text>{job.title}</Text>
        );
    }
}