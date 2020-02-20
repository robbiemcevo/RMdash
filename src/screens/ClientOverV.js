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

        <Tabs style={{tabColor: '#103662' }}>
          <Tab
            heading="Overview"
            activeTextStyle={{color: '#103662'}}
            activeUnderlineStyle={{color: '#103662'}}>
            <Content padder>
              <Card transparent>
                <CardItem>
                  <Body>
                    <Text>Address</Text>
                    <Text>Phone No.</Text>
                  </Body>
                </CardItem>
              </Card>
            </Content>
          </Tab>
          <Tab heading="Portfolio" />
          <Tab heading="Insights" />
          <Tab heading="Documents" />
        </Tabs>
      </Container>
    );
  }
}
