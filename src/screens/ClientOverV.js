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
  View,
  DeckSwiper,
} from 'native-base';
import CSHeader from '../components/CSHeader';
import {TouchableOpacity, SafeAreaView, FlatList, List} from 'react-native';
import {LineChart, Grid, YAxis} from 'react-native-svg-charts';
import {Defs, LinearGradient, Stop} from 'react-native-svg';
import GradientCard from 'react-native-gradient-card-view';
import {ScreenWidth} from '@freakycoder/react-native-helpers';
// Static Data
import staticData2 from './data/staticData2';
import styles, {centerSubtitleStyle} from './assets/styles';
import {getClientData, getPortfolioData} from '../services/DatabaseServices';

const cards = [
  {
    text: '5 Day',
    name: 'Relationship Manager: Dr. Georgie Powell',
    data: [88, 72, 89, 77, 78, 83, 85, 88, 91, 96, 92, 95, 99, 50, 110],
  },
  {
    text: '3 Month',
    name: 'Relationship Manager: Dr. Georgie Powell',
    data: [83, 88, 85, 80, 63, 70, 75, 75, 81, 85, 88, 92, 94, 97, 103],
  },
  {
    text: '1 Year',
    name: 'Relationship Manager: Dr. Georgie Powell',
    data: [10, 15, 16, 43, 52, 48, 75, 72, 86, 82, 63, 76, 88, 92, 103],
  },
];

