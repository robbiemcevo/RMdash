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
  ListItem,
  CheckBox,
} from 'native-base';

import {useNavigation} from '@react-navigation/native';
import CSHeader from '../components/CSHeader';
export default class UpcomingEvents extends Component {
  _isMounted = false;
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      items: [],
    };
  }

  state = {
    selectedNews: 0,
  };

  componentDidMount() {
    this._isMounted = true;


    if (this.state.selectedNews === 1) {
      var url =
        'https://newsapi.org/v2/top-headlines?' +
        'country=gb&' +
        'pageSize=3&' +
        'apiKey=9cb1bba31aa54d038eb01b75da21cd94';
    }
    if (this.state.selectedNews === 2) {
      var url =
        'https://newsapi.org/v2/top-headlines?' +
        'country=us&' +
        'pageSize=3&' +
        'apiKey=9cb1bba31aa54d038eb01b75da21cd94';
    }
    else {
      var url =
        'https://newsapi.org/v2/top-headlines?' +
        'country=gb&' +
        'pageSize=3&' +
        'apiKey=9cb1bba31aa54d038eb01b75da21cd94';
    }

    fetch(url)
      .then(res => res.json())
      .then(
        result => {
          if (this._isMounted) {
            this.setState({
              isLoaded: true,
              items: result.articles,
            });
          }
        },

        error => {
          this.setState({
            isLoaded: true,
            error,
          });
        },
      );
  }

  componentWillUnmount() {
    this._isMounted = false;
  }

  render() {
    const {error, isLoaded, items} = this.state;
    const pageTitle = 'Dashboard';

    return (
      <Container>
        <CSHeader pageTitle={pageTitle} />
        <Content padder>
          <Card transparent style={{borderRadius: 8}}>
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
                Upcoming Events
              </Text>
            </CardItem>
            <CardItem>
              <Left>
                <Button
                  bordered
                  style={{
                    borderColor: '#103662',
                    borderStartWidth: 1.5,
                    borderEndWidth: 1.5,
                    borderTopWidth: 1.5,
                    borderBottomWidth: 1.5,
                  }}>
                  <Text
                    style={{
                      fontSize: 20,
                      textAlign: 'center',
                      color: '#103667',
                      fontWeight: '500',
                    }}>
                    {' '}
                    09 APR
                  </Text>
                </Button>
                <Body>
                  <Text style={{fontSize: 20}}>Meeting with Elon</Text>
                  <Text style={{fontSize: 20}}>Credit Suisse Office</Text>
                  <Text style={{fontSize: 20}}>5pm - 7pm</Text>
                </Body>
              </Left>
            </CardItem>
            <CardItem>
              <Left>
                <Button
                  bordered
                  style={{
                    borderColor: '#103662',
                    borderStartWidth: 1.5,
                    borderEndWidth: 1.5,
                    borderTopWidth: 1.5,
                    borderBottomWidth: 1.5,
                  }}>
                  <Text
                    style={{
                      fontSize: 20,
                      textAlign: 'center',
                      color: '#103662',
                      fontWeight: '500',
                    }}>
                    {' '}
                    10 JUN
                  </Text>
                </Button>
                <Body>
                  <Text style={{fontSize: 20}}>Product Training</Text>
                  <Text style={{fontSize: 20}}>8am - 10am</Text>
                </Body>
              </Left>
            </CardItem>
          </Card>
          <Card transparent style={{borderRadius: 8}}>
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
                Notifications
              </Text>
            </CardItem>
            <CardItem>
              <Body>
                <Text style={{fontSize: 20}}>- EXT.1 up by 0.8%</Text>
                <Text style={{fontSize: 20}}>
                  - FTSE down by 1.7%{' '}
                  <Icon name="alert" style={{fontSize: 30, color: 'red'}} />
                </Text>
              </Body>
            </CardItem>
          </Card>
          <Card transparent style={{borderRadius: 8}}>
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
                News
              </Text>
              
              <CheckBox
                checked={this.state.selectedNews === 1}
                color="#103662"
                onPress={() => this.setState({selectedNews: 1})}
              />
              <Text style={{fontSize: 15, marginStart: 15, color: 'back'}}>
                UK
              </Text>
              <CheckBox
                checked={this.state.selectedNews === 2}
                color="#103662"
                onPress={() => this.setState({selectedNews: 2})}
              />
              <Text style={{fontSize: 15, marginStart: 15, color: 'back'}}>
                USA
              </Text>
            </CardItem>
            {items.map(item => (
              <CardItem>
                <Text key={item.title} />
                <Icon active name="logo-googleplus" />
                <Text>{item.title}</Text>
                <Right>
                  <Icon name="arrow-forward" />
                </Right>
              </CardItem>
            ))}
          </Card>
        </Content>
      </Container>
    );
  }
}
