import React, { Component } from 'react';
import { View, ScrollView} from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import Button from "../../components/Button";

import AsyncStorage from '@react-native-community/async-storage';
import axios from 'axios';

import CreatePost from './CreatePost';
import Status from './Status';
import Story from './Story';
import styles from './Home.style';

class Home extends Component {

  constructor() {
    super();
    this.state = {
      userId: '',
      user: '',
      token: '',
      story: [],
      status: [],
      
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
    try {
      const value = await AsyncStorage.getItem('userid');
      if (value !== null) {
        that.setState({userId: value});
        console.log("userId: " + that.state.userId);
      }
    } catch (error) {
      console.log(error);
    }

    var url = 'http://192.168.0.22:3000/users/' + that.state.userId;

    axios.get(url, { headers: {"Authorization": `Bearer ${that.state.token}`}})
    .then(function (response) {
      var data = response.data;
      that.setState({user: data});
      console.log("User: " + data);
    })
    .catch(function (error) {
      console.log("User Error: " + error)
    })

    axios.get('http://192.168.0.22:3000/story', { headers: {"Authorization": `Bearer ${that.state.token}`}})
    .then(function (response) {
      var data = response.data;
      that.setState({story: data});
      console.log("Story: " + that.state.story);
    })
    .catch(function (error) {
      console.log("Story Error: " + error)
    })

    axios.get('http://192.168.0.22:3000/posts', { headers: {"Authorization": `Bearer ${that.state.token}`}})
    .then(function (response) {
      var data = response.data;
      that.setState({status: data});
      console.log("Status: " + that.state.status);
    })
    .catch(function (error) {
      console.log("Status Error: " + error)
    })
  }

  plusLike = (index) => {
    var posts = [...this.state.posts]
    posts[index] = {...posts[index], likes: this.state.posts[index].likes += 1};
    this.setState({posts})
  }

  _signOutAsync = async () => {
    await AsyncStorage.clear();
    this.props.navigation.navigate('Auth');
  }

  render() {
    const { story, status, user } = this.state;

    return (
      

      <View style={styles.container}>
          <View style={styles.content}>
            <ScrollView>

              <CreatePost
                containStyle={styles.createPost}
                pictStyle={styles.searchCamera}
                fieldStyle={styles.postField}
                pictsStyle={styles.searchChat}
                inputStyle={styles.postInput}
                background={user.avatar} />

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
                data={status}
                renderItem={ ({item}) => (
                    <Status
                      statusName={item.User.firstName + " " + item.User.lastName}
                      statusTime="30 minutes ago"
                      statusContent={item.content}
                      statusLikes= {2}
                      statusComments= {3}
                      statusDp={item.User.avatar}
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