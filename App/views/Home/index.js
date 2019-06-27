import React, { Component } from 'react';
import { View, ScrollView, Modal, TouchableOpacity, Text, ImageBackground, TextInput } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import Button from "../../components/Button";
import moment from 'moment';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import AsyncStorage from '@react-native-community/async-storage';
import axios from 'axios';

import CreatePost from './CreatePost';
import Status from './Status';
import Story from './Story';
import styles from './Home.style';
import CustomModal from './Modal';

moment().fromNow();

class Home extends Component {

  constructor() {
    super();
    this.state = {
      url: 'http://192.168.0.22:3000/',
      user: '',
      token: '',
      story: [],
      status: [],
      modalVisible: false,
      modalMenu: false,
      statusVisible: false,
      content: '',
      updatedContent: '',
      statusFocus: {}
    }
  }

  componentDidMount = async () => {
    const that = this;
    try {
      const value = await AsyncStorage.getItem('token');
      if (value !== null) {
        that.setState({token: value});
        console.log("Token: " + that.state.token);
      }
    } catch (error) {
      console.log(error);
    }

    that._getUserData();
    that._getStoryData();
    that._getStatusData();
  }

  _getUserData = async () => {
    const that = this;

    axios.get(that.state.url + "users", { headers: {"Authorization": `Bearer ${that.state.token}`}})
    .then(function (response) {
      var data = response.data;
      that.setState({user: data});
      // console.log("User: " + data);
    })
    .catch(function (error) {
      console.log("User Error: " + error)
    })
  }

  _getStoryData = async () => {
    const that = this;
    axios.get(that.state.url + "story", { headers: {"Authorization": `Bearer ${that.state.token}`}})
    .then(function (response) {
      var data = response.data;
      that.setState({story: data});
      // console.log("Story: " + that.state.story);
    })
    .catch(function (error) {
      console.log("Story Error: " + error)
    })
  }

  _getStatusData = async () => {
    const that = this;
    axios.get(that.state.url + "posts", { headers: {"Authorization": `Bearer ${that.state.token}`}})
    .then(function (response) {
      var data = response.data;
      that.setState({status: data});
      // console.log("Status: " + that.state.status);
    })
    .catch(function (error) {
      console.log("Status Error: " + error)
    })
  }

  _signOutAsync = async () => {
    await AsyncStorage.clear();
    this.props.navigation.navigate('Auth');
  }

  setModalVisible(visible) {
    this.setState({modalVisible: visible});
  }
  setModalMenu(visible) {
    this.setState({modalMenu: visible});
  }
  setStatusVisible(visible) {
    this.setState({statusVisible: visible})
  }

  pushContent = (text) => {
    this.setState({
      content: text
    })
  }

  pushUpdatedContent = (text) => {
    this.setState({
      updatedContent: text
    })
  }

  onFocus = (no) => {
    var post = this.state.status;
    post.map((item, index) => {
      if(index == no){
        this.setState({statusFocus: item})
        if(item.userId != this.state.user.id){
          alert("Eitss ga boleh edit yg bukan punya kamu ya sayang :)")
        } else {
          this.setStatusVisible(!this.state.statusVisible)
        }
      }
    })
  }

  submitPost = () => {
    const that = this;
    const { content } = this.state;

    axios.post(that.state.url + "posts", {
      userId: this.state.user.id,
      content: content
    },{ headers: {"Authorization": `Bearer ${this.state.token}`}})
      .then(function (response) {
        console.log(response.data)
        that.setModalVisible(!that.state.modalVisible);
      })
      .catch(function (error) {
        console.log("Submit Post Error: " + error);
      })
  }

  updatePost = () => {
    const that = this;
    var id = this.state.statusFocus.id;
    axios.put(that.state.url + "posts/" + id, {
      userId: this.state.user.id,
      content: this.state.updatedContent
    },{headers: {"Authorization": `Bearer ${this.state.token}`}})
    .then(function (response) {
      console.log(response.data)
      that.setStatusVisible(!that.state.statusVisible)
    })
    .catch(function (error) {
      console.log("Update Post Error: " + error)
    })
  }


