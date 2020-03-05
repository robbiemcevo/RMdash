import 'react-native-gesture-handler';

import React, {Component} from 'react';

/*Navigation*/
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

/* Importing pages from separate files*/
import Login from './src/screens/Login';
import Dashboard from './src/screens/Dashboard';
import ClientOverV from './src/screens/ClientOverV';
import { startClock } from 'react-native-reanimated';
import VerifyPhone from './src/screens/VerifyPhone';

const Stack = createStackNavigator();


export default class App extends Component {

  render() {

    return (
      <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Dashboard" component={Dashboard} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="ClientOverV" component={ClientOverV} />
        <Stack.Screen name="VerifyPhone" component={VerifyPhone} />
      </Stack.Navigator>
      </NavigationContainer>
    );
  }
};
