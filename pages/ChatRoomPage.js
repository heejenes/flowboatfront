import React from 'react';

import {
  Text, 
  View,
  ScrollView,
  TouchableHighlight,
  TextInput
} from 'react-native';
import { MessageContainer } from './comps/MessageContainerComp.js';

export class ChatRoomPage extends React.Component {
    constructor (props) {
        super(props);
        this.userid = this.props.navigation.getParam('user');
        this.message = {
            user: "heej",
            recipient: this.userid,
            time: "",
            text: ""
        }
        //this.user = GET (userid);
    }

    render(){

        return (
            <View style={{flex: 1}}>
                <View style={{flex: 2, justifyContent: 'center', backgroundColor: 'FCF9F8'}}>
                    <View style={{flex: 50, flexDirection: 'row', alignItems: 'center', justifyContent: 'center'}}>
                        {/*<View style={{flex: 1, height: 50, width: 50, backgroundColor: 'white', marginLeft: 40}}/>*/}
                        <View>
                            <TouchableHighlight onPress={()=> {}}>
                                <View style={{flex: 1, alignItems: 'center', justifyContent: 'center', marginRight: 30}}>
                                    <Text>yeeeee</Text>
                                </View>
                            </TouchableHighlight>
                        </View>
                        <View>
                            <Text style={{
                            flex: 1, fontSize: 30, color: 'black', marginLeft: 40, marginRight: 40, marginTop: 30
                            }}>{this.userid}</Text>
                        </View>
                        <View>
                            <View style={{flex: 1, height: 50, width: 50, marginLeft: 30}}/>
                        </View>

                    </View>  
                    <View style={{flex: 0, backgroundColor: '#DCC6AB'}}/> 
                    <View style={{flex: 1, backgroundColor: '#9B9B9B'}}/> 
                </View>
                
                <View style={{flex: 10}}>
                    <ScrollView>
                        <MessageContainer userid={this.userid}></MessageContainer>
                    </ScrollView>
                </View>
                
                <View style={{flex: 1, flexDirection: "row", backgroundColor: "#DBCECE"}}>
                    <TextInput style={{flex: 8, marginLeft: 10, alignItems: 'center'}} 
                        placeholder={'Message ' + this.userid} 
                        onChangeText={(text)=>{
                            this.message.text = text;
                        }} 
                    />
                    <TouchableHighlight onPress={()=>{/*post message*/}}>
                        <View style={{marginHorizontal: 20, marginTop: 15}}>
                            <Text>/\</Text>
                        </View>
                    </TouchableHighlight>
                </View>

            </View>
            
        );
    }
}