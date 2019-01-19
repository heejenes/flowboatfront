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
                        <View>
                            <Text>{this.profile.title}</Text>
                            <Text>{this.profile.owner}</Text>
                            <Text>{this.profile.time}</Text>
                            {/*<Text>{address}</Text>*/}
                        </View>
                        <View>
                            <Text>{this.profile.desc}</Text>
                            <Text>{this.profile.pay}</Text>
                        </View>
                    </View>
                </View>
            </TouchableHighlight>
        );
    }
}
//export default withNavigation(Panel);