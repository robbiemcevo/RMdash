import { Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, Text, List, ListItem, Thumbnail, Item, Input, StatusBar } from 'native-base';
import {createStackNavigator} from '@react-navigation/stack';
import React, {Component} from 'react';
import CSHeader from '../components/CSHeader';
//import CSHeader from '../components/CSHeader';

export default class ClientList extends Component {
  render() {
    const pageTitle= 'Client List';
    return (
      <Container>
        <CSHeader pageTitle={pageTitle}/>
        <Header searchBar rounded>
          <Item>
            <Icon name="ios-search" />
            <Input placeholder="Search" />
            <Icon name="ios-people" />
          </Item>
          <Button transparent >
            <Text style={{color: '#103662'}}>Search</Text>
          </Button>
        </Header>
        <Content>
          <List>
            <ListItem thumbnail style={{marginTop: 20, marginBottom: 20}}>
            <Left>
                <Thumbnail circular source={{ uri: 'https://lh3.googleusercontent.com/proxy/xH4pJfw-QdCwT2mIqKrOIzVU9F2-YtnBrKRNlgxEJEIt2sJgyQimTaw777_e4XlRzInwn6nCJ2rwiMygDHVQcmkDO3tJgDnEqFZs3r1NUXt1pbrqZvO9fgyEojnLXWfgLrU' }} />
              </Left>
              <Body>
                <Text style={{fontSize: 20}}>Ali Owrak</Text>
              </Body>
              <Right>
                <Button bordered style={{color:'103662'}} 
                onPress={() =>
                  this.props.navigation.navigate('ClientsNavigator', {screen: 'ClientOverview'})
                }>
                  <Text style={{color: '#103662'}}>View</Text>
                </Button>
              </Right>
            </ListItem>

            <ListItem thumbnail style={{marginTop: 20, marginBottom: 20}}>
            <Left>
                <Thumbnail circular source={{ uri: 'https://lh3.googleusercontent.com/proxy/xH4pJfw-QdCwT2mIqKrOIzVU9F2-YtnBrKRNlgxEJEIt2sJgyQimTaw777_e4XlRzInwn6nCJ2rwiMygDHVQcmkDO3tJgDnEqFZs3r1NUXt1pbrqZvO9fgyEojnLXWfgLrU' }} />
              </Left>
              <Body>
                <Text style={{fontSize: 20}}>Ali Owrak</Text>
              </Body>
              <Right>
                <Button bordered style={{color:'103662'}} 
                onPress={() =>
                  this.props.navigation.navigate('ClientOverV')
                }>
                  <Text style={{color: '#103662'}}>View</Text>
                </Button>
              </Right>
            </ListItem>

            <ListItem thumbnail style={{marginTop: 20, marginBottom: 20}}>
            <Left>
                <Thumbnail circular source={{ uri: 'https://lh3.googleusercontent.com/proxy/xH4pJfw-QdCwT2mIqKrOIzVU9F2-YtnBrKRNlgxEJEIt2sJgyQimTaw777_e4XlRzInwn6nCJ2rwiMygDHVQcmkDO3tJgDnEqFZs3r1NUXt1pbrqZvO9fgyEojnLXWfgLrU' }} />
              </Left>
              <Body>
                <Text style={{fontSize: 20}}>Ali Owrak</Text>
              </Body>
              <Right>
                <Button bordered style={{color:'103662'}} 
                onPress={() =>
                  this.props.navigation.navigate('ClientOverV')
                }>
                  <Text style={{color: '#103662'}}>View</Text>
                </Button>
              </Right>
            </ListItem>
                
            <ListItem thumbnail style={{marginTop: 10, marginBottom: 20}} >
            <Left>
                <Thumbnail circular source={{ uri: 'https://lh3.googleusercontent.com/proxy/nLzSlghoUSDucmhDZbZIN26X5GirVVvmscIm4hHql9j5vqTQmKWfZbayg0Mb8maWKD3NWnkcGUDmUa2xr6mlgZn1_0jKwGMbFeW1Xf5OfOCRmwzQ4GX2p0gpmhVAr4AircRiUQ' }} />
              </Left>
              <Body>
                <Text style={{fontSize: 20}}>Elon Musk</Text>
              </Body>
              <Right>
                <Button bordered>
                  <Text style={{color:'#103662'}}>View</Text>
                </Button>
              </Right>
            </ListItem>

            <ListItem thumbnail style={{marginTop: 20, marginBottom: 20}}>
            <Left>
                <Thumbnail circular source={{ uri: 'https://lh3.googleusercontent.com/proxy/xH4pJfw-QdCwT2mIqKrOIzVU9F2-YtnBrKRNlgxEJEIt2sJgyQimTaw777_e4XlRzInwn6nCJ2rwiMygDHVQcmkDO3tJgDnEqFZs3r1NUXt1pbrqZvO9fgyEojnLXWfgLrU' }} />
              </Left>
              <Body>
                <Text style={{fontSize: 20}}>Ali Owrak</Text>
              </Body>
              <Right>
                <Button bordered style={{color:'103662'}} 
                onPress={() =>
                  this.props.navigation.navigate('ClientOverV')
                }>
                  <Text style={{color: '#103662'}}>View</Text>
                </Button>
              </Right>
            </ListItem>
           
            <ListItem thumbnail style={{marginTop: 10, marginBottom: 20}} >
            <Left>
                <Thumbnail circular source={{ uri: 'https://lh3.googleusercontent.com/proxy/nLzSlghoUSDucmhDZbZIN26X5GirVVvmscIm4hHql9j5vqTQmKWfZbayg0Mb8maWKD3NWnkcGUDmUa2xr6mlgZn1_0jKwGMbFeW1Xf5OfOCRmwzQ4GX2p0gpmhVAr4AircRiUQ' }} />
              </Left>
              <Body>
                <Text style={{fontSize: 20}}>Elon Musk</Text>
              </Body>
              <Right>
              <Button
            style={{
              backgroundColor: '#103662',
              marginTop: 20,
              marginLeft: 20,
              width: 100,
              height: 30,
            }}
            block
            onPress={() =>
              this.props.navigation.navigate('ClientOverV')
            } /*onPress={this._onLogin}*/
          >
            <Text>view</Text>
          </Button>
              </Right>
            </ListItem>

          </List>
        </Content>
      </Container>
  )}}