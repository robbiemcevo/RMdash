import React, {Component} from 'react';
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
          <Text style={{fontSize: 20, marginStart: 15, color: "grey"}}>First Name</Text>
              <Item rounded style={{marginTop: 10}}>
                <Input
                  style={{fontSize: 20, marginStart: 5}}>
                  <Text style={{fontSize: 20, marginStart: 7}}>
                  </Text>
                </Input>
                </Item>
              <Text style={{fontSize: 20, marginStart: 15, marginTop:10, color: "#555555"}}>Last Name</Text>
              <Item rounded style={{marginTop: 10}}>
                <Input
                  style={{fontSize: 20, marginStart: 5}}>
                  <Text style={{fontSize: 20, marginStart: 7}}>
                  </Text>
                </Input>
              </Item>
              <Text style={{fontSize: 20, marginStart: 15, marginTop:10, color: "#555555"}}>Email</Text>
              <Item rounded style={{marginTop: 10}}>
                <Input
                  style={{fontSize: 20, marginStart: 7}}
                />
              </Item>
              <Text style={{fontSize: 20, marginStart: 15, marginTop:10, color: "#555555"}}>Phone Number</Text>
              <Item rounded style={{marginTop: 10}}>
                <Input
                  style={{fontSize: 20, marginStart: 7}}>
                    <Text style={{fontSize: 20, marginStart: 7}}>
                  </Text>
                </Input>
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
            }}>
            
          <Text style={{marginLeft:40}}>Save</Text>
          </Button>
          </Right>

          
        </Content>
      </Container>
    );
  }
}