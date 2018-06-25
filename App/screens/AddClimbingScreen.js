import React from 'react';
import { StyleSheet, Platform, Button, Text, View, ScrollView } from 'react-native';


export default class AddClimbingScreen extends React.Component {
  static navigationOptions = {
    title: 'Tell peepz im climbing',
  };

  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Im climbing</Text>
        <Text>Put a date here</Text>
        <Text>TELL PEEPS IM CLIMBING</Text>
      </View>
    );
  }
}
