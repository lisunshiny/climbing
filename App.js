import React from 'react';
import { StyleSheet, Platform, Image, Text, View, ScrollView } from 'react-native';
import { createStackNavigator, createSwitchNavigator } from 'react-navigation';

import firebase from 'react-native-firebase';

import Blah from './App/components/Blah'
import HomeScreen from './App/screens/HomeScreen'
import AddClimbingScreen from './App/screens/AddClimbingScreen'
import LoginScreen from './App/screens/LoginScreen'
import AuthLoadingScreen from './App/screens/AuthLoadingScreen'

const AppStack = createStackNavigator({ Home: HomeScreen, AddClimbing: AddClimbingScreen });
const AuthStack = createStackNavigator({ SignIn: LoginScreen });

const RootStack = createSwitchNavigator(
  {
    AuthLoading: AuthLoadingScreen,
    App: AppStack,
    Auth: AuthStack,
  },
  {
    initialRouteName: 'AuthLoading',
    navigationOptions: {
      headerStyle: {
        backgroundColor: '#f4511e',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    }
  }
);

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      // firebase things?
    };
  }

  componentDidMount() {
    // firebase things?
  }

  render() {
    return (
      <RootStack />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  logo: {
    height: 80,
    marginBottom: 16,
    marginTop: 32,
    width: 80,
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  modules: {
    margin: 20,
  },
  modulesHeader: {
    fontSize: 16,
    marginBottom: 8,
  },
  module: {
    fontSize: 14,
    marginTop: 4,
    textAlign: 'center',
  }
});
