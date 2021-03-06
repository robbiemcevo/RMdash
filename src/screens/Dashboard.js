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
      clientData: '',
    };
  }

  state = {
    news: 'gb',
  };

  newsAPI(news) {
    if (news === 'gb') {
      var url =
        'https://newsapi.org/v2/top-headlines?' +
        'country=gb&' +
        'pageSize=3&' +
        'apiKey=9cb1bba31aa54d038eb01b75da21cd94';
    }
    if (news === 'us') {
      var url =
        'https://newsapi.org/v2/top-headlines?' +
        'country=us&' +
        'pageSize=3&' +
        'apiKey=9cb1bba31aa54d038eb01b75da21cd94';
    } else {
      var url =
        'https://newsapi.org/v2/top-headlines?' +
        'country=gb&' +
        'pageSize=3&' +
        'apiKey=9cb1bba31aa54d038eb01b75da21cd94';
    }
  }

  componentDidMount() {
    this._isMounted = true;

    var url =
      'https://newsapi.org/v2/top-headlines?' +
      'country=gb&' +
      'pageSize=3&' +
      'apiKey=9cb1bba31aa54d038eb01b75da21cd94';

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
                    29 APR
                  </Text>
                </Button>
                <Body>
                  <Text style={{fontSize: 20}}>Meeting with Yagovkin Aleskeevich</Text>
                  <Text style={{fontSize: 20}}>Credit Suisse Office</Text>
                  <Text style={{fontSize: 20}}>3pm - 5pm</Text>
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
                    10 MAY
                  </Text>
                </Button>
                <Body>
                  <Text style={{fontSize: 20}}>Meeting with Leon Charpentier</Text>
                  <Text style={{fontSize: 20}}>West London</Text>
                  <Text style={{fontSize: 20}}>1pm - 2pm</Text>
                </Body>
              </Left>
            </CardItem>
          </Card>
          <Card transparent style={{borderRadius: 8, }}>
            <CardItem
              header1
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
          <Card transparent style={{borderRadius: 8, }}>
            <CardItem
              header
              bordered
              style={{
                borderTopLeftRadius: 8,
                borderTopRightRadius: 8,
                borderBottomWidth: 1,
              }}>
              <Text
                style={{fontSize: 20, fontWeight: 'bold', color: '#103662', }}>
                News
              </Text>
              
              
            </CardItem>
            {items.map(item => (
              <CardItem style={{marginEnd:30}}>
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
