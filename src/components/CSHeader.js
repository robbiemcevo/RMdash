import React, { Component } from 'react';
import { Header, Text, Title, Left, Right, Body, Icon, Button, StatusBar} from 'native-base';

import { useNavigation } from '@react-navigation/native';


export default function CSHeader(props) {

    const navigation = useNavigation();

      return (
        <Header style={{backgroundColor: '#103662'}}>
          <Left>
            <Button transparent light>
              <Icon name='menu' onPress={() => {navigation.openDrawer()}}/>
            </Button>
          </Left>
          <Body>
      <Title style={{color: 'white'}}>{props.pageTitle}</Title>
          </Body>
          <Right />
        </Header>
          );
}