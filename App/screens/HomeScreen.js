import React from 'react';
import { StyleSheet, Platform, Button, Text, View, ScrollView } from 'react-native';


export default class HomeScreen extends React.Component {
  static navigationOptions = {
    title: 'Sup',
  };

  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Home Screen</Text>
        <Text>People climbing tonight...</Text>
      </View>
    );
  }
}
