import React from 'react';
import { StyleSheet, Platform, Button, Text, View, ScrollView } from 'react-native';


export default class AuthLoadingScreen extends React.Component {
  static navigationOptions = {
    title: 'cats',
  };

  componentDidMount() {
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
