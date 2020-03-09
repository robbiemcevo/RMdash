import React, { Component } from 'react';

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

//const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

export default class App extends Component {
  render() {
    return (
      <NavigationContainer>
        <Drawer.Navigator initialRouteName="Dashboard">
          <Drawer.Screen name="Dashboard" component={Dashboard} />
          <Drawer.Screen name="Login" component={Login} />
          <Drawer.Screen name="New Client" component={NewClient} />
          <Drawer.Screen name="Client List" component={ClientList} />
          <Drawer.Screen name="Client overview" component={ClientOverV} />
          <Drawer.Screen name="Verify Phone" component={ClientOverV} />
        </Drawer.Navigator>
      </NavigationContainer>
      /*
      <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Dashboard" component={Dashboard} />
        <Stack.Screen name="Login" component={Login} />
      </Stack.Navigator>
      </NavigationContainer>
      */
    );
  }
};