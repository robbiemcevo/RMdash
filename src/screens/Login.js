import React, { Component } from 'react';

import { createStackNavigator } from '@react-navigation/stack';

import { Container, Header, Content, Form, Item, Input, Label, Button, Text } from 'native-base';
import { Image } from 'react-native'

import auth from '@react-native-firebase/auth';

export default class Login extends Component {

  render() {

    async function _onLogin(email, password) {
      try {
        await auth().signInWithEmailAndPassword(email, password);
        console.log("success");
      } catch (e) {
        console.log(e.message);
      }
    }
    
    return (
      <Container>
        <Content contentContainerStyle={{justifyContent: 'center', flex: 1, marginLeft: 10, marginRight: 10}}>
   <Image source = {{url:'http://logok.org/wp-content/uploads/2014/10/Credit-Suisse-Logo-and-Wordmark.png'}}
   style = {{ width: 400, height: 100, marginLeft: 1}}></Image>
          <Form>
            <Item inlineLabel>
              <Label>Username</Label>
              <Input />
            </Item>
            <Item inlineLabel last>
              <Label>Password</Label>
              <Input />
            </Item>
          </Form>
         <Button 
         style= {{backgroundColor: '#103662', marginTop: 30, marginLeft: 40, width: 300, height: 50}} block
         /*onPress={() => this.props.navigation.replace('Dashboard')}*/
         onPress={() => _onLogin()}>
           <Text>Login</Text>
         </Button>
         </Content>
      </Container>

    );
  }
}