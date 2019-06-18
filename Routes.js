/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */


import { createStackNavigator, createAppContainer } from 'react-navigation';
import Home from "./App/views/Home";
import Login from "./App/views/Login";
import Profile from "./App/views/Profile";
import Groups from "./App/views/Groups";
import Pages from "./App/views/Pages";
import Notification from "./App/views/Notification";
import Setting from "./App/views/Setting";

const AppNavigator = createStackNavigator(
  {
    Login: {
      screen: Login
    },
    Home: {
      screen: Home
    },
    Profile: {
      screen: Profile
    },
    Notification: {
      screen: Notification
    },
    Setting: {
      screen: Setting
    },
    Groups: {
      screen: Groups
    },
    Pages: {
      screen: Pages
    }
  },
  {
    initialRouteName: "Login",
    defaultNavigationOptions: {
      header: null
    }
  }
);

export default createAppContainer(AppNavigator);
