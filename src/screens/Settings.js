import React, { Component } from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {useNavigation} from '@react-navigation/native';
import CSHeader from '../components/CSHeader';
import { Container, Button, Header, Input, Item, Content, Card, CardItem, Body, Text } from 'native-base';
import {Image, StatusBar} from 'react-native';
import {onLogOut} from '../services/AuthServices';

export default class Settings extends Component {
  render() {
    const pageTitle = 'Settings';
    return (
      <Container>
          <CSHeader pageTitle={pageTitle} />
          <Content padder>
          <Card transparent style={{borderRadius: 5}}>
            <CardItem
              header
              bordered
              style={{
                borderTopLeftRadius: 8,
                borderTopRightRadius: 8,
                borderBottomWidth: 1,
              }}>
              <Text
                style={{fontSize: 20, fontWeight: 'bold', color: '#103662'}}>
                Change your password
              </Text>
              </CardItem>
              <CardItem>
                  <Text style={{fontSize: 18, marginStart: 0}}>Choose a new password - at least 8 characters which contain at least one lowercase letter, 
          one uppercase letter, one numeric digit, and one special character!</Text>
              </CardItem>
              <Text style={{fontSize: 20, marginTop:10, marginStart: 15, color: "grey"}}>New password</Text>
              <Item rounded style={{marginTop: 10}}>
                <Input
                  style={{fontSize: 20, marginStart: 5}}>
                  <Text style={{fontSize: 20, marginStart: 7}}>
                  </Text>
                </Input>
                </Item>
                <Text style={{fontSize: 20, marginStart: 15, marginTop:18, color: "grey"}}>Repeat new password</Text>
              <Item rounded style={{marginTop: 10}}>
                <Input
                  style={{fontSize: 20, marginStart: 5}}>
                  <Text style={{fontSize: 20, marginStart: 7}}>
                  </Text>
                </Input>
                </Item>
            <Button
            style={{
              backgroundColor: '#103662',
              marginTop: 20,
              marginLeft: 250,
              width: 100,
              height: 50,
            }}>
            <Text style={{fontSize: 19}}>   Save</Text>
          </Button>
          <CardItem
              header
              bordered
              style={{
                borderTopLeftRadius: 8,
                borderTopRightRadius: 8,
                borderBottomWidth: 1,
                marginTop: 15
              }}>
              <Text
                style={{fontSize: 20, fontWeight: 'bold', color: '#103662'}}>
                Log out securely
              </Text>
              </CardItem>
              <CardItem>
                  <Text style={{fontSize: 18, marginStart: 0}}>If you want to log out, do it by pressing the button below</Text>
              </CardItem>
              <CardItem>
              <Button
            style={{
              backgroundColor: '#103662',
              marginTop: 30,
              marginLeft: 150,
              width: 200,
              height: 50,
            }}
            block
            onPress={() => onLogOut(this)}>
            <Text>Log Out</Text>
          </Button>
              </CardItem>
          </Card>
        </Content>
      </Container>
    );
  }
}