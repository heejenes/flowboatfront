import React from 'react';

import {
  Text, 
  View, 
  TouchableHighlight, 
  TextInput,
} from 'react-native';

export class LoginPage extends React.Component {
    constructor (props){
      super(props);
      this.state = {height: 0};
      this.cred = {username: '', password: ''}; //stores value of pass and user
    }
  
    render() {
      return(
        <View style={{flex: 1, backgroundColor: '#E5B180', alignItems: 'center', justifyContent: 'center'}}>
          <TouchableHighlight onPress={()=>{this.setState({height: 100})}}>
            <View style={{margin: 5 }}>
              <Text>Log in!</Text>
            </View>
          </TouchableHighlight>
  
          {/*log in slide down*/}
  
          <View style={{height: this.state.height, alignItems: 'center', justifyContent: 'center'}}>
            <TextInput placeholder='Username' onChangeText={(text)=>{this.cred.username = text;}}/>
            <TextInput placeholder='Password' onChangeText={(text)=>{this.cred.password = text;}}/>
            <TouchableHighlight onPress={()=>{this.props.navigation.navigate('Menu', {User: {username: 'heej', firstname: 'jon'}});}}>
              <View style={{margin: 10, backgroundColor: 'white'}}>
                <Text>Submit</Text>
              </View>
            </TouchableHighlight>
          </View>
  
  
          <Text style={{margin: 5}}>or</Text>
          <Text style={{margin: 5}}>Make a new account!</Text>
          <TouchableHighlight onPress={()=>{this.props.navigation.goBack();}} underlayColor='white'>
            <View style={{alignItems: 'center', justifyContent: 'center'}}>
              <Text style={{fontSize: 15, color: "blue"}}>Go Back!</Text>
            </View>
          </TouchableHighlight>
        </View>
      );
    }
}