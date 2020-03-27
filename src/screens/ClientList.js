import React, {Component, useReducer} from 'react';

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
  Spinner
} from 'native-base';

import CSHeader from '../components/CSHeader';

import {getClientsList} from '../services/DatabaseServices';

export default class ClientList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      listItems: [],
      isLoaded: false,
    };
  }

  async componentDidMount() {
    let data = await getClientsList();
    this.setState({listItems: data});

    this.setState({isLoaded: true});

    console.log(this.state.listItems);
  }

  render() {
    const {error, isLoaded, listItems} = this.state;

    const pageTitle = 'Client List';

    if(!isLoaded) {
      return (
        <Container>
          <CSHeader pageTitle={pageTitle} />
          <Content contentContainerStyle={{
            justifyContent: 'center',
            flex: 1,
            marginLeft: 10,
            marginRight: 10,
          }}>
            <Spinner color='#103662'/>
          </Content>
        </Container>
      )
    } else {
      return (
        <Container>
          <CSHeader pageTitle={pageTitle} />
          <Content>
            <List>
              {listItems.map(item => (
                <ListItem thumbnail style={{marginTop: 20, marginBottom: 20}}>
                  <Left>
                    <Thumbnail
                      circular
                      source={require('./assets/user.png')}
                      style={{width: 50, height: 50}}
                    />
                  </Left>
                  <Body>
                    <Text style={{fontSize: 20}}>
                      {item.name + ' ' + item.surname}
                    </Text>
                  </Body>
                  <Right>
                    <Button
                      bordered
                      style={{borderColor: '#103662', marginTop: -10, borderStartWidth: 1.5,
                      borderEndWidth: 1.5,
                      borderTopWidth: 1.5,
                      borderBottomWidth: 1.5}}
                      onPress={() =>
                        this.props.navigation.push('ClientOverV', {
                          client_id: item.client_id,
                          nameSurname: item.name + ' ' + item.surname,
                        })
                      }>
                      <Text style={{color: '#103662', fontSize: 20, fontWeight: '500'}}>View</Text>
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
}
