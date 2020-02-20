/* eslint-disable no-unused-vars */
/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';

import {createStackNavigator} from '@react-navigation/stack';

import {
  Container,
  Header,
  Content,
  Form,
  Item,
  Input,
  Label,
  Button,
  Text,
} from 'native-base';
import {Image} from 'react-native';

//import AzureAuth from 'react-native-azure-auth';
//import Client from 'react-native-azure-auth/src/networking';

/*const azureAuth = new AzureAuth({
    clientId: '5d65d3a8-accd-4b7a-86d4-6ad543d1e9ed'
});*/

export default class Login extends Component {
  /*_onLogin = async () => {
        try {
          let tokens = await azureAuth.webAuth.authorize({scope: 'openid profile User.Read' })
          console.log('CRED>>>', tokens)
          this.setState({ accessToken: tokens.accessToken });
          let info = await azureAuth.auth.msGraphRequest({token: tokens.accessToken, path: 'me'})
          console.log('info', info)
          this.setState({ user: info.displayName, userId: tokens.userId })
        } catch (error) {
          console.log('Error during Azure operation', error)
        }
      };*/

  render() {
    return (
      <Container>
        <Content
          contentContainerStyle={{
            justifyContent: 'center',
            flex: 1,
            marginLeft: 10,
            marginRight: 10,
          }}>
          <Image
            source={{
              url:
                'http://logok.org/wp-content/uploads/2014/10/Credit-Suisse-Logo-and-Wordmark.png',
            }}
            style={{width: 400, height: 100, marginLeft: 1}}
          />
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
            style={{
              backgroundColor: '#103662',
              marginTop: 30,
              marginLeft: 40,
              width: 300,
              height: 50,
            }}
            block
            onPress={() =>
              this.props.navigation.replace('Dashboard')
            } /*onPress={this._onLogin}*/
          >
            <Text>Login</Text>
          </Button>
        </Content>
      </Container>
    );
  }
}
