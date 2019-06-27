import React, { Component } from 'react';
import { View, StyleSheet, TextInput, Text, TouchableOpacity, ImageBackground } from 'react-native';
import { Grid, Section, Block } from 'react-native-responsive-layout';
import Hr from "react-native-hr-component";
import Button from "../../components/Button";
import Modal from "./Modal";
import deviceStorage from '../../services/deviceStorage';
import axios from 'axios';

class Login extends Component {

  constructor() {
    super();
    this.state = {
      modalVisible: false,
      background: false,

      email: '',
      password: '',
      error: '',
      loading: false
    }

    this.loginUser = this.loginUser.bind(this);
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

  pushEmail = (text) => {
    this.setState({
      email: text
    })
  }

  pushPass = (text) => {
    this.setState({
      password: text
    })
  }

  loginUser = () => {
    const { navigate } = this.props.navigation;
    const { email, password } = this.state;

    axios.post('http://192.168.0.22:3000/users/login', {
      email: email,
      password: password
    })
      .then(function (response) {
        var token = response.data.access_token;
        // var userId = response.data.User.id.toString();
        // console.log("user: " + userId);
        // deviceStorage.saveItem("userid", userId);
        deviceStorage.saveItem("token", token);
        
        navigate('App');
        
        // console.log("Token dari axios :" + token);
        // console.log("Email: " + email);
        // console.log("Password: " + password);
      })
      .catch(function (error) {
        console.log("Bangke: " + error);
      })
  }

  render() {

    
    const textUsername = 'Phone number or email';
    const textPassword = 'Password';
    const textLogin = 'Log in';
    const textForgot = 'Forgotten password?';
    const textNewAccount = 'Create New Facebook Account';

    return (

      <Grid stretchable scrollable>
        <Modal
          text="CANCEL"
          visible={this.state.modalVisible}
          onPress={() => {this.setModalVisible(!this.state.modalVisible)}} />
          
        <Section>
          <Block>
            <View style={styles.topContent}>
              <ImageBackground source={require('../../assets/images/banner.jpg')} style={{width: '100%', height: '100%'}} />
            </View>
          </Block>
        </Section>

        <Section stretch>
          <Block size="stretch">
            <View style={styles.centerContent} >
                <Text style={styles.langText}>English  •  Indonesia  •  <Text onPress={() => {this.setModalVisible(true)}} style={{color: '#385898'}}>More...</Text></Text>
                <TextInput style={styles.textInput} onChangeText={this.pushEmail} value={this.state.email} placeholder={textUsername}/>
                <TextInput style={styles.textInput} onChangeText={this.pushPass} value={this.state.password} secureTextEntry={true} placeholder={textPassword}/>
                <Button
                  text={textLogin}
                  textStyle={styles.loginText}
                  buttonStyle={styles.loginButton}
                  onPress={this.loginUser} />
                <Text style={styles.forgotText}>{textForgot}</Text>
            </View>
          </Block>
        </Section>

        <Section>
          <Block>
            <View style={styles.bottomContent} >
              <Hr lineColor="#eee" width={1} text="OR" style={{color: 'black'}}/>
              <View style={styles.registerBox}>
              <TouchableOpacity style={styles.registerButton}>
                  <Text style={styles.registerText}>{textNewAccount}</Text>
              </TouchableOpacity>
              </View>
            </View>
          </Block>
        </Section>
      </Grid>
    )
  }
}

export default Login;


const styles = StyleSheet.create({
  topContent: {
    height: 200 , 
    backgroundColor: 'orange'
  },
  centerContent: {
    justifyContent: 'center', 
    flex: 1, 
    paddingTop: 20, 
    paddingRight: 30, 
    paddingLeft: 30
  },
  langText: {
    alignSelf: 'center', 
    marginBottom: 25
  },
  forgotText: {
    fontWeight: 'bold', 
    alignSelf: 'center', 
    marginTop: 20, 
    marginBottom: 20,
    color: '#385898'
  },
  loginText: {
    fontWeight: 'bold', 
    color: '#9daccb'
  },
  registerText: {
    fontWeight: 'bold', 
    color: 'white'
  },
  textInput: {
    borderBottomWidth: 1, 
    borderColor: '#eee', 
    marginBottom: 10
  },
  loginButton: {
    backgroundColor: '#4e69a2', 
    justifyContent: 'center', 
    alignItems: 'center', 
    padding: 10, 
    borderRadius: 5
  },
  registerBox: {
    paddingLeft: 50, 
    paddingRight: 50, 
    marginTop: 30
  },
  registerButton: {
    backgroundColor: 'orange', 
    justifyContent: 'center', 
    alignItems: 'center', 
    padding: 10, 
    borderRadius: 5
  },
  bottomContent: {
    height: 130
  }
});