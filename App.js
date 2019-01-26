import React from 'react';

import {
  StyleSheet, 
  Text, 
  View, 
  Button, 
  TouchableHighlight, 
  Image,
  TextInput,
  ScrollView
} from 'react-native';

import {
  createStackNavigator, 
  createAppContainer
} from 'react-navigation';

import {MenuPage} from './pages/MenuPage.js';
import {LoginPage} from './pages/LoginPage.js';
import {JobProfilePage} from './pages/JobProfilePage.js';
import {UserProfilePage} from './pages/UserProfilePage.js';
import {ChatRoomPage} from './pages/ChatRoomPage.js';

const app = createStackNavigator({
  Login:LoginPage,
  UserProfile:UserProfilePage,
  //Signup:SignupPage,
  Menu:MenuPage,
  JobProfile:JobProfilePage,
  ChatRoom:ChatRoomPage
},
{
  initialRouteName: 'Menu'
}
);

export default createAppContainer(app);