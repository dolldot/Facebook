import { createStackNavigator, createMaterialTopTabNavigator, createAppContainer } from 'react-navigation';
import React, { Component } from 'react';
import Home from "./App/views/Home";
import Login from "./App/views/Login";
import Profile from "./App/views/Profile";
import Groups from "./App/views/Groups";
import Pages from "./App/views/Pages";
import Notification from "./App/views/Notification";
import Setting from "./App/views/Setting";

import CustomHeader from "./App/views/Base/CustomHeader";

import Icon from 'react-native-vector-icons/FontAwesome';

const AppNavigator = createMaterialTopTabNavigator(
  {
    Home: {
      screen: Home,
      navigationOptions: {
        tabBarIcon: ({ tintColor }) => (
            <Icon name="home" size={20} color="#4267b2" />
        )
      },
    },
    Groups: {
        screen: Groups,
        navigationOptions: {
          tabBarIcon: ({ tintColor }) => (
              <Icon name="users" size={20} color="#4267b2" />
          )
        },
    },
    Profile: {
        screen: Profile,
        navigationOptions: {
          tabBarIcon: ({ tintColor }) => (
              <Icon name="user-circle" size={20} color="#4267b2" />
          )
        },
    },
    Pages: {
      screen: Pages,
      navigationOptions: {
        tabBarIcon: ({ tintColor }) => (
            <Icon name="flag" size={20} color="#4267b2" />
        )
      },
    },
    Notification: {
        screen: Notification,
        navigationOptions: {
          tabBarIcon: ({ tintColor }) => (
              <Icon name="bell" size={20} color="#4267b2" />
          )
        },
    },
    Setting: {
        screen: Setting,
        navigationOptions: {
          tabBarIcon: ({ tintColor }) => (
              <Icon name="bars" size={20} color="#4267b2" />
          )
        },
    },
  },
  {
    initialRouteName: "Home",
    
    tabBarOptions: {
        showIcon: true,
        showLabel: false,
        activeTintColor: 'white',
        inactiveTintColor: 'blue',
        renderIndicator: () => null,
        style: {
            backgroundColor: 'white',
            elevation: 0,
            borderBottomColor: '#dddfe2',
            borderBottomWidth: 1
        }
    }
  }
);

const WatchRoute = createStackNavigator({
    watchTopTabNavigator: AppNavigator,
    Login: {
        screen: Login,
        navigationOptions: {
            header: null
        }
    },
}, {
    initialRouteName: "Login",
    defaultNavigationOptions: {
        header: props => <CustomHeader {...props} />,
        title: "FACEBOOK",
        headerStyle: {        
            backgroundColor: "transparent",
            color: 'blue'
        }
    }
})

export default createAppContainer(WatchRoute);