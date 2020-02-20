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
                marginTop: -30,
                color: 'white',
              }}>
              Ali Owrak
            </Title>
          </Body>
          <Right />
        </Header>

        <Tabs tabBarUnderlineStyle={{backgroundColor: '#103662', height: 4}}>
          <Tab heading="Overview" activeTextStyle={{color: '#103662'}}>
            <Content padder>
              <Card>
                <CardItem>
                  <Body>
                    <Text>Address</Text>
                    <Text>Phone No.</Text>
                  </Body>
                </CardItem>
              </Card>
              <Card transparent>
                <CardItem>
                  <Body>
                    <Text>Total Net Assets</Text>
                    <Text>GDP</Text>
                    <Text style={{fontSize: 90, fontWeight: 'bold', color: '#103662'}}>55 
                    <Text style={{fontWeight: 'normal'}}>  Million
                    </Text>
                    </Text>
                  </Body>
                </CardItem>
              </Card>
              <Card transparent>
                <CardItem style={{backgroundColor: '#B2C3D1'}}>
                  <Body>
                    <Text>Next meeting: 
                    </Text>
                    <Text>Notifications:</Text>
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
