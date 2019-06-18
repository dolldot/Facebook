/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { View, StyleSheet, ScrollView, TextInput, TouchableOpacity} from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faCamera, faComments, faUsers, faUserCircle, faFlag, faBell, faHome, faBars, faSearch } from '@fortawesome/free-solid-svg-icons';

// import Header from '../Base/Header';
import CreatePost from './CreatePost';
import Status from './Status';
import Story from './Story';
import { FlatList } from 'react-native-gesture-handler';

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
      ]
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
          <View style={styles.header}>

            <View style={styles.headerSearch}>
                <View style={styles.searchCamera}>
                    <FontAwesomeIcon icon={ faCamera } size={ 25 } color={'white'} />
                </View>
                <View style={styles.searchInput}>
                    <FontAwesomeIcon icon={ faSearch } size={ 15 } color={'white'} />
                    <TextInput style={styles.textInput} placeholder="Search" placeholderTextColor="#a1b3d9"/>
                </View>
                <View style={styles.searchChat}>
                    <FontAwesomeIcon icon={ faComments } size={ 25 } color={'white'} />
                </View>
            </View>

            <View style={styles.headerMenu}>
                <View style={styles.menuItem}>
                  <TouchableOpacity onPress={() => navigate('Home')}>
                    <FontAwesomeIcon icon={ faHome } size={ 25 } color={'#4267b2'} />
                  </TouchableOpacity>
                </View>
                <View style={styles.menuItem}>
                  <TouchableOpacity onPress={() => navigate('Groups')}>
                    <FontAwesomeIcon icon={ faUsers } size={ 25 } color={'#4267b2'} />
                  </TouchableOpacity>
                </View>
                <View style={styles.menuItem}>
                  <TouchableOpacity onPress={() => navigate('Profile')}>
                    <FontAwesomeIcon icon={ faUserCircle } size={ 25 } color={'#4267b2'} />
                  </TouchableOpacity>
                </View>
                <View style={styles.menuItem}>
                  <TouchableOpacity onPress={() => navigate('Pages')}>
                    <FontAwesomeIcon icon={ faFlag } size={ 25 } color={'#4267b2'} />
                  </TouchableOpacity>
                </View>
                <View style={styles.menuItem}>
                  <TouchableOpacity onPress={() => navigate('Notification')}>
                    <FontAwesomeIcon icon={ faBell } size={ 25 } color={'#4267b2'} />
                  </TouchableOpacity>
                </View>
                <View style={styles.menuItem}>
                  <TouchableOpacity onPress={() => navigate('Setting')}>
                    <FontAwesomeIcon icon={ faBars } size={ 25 } color={'#4267b2'} />
                  </TouchableOpacity>
                </View>
            </View>
          </View>

          <View style={styles.content}>
            <ScrollView>
              <CreatePost />

              <View style={styles.story}>
                <ScrollView horizontal={true}>
                  {/* <Story storyName={'Add to stor'} /> */}
                  <FlatList
                    horizontal 
                    data={this.state.users}
                    renderItem={ ({item}) => (
                      <Story storyName={item.name} />
                    )} 
                    keyExtractor={item => item.name}
                  />
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
                    statusComments={item.comments}
                  />
                )} 
                keyExtractor={item => item.name}
              />

            </ScrollView>
          </View>
      </View>
    )
  }
}

export default Home;


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#dcdee3'
  },
  header: {
    flex: 2,
    backgroundColor: '#4267b2'
  },
  headerSearch: {
    flex: 1,
    flexDirection: 'row',
    paddingBottom: 5
  },
  searchCamera: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  searchInput: {
    flex: 4,
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderColor: '#8da8d3',
    justifyContent: 'center',
    alignItems: 'center'
  },
  searchChat: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  textInput: {
    flex: 1,
  },
  headerMenu: {
    backgroundColor: 'white',
    flex: 1,
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderColor: '#c6c7cc',
  },
  menuItem: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  content: {
    flex: 9,
  },
  story: {
    marginTop: 15,
    flex: 4,
    backgroundColor: 'white',
    flexDirection: 'row',
    padding: 15
  }
});
