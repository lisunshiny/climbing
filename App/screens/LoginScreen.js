import React from 'react';
import { StyleSheet, Platform, Image, Text, View, ScrollView } from 'react-native';


export default class LoginScreen extends React.Component {
  static navigationOptions = {
    title: 'Login mofos',
  };

  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Login Screen</Text>
      </View>
    );
  }
}
