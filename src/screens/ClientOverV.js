import {createStackNavigator} from '@react-navigation/stack';
import {useNavigation} from '@react-navigation/native';
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
} from 'native-base';
import CSHeader from '../components/CSHeader';

import {getClientData} from '../services/DatabaseServices';

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
        <Tabs tabBarUnderlineStyle={{backgroundColor: '#103662', height: 4}}>
          <Tab heading="Overview" activeTextStyle={{color: '#103662'}}>
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
                    <Text style={{fontSize: 20}}>
                      Client ID: {this.state.clientData.client_id}
                    </Text>
                    <Text style={{fontSize: 20}}>
                      Address: {this.state.clientData.domicile}
                    </Text>
                    <Text style={{fontSize: 20}}>
                      Phone No.: {this.state.clientData.phone_number}
                    </Text>
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
                  <Body>
                    <Text style={{fontSize: 20}}>- EXT.1 up by 0.8%</Text>
                    <Text style={{fontSize: 20}}>
                      - FTSE down by 1.7%{' '}
                      <Icon name="alert" style={{fontSize: 30, color: 'red'}} />
                    </Text>
                  </Body>
                </CardItem>
              </Card>
            </Content>
          </Tab>

          <Tab heading="Execution" activeTextStyle={{color: '#103662'}}>
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

          <Tab heading="Advisory" activeTextStyle={{color: '#103662'}}>
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

          <Tab heading="Documents" activeTextStyle={{color: '#103662'}}>
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
              <Text style={{fontSize: 20, marginStart: 15, color: "grey"}}>First Name</Text>
              <Item rounded style={{marginTop: 10}}>
                <Input
                  style={{fontSize: 20, marginStart: 5}}>
                  <Text style={{fontSize: 20, marginStart: 7}}>
                    {this.state.clientData.name}
                  </Text>
                </Input>
                </Item>
              <Text style={{fontSize: 20, marginStart: 15, marginTop:10, color: "grey"}}>Last Name</Text>
              <Item rounded style={{marginTop: 10}}>
                <Input
                  style={{fontSize: 20, marginStart: 5}}>
                  <Text style={{fontSize: 20, marginStart: 7}}>
                    {this.state.clientData.surname}
                  </Text>
                </Input>
              </Item>
              <Text style={{fontSize: 20, marginStart: 15, marginTop:10, color: "grey"}}>Email</Text>
              <Item rounded style={{marginTop: 10}}>
                <Input
                  style={{fontSize: 20, marginStart: 7}}
                />
              </Item>
              <Text style={{fontSize: 20, marginStart: 15, marginTop:10, color: "grey"}}>Phone Number</Text>
              <Item rounded style={{marginTop: 10}}>
                <Input
                  style={{fontSize: 20, marginStart: 7}}>
                    <Text style={{fontSize: 20, marginStart: 7}}>
                    {this.state.clientData.phone_number}
                  </Text>
                </Input>
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
              <Text style={{fontSize: 20, marginStart: 15, marginTop:10, color: "#555555"}}>Date of Birth</Text>
              <Item rounded style={{marginTop: 10}}>
                <Input
                  style={{fontSize: 20, marginStart: 7}}
                />
              </Item>
              <Text style={{fontSize: 20, marginStart: 15, marginTop:10, color: "#555555"}}>Residential Adress</Text>
              <Item rounded style={{marginTop: 10}}>
                <Input
                  style={{fontSize: 20, marginStart: 7}}
                />
              </Item>
              <Text style={{fontSize: 20, marginStart: 15, marginTop:10, color: "#555555"}}>Mailing Adress</Text>
              <Item rounded style={{marginTop: 10}}>
                <Input
                  style={{fontSize: 20, marginStart: 7}}
                />
              </Item>
              <Text style={{fontSize: 20, marginStart: 15, marginTop:10, color: "#555555"}}>Nationality</Text>
              <Item rounded style={{marginTop: 10}}>
                <Input
                  style={{fontSize: 20, marginStart: 7}}
                />
              </Item>
              <Text style={{fontSize: 20, marginStart: 15, marginTop:10, color: "#555555"}}>Reporting Language</Text>
              <Item rounded style={{marginTop: 10}}>
                <Input
                  style={{fontSize: 20, marginStart: 7}}
                />
              </Item>
              <Text style={{fontSize: 20, marginStart: 15, marginTop:10, color: "#555555"}}>Reporting Currency</Text>
              <Item rounded style={{marginTop: 10}}>
                <Input
                  style={{fontSize: 20, marginStart: 7}}
                />
              </Item>
              <Text style={{fontSize: 20, marginStart: 15, marginTop:10, color: "#555555"}}>Transit Account Holder</Text>
              <Item rounded style={{marginTop: 10}}>
                <Input
                  style={{fontSize: 20, marginStart: 7}}
                />
              </Item>
              <Text style={{fontSize: 20, marginStart: 15, marginTop:10, color: "#555555"}}>Transit Account Number</Text>
              <Item rounded style={{marginTop: 10}}>
                <Input
                  style={{fontSize: 20, marginStart: 7}}
                />
              </Item>
              <Text style={{fontSize: 20, marginStart: 15, marginTop:10, color: "#555555"}}>Sector</Text>
              <Item rounded style={{marginTop: 10}}>
                <Input
                  style={{fontSize: 20, marginStart: 7}}
                />
              </Item>
              <Text style={{fontSize: 20, marginStart: 15, marginTop:10, color: "#555555"}}>Source of Wealth</Text>
              <Item rounded style={{marginTop: 10}}>
                <Input
                  style={{fontSize: 20, marginStart: 7}}
                />
              </Item>
              <Text style={{fontSize: 20, marginStart: 15, marginTop:10, color: "#555555"}}>Client Knowledge</Text>
              <Form >
                <Picker
                  mode="dropdown"
                  style={{width: 300, color: 'black', fontSize:20}}
                  selectedValue={this.state.selected}
                  onValueChange={this.onValueChange.bind(this)}>
                  <Picker.Item label="Please Select" value="key1" />
                  <Picker.Item label="Professional" value="key0" />
                  <Picker.Item label="Private" value="key2" />
                </Picker>
              </Form>
              <Text style={{fontSize: 20, marginStart: 15, marginTop:10, color: "#555555"}}>PEP Check</Text>
              <Form Inline style={{inlineColor: 'black'}}>
                <Picker
                  mode="dropdown"
                  style={{width: 300, color: 'black', fontSize: 20}}
                  selectedValue={this.state.selected}
                  onValueChange={this.onValueChange.bind(this)}>
                  <Picker.Item label="Please Select" value="key1" />
                  <Picker.Item label="Clear" value="key0" />
                  <Picker.Item label="In Progress" value="key2" />
                  <Picker.Item label="Not Done" value="key3" />
                  <Picker.Item label="Problematic" value="key4" />
                </Picker>
              </Form>
              <Text style={{fontSize: 20, marginStart: 15, marginTop:10, color: "#555555"}}>Government Documents?</Text>
              <ListItem>
                <CheckBox style={{borderColor: '#103662'}} checked={false} /*this needs functionality*/ />
                <Body>
                  <Text style={{fontSize: 20}}>Yes</Text>
                </Body>
              </ListItem>
              <ListItem>
                <CheckBox style={{borderColor: '#103662'}} checked={false} /*this needs functionality*/ />
                <Body>
                  <Text style={{fontSize: 20}}>No</Text>
                </Body>
              </ListItem>
              <Text style={{fontSize: 20, marginStart: 15, marginTop:10, color: "#555555"}}>Paper Mailing?</Text>
              <ListItem>
                <CheckBox style={{borderColor: '#103662'}} checked={false} /*this needs functionality*/ />
                <Body>
                  <Text style={{fontSize: 20}}>Yes</Text>
                </Body>
              </ListItem>
              <ListItem>
                <CheckBox style={{borderColor: '#103662'}} checked={false} /*this needs functionality*/ />
                <Body>
                  <Text style={{fontSize: 20}}>No</Text>
                </Body>
              </ListItem>
            </Content>
          </Tab>
        </Tabs>
      </Container>
    );
  }
}
