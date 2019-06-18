/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */


import React, { Component } from 'react';
import { View, TextInput, Text, FlatList, StyleSheet, ImageBackground, TouchableOpacity, ScrollView, TouchableHighlight, Modal, Alert } from 'react-native';
import Hr from "react-native-hr-component";

// Parent
class Login extends Component {

  constructor() {
    super();
    this.state = {
      modalVisible: false,
    }
  }

  setModalVisible = (visible) => {
    this.setState({
      modalVisible: visible,
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
        
        <View>
          <Modal
            animationType='fade'
            transparent={true}
            visible={this.state.modalVisible}
            onRequestClose={() => {
              Alert.alert('Modal has been closed.')
            }}>
            <View style={{padding: 25, backgroundColor: 'rgba(0, 0, 0, 0.5)'}}>
              <View style={{padding: 20, backgroundColor: 'white', width: '100%', height: '100%', borderRadius: 5}}>
                <FlatList
                 data={[
                   {key: 'Device Language'},
                   {key: 'English (United Kingdom)'},
                   {key: 'English'},
                   {key: 'Indonesia'},
                   {key: 'Polski'},
                   {key: 'Francais'},
                   {key: 'Italiano'},
                   {key: 'Lietuviu'},
                   {key: 'Romana'},
                 ]}
                 renderItem={({item}) => <Text style={{paddingTop: 10, paddingBottom: 10, fontSize: 18, height: 50, borderBottomWidth: 1}}>{item.key}</Text>}
                 />

                <TouchableHighlight
                  onPress={() => {
                    this.setModalVisible(!this.state.modalVisible);
                  }} style={{borderTopWidth: 1, height: 60, alignItems: 'flex-end', justifyContent: 'center'}}>
                  <Text style={{}}>CANCEL</Text>
                </TouchableHighlight>
              </View>
            </View>
          </Modal>
        </View>

        <View style={styles.sectionOne}>
          <ImageBackground source={require('../../assets/images/banner.png')} style={{width: '100%', height: '100%', justifyContent: 'center', alignItems: 'center'}} >
            <View style={styles.header}>
                <Text style={styles.heading}>f</Text>
            </View>
          </ImageBackground>
        </View>
        
        {/* <ScrollView> */}
        <View style={styles.sectionTwo}>
          <TouchableHighlight onPress={() => {
                this.setModalVisible(true)
              }}>
            <Text style={styles.topInfo}>English  •  Indonesia  •  <Text style={{color: '#385898'}}>More...</Text>
            </Text>
          </TouchableHighlight>
          
          <View styles={styles.sectionForm}>
            <TextInput style={styles.textInput} placeholder={textUsername}/>
            <TextInput style={styles.textInput} placeholder={textPassword}/>
            {/* <Button title="Log In" color="#4e69a2" /> */}
            <TouchableOpacity style={styles.textSubmit} onPress={() => navigate('Home')}>
              <Text style={styles.submitText}>{textLogin}</Text>
            </TouchableOpacity>
            <Text style={styles.bottomInfo}>{textForgot}</Text>
          </View>

          <Hr lineColor="#eee" width={1} text="OR" style={{color: 'black'}}/>

          <View style={styles.sectionFooter}>
            {/* <Button title="Create New Facebook Account" color="#00a400" /> */}
            <TouchableOpacity style={styles.registerButton} onPress={() => navigate('Setting')}>
              <Text style={styles.buttonText}>{textNewAccount}</Text>
            </TouchableOpacity>
          </View>
        </View>
        {/* </ScrollView> */}
      </View>
    )
  }
}

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1
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
    backgroundColor: 'white'
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
});