  render() {
    const { story, status, user } = this.state;

    return (
      

      <View style={styles.container}>
        <CustomModal
          visible={this.state.modalVisible}
          title="Create Post"
          onPress={() => {this.submitPost()}}
          submitText="POST"
          avatar={this.state.user.avatar}
          name={this.state.user.firstName +" "+ this.state.user.lastName}
          changeText={this.pushContent}
          value={this.state.content}
          iconStyle={styles.searchCamera}
          back={() => {this.setModalVisible(!this.state.modalVisible)}} />
        
        <CustomModal
          visible={this.state.statusVisible}
          title="Edit Post"
          onPress={() => {this.updatePost()}}
          submitText="SAVE"
          avatar={this.state.user.avatar}
          name={this.state.user.firstName +" "+ this.state.user.lastName}
          changeText={this.pushUpdatedContent}
          value={this.state.statusFocus.content}
          iconStyle={styles.searchCamera}
          back={() => {this.setStatusVisible(!this.state.statusVisible)}} />

        <Modal
          animationType="slide"
          transparent={false}
          visible={this.state.modalMenu}
          onRequestClose={() => {
            Alert.alert('Modal has been closed.');
          }}>
          <View style={{backgroundColor: 'rgba(0, 0, 0, 0.5)'}}>
            <View style={{backgroundColor: 'orange', marginTop: 120, padding: 10}}>

              <View style={{flexDirection: 'row'}}>
                <View style={{flex: 1, backgroundColor: 'blue', padding: 10, justifyContent: 'center', alignItems: 'center'}}>
                  <FontAwesome name="home" size={30} color="#900" />
                </View>
                <View style={{flex: 5, backgroundColor: 'red', padding: 10, justifyContent: 'center'}}>
                  <Text>Edit Post</Text>
                </View>
              </View>
              <View style={{flexDirection: 'row'}}>
                <View style={{flex: 1, backgroundColor: 'red', padding: 10, justifyContent: 'center', alignItems: 'center'}}>
                  <FontAwesome name="home" size={30} color="#900" />
                </View>
                <View style={{flex: 5, backgroundColor: 'blue', padding: 10, justifyContent: 'center'}}>
                  <Text>Delete</Text>
                </View>
              </View>

              <TouchableOpacity
                onPress={() => {
                  this.setModalMenu(!this.state.modalMenu);
                }}>
                <Text>Hide Modal</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>

          <View style={styles.content}>
            <ScrollView>

              <CreatePost
                containStyle={styles.createPost}
                pictStyle={styles.searchCamera}
                fieldStyle={styles.postField}
                pictsStyle={styles.searchChat}
                inputStyle={styles.postInput}
                background={user.avatar}
                modal= {() => {this.setModalVisible(!this.state.modalVisible)}} />

              <Button
                text={"Log out"}
                textStyle={styles.loginText}
                buttonStyle={styles.loginButton}
                onPress={this._signOutAsync} />

              <View style={styles.story}>
                <ScrollView horizontal={true}>
                  <FlatList
                    horizontal 
                    data={story}
                    renderItem={ ({item}) => (
                      <Story 
                        storyName={item.User.firstName + " " + item.User.lastName} 
                        storySrc={item.src}
                        storyIcon={item.User.avatar} />
                    )} 
                    keyExtractor={item => item.id.toString()} />
                </ScrollView>
              </View>

              <FlatList
                inverted
                data={status}
                renderItem={ ({item, index}) => (
                    <Status
                      statusName={item.User.firstName + " " + item.User.lastName}
                      statusTime={moment(item.createdAt).fromNow()}
                      statusContent={item.content}
                      statusLikes= {2}
                      statusComments= {3}
                      statusDp={item.User.avatar}
                      onFocus={() => this.onFocus(index)}
                      likeAction={() => alert("wow")} />
                )} 
                keyExtractor={item => item.id.toString()} />

            </ScrollView>
          </View>
      </View>
    )
  }
}

export default Home;