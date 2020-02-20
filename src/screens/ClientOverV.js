import {createStackNavigator} from '@react-navigation/stack';

import React, {Component} from 'react';
import {
  Container,
  Header,
  Content,
  Tab,
  Tabs,
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

export default class TabsExample extends Component {
  render() {
    return (
      <Container>
        <Header style={{backgroundColor: '#103662', height: 40}}>
          <Left>
            <Button transparent light style={{marginTop: -40}}>
              <Icon name="menu" />
            </Button>
          </Left>
          <Body>
            <Title
              style={{
                fontSize: 20,
                marginTop: -30,
                color: 'white',
              }}>
              Ali Owrak
            </Title>
          </Body>
          <Right />
        </Header>

        <Tabs tabBarUnderlineStyle={{backgroundColor: '#103662', height: 4}}>
          <Tab heading="Overview" activeTextStyle={{color: '#103662'}} >
            <Content padder>
            <Card transparent>
                <CardItem>
                  <Button transparent style={{marginLeft: 10}}>
                    <Text
                      style={{
                        color: '#103662',
                        fontSize: 20,
                        textAlign: 'center',
                      }}>
                      <Icon name="call" style={{color: '#103662'}} /> {' '}Call
                    </Text>
                  </Button>
                  <Button transparent style={{marginLeft: 90}}>
                    <Text
                      style={{
                        color: '#103662',
                        fontSize: 20,
                        textAlign: 'center',
                      }}>
                      <Icon name="text" style={{color: '#103662'}} /> {' '}Message
                    </Text>
                  </Button>
                </CardItem>
              </Card>
              <Card transparent>
                <CardItem>
                  <Body>
                    <Text style={{fontSize: 20}}>Address:</Text>
                    <Text style={{fontSize: 20}}>Phone No.</Text>
                  </Body>
                </CardItem>
              </Card>
              <Card transparent>
                <CardItem>
                  <Body>
                    <Text style={{fontSize: 20}}>Total Net Assets</Text>
                    <Text style={{fontSize: 20}}>GDP</Text>
                    <Text
                      style={{
                        fontSize: 90,
                        fontWeight: 'bold',
                        color: '#103662',
                      }}>
                      55
                      <Text style={{fontSize: 20,fontWeight: 'normal', color: '#103662'}}>
                        {' '}
                        Million
                      </Text>
                    </Text>
                  </Body>
                </CardItem>
              </Card>
              <Card transparent>
                <CardItem style={{backgroundColor: '#B2C3D1'}}>
                  <Body>
                    <Text style={{fontSize: 20}}>Next meeting: {'\n'}</Text>
                    <Text style={{fontSize: 20}}>Notifications:{'\n'}</Text>
                  </Body>
                </CardItem>
              </Card>
            </Content>
          </Tab>
          <Tab heading="Portfolio" activeTextStyle={{color: '#103662'}} />
          <Tab heading="Insights" activeTextStyle={{color: '#103662'}} />
          <Tab heading="Documents" activeTextStyle={{color: '#103662'}} />
        </Tabs>
      </Container>
    );
  }
}
