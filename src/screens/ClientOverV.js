import {createStackNavigator} from '@react-navigation/stack';
import {useNavigation, ThemeProvider} from '@react-navigation/native';
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
  Item,
  Input,
  Form,
  Textarea,
  DatePicker,
  ListItem,
  CheckBox,
  Picker,
  Segment,
  bordered,
  Label,
  View,
} from 'native-base';
import CSHeader from '../components/CSHeader';
import {TouchableOpacity, Alert} from 'react-native';

import {getClientData, updateClientKYC} from '../services/DatabaseServices';

export default class ClientOverV extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: 'key1',
      clientData: '',
      isLoading: true,
    };
  }
  onValueChange(value) {
    this.setState({
      selected: value,
    });
  }
  async onUpdateClientKYC(data) {
    const result = await updateClientKYC(data);

    if (result) {
      Alert.alert(
        'Client data updated',
        'Client data was successfuly updated!',
      );
    }
  }

  async componentDidMount() {
    console.log(this.props.route.params.client_id);
    let data = await getClientData(this.props.route.params.client_id);
    this.setState({clientData: data});

    //console.log(this.state.clientData);
  }

  render() {
    const line = {
      labels: ['January', 'February', 'March', 'April', 'May', 'June'],
      datasets: [
        {
          data: [20, 45, 28, 80, 99, 43],
          strokeWidth: 2, // optional
        },
      ],
    };

    return (
      <Container>
        <Tabs tabBarUnderlineStyle={{backgroundColor: '#103662', height: 4}}
        tabBarBackgroundColor='#103662'>
          <Tab heading="Overview" activeTextStyle={{color: '#103662'}} tabStyle={{backgroundColor:'light'}} activeTabStyle={{backgroundColor:'light'}}>
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
                      <Icon name="call" style={{color: '#103662'}} /> Call
                    </Text>
                  </Button>
                  <Button transparent style={{marginLeft: 90}}>
                    <Text
                      style={{
                        color: '#103662',
                        fontSize: 20,
                        textAlign: 'center',
                      }}>
                      <Icon name="text" style={{color: '#103662'}} /> Message
                    </Text>
                  </Button>
                </CardItem>
              </Card>
              <Card transparent>
                <CardItem>
                  <Body>
                    <Text style={{fontSize: 20, color:'back'}}>
                      Client ID: {this.state.clientData.client_id}
                    </Text>
                    <Text style={{fontSize: 20, color:'back'}}>
                      Address: {this.state.clientData.domicile}
                    </Text>
                    <Text style={{fontSize: 20, color:'back'}}>
                      Phone No.: {this.state.clientData.phone_number}
                    </Text>
                  </Body>
                </CardItem>
              </Card>
              <Card transparent>
                <CardItem>
                  <Body>
                    <Text style={{fontSize: 20, color:'back'}}>Total Net Assets</Text>
                    <Text style={{fontSize: 20, color:'back'}}>GDP</Text>
                    <Text
                      style={{
                        fontSize: 90,
                        fontWeight: 'bold',
                        color: '#103662',
                      }}>
                      55
                      <Text
                        style={{
                          fontSize: 20,
                          fontWeight: 'normal',
                          color: '#103662',
                        }}>
                        {' '}
                        Million
                      </Text>
                    </Text>
                  </Body>
                </CardItem>
              </Card>
              <Card transparent style={{borderRadius: 8, borderTopWidth: 1}}>
                <CardItem
                  header
                  bordered
                  style={{
                    borderTopLeftRadius: 8,
                    borderTopRightRadius: 8,
                    borderBottomWidth: 1,
                  }}>
                  <Text
                    style={{
                      fontSize: 20,
                      fontWeight: 'bold',
                      color: '#103662',
                    }}>
                    Notifications
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
                          color: '#103662',
                          fontWeight: 'bold',
                        }}>
                        {this.state.clientData.event_date}
                      </Text>
                    </Button>
                    <Body>
                      <Text style={{fontSize: 20, color:'back'}}>{this.state.clientData.events}</Text>
                      
                    </Body>
                  </Left>
                </CardItem>
                <CardItem>
                  <Body>
                    <Text style={{fontSize: 20, color:'back'}}>- EXT.1 up by 0.8%</Text>
                    <Text style={{fontSize: 20, color:'back'}}>
                      - FTSE down by 1.7%{' '}
                      <Icon name="alert" style={{fontSize: 30, color: 'red'}} />
                    </Text>
                  </Body>
                </CardItem>
              </Card>
            </Content>
          </Tab>

          <Tab heading="Execution" activeTextStyle={{color: '#103662'}} tabStyle={{backgroundColor:'light'}} activeTabStyle={{backgroundColor:'light'}}>
            <Content>
              <Card transparent style={{height: 200}}>
                <CardItem>
                  <Text
                    style={{
                      fontSize: 20,
                      fontWeight: 'bold',
                      color: '#103662',
                    }}>
                    Portfolio Overview
                  </Text>
                </CardItem>
              </Card>
              <Card transparent style={{height: 200}}>
                <CardItem>
                  <Text
                    style={{
                      fontSize: 20,
                      fontWeight: 'bold',
                      color: '#103662',
                    }}>
                    Securities
                  </Text>
                </CardItem>
              </Card>
            </Content>
          </Tab>

          <Tab heading="Advisory" activeTextStyle={{color: '#103662'}} tabStyle={{backgroundColor:'light'}} activeTabStyle={{backgroundColor:'light'}}>
            <Content>
              <Card transparent style={{height: 200}}>
                <CardItem>
                  <Text
                    style={{
                      fontSize: 20,
                      fontWeight: 'bold',
                      color: '#103662',
                    }}>
                    Portfolio Overview
                  </Text>
                </CardItem>
              </Card>
              <Card transparent style={{height: 200}}>
                <CardItem>
                  <Text
                    style={{
                      fontSize: 20,
                      fontWeight: 'bold',
                      color: '#103662',
                    }}>
                    Securities
                  </Text>
                </CardItem>
              </Card>
              <Card transparent style={{height: 200}}>
                <CardItem>
                  <Text
                    style={{
                      fontSize: 20,
                      fontWeight: 'bold',
                      color: '#103662',
                    }}>
                    Securities Watchlist
                  </Text>
                </CardItem>
              </Card>
            </Content>
          </Tab>

          <Tab heading="Details" activeTextStyle={{color: '#103662'}} tabStyle={{backgroundColor:'light'}} activeTabStyle={{backgroundColor:'light'}}>
            <Content padder>
              <Text
                style={{
                  fontSize: 20,
                  fontWeight: 'bold',
                  color: '#103662',
                  marginBottom: 10,
                  marginTop: 10,
                  marginStart: 15,
                }}>
                Client ID: {this.state.clientData.client_id}
              </Text>
              <Text
                style={{
                  fontSize: 20,
                  fontWeight: 'bold',
                  color: '#103662',
                  marginBottom: 10,
                  marginTop: 10,
                  marginStart: 15,
                }}>
                Basic Information
              </Text>
              <Text style={{fontSize: 20, marginStart: 15, color: '#555555'}}>
                First Name
              </Text>
              <Item rounded style={{marginTop: 10}}>
                <Input style={{fontSize: 20, marginStart: 7, color:'back'}}
                onChangeText={text => this.setState({
                  clientData: {
                    ...this.state.clientData,
                    name: text,
                  },
                })}
                value={this.state.clientData.name} />
              </Item>
              <Text
                style={{
                  fontSize: 20,
                  marginStart: 15,
                  marginTop: 10,
                  color: '#555555',
                }}>
                Last Name
              </Text>
              <Item rounded style={{marginTop: 10}}>
              <Input style={{fontSize: 20, marginStart: 7, color:'back'}}
                onChangeText={text => this.setState({
                  clientData: {
                    ...this.state.clientData,
                    surname: text,
                  },
                })}
                value={this.state.clientData.surname} />
              </Item>
              <Text
                style={{
                  fontSize: 20,
                  marginStart: 15,
                  marginTop: 10,
                  color: '#555555',
                }}>
                Email
              </Text>
              <Item rounded style={{marginTop: 10}}>
              <Input style={{fontSize: 20, marginStart: 7, color:'back'}}
                onChangeText={text => this.setState({
                  clientData: {
                    ...this.state.clientData,
                    email: text,
                  },
                })}
                value={this.state.clientData.email} />
              </Item>
              <Text
                style={{
                  fontSize: 20,
                  marginStart: 15,
                  marginTop: 10,
                  color: '#555555',
                }}>
                Phone Number
              </Text>
              <Item rounded style={{marginTop: 10}}>
              <Input style={{fontSize: 20, marginStart: 7, color:'back'}}
                onChangeText={text => this.setState({
                  clientData: {
                    ...this.state.clientData,
                    phone_number: text,
                  },
                })}
                value={this.state.clientData.phone_number} />
              </Item>

              <Text
                style={{
                  fontSize: 20,
                  fontWeight: 'bold',
                  color: '#103662',
                  marginBottom: 10,
                  marginTop: 20,
                  marginStart: 15,
                }}>
                Onboarding Information
              </Text>
              <Text
                style={{
                  fontSize: 20,
                  marginStart: 15,
                  marginTop: 10,
                  color: '#555555',
                }}>
                Date of Birth
              </Text>
              <Item rounded style={{marginTop: 10}}>
              <Input style={{fontSize: 20, marginStart: 7, color:'back'}}
                onChangeText={text => this.setState({
                  clientData: {
                    ...this.state.clientData,
                    birthday: text,
                  },
                })}
                value={this.state.clientData.birthday} />
              </Item>
              <Text
                style={{
                  fontSize: 20,
                  marginStart: 15,
                  marginTop: 10,
                  color: '#555555',
                }}>
                Residential Adress
              </Text>
              <Item rounded style={{marginTop: 10}}>
              <Input style={{fontSize: 20, marginStart: 7, color:'back'}}
                onChangeText={text => this.setState({
                  clientData: {
                    ...this.state.clientData,
                    domicile: text,
                  },
                })}
                value={this.state.clientData.domicile} />
              </Item>
              <Text
                style={{
                  fontSize: 20,
                  marginStart: 15,
                  marginTop: 10,
                  color: '#555555',
                }}>
                Mailing Adress
              </Text>
              <Item rounded style={{marginTop: 10}}>
              <Input style={{fontSize: 20, marginStart: 7, color:'back'}}
                onChangeText={text => this.setState({
                  clientData: {
                    ...this.state.clientData,
                    mailing_address: text,
                  },
                })}
                value={this.state.clientData.mailing_address} />
              </Item>
              <Text
                style={{
                  fontSize: 20,
                  marginStart: 15,
                  marginTop: 10,
                  color: '#555555',
                }}>
                Nationality
              </Text>
              <Item rounded style={{marginTop: 10}}>
              <Input style={{fontSize: 20, marginStart: 7, color:'back'}}
                onChangeText={text => this.setState({
                  clientData: {
                    ...this.state.clientData,
                    nationality: text,
                  },
                })}
                value={this.state.clientData.nationality} />
              </Item>
              <Text
                style={{
                  fontSize: 20,
                  marginStart: 15,
                  marginTop: 10,
                  color: '#555555',
                }}>
                Reporting Language
              </Text>
              <Item rounded style={{marginTop: 10}}>
              <Input style={{fontSize: 20, marginStart: 7, color:'back'}}
                onChangeText={text => this.setState({
                  clientData: {
                    ...this.state.clientData,
                    languages_of_reporting: text,
                  },
                })}
                value={this.state.clientData.languages_of_reporting} />
              </Item>
              <Text
                style={{
                  fontSize: 20,
                  marginStart: 15,
                  marginTop: 10,
                  color: '#555555',
                }}>
                Reporting Currency
              </Text>
              <Item rounded style={{marginTop: 10}}>
              <Input style={{fontSize: 20, marginStart: 7, color:'back'}}
                onChangeText={text => this.setState({
                  clientData: {
                    ...this.state.clientData,
                    reporting_currency: text,
                  },
                })}
                value={this.state.clientData.reporting_currency} />
              </Item>
              <Text
                style={{
                  fontSize: 20,
                  marginStart: 15,
                  marginTop: 10,
                  color: '#555555',
                }}>
                Transit Account Holder
              </Text>
              <Item rounded style={{marginTop: 10}}>
              <Input style={{fontSize: 20, marginStart: 7, color:'back'}}
                onChangeText={text => this.setState({
                  clientData: {
                    ...this.state.clientData,
                    transit_account_holder: text,
                  },
                })}
                value={this.state.clientData.transit_account_holder} />
              </Item>
              <Text
                style={{
                  fontSize: 20,
                  marginStart: 15,
                  marginTop: 10,
                  color: '#555555',
                }}>
                Transit Account Number
              </Text>
              <Item rounded style={{marginTop: 10}}>
              <Input style={{fontSize: 20, marginStart: 7, color:'back'}}
                onChangeText={text => this.setState({
                  clientData: {
                    ...this.state.clientData,
                    transit_account_number: text,
                  },
                })}
                value={this.state.clientData.transit_account_number} />
              </Item>
              <Text
                style={{
                  fontSize: 20,
                  marginStart: 15,
                  marginTop: 10,
                  color: '#555555',
                }}>
                Sector
              </Text>
              <Item rounded style={{marginTop: 10}}>
              <Input style={{fontSize: 20, marginStart: 7, color:'back'}}
                onChangeText={text => this.setState({
                  clientData: {
                    ...this.state.clientData,
                    surname: sector,
                  },
                })}
                value={this.state.clientData.sector} />
              </Item>
              <Text
                style={{
                  fontSize: 20,
                  marginStart: 15,
                  marginTop: 10,
                  color: '#555555',
                }}>
                Source of Wealth
              </Text>
              <Item rounded style={{marginTop: 10}}>
              <Input style={{fontSize: 20, marginStart: 7, color:'back'}}
                onChangeText={text => this.setState({
                  clientData: {
                    ...this.state.clientData,
                    wealth_source: text,
                  },
                })}
                value={this.state.clientData.wealth_source} />
              </Item>
              <Text
                style={{
                  fontSize: 20,
                  marginStart: 15,
                  marginTop: 10,
                  color: '#555555',
                }}>
                Client Knowledge
              </Text>
              <ListItem>
                <CheckBox
                  checked={this.state.clientData.client_knowledge === 'pri'}
                  color="#103662"
                  onPress={() =>
                    this.setState({
                      clientData: {
                        ...this.state.clientData,
                        client_knowledge: 'pri',
                      },
                    })
                  }
                />
                <Text style={{fontSize: 20, marginStart: 7, color:'back'}}>Private</Text>
              </ListItem>
              <ListItem>
                <CheckBox
                  checked={this.state.clientData.client_knowledge === 'pro'}
                  color="#103662"
                  onPress={() =>
                    this.setState({
                      clientData: {
                        ...this.state.clientData,
                        client_knowledge: 'pro',
                      },
                    })
                  }
                />
                <Text style={{fontSize: 20, marginStart: 7, color:'back'}}>Professional</Text>
              </ListItem>
              <Text
                style={{
                  fontSize: 20,
                  marginStart: 15,
                  marginTop: 10,
                  color: '#555555',
                }}>
                PEP Check
              </Text>
              <ListItem>
                <CheckBox
                  checked={this.state.clientData.pep_status === 'c'}
                  color="#103662"
                  onPress={() =>
                    this.setState({
                      clientData: {
                        ...this.state.clientData,
                        pep_status: 'c',
                      },
                    })
                  }
                />
                <Text style={{fontSize: 20, marginStart: 7, color:'back'}}>Clear</Text>
              </ListItem>
              <ListItem>
                <CheckBox
                  checked={this.state.clientData.pep_status === 'ip'}
                  color="#103662"
                  onPress={() =>
                    this.setState({
                      clientData: {
                        ...this.state.clientData,
                        pep_status: 'ip',
                      },
                    })
                  }
                />
                <Text style={{fontSize: 20, marginStart: 7, color:'back'}}>In Progress</Text>
              </ListItem>
              <ListItem>
                <CheckBox
                  checked={this.state.clientData.pep_status === 'nd'}
                  color="#103662"
                  onPress={() =>
                    this.setState({
                      clientData: {
                        ...this.state.clientData,
                        pep_status: 'nd',
                      },
                    })
                  }
                />
                <Text style={{fontSize: 20, marginStart: 7, color:'back'}}>Not Done</Text>
              </ListItem>
              <ListItem>
                <CheckBox
                  checked={this.state.clientData.pep_status === 'p'}
                  color="#103662"
                  onPress={() =>
                    this.setState({
                      clientData: {
                        ...this.state.clientData,
                        pep_status: 'p',
                      },
                    })
                  }
                />
                <Text style={{fontSize: 20, marginStart: 7, color:'back'}}>Problematic</Text>
              </ListItem>
              <Text
                style={{
                  fontSize: 20,
                  marginStart: 15,
                  marginTop: 10,
                  color: '#555555',
                }}>
                Government Documents?
              </Text>
              <ListItem>
                <CheckBox
                  checked={
                    this.state.clientData.government_document_attached === 'Y'
                  }
                  color="#103662"
                  onPress={() =>
                    this.setState({
                      clientData: {
                        ...this.state.clientData,
                        government_document_attached: 'Y',
                      },
                    })
                  }
                />
                <Text style={{fontSize: 20, marginStart: 7, color:'back'}}>Yes</Text>
              </ListItem>
              <ListItem>
                <CheckBox
                  checked={
                    this.state.clientData.government_document_attached === 'N'
                  }
                  color="#103662"
                  onPress={() =>
                    this.setState({
                      clientData: {
                        ...this.state.clientData,
                        government_document_attached: 'N',
                      },
                    })
                  }
                />
                <Text style={{fontSize: 20, marginStart: 7, color:'back'}}>No</Text>
              </ListItem>
              <Text
                style={{
                  fontSize: 20,
                  marginStart: 15,
                  marginTop: 10,
                  color: '#555555',
                }}>
                Paper Mailing?
              </Text>
              <ListItem>
                <CheckBox
                  checked={this.state.clientData.paper_mailing === 'Y'}
                  color="#103662"
                  onPress={() =>
                    this.setState({
                      clientData: {
                        ...this.state.clientData,
                        paper_mailing: 'Y',
                      },
                    })
                  }
                />
                <Text style={{fontSize: 20, marginStart: 7, color:'back'}}>Yes</Text>
              </ListItem>
              <ListItem>
                <CheckBox
                  checked={this.state.clientData.paper_mailing === 'N'}
                  color="#103662"
                  onPress={() =>
                    this.setState({
                      clientData: {
                        ...this.state.clientData,
                        paper_mailing: 'N',
                      },
                    })
                  }
                />
                <Text style={{fontSize: 20, marginStart: 7, color:'back'}}>No</Text>
              </ListItem>
              <Text
                style={{
                  fontSize: 20,
                  marginStart: 15,
                  marginTop: 10,
                  color: '#555555',
                }}>
                Risk
              </Text>
              <ListItem>
                <CheckBox
                  onPress={() =>
                    this.setState({
                      clientData: {...this.state.clientData, risk: 'u'},
                    })
                  }
                  checked={this.state.clientData.risk === 'u'}
                  color="#103662"
                />
                <Text style={{fontSize: 20, marginStart: 7, color:'back'}}>Unknown</Text>
              </ListItem>
              <ListItem>
                <CheckBox
                  onPress={() =>
                    this.setState({
                      clientData: {...this.state.clientData, risk: 'l'},
                    })
                  }
                  checked={this.state.clientData.risk === 'l'}
                  color="#103662"
                />
                <Text style={{fontSize: 20, marginStart: 7, color:'back'}}>High</Text>
              </ListItem>
              <ListItem>
                <CheckBox
                  onPress={() =>
                    this.setState({
                      clientData: {...this.state.clientData, risk: 'm'},
                    })
                  }
                  checked={this.state.clientData.risk === 'm'}
                  color="#103662"
                />
                <Text style={{fontSize: 20, marginStart: 7, color:'back'}}>Medium</Text>
              </ListItem>
              <ListItem>
                <CheckBox
                  onPress={() =>
                    this.setState({
                      clientData: {...this.state.clientData, risk: 's'},
                    })
                  }
                  checked={this.state.clientData.risk === 's'}
                  color="#103662"
                />
                <Text style={{fontSize: 20, marginStart: 7, color:'back'}}>Low</Text>
              </ListItem>
              <Right>
                <Button
                  style={{
                    alignSelf: 'center',
                    backgroundColor: '#103662',
                    marginTop: 20,
                    marginLeft: 0,
                    width: 150,
                    height: 50,
                  }}
                  onPress={() => this.onUpdateClientKYC(this.state.clientData)}>
                  <Text style={{marginLeft: 40}}>Save</Text>
                </Button>
              </Right>
            </Content>
          </Tab>
        </Tabs>
      </Container>
    );
  }
}
