import React, { Component } from 'react';
import { View, StyleSheet, ScrollView, TextInput, TouchableOpacity} from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faCamera, faComments, faUsers, faUserCircle, faFlag, faBell, faHome, faBars, faSearch } from '@fortawesome/free-solid-svg-icons';
import { FlatList } from 'react-native-gesture-handler';

import CreatePost from './CreatePost';
import Status from './Status';
import Story from './Story';
import styles from './Home.style';

class Home extends Component {

  static navigationOptions = {
    title: 'Home'
  };

  constructor() {
    super();
    this.state = {
      users: [
        {
          name: 'John Wick',
        },
        {
          name: 'James Bond',
        },
        {
          name: 'Tony Stark',
        },
        {
          name: 'Mr. Bean'
        }
      ],
      posts: [
        {
          name: 'John Wick',
          time: '1 hours ago',
          content: "Don't you dare kill my dog!!!",
          likes: 10,
          comments: '7 comments'
        },
        {
          name: 'James Bond',
          time: '1 hours ago',
          content: "Don't take my girl John Wick!!!",
          likes: 15,
          comments: '11 comments'
        },
        {
          name: 'Tony Stark',
          time: '1 hours ago',
          content: "I Love You 3000",
          likes: 999,
          comments: '999 comments'
        },
        {
          name: 'Mr. Bean',
          time: '1 hours ago',
          content: "bla bla bla bla bla bla",
          likes: 0,
          comments: '0 comments'
        }
      ],
    }
  }

  plusLike = () => {
    this.setState({
      likes: this.state.users[0].post[0].likes + 1
    })
  }

  render() {

    const { navigate } = this.props.navigation;

    return (
      <View style={styles.container}>
          <View style={styles.content}>
            <ScrollView>

              <CreatePost
                containStyle={styles.createPost}
                pictStyle={styles.searchCamera}
                fieldStyle={styles.postField}
                pictsStyle={styles.searchChat}
                inputStyle={styles.postInput} />

              <View style={styles.story}>
                <ScrollView horizontal={true}>
                  <FlatList
                    horizontal 
                    data={this.state.users}
                    renderItem={ ({item}) => (
                      <Story storyName={item.name} />
                    )} 
                    keyExtractor={item => item.name} />
                </ScrollView>
              </View>

              <FlatList
                data={this.state.posts}
                renderItem={ ({item}) => (
                  <Status
                    statusName={item.name}
                    statusTime={item.time}
                    statusContent={item.content}
                    statusLikes={item.likes}
                    statusComments={item.comments} />
                )} 
                keyExtractor={item => item.name} />

            </ScrollView>
          </View>
      </View>
    )
  }
}

export default Home;