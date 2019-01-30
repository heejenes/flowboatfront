import React from 'react';

import {
  Text, 
  View, 
  TouchableHighlight, 
  TextInput,
  ScrollView,
  StyleSheet
} from 'react-native';

export class MakeJobPage extends React.Component {
    constructor (props){
      super(props);
      this.user = this.props.navigation.getParam('user');
      this.state = {
        creds: {"username": "", "password": ""},
        id: "",
        owner: this.user,
        region: "",
        title: "",
        desc: "",
        location: {"number": "", "streetname": ""},
        time: "",
        pay: ""
        }
    }
  
    render() {
      return(
          <View style={{margin: 40}}>
              <ScrollView stlye={{alignItems: 'center'}}>
                <Text style={{fontSize: 25, fontWeight: "bold", color: "#DEDEDE", marginBottom: 40}}>Create a listing!</Text>
                <TextInput style={styles.textInput} placeholder = 'Title' onChangeText = {(text) => {this.state.title = text}}/>
                <TextInput style={styles.textInput} placeholder = 'Contact time' onChangeText = {(text) => {this.state.time = text}}/>
                <Text style={{marginBottom: 15, fontSize: 20}}>Contact Location:</Text>
                <View style={{marginBottom: 15, flexDirection: 'row'}}>
                    <TextInput style={{
                        marginBottom: 20, 
                        fontSize: 20,
                        backgroundColor: '#F3F3F3',
                        borderRadius: 4,
                        borderWidth: 3,
                        borderColor: '#DEDEDE',
                        width: 60
                    }} placeholder = 'House number' onChangeText = {(text) => {this.state.location.number = text}}/>
                    <TextInput style={{
                        marginBottom: 20, 
                        fontSize: 20,
                        backgroundColor: '#F3F3F3',
                        borderRadius: 4,
                        borderWidth: 3,
                        borderColor: '#DEDEDE',
                        width: 100
                    }} placeholder = 'Streetname' onChangeText = {(text) => {this.state.location.streetname = text}}/>
                </View>
                <TextInput style={styles.textInput} placeholder = 'Description' onChangeText = {(text) => {this.state.desc = text}}/>
                <TextInput style={styles.textInput} placeholder = 'Offer (CAD$)' onChangeText = {(text) => {this.state.pay = text}}/>
                
                <TouchableHighlight onPress={()=>{/*POST*/}}>
                    <View style={{justifyContent: 'center', alignContent: 'center', width: 120, height: 50}}>
                        <Text style={{fontSize: 28, backgroundColor: "#DE7474"}}>POST</Text>
                    </View>
                </TouchableHighlight>
              </ScrollView>
          </View>
      );
    }
}

const styles = StyleSheet.create({
    textInput: {
        marginBottom: 20, 
        fontSize: 20,
        backgroundColor: '#F3F3F3',
        borderRadius: 4,
        borderWidth: 3,
        borderColor: '#DEDEDE',
        width: 200
    }
});