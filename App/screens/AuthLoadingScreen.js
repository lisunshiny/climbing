import React from 'react';
import firebase from 'react-native-firebase';
import { StyleSheet, Platform, Button, Text, View, ScrollView } from 'react-native';


export default class AuthLoadingScreen extends React.Component {
  static navigationOptions = {
    title: 'cats',
  };

  componentDidMount() {
    console.log(firebase.auth());
    console.log(firebase.auth().currentUser);
    console.log(firebase.auth().signInWithEmailAndPassword("lianndabomb@yahoo.com", "password"));
    console.log(firebase.auth().currentUser);
    this.props.navigation.navigate('Auth');
  }

  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>redirecting you.....</Text>
      </View>
    );
  }
}
