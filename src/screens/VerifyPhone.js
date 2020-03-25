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

import { sendPhoneVerificationCode, confirmPhoneVerificationCode } from '../services/AuthServices';

export default class VerifyPhone extends Component {

  state = { code: '', errorMsg: '' };

  async componentDidMount() {
    const { userPhoneNumber } = this.props.route.params;
    this.confirmation = await sendPhoneVerificationCode(userPhoneNumber);
  }

  render() {
    const phoneNum = this.props.route.params.userPhoneNumber;
    const {code, errorMsg} = this.state;
    
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
          <Text>To complete authentification process please enter the code that was sent to {phoneNum}.</Text>
          <Form>
            {errorMsg ? <Text style={{color: '#d9534f', textAlign: 'center'}}>{errorMsg}</Text> : <Text />}
            <Item error={errorMsg ? true : false} inlineLabel>
              <Label style={errorMsg ? {color: '#d9534f'} : {}}>Confirmation code</Label>
              <Input onChangeText={(code) => this.setState({code})} />
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
            /*onPress={() =>
             this.props.navigation.replace('Dashboard')
            }*/
            onPress={() => 
              confirmPhoneVerificationCode(this.confirmation, code, this) 
            }
          >
            <Text>Confirm</Text>
          </Button>
        </Content>
      </Container>
    );
  }
}