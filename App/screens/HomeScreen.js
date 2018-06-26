import React from 'react';
import firebase from 'react-native-firebase';
import { StyleSheet, Platform, Button, Text, View, ScrollView } from 'react-native';


export default class HomeScreen extends React.Component {
  constructor(props) {
    super(props);
    const currentUser = firebase.auth().currentUser;
    console.log(currentUser.displayName);
    this.state = {currentUser: currentUser.displayName}
  }
  static navigationOptions = {
    title: 'Sup',
  };

  // componentDidMount() {
  //   const currentUser = firebase.auth().currentUser;
  //   console.log(currentUser.displayName);
  //   this.state = {currentUser: currentUser.displayName}
  //   debugger;
  // }

  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Hi {this.state.currentUser}</Text>
        <Text>Home Screen</Text>
        <Text>People climbing tonight...</Text>

      </View>
    );
  }
}
