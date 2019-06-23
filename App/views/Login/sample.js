import React, { Component } from 'react';
import { View, TextInput, Text, ImageBackground, ScrollView, TouchableHighlight } from 'react-native';
import styles from "./Login.style";
import Hr from "react-native-hr-component";
import Button from "../../components/Button";
import Modal from "./Modal";

// Parent
class Login extends Component {

  constructor() {
    super();
    this.state = {
      modalVisible: false,
      background: false,
    }
  }

  setModalVisible = (visible) => {
    this.setState({
      modalVisible: visible,
    })
  }

  changeBackground = (visible) => {
    this.setState({
      background: visible
    })
  }


  render() {

    const { navigate } = this.props.navigation;
    const textUsername = 'Phone number or email';
    const textPassword = 'Password';
    const textLogin = 'Log in';
    const textForgot = 'Forgotten password?';
    const textNewAccount = 'Create New Facebook Account';

    return (

      <View style={styles.container}>

        <Modal
          text="CANCEL"
          visible={this.state.modalVisible}
          onPress={() => {this.setModalVisible(!this.state.modalVisible)}} />

        <View style={styles.sectionOne}>
          <ImageBackground source={require('../../assets/images/banner.png')} style={styles.banner} >
            <View style={styles.header}>
                <Text style={styles.heading}>f</Text>
            </View>
          </ImageBackground>
        </View>
        
        <View style={[styles.sectionTwo, this.state.background ? {backgroundColor: 'blue'} : {backgroundColor: 'white'}]}>
          <TouchableHighlight onPress={() => {
                this.setModalVisible(true)
              }}>
            <Text style={styles.topInfo}>English  •  Indonesia  •  <Text style={{color: '#385898'}}>More...</Text>
            </Text>
          </TouchableHighlight>
          
          <View styles={styles.sectionForm}>
            <TextInput style={styles.textInput} placeholder={textUsername}/>
            <TextInput style={styles.textInput} secureTextEntry={true} placeholder={textPassword}/>

            <Button
              text={textLogin}
              textStyle={styles.submitText}
              buttonStyle={styles.textSubmit}
              onPress={() => navigate('Home')} />
              
            <Text style={styles.bottomInfo}>{textForgot}</Text>
          </View>

          <Hr lineColor="#eee" width={1} text="OR" style={{color: 'black'}}/>

          <View style={styles.sectionFooter}>
            <Button 
              text={textNewAccount} 
              textStyle={styles.buttonText}
              buttonStyle={styles.registerButton}
              onPress={() => {this.changeBackground(!this.state.background)}} />
          </View>
        </View>
      </View>
    )
  }
}

export default Login;

const styles =  StyleSheet.create({
  container: {
      flex: 1
    },
  banner: {
      width: '100%', 
      height: '100%', 
      justifyContent: 'center', 
      alignItems: 'center'
  },
  sectionOne: {
      flex: 3,
      backgroundColor: 'blue',
      justifyContent: 'center',
      alignItems: 'center'
  },
  header: {
      marginTop: 20,
      width: 50, 
      height: 50, 
      backgroundColor: 'white', 
      borderRadius: 50,
  },
  heading: {
      color: '#2e4c88',
      fontWeight: 'bold',
      fontSize: 60,
      alignSelf: 'center',
      marginTop: -10
  },
  sectionTwo: {
      flex: 7,
      justifyContent: 'space-between',
      paddingLeft: 40,
      paddingRight: 40,
  },
  sectionForm: {
  
  },
  topInfo: {
      alignSelf: 'center',
      marginTop: 10
  },
  bottomInfo: {
      color: '#385898',
      alignSelf: 'center',
      fontWeight: 'bold',
      marginTop: 10
  },
  sectionFooter: {
      paddingBottom: 40,
      paddingLeft: 20,
      paddingRight: 20
  },
  textInput: {
      borderBottomWidth: 1,
      borderColor: '#eee',
      marginBottom: 10,
  },
  textSubmit: {
      backgroundColor: '#4e69a2',
      justifyContent: 'center',
      alignItems: 'center',
      height: 40,
      borderRadius: 5
  },
  registerButton: {
      backgroundColor: '#00a400',
      justifyContent: 'center',
      alignItems: 'center',
      height: 40,
      borderRadius: 5
  },
  submitText: {
      color: '#9daccb',
      fontWeight: 'bold'
  },
  buttonText: {
      color: 'white',
      fontWeight: 'bold'
  }
})