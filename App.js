import React, { Component } from 'react';
import { AppState } from 'react-native';

/*Navigation*/
import { NavigationContainer, StackActions } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';

/* Importing pages from separate files*/
import Login from './src/screens/Login';
import Dashboard from './src/screens/Dashboard';
import NewClient from './src/screens/NewClient';
import ClientList from './src/screens/ClientList';
import ClientOverV from './src/screens/ClientOverV';
import VerifyPhone from './src/screens/VerifyPhone';
import ChangePassword from './src/screens/ChangePassword';

import firebase from '@react-native-firebase/app';
import { onAutoLogOut } from './src/services/AuthServices';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

function DrawerNavigator() {
  return (
    <Drawer.Navigator initialRouteName="Dashboard" headerMode="none">
      <Drawer.Screen name="Dashboard" component={Dashboard} />
      <Drawer.Screen name="New Client" component={NewClient} />
      <Drawer.Screen name="Client List" component={ClientList} />
    </Drawer.Navigator>
  );
}

export default class App extends Component {

  state = {isLoggedIn: false};

  componentDidMount() {
    AppState.addEventListener('change', (state) => {
      console.log('AppState changed to', state);

      if(state === 'background') {
        onAutoLogOut();
      }
    })

    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
       this.setState({isLoggedIn: true});
      } else {
        this.setState({isLoggedIn: false});
      }
    });

  }

  componentWillUnmount() {
    AppState.removeEventListener('change', this._handleAppStateChange);
  }

  render() {
    if(!this.state.isLoggedIn) {
      return (
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen name="Login" component={Login} options={{headerShown: false, animationEnabled: false}}/>
            <Stack.Screen name="VerifyPhone" component={VerifyPhone} options={{headerShown: false}}/>
          </Stack.Navigator>
        </NavigationContainer>
      );
    } else {
      return (
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen name="Login" component={Login} options={{headerShown: false, animationEnabled: false}}/>
            <Stack.Screen name="MainApp" component={DrawerNavigator} options={{headerShown: false}}/>
            <Stack.Screen name="VerifyPhone" component={VerifyPhone} options={{headerShown: false}}/>
            <Stack.Screen name="ChangePassword" component={ChangePassword} options={{headerShown: false}}/>
            <Stack.Screen name="ClientOverV" component={ClientOverV} options={
               ({ route }) => ( { title: route.params.nameSurname, headerShown: true, headerBackTitleVisible: false, 
              headerStyle: {backgroundColor: '#103662'}, headerTitleStyle: {color: '#FFFFFF'} })}/>
          </Stack.Navigator>
        </NavigationContainer>
      );
    }
  }
};