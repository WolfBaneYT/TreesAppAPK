import React, { Component} from 'react';
import { Header,Icon,Badge } from 'react-native-elements';
import { View, Text, StyeSheet ,Alert} from 'react-native';
import db from '../config'
import firebase from 'firebase';
export default class MyHeader extends Component{
  constructor(props){
    super(props)
    this.state={
      userId : firebase.auth().currentUser.email,
      value:""
    }
  }
  render(){
    return(
  <View>
  <Header
  leftComponent={<Icon name='bars' type='font-awesome' color='#ffffff'  onPress={() => this.props.navigation.toggleDrawer()}/>}
  centerComponent={{
     text: this.props.title,
     style: { color: '#ffffff', fontSize:20,fontWeight:"bold", } }}
  />
  </View>
    )
  }
}