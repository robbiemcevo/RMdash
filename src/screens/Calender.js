import React, { Component } from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {useNavigation} from '@react-navigation/native';
import CSHeader from '../components/CSHeader';
import { Container, Button, Header, Input, Item, Content, Card, CardItem, Body, Text } from 'native-base';
import {Image, StatusBar} from 'react-native';
import {onLogOut} from '../services/AuthServices';

export default class Settings extends Component {
  render() {
    const pageTitle = 'Calendar';
    return (
      <Container>
          <CSHeader pageTitle={pageTitle} />
          <Content padder>
              <Text style={{fontSize:20, textAlign: 'center'}}>
                  Calendar will be coming to RMdash soon!
              </Text>
        </Content>
      </Container>
    );
  }
}