import React from 'react';

import {
  Text, 
  View, 
  TouchableHighlight
} from 'react-native';

import { withNavigation } from 'react-navigation';

export class Panel extends React.Component {
    constructor (props) {
        super(props);
        
        this.profile = this.props.job,
    

        console.log(this.profile.job);
    }

    render(){
        //address=data.location.number+data.location.streetname;

        return(
            
            <TouchableHighlight onPress={() => { 
                //console.log(this.profile.id); 
                this.props.navigation.navigate('JobProfile', { job: this.profile }); 
                //console.log(this.profile.job); 
            }}>
                <View style={{justifyContent: 'center', height: 110, backgroundColor: '#FFF0EF', borderBottomWidth: 2, borderColor: '#ABA097'}}>
                    <View style={{flexDirection: 'row', marginLeft: 10}}>
                        <View style={{marginRight: 30, width: 190}}>
                            <Text style={{marginBottom: 10, fontSize: 15}}>{this.profile.title}</Text>
                            <Text style={{marginBottom: 10}}>{this.profile.owner}</Text>
                            <Text style={{marginBottom: 10}}>{this.profile.time}</Text>
                            {/*<Text>{address}</Text>*/}
                        </View>
                        <View>
                            <Text style={{marginBottom: 10}}>{this.profile.desc.slice(0,20)+"..."}</Text>
                            <Text style={{marginBottom: 10}}>{this.profile.pay}</Text>
                        </View>
                    </View>
                </View>
            </TouchableHighlight>
        );
    }
}
//export default withNavigation(Panel);