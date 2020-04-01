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
  Spinner,
  View,
  Image
} from 'native-base';

import CSHeader from '../components/CSHeader';

import {getClientsList} from '../services/DatabaseServices';
import {getClientData} from '../services/DatabaseServices';

export default class ClientList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      listItems: [],
      clientData: '',
      isLoaded: false,
    };
  }

  async componentDidMount() {
    let data = await getClientsList();
    this.setState({listItems: data});

    this.setState({isLoaded: true});

    console.log(this.state.listItems);

    console.log(this.props.route.params.client_id);
    let datas = await getClientData(this.props.route.params.client_id);
    this.setState({clientData: datas});
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
      const highrisk = (
        <View>
          circular source={require('./assets/IconRed.png')}
          style={{width: 50, height: 50}}
        </View>
      );
      const mediumrisk = (
        <View>
          circular source={require('./assets/IconYellow.png')}
          style={{width: 50, height: 50}}
        </View>
      );
      const lowrisk = (
        <View>
          circular source={require('./assets/IronGreen.png')}
          style={{width: 50, height: 50}}
        </View>
      );
      const norisk = (
        <View>
          circular source={require('./assets/user.png')}
          style={{width: 50, height: 50}}
        </View>
      );

      let image;
      if (this.state.clientData.risk === 'l') {
        image = highrisk;
      } else if (this.state.clientData.risk === 'm') {
        image = mediumrisk;
      } else if (this.state.clientData.risk === 's') {
        image = lowrisk;
      } else {
        image = norisk;
      }
      return (
        <Container>
          <CSHeader pageTitle={pageTitle} />
          <Content>
            <List>
              {listItems.map(item => (
                <ListItem thumbnail style={{marginTop: 20, marginBottom: 20}}>
                  <Left>
                    <Thumbnail {...image} />
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
