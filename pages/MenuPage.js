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
    }

    render() {
        
        return (

        <View style={{flex: 1}}>


            {/*TOP MENU*/}
            <View style={{height: 90, justifyContent: 'center', backgroundColor: "#C34C4C"}}>
                <View style={{flex: 53, flexDirection: 'row', alignItems: 'center', justifyContent: 'center'}}>
                    {/*<View style={{flex: 1, height: 50, width: 50, backgroundColor: 'white', marginLeft: 40}}/>*/}
                    <View>
                        <TouchableHighlight onPress={()=> {
                            this.user = this.props.navigation.getParam('User');
                            console.log(this.user);
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
                        flex: 1, fontSize: 30, color: 'white', marginLeft: 40, marginRight: 40, marginTop: 30
                        }}>REQUEST</Text>
                    </View>
                    <View>
                        <View style={{flex: 1, height: 50, width: 50, marginLeft: 30, alignItems: 'center', justifyContent: 'center'}}>
                            <TouchableHighlight onPress = {()=>{this.props.navigation.navigate('MakeJob', {user: this.user});}}>
                                <Image source={require('../assets/mkButton.png')}/>
                            </TouchableHighlight>
                        </View>
                    </View>

                </View>  
                <View style={{flex: 0, backgroundColor: '#8CB4B4'}}/> 
                <View style={{flex: 0, backgroundColor: '#9B9B9B'}}/> 
            </View>
            

            {/*BODY*/}

            <ScrollView>

                <PanelContainer navigation={this.props.navigation}/>

            </ScrollView>
            
            {/*<View style={{flex: 16, backgroundColor: '#FFFBF7'}}/>*/}
        </View>
        );
    }
}