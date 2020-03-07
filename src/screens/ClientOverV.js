import {createStackNavigator} from '@react-navigation/stack';
import { useNavigation } from '@react-navigation/native';
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
} from 'native-base';
import CSHeader from '../components/CSHeader';
import {getClientData} from '../services/DatabaseServices';

export default class ClientOverV extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: 'key1',
      clientData2: '',
    };

  }
  onValueChange(value: string) {
    this.setState({
      selected: value,
    });
  }
  
  componentDidMount() {
    let clientData = getClientData();
    console.log('clientData' + clientData[1].name);
    this.setState({clientData2: clientData});
  }
  render()
  
  {
    const line = {
      labels: ['January', 'February', 'March', 'April', 'May', 'June'],
      datasets: [
        {
          data: [20, 45, 28, 80, 99, 43],
          strokeWidth: 2, // optional
        },
      ],
    };
    const pageTitle = 'Ali Orwak'
    return (
      <Container>
       <CSHeader pageTitle={pageTitle}/>

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
                  <Text style={{fontSize: 20}}>Client ID:  </Text>
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
                  style={{borderTopLeftRadius: 8, borderTopRightRadius: 8, borderBottomWidth: 1 }}>
                  <Text
                    style={{
                      fontSize: 20,
                      fontWeight: 'bold',
                      color: '#103662',
                    }}>
                    NOTIFICATIONS
                  </Text>
                </CardItem>
                <CardItem>
                  <Left>
                    <Button
                      bordered
                      style={{
                        borderColor: '#103662',
                        borderStartWidth: 2,
                        borderEndWidth: 2,
                        borderTopWidth: 2,
                        borderBottomWidth: 2,
                      }}>
                      <Text style={{fontSize: 20, color: '#103662', fontWeight: 'bold'}}>
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
            Client ID: 
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
          <Item rounded style={{marginTop: 10}}>
            <Input
              placeholder="First Name"
              style={{fontSize: 20, marginStart: 7}}
            />
          </Item>
          <Item rounded style={{marginTop: 10}}>
            <Input
              placeholder="Middle Name"
              style={{fontSize: 20, marginStart: 7}}
            />
          </Item>
          <Item rounded style={{marginTop: 10}}>
            <Input
              placeholder="Last Name"
              style={{fontSize: 20, marginStart: 7}}
            />
          </Item>
          <Item rounded style={{marginTop: 10}}>
            <Input
              placeholder="Email"
              style={{fontSize: 20, marginStart: 7}}
            />
          </Item>
          <Item rounded style={{marginTop: 10}}>
            <Input
              placeholder="Phone Number"
              style={{fontSize: 20, marginStart: 7}}
            />
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

          <Item rounded style={{marginTop: 10}}>
                <Input placeholder="Date of Birth " style={{fontSize: 20, marginStart: 7}} />
              </Item>
              <Item rounded style={{marginTop: 10}}>
                <Input placeholder="Residential Address" style={{fontSize: 20, marginStart: 7}} />
              </Item>
              <Item rounded style={{marginTop: 10}}>
                <Input placeholder="Mailing Adress" style={{fontSize: 20, marginStart: 7}} />
              </Item>
              <Item rounded style={{marginTop: 10}}>
                <Input placeholder="Nationality" style={{fontSize: 20, marginStart: 7}} />
              </Item>
              <Item rounded style={{marginTop: 10}}>
                <Input placeholder="Reporting Language" style={{fontSize: 20, marginStart: 7}} />
              </Item>
              <Item rounded style={{marginTop: 10}}>
                <Input placeholder="Reporting Currency" style={{fontSize: 20, marginStart: 7}} />
              </Item>
              <Item rounded style={{marginTop: 10}}>
                <Input
                  placeholder="Transit Account Holder"
                  style={{fontSize: 20, marginStart: 7}}
                />
              </Item>
              <Item rounded style={{marginTop: 10}}>
                <Input
                  placeholder="Transit Account Number"
                  style={{fontSize: 20, marginStart: 7}}
                />
              </Item>
              <Item rounded style={{marginTop: 10}}>
                <Input placeholder="Sector" style={{fontSize: 20, marginStart: 7}} />
              </Item>
              <Item rounded style={{marginTop: 10}}>
                <Input placeholder="Source of Wealth" style={{fontSize: 20, marginStart: 7}} />
              </Item>
              <Text style={{fontSize:20, marginTop: 10, marginStart:5}}>Client Knowledge</Text>
              <Form>
                <Picker
                  note
                  mode="dropdown"
                  style={{width: 300, color: 'black'}}
                  selectedValue={this.state.selected}
                  onValueChange={this.onValueChange.bind(this)}>
                  <Picker.Item label="Please Select" value="key1" />
                  <Picker.Item label="Professional" value="key0" />
                  <Picker.Item label="Private" value="key2" />
                </Picker>
              </Form>
              <Text style={{fontSize:20, marginTop: 10, marginStart: 5}}>PEP Check</Text>
              <Form>
                <Picker
                  note
                  mode="dropdown"
                  style={{width: 300, color: 'blue', fontSize:20}}
                  selectedValue={this.state.selected}
                  onValueChange={this.onValueChange.bind(this)}>
                  <Picker.Item label="Please Select" value="key1" />
                  <Picker.Item label="Clear" value="key0" />
                  <Picker.Item label="In Progress" value="key2" />
                  <Picker.Item label="Not Done" value="key3" />
                  <Picker.Item label="Problematic" value="key4" />
                </Picker>
              </Form>
              <Text style={{fontSize:20,marginTop: 10}}> Government Documents?</Text>
              <ListItem>
                <CheckBox checked={false} /*this needs functionality*/ />
                <Body>
                  <Text style={{fontSize:20}}>Yes</Text>
                </Body>
              </ListItem>
              <ListItem>
                <CheckBox checked={false} /*this needs functionality*/ />
                <Body>
                  <Text style={{fontSize:20}}>No</Text>
                </Body>
              </ListItem>
              <Text style={{fontSize:20,marginTop: 10}}> Paper Mailing?</Text>
              <ListItem>
                <CheckBox checked={false} /*this needs functionality*/ />
                <Body>
                  <Text style={{fontSize:20}}>Yes</Text>

                </Body>
              </ListItem>
              <ListItem>
                <CheckBox checked={false} /*this needs functionality*/ />
                <Body>
                  <Text style={{fontSize:20}}>No</Text>
                </Body>
              </ListItem>
            </Content>
          </Tab>
        </Tabs>
      </Container>
    );
  }
}