import React, {Component} from 'react';
import {Image, StatusBar} from 'react-native';
import {
  Container,
  Header,
  Content,
  Card,
  CardItem,
  Text,
  Body,
  Left,
  Button,
  Icon,
  Title,
  Thumbnail,
  Right,
} from 'native-base';
export default class UpcomingEvents extends Component {
  render() {
    return (
      <Container>
        <Header style={{backgroundColor: '#103662'}}>
          <StatusBar backgroundColor="#103662" />
          <Left>
            <Button transparent>
              <Icon name="menu" />
            </Button>
          </Left>
          <Body style={{flex: 2}}>
            <Title>Home</Title>
          </Body>
        </Header>
        <Content padder>
          <Card style={{borderRadius: 8}}>
            <CardItem
              header
              bordered
              style={{borderTopLeftRadius: 8, borderTopRightRadius: 8}}>
              <Text
                style={{fontSize: 20, fontWeight: 'bold', color: '#103662'}}>
                UPCOMING EVENTS
              </Text>
            </CardItem>
            <CardItem>
              <Left>
                <Button backgroundColor="#103662">
                  <Text> 09{'\n'}APR</Text>
                </Button>
                <Body>
                  <Text>Meeting with Elon</Text>
                  <Text>Credit Suisse Office</Text>
                  <Text>5pm - 7pm</Text>
                </Body>
              </Left>
            </CardItem>
            <CardItem>
              <Left>
                <Button backgroundColor="#103662">
                  <Text> 10{'\n'}JUN</Text>
                </Button>
                <Body>
                  <Text>Product Training</Text>
                  <Text>8am - 10am</Text>
                </Body>
              </Left>
            </CardItem>
            <CardItem
              bordered
              style={{
                borderBottomLeftRadius: 8,
                borderBottomRightRadius: 8,
              }}></CardItem>
          </Card>
          <Card style={{borderRadius: 8}}>
            <CardItem
              header
              bordered
              style={{borderTopLeftRadius: 8, borderTopRightRadius: 8}}>
              <Text
                style={{fontSize: 20, fontWeight: 'bold', color: '#103662'}}>
                NOTIFICATIONS
              </Text>
            </CardItem>
            <CardItem>
              <Body>
                <Text style={{fontSize: 25}}>- EXT.1 up by 0.8%</Text>
                <Text style={{fontSize: 25}}>
                  - FTSE down by 1.7%{' '}
                  <Icon name="alert" style={{fontSize: 30, color: 'red'}} />
                </Text>
              </Body>
            </CardItem>
            <CardItem
              bordered
              style={{
                borderBottomLeftRadius: 8,
                borderBottomRightRadius: 8,
              }}></CardItem>
          </Card>
          <Button 
            style={{
              backgroundColor: '#103662',
              marginTop: 30,
              marginLeft: 40,
              width: 300,
              height: 50,
            }}
            block
            onPress={() => this.props.navigation.replace('ClientOverV')}>
           <Text>Client list</Text>
         </Button>
         <Button 
            style={{
              backgroundColor: '#103662',
              marginTop: 30,
              marginLeft: 40,
              width: 300,
              height: 50,
            }}
            block 
            onPress={() => this.props.navigation.replace('Test')}>
           <Text>Client list</Text>
         </Button>
        </Content>
      </Container>
    );
  }
}
