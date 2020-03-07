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

import { onLogin } from '../services/AuthServices';
import '@react-native-firebase/auth';

export default class Login extends Component {

  state = { email: '', password: '', errorMsg: '' };

  render() {

    const {email, password, errorMsg} = this.state;
    
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
            {errorMsg ? <Text style={{color: '#d9534f', textAlign: 'center'}}>{errorMsg}</Text> : <Text />}
            <Item error={errorMsg ? true : false} inlineLabel>
              <Label style={errorMsg ? {color: '#d9534f'} : {}}>Email</Label>
              <Input keyboardType={'email-address'}
              value={ this.state.email } onChangeText={(email) => this.setState({email})}/>
            </Item>
            <Item error={errorMsg ? true : false} inlineLabel>
              <Label style={errorMsg ? {color: '#d9534f'} : {}}>Password</Label>
              <Input secureTextEntry={true} onChangeText={(password) => this.setState({password})} />
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
            }
            /*onPress={() => 
              onLogin(email, password, this)
            }*/
          >
            <Text>Login</Text>
          </Button>
        </Content>
      </Container>
    );
  }
}
