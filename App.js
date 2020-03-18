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
import ChangePassword from './src/screens/ChangePassword'; 

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
  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Login">
          <Stack.Screen name="Login" component={Login} options={{headerShown: false}}/>
          <Stack.Screen name="VerifyPhone" component={VerifyPhone} options={{headerShown: false}}/>
          <Stack.Screen name="ChangePassword" component={ChangePassword} options={{headerShown: false}}/>
          <Stack.Screen name="MainApp" component={DrawerNavigator} options={{headerShown: false}}/>
          <Stack.Screen name="ClientOverV" component={ClientOverV} options={
             ({ route }) => ( { title: route.params.nameSurname, headerShown: true, headerBackTitleVisible: false, 
            headerStyle: {backgroundColor: '#103662'}, headerTitleStyle: {color: '#FFFFFF'} })}/>
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
};