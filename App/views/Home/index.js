import React, { Component } from 'react';
import { View, ScrollView} from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import Button from "../../components/Button";
// import jwt from "jsonwebtoken";

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
      token: '',
      story: [],
      status: [],
      
    }
  }

  componentDidMount() {
    const that = this;
    const userToken = AsyncStorage.getItem('token');
    that.setState({token: userToken});
    // jwt.verify(that.state.token, 'kalem', function (err, decoded) {
    //   console.log(decoded.id)
    // })

    // axios.get('http://192.168.22:3000/users')
    // .then(function (response) {
    //   var data = response.data;
    //   that.setState({user: data});
    // })

    axios.get('http://192.168.0.22:3000/story')
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
    const { story, status } = this.state;

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
                background={require('../../assets/images/story.jpg')} />

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
                renderItem={ ({item, index}) => (
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