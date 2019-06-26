import { createStackNavigator, createMaterialTopTabNavigator, createSwitchNavigator, createAppContainer } from 'react-navigation';
import React, { Component } from 'react';
import Home from "./App/views/Home";
import Login from "./App/views/Login";
import Profile from "./App/views/Profile";
import Groups from "./App/views/Groups";
import Pages from "./App/views/Pages";
import Notification from "./App/views/Notification";
import Setting from "./App/views/Setting";
import AuthLoadingScreen from "./App/views/Loading";

import CustomHeader from "./App/views/Base/CustomHeader";

import Icon from 'react-native-vector-icons/FontAwesome';
import Entypo from 'react-native-vector-icons/Entypo';

const AppStack = createMaterialTopTabNavigator(
  {
    Home: {
      screen: Home,
      navigationOptions: {
        tabBarIcon: ({ tintColor }) => (
          <Entypo name="newsletter" size={30} color="#4267b2" />
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
              <Icon name="user-circle-o" size={25} color="#4267b2" />
          )
        },
    },
    Pages: {
      screen: Pages,
      navigationOptions: {
        tabBarIcon: ({ tintColor }) => (
            <Icon name="flag" size={25} color="#4267b2" />
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
              <Icon name="bars" size={25} color="#4267b2" />
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
            borderBottomColor: '#c6c7cc',
            borderBottomWidth: 1
        }
    }
  }
);

const AuthStack = createStackNavigator({
  Login: {
    screen: Login,
    navigationOptions: {
      header: null
    }
  }
})

// const WatchRoute = createStackNavigator({
//     watchTopTabNavigator: AppStack,
//     Login: {
//         screen: Login,
//         navigationOptions: {
//             header: null
//         }
//     },
// }, {
//     initialRouteName: "Login",
//     defaultNavigationOptions: {
//         header: props => <CustomHeader {...props} />,
//         headerStyle: {        
//             backgroundColor: "transparent",
//             color: 'blue'
//         }
//     }
// })

const MenuStack = createStackNavigator({
    watchTopTabNavigator: AppStack
}, {
    initialRouteName: 'watchTopTabNavigator',
    defaultNavigationOptions: {
        header: props => <CustomHeader {...props} />,
        headerStyle: {        
            backgroundColor: "transparent",
            color: 'blue'
        }
    }
})

const WatchRoute = createSwitchNavigator({
  AuthLoading: AuthLoadingScreen,
  App: MenuStack,
  Auth: AuthStack
}, {
  initialRouteName: 'AuthLoading',
  navigationOptions: {
    // header: props => <CustomHeader {...props} />,
    headerTitle: "Header",
    headerStyle: {        
        backgroundColor: "transparent",
        color: 'blue'
    }
  }
  
})

export default createAppContainer(WatchRoute);