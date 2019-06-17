/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */


import { createStackNavigator, createAppContainer } from 'react-navigation';
import Beranda from "./Home";
import Masuk from "./Login";

const AppNavigator = createStackNavigator(
  {
    Login: Masuk,
    Home: Beranda
  },
  {
    initialRouteName: "Login",
    defaultNavigationOptions: {
      header: null
    }
  }
);

export default createAppContainer(AppNavigator);