export default class ClientOverV extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: 'key1',
      clientData: '',
      isLoading: true,
      page: 1,
      seed: 1,
      query: '',
      refreshing: false,
      dataBackup: staticData2,
      dataSource: staticData2,
      portfolioValue: []
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

    let portfolioData = await getPortfolioData(this.props.route.params.client_id, 'EXE');
    let portfolioValue = await this.getPortfolioValueOverTime(portfolioData);

    this.setState({portfolioValue: [{
      text: '5 Day',
      name: 'Relationship Manager: Dr. Georgie Powell',
      data: portfolioValue,
    }]});
    //console.log(this.state.clientData);
  }

  formatDate(date) {
    let d = new Date(date),
        month = '' + (d.getMonth() + 1),
        day = '' + d.getDate(),
        year = d.getFullYear();

    if (month.length < 2) 
        month = '0' + month;
    if (day.length < 2) 
        day = '0' + day;

    return [year, month, day].join('-');
  }

  getPortfolioValueOverTime(portfolioData) {

    let value = portfolioData.info.initial_value;
    let valueOverTime = [];
    let securitiesOwnedAtTime = [];
    let startDate = new Date(2019, 7, 1);
    let endDate = new Date(2019, 11, 31);

    console.log("================get portfolio value started =======================");
    console.log("");

    for (let d = startDate; d <= endDate; d.setDate(d.getDate() + 1)) {

      //Update value of owned securities
      //valueOld = price * amount
      //valueNew = priceOld * amount
      //changeInValue = | valueNew - valueOld |
      console.log(this.formatDate(new Date(d)));
      portfolioData.securityPrice.forEach(price => {
        if(price.date === this.formatDate(new Date(d))) {
          console.log(price.security_price_id + " " + price.security_code + " " + price.price);
          if(securitiesOwnedAtTime[price.security_code] !== undefined) {

            let priceOldValue = 0;

            portfolioData.securityPrice.forEach(priceOld => {
              if(priceOld.date < this.formatDate(new Date(d)) && priceOld.security_code === price.security_code) {
                //Take only the last value of forEach
                priceOldValue = priceOld.price;
              }
            });

            let valueNew = price.price * securitiesOwnedAtTime[price.security_code];
            let valueOld = priceOldValue * securitiesOwnedAtTime[price.security_code];
            let changeInValue = Math.abs(valueNew - valueOld);

            console.info("Previous portfolio value: " + value);

            if(valueNew > valueOld) {
              value += changeInValue;
            } else {
              value -= changeInValue;
            }

            console.log("Change in value: " + changeInValue + " Security price old: " + priceOldValue + " Price new: " + price.price);

            console.log("Portfolio value: " + value);

          }
        }
      });

      //Update securities owned
      portfolioData.trading.forEach(activity => {

        if(activity.date === this.formatDate(new Date(d))) {
          console.log(activity.trading_activity_id + " " + activity.security_code + " " + activity.amount + " " + activity.date + " " + activity.type);

          if(activity.type === 'BUY') {

            if(securitiesOwnedAtTime[activity.security_code] === undefined) {
              securitiesOwnedAtTime[activity.security_code] = activity.amount;
            } else {
              securitiesOwnedAtTime[activity.security_code] += activity.amount;
            }
  
          } else {
            securitiesOwnedAtTime[activity.security_code] -= activity.amount;
          }
        }

      });

      valueOverTime.push(value);
      
    }

    return valueOverTime;

  }

  state = {
    selectedDoc: 0,
  };
  state = {
    selectedPap: 0,
  };
  state = {
    selectedRisk: 0,
  };

  renderRightComponent = item => (
    <View>
      <LineChart
        data={item.data}
        style={styles.chartStyle}
        contentInset={styles.chartContentInset}
        svg={{
          strokeWidth: 1.5,
          fill: item.fillColor,
          stroke: item.strokeColor,
        }}
      />
    </View>
  );

  renderItem(item) {
    return (
      <GradientCard
        key={item.name}
        title={item.name}
        style={styles.cardStyle}
        imageSource={item.image}
        centerTitle={item.value}
        subtitle={item.shortName}
        width={ScreenWidth * 0.9}
        centerSubtitle={item.change}
        shadowStyle={styles.cardShadowStyle}
        centerSubtitleStyle={centerSubtitleStyle(item)}
        rightComponent={this.renderRightComponent(item)}
      />
    );
  }

  state = {
    activePage: 1,
  };

  selectComponent = activePage => () => this.setState({activePage});

  render() {
    const contentInset = {top: 20, bottom: 17};
    const date = [10, 15, 16, 43, 52, 48, 75, 72, 86, 82, 63, 76, 88, 92, 103];
    const Gradient = () => (
      <Defs key={'gradient'}>
        <LinearGradient id={'gradient'} x1={'0'} y={'0%'} x2={'100%'} y2={'0%'}>
          <Stop offset={'0%'} stopColor={'rgb(134, 65, 244)'} />
          <Stop offset={'100%'} stopColor={'rgb(66, 194, 244)'} />
        </LinearGradient>
      </Defs>
    );

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
              <View style={styles.safeAreaViewStyle}>
                <DeckSwiper
                  dataSource={this.state.portfolioValue}
                  renderItem={item => (
                    <Card style={{elevation: 3}}>
                      <CardItem>
                        <Left>
                          <Text
                            style={{
                              fontSize: 20,
                              fontWeight: 'bold',
                              color: '#103662',
                            }}>
                            Portfolio Overview
                          </Text>
                          <Button
                          transparent
                          style={{
                            marginStart: 10,
                          }}>
                          <Text style={{color: '#103662'}}>{item.text}</Text>
                        </Button>
                        </Left>
                      </CardItem>
                      <CardItem cardBody>
                        <YAxis
                          data={item.data}
                          contentInset={contentInset}
                          svg={{
                            fill: 'grey',
                            fontSize: 10,
                          }}
                          numberOfTicks={10}
                          formatLabel={value => `£${value}M`}
                        />
                        <LineChart
                          style={{height: 200, width: 400, left: 20}}
                          data={item.data}
                          contentInset={{top: 20, bottom: 17}}
                          svg={{
                            strokeWidth: 2,
                            stroke: 'url(#gradient)',
                          }}>
                          <Grid />
                          <Gradient />
                        </LineChart>
                      </CardItem>
                      
                    </Card>
                  )}
                />
              </View>
              <View
                style={{
                  marginTop: 270,
                }}>
                  <Card style={{height:200}}>
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
                    <CardItem>
                      <Text>Securities go here</Text>
                    </CardItem>
                  </Card>
              </View>
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
              <Text style={{fontSize: 20, marginStart: 15, color: '#555555'}}>
                First Name
              </Text>
              <Item rounded style={{marginTop: 10}}>
                <Input style={{fontSize: 20, marginStart: 5}}>
                  <Text style={{fontSize: 20, marginStart: 7}}>
                    {this.state.clientData.name}
                  </Text>
                </Input>
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
                <Input style={{fontSize: 20, marginStart: 5}}>
                  <Text style={{fontSize: 20, marginStart: 7}}>
                    {this.state.clientData.surname}
                  </Text>
                </Input>
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
                <Input style={{fontSize: 20, marginStart: 7}} />
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
                <Input style={{fontSize: 20, marginStart: 7}}>
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
                <Input style={{fontSize: 20, marginStart: 7}} />
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
                <Input style={{fontSize: 20, marginStart: 7}} />
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
                <Input style={{fontSize: 20, marginStart: 7}} />
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
                <Input style={{fontSize: 20, marginStart: 7}}>
                  <Text style={{fontSize: 20, marginStart: 7}}>
                    {this.state.clientData.nationality}
                  </Text>
                </Input>
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
                <Input style={{fontSize: 20, marginStart: 7}}>
                  <Text style={{fontSize: 20, marginStart: 7}}>
                    {this.state.clientData.languages_of_reporting}
                  </Text>
                </Input>
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
                <Input style={{fontSize: 20, marginStart: 7}}>
                  <Text style={{fontSize: 20, marginStart: 7}}>
                    {this.state.clientData.reporting_currency}
                  </Text>
                </Input>
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
                <Input style={{fontSize: 20, marginStart: 7}} />
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
                <Input style={{fontSize: 20, marginStart: 7}} />
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
                <Input style={{fontSize: 20, marginStart: 7}}>
                  <Text style={{fontSize: 20, marginStart: 7}}>
                    {this.state.clientData.sector}
                  </Text>
                </Input>
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
                <Input style={{fontSize: 20, marginStart: 7}} />
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
              <Form>
                <Picker
                  mode="dropdown"
                  style={{width: 300, color: 'black', fontSize: 20}}
                  selectedValue={this.state.selected}
                  onValueChange={this.onValueChange.bind(this)}>
                  <Picker.Item label="Please Select" value="key1" />
                  <Picker.Item label="Professional" value="key0" />
                  <Picker.Item label="Private" value="key2" />
                </Picker>
              </Form>
              <Text
                style={{
                  fontSize: 20,
                  marginStart: 15,
                  marginTop: 10,
                  color: '#555555',
                }}>
                PEP Check
              </Text>
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
                  checked={this.state.selectedDoc === 1}
                  color="#103662"
                  onPress={() => this.setState({selectedDoc: 1})}
                />
                <Text style={{fontSize: 20, marginStart: 7}}>Yes</Text>
              </ListItem>
              <ListItem>
                <CheckBox
                  checked={this.state.selectedDoc === 2}
                  color="#103662"
                  onPress={() => this.setState({selectedDoc: 2})}
                />
                <Text style={{fontSize: 20, marginStart: 7}}>No</Text>
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
                  checked={this.state.selectedPap === 1}
                  color="#103662"
                  onPress={() => this.setState({selectedPap: 1})}
                />
                <Text style={{fontSize: 20, marginStart: 7}}>Yes</Text>
              </ListItem>
              <ListItem>
                <CheckBox
                  checked={this.state.selectedPap === 2}
                  color="#103662"
                  onPress={() => this.setState({selectedPap: 2})}
                />
                <Text style={{fontSize: 20, marginStart: 7}}>No</Text>
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
                  checked={this.state.selectedRisk === 1}
                  color="#103662"
                  onPress={() => this.setState({selectedRisk: 1})}
                />
                <Text style={{fontSize: 20, marginStart: 7}}>High</Text>
              </ListItem>
              <ListItem>
                <CheckBox
                  checked={this.state.selectedRisk === 2}
                  color="#103662"
                  onPress={() => this.setState({selectedRisk: 2})}
                />
                <Text style={{fontSize: 20, marginStart: 7}}>Medium</Text>
              </ListItem>
              <ListItem>
                <CheckBox
                  checked={this.state.selectedRisk === 3}
                  color="#103662"
                  onPress={() => this.setState({selectedRisk: 3})}
                />
                <Text style={{fontSize: 20, marginStart: 7}}>Low</Text>
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
                  }}>
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
