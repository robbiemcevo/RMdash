/* eslint-disable no-unused-vars */
/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';

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

import { changePassword } from '../services/AuthServices';

export default class VerifyPhone extends Component {

  state = { password1: '', password2: '', errorMsg: '' };

  componentDidMount() {
  }

  render() {

    const {password1, password2, errorMsg} = this.state;
    
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
            source={require('./assets/RMdashlogoDavid.png')}
            style={{width: 350, height: 110, marginLeft: 20}}
          />
          <Text>To complete registration process, please create a new password. {"\n\n"}
          Password has to be be at least 8 characters which contain at least one lowercase letter, 
          one uppercase letter, one numeric digit, and one special character!
          </Text>
          <Form>
            {errorMsg ? <Text style={{color: '#d9534f', textAlign: 'center'}}>{errorMsg}</Text> : <Text />}
            <Item error={errorMsg ? true : false} inlineLabel>
              <Label style={errorMsg ? {color: '#d9534f'} : {}}>New Password</Label>
              <Input secureTextEntry={true} onChangeText={(password1) => this.setState({password1})} />
            </Item>
            <Item error={errorMsg ? true : false} inlineLabel>
              <Label style={errorMsg ? {color: '#d9534f'} : {}}>Repeat Password</Label>
              <Input secureTextEntry={true} onChangeText={(password2) => this.setState({password2})} />
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
             this.props.navigation.replace('MainApp')
            }
            onPress={() => {
              changePassword(password1, password2, this);
            }
            }
          >
            <Text>Confirm</Text>
          </Button>
        </Content>
      </Container>
    );
  }
}