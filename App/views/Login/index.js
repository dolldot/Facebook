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
              onPress={() => navigate('Notification')} />
              
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
