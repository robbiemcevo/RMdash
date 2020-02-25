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
  Item,
  Input,
  Form,
  Textarea,
  DatePicker,
  ListItem,
  CheckBox,
  Picker,
  Segment,
} from 'native-base';

export default class PickerExample extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: 'key1',
    };
  }
  onValueChange(value: string) {
    this.setState({
      selected: value,
    });
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
        <Header style={{backgroundColor: '#103662', height: 40}}>
          <Left>
            <Button transparent light style={{marginTop: -40}}>
              <Icon name="menu" />
            </Button>
          </Left>
          <Body>
            <Title
              style={{
                fontSize: 20,
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
              <Card transparent>
                <CardItem style={{backgroundColor: '#B2C3D1'}}>
                  <Body>
                    <Text style={{fontSize: 20}}>Next meeting: {'\n'}</Text>
                    <Text style={{fontSize: 20}}>Notifications:{'\n'}</Text>
                  </Body>
                </CardItem>
              </Card>
            </Content>
          </Tab>
          <Tab heading="Portfolio" activeTextStyle={{color: '#103662'}}>
            <Content>
              <Tabs
                tabBarUnderlineStyle={{backgroundColor: '#103662', height: 4}}>
                <Tab
                  heading="Execution Only"
                  activeTextStyle={{color: '#103662'}}>
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
              </Tabs>
            </Content>
          </Tab>
          <Tab heading="Insights" activeTextStyle={{color: '#103662'}} />
          <Tab heading="Documents" activeTextStyle={{color: '#103662'}}>
            <Content padder>
              <Text />
              <Item regular>
                <Input placeholder="Client ID" style={{fontSize: 20}} />
              </Item>
              <Item regular style={{marginTop: 10}}>
                <Input placeholder="First Name " style={{fontSize: 20}} />
              </Item>
              <Item regular style={{marginTop: 10}}>
                <Input placeholder="Last Name " style={{fontSize: 20}} />
              </Item>
              <Form style={{marginTop: 10, fontSize: 20}}>
                <Textarea
                  rowSpan={3}
                  bordered
                  placeholder="Residential Address"
                  style={{fontSize: 20}}
                />
              </Form>
              <Item regular style={{marginTop: 10}}>
                <Input placeholder="Date of Birth" style={{fontSize: 20}} />
              </Item>
              <Item regular style={{marginTop: 10}}>
                <Input placeholder="Mailing Adress" style={{fontSize: 20}} />
              </Item>
              <Item regular style={{marginTop: 10}}>
                <Input
                  placeholder="Transit Account Holder"
                  style={{fontSize: 20}}
                />
              </Item>
              <Item regular style={{marginTop: 10}}>
                <Input
                  placeholder="Transit Account Number"
                  style={{fontSize: 20}}
                />
              </Item>
              <Item regular style={{marginTop: 10}}>
                <Input placeholder="Source of Wealth" style={{fontSize: 20}} />
              </Item>
              <Text style={{marginTop: 10}}>Client Knowledge</Text>
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
              <Text style={{marginTop: 10}}>PEP Check</Text>
              <Form>
                <Picker
                  note
                  mode="dropdown"
                  style={{width: 300, color: 'black'}}
                  selectedValue={this.state.selected}
                  onValueChange={this.onValueChange.bind(this)}>
                  <Picker.Item label="Please Select" value="key1" />
                  <Picker.Item label="Clear" value="key0" />
                  <Picker.Item label="In Progress" value="key2" />
                  <Picker.Item label="Not Done" value="key3" />
                  <Picker.Item label="Problematic" value="key4" />
                </Picker>
              </Form>
              <Text style={{marginTop: 10}}> Government Documents?</Text>
              <ListItem>
                <CheckBox checked={false} /*this needs functionality*/ />
                <Body>
                  <Text>Yes</Text>
                </Body>
              </ListItem>
              <ListItem>
                <CheckBox checked={false} /*this needs functionality*/ />
                <Body>
                  <Text>No</Text>
                </Body>
              </ListItem>
              <Text style={{marginTop: 10}}> Paper Mailing?</Text>
              <ListItem>
                <CheckBox checked={false} /*this needs functionality*/ />
                <Body>
                  <Text>Yes</Text>
                </Body>
              </ListItem>
              <ListItem>
                <CheckBox checked={false} /*this needs functionality*/ />
                <Body>
                  <Text>No</Text>
                </Body>
              </ListItem>
            </Content>
          </Tab>
        </Tabs>
      </Container>
    );
  }
}
