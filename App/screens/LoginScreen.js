import React from 'react';
import firebase from 'react-native-firebase';
import { StyleSheet, Platform, Image, Text, Button, TextInput, View, ScrollView } from 'react-native';


export default class LoginScreen extends React.Component {
  static navigationOptions = {
    title: 'Login mofos',
  };

  constructor(props) {
    super(props);
    this.state = {username: "", password: "", errorMessage: ""};
  }

  handleSignUp = () => {
    firebase
      .auth()
      .signInWithEmailAndPassword(this.state.username, this.state.password)
      .then(() => this.props.navigation.navigate('App'))
      .catch(error => this.setState({ errorMessage: error.message }))
  }

  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <TextInput
          style={{height: 40, width: "100%", textAlign: 'center'}}
          placeholder="type username here!"
          autoCapitalize='none'
          onChangeText={(username) => this.setState({username})}
        />
        <TextInput
          style={{height: 40, width: "100%", textAlign: 'center'}}
          placeholder="type password here!"
          autoCapitalize='none'
          onChangeText={(password) => this.setState({password})}
        />
        <Button title={"Log In"} onPress={this.handleSignUp}></Button>
        <Text>{this.state.errorMessage}</Text>
      </View>
    );
  }
}
