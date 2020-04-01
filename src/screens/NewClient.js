import React, {Component} from 'react';
import {Alert} from 'react-native';
import {
  Container,
  Header,
  Left,
  Button,
  Icon,
  Body,
  Title,
  Content,
  Form,
  Item,
  Input,
  Label,
  Text,
  Picker,
  ListItem,
  CheckBox,
  Right,
} from 'native-base';
import {Image, StatusBar} from 'react-native';
import {color} from 'react-native-reanimated';
import CSHeader from '../components/CSHeader';

import {addClient} from '../services/DatabaseServices';

export default class AddClient extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: 'key1',
      name: '',
      surname: '',
      email: '',
      phone_number: ''
    };
  }
  onValueChange(value) {
    this.setState({
      selected: value,
    });
  }

  async onAddClient(name, surname, email, phone_number) {
    const result = await addClient(name, surname, email, phone_number);

    if(result) {
      Alert.alert(
        'Client added',
        'Client was successfuly added!'
      )
    }
  }

  render() {
    const pageTitle = 'Add new client';
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
        <CSHeader pageTitle={pageTitle}/>
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
            Basic Information
          </Text>
          <Text style={{fontSize: 20, marginStart: 15, color: "#555555"}}>First Name</Text>
              <Item rounded style={{marginTop: 10}}>
                <Input
                  style={{fontSize: 20, marginStart: 5}}
                  onChangeText={name => this.setState({ name: name })}
                  value={this.state.name} />
                </Item>
              <Text style={{fontSize: 20, marginStart: 15, marginTop:10, color: "#555555"}}>Last Name</Text>
              <Item rounded style={{marginTop: 10}}>
                <Input
                  style={{fontSize: 20, marginStart: 5}}
                  onChangeText={surname => this.setState({ surname: surname })}
                  value={this.state.surname} />
              </Item>
              <Text style={{fontSize: 20, marginStart: 15, marginTop:10, color: "#555555"}}>Email</Text>
              <Item rounded style={{marginTop: 10}}>
                <Input
                  style={{fontSize: 20, marginStart: 7}}
                  onChangeText={email => this.setState({ email: email })}
                  value={this.state.email}
                />
              </Item>
              <Text style={{fontSize: 20, marginStart: 15, marginTop:10, color: "#555555"}}>Phone Number</Text>
              <Item rounded style={{marginTop: 10}}>
                <Input
                  style={{fontSize: 20, marginStart: 7}}
                  onChangeText={phone => this.setState({ phone_number: phone })}
                  value={this.state.phone} />
              </Item>

          <Right>
          <Button
            style={{
              alignSelf: 'center',
              backgroundColor: '#103662',
              marginTop: 20,
              marginLeft:0,
              width: 150,
              height: 50,
            }}
            onPress={() => this.onAddClient(this.state.name, this.state.surname, this.state.email, this.state.phone_number)}>
            
          <Text style={{marginLeft:40}}>Save</Text>
          </Button>
          </Right>

          
        </Content>
      </Container>
    );
  }
}