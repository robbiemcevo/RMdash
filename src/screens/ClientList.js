import React, {Component} from 'react';

import {
  Container,
  Header,
  Title,
  Content,
  Footer,
  FooterTab,
  Button,
  Left,
  Right,
  Body,
  Icon,
  Text,
  List,
  ListItem,
  Thumbnail,
  Item,
  Input,
  StatusBar,
  Form,
} from 'native-base';
import CSHeader from '../components/CSHeader';

import { getClientsList } from '../services/DatabaseServices';

export default class ClientList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      listItems: [],
    };
  }

  async componentDidMount() {
    let data = await getClientsList();
    this.setState({listItems: data});

    console.log(this.state.listItems);
  }

  render() {
    const {error, isLoaded, listItems} = this.state;

    const pageTitle = 'Client List';
    return (
      <Container>
        <CSHeader pageTitle={pageTitle} />
        <Header searchBar rounded>
          <Item>
            <Icon name="ios-search" />
            <Input placeholder="Search" />
            <Icon name="ios-people" />
          </Item>
          <Button transparent>
            <Text style={{color: '#103662'}}>Search</Text>
          </Button>
        </Header>
        <Content>
          <List>
          {listItems.map(item => (
            <ListItem thumbnail style={{marginTop: 20, marginBottom: 20}}>
              <Left>
                <Thumbnail
                  circular
                  source={{
                    uri:
                      'https://lh3.googleusercontent.com/proxy/xH4pJfw-QdCwT2mIqKrOIzVU9F2-YtnBrKRNlgxEJEIt2sJgyQimTaw777_e4XlRzInwn6nCJ2rwiMygDHVQcmkDO3tJgDnEqFZs3r1NUXt1pbrqZvO9fgyEojnLXWfgLrU',
                  }}
                />
              </Left>
              <Body>
                <Text style={{fontSize: 20}}>{item.name + ' ' + item.surname}</Text>
              </Body>
              <Right>
                <Button
                  bordered
                  style={{color: '103662'}}
                  onPress={() =>
                    this.props.navigation.push('ClientOverV', {
                      client_id: item.client_id, nameSurname: item.name + ' ' + item.surname})
                  }>
                  <Text style={{color: '#103662'}}>View</Text>
                </Button>
              </Right>
            </ListItem>
          ))}
          </List>
        </Content>
      </Container>
    );
  }
}
