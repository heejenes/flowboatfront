
import React from 'react';

import {
  Text, 
  View,
  TouchableHighlight
} from 'react-native';

export class JobProfilePage extends React.Component {
    constructor (props) {
        super(props);
        this.job = this.props.navigation.getParam('job');
        //this.owner = GET (this.job.owner);
    }

    render(){

        return (
            <View style={{flex: 1}}>
                <View style={{flex: 1}}>
                    <View style={{margin: 40}}>
                        <Text style={{fontSize: 20, marginBottom: 15}}>{this.job.title}</Text>
                        <Text style={{marginBottom: 8}}>{this.job.time}</Text>
                        <Text style={{marginBottom: 15}}>{this.job.desc}</Text>
                        <Text style={{marginBottom: 15}}>Posted by:</Text>

                        <TouchableHighlight onPress={() => {this.props.navigation.navigate('UserProfile', {user: this.job.owner})}}>
                            <View style={{height: 50, borderWidth: 2, borderColor: '#DEDEDE'}}>
                                <Text>{this.job.owner}</Text>
                            </View>
                        </TouchableHighlight>

                        <Text style={{fontSize: 18, marginBottom: 20, marginTop: 20}}>Offering: {this.job.pay}</Text>
                    </View>
                </View>

                <View style={{flex: 2}}></View>

                <View style={{flex: 1, justifyContent: "center", alignItems: "center"}}>
                    <TouchableHighlight onPress={() => {this.props.navigation.navigate('ChatRoom', {user: this.job.owner})}}>
                        <View style={{width: 180, height: 60, justifyContent: "center", alignItems: "center", backgroundColor: "#DE7474"}}>
                            <Text style={{fontSize: 25, color: 'white'}}>Start Chatting!</Text>
                        </View>
                    </TouchableHighlight>
                </View>
            </View>
            
        );
    }
}