import React from 'react';

import {
  Text, 
  View, 
  TouchableHighlight, 
  Image,
  ScrollView
} from 'react-native';

import { PanelContainer } from './comps/PanelContainerComp.js';

export class MenuPage extends React.Component {

    constructor(props){
        super(props);
        this.state = {};
        this.user = null;
        
        jobs = [
                    {
                        id: 'aaa',
                        title: 'a',
                        owner: 'a',
                        time: 'a',
                        location: {
                            number: '1',
                            streetname: 'a',
                        },
                        desc: 'a',
                        pay: 'a'
                    },
                    {
                        id: 'bbb',
                        title: 'b',
                        owner: 'b',
                        time: 'b',
                        location: {
                            number: '2',
                            streetname: 'b',
                        },
                        desc: 'b',
                        pay: 'b'
                    }
                ];
                
    }

    render() {
        
        return (

        <View style={{flex: 1}}>


            {/*TOP MENU*/}
            <View style={{height: 100, justifyContent: 'center', backgroundColor: 'FCF9F8'}}>
                <View style={{flex: 50, flexDirection: 'row', alignItems: 'center', justifyContent: 'center'}}>
                    {/*<View style={{flex: 1, height: 50, width: 50, backgroundColor: 'white', marginLeft: 40}}/>*/}
                    <View>
                        <TouchableHighlight onPress={()=> {
                            this.user = this.props.navigation.getParam('User');
                            console.log(`user`);
                            if (this.user!=null){
                                this.props.navigation.navigate('UserProfile', {user: this.user});
                            }
                            else{
                                this.props.navigation.navigate('Login');
                            }
                        }}>
                            <View style={{flex: 1, alignItems: 'center', justifyContent: 'center', marginRight: 30}}>
                                <Image source={require('../assets/profileIcon.png')}/>
                            </View>
                        </TouchableHighlight>
                    </View>
                    <View>
                        <Text style={{
                        flex: 1, fontSize: 30, color: 'black', marginLeft: 40, marginRight: 40, marginTop: 30
                        }}>REQUEST</Text>
                    </View>
                    <View>
                        <View style={{flex: 1, height: 50, width: 50, marginLeft: 30}}/>
                    </View>

                </View>  
                <View style={{flex: 2, backgroundColor: '#DCC6AB'}}/> 
                <View style={{flex: 1, backgroundColor: '#9B9B9B'}}/> 
            </View>
            

            {/*BODY*/}

            <ScrollView>

                <PanelContainer jobs={jobs} navigation={this.props.navigation}/>

            </ScrollView>

            {/*<View style={{flex: 16, backgroundColor: '#FFFBF7'}}/>*/}
        </View>
        );
    }
}