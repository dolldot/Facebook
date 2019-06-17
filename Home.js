/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */


import React, { Component } from 'react';
import { View, TextInput, Text, Button, StyleSheet, ImageBackground, ScrollView } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faCamera, faComments, faUsers, faUserCircle, faFlag, faBell, faHome, faBars, faImages, faCommentAlt, faThumbsUp, faHeart, faSearch } from '@fortawesome/free-solid-svg-icons';

// Parent
class Home extends Component {

  constructor() {
    super();
    this.state = {

    }
  }

  render() {
    
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
                    <FontAwesomeIcon icon={ faHome } size={ 25 } color={'blue'} />
                </View>
                <View style={styles.menuItem}>
                    <FontAwesomeIcon icon={ faUsers } size={ 25 } color={'blue'} />
                </View>
                <View style={styles.menuItem}>
                    <FontAwesomeIcon icon={ faUserCircle } size={ 25 } color={'blue'} />
                </View>
                <View style={styles.menuItem}>
                    <FontAwesomeIcon icon={ faFlag } size={ 25 } color={'blue'} />
                </View>
                <View style={styles.menuItem}>
                    <FontAwesomeIcon icon={ faBell } size={ 25 } color={'blue'} />
                </View>
                <View style={styles.menuItem}>
                    <FontAwesomeIcon icon={ faBars } size={ 25 } color={'blue'} />
                </View>
            </View>
          </View>

          <View style={styles.content}>
            <ScrollView>
            <View style={styles.createPost}>
                <View style={styles.searchCamera}>
                    <FontAwesomeIcon icon={ faUserCircle } size={ 40 } color={'black'} />
                </View>
                <View style={styles.postField}>
                    <TextInput style={styles.postInput} placeholder="What's on your mind?"/>
                </View>
                <View style={styles.searchChat}>
                    <FontAwesomeIcon icon={ faImages } size={ 40 } color={'black'} />
                </View>
            </View>
            <View style={styles.story}>
              <ScrollView horizontal={true}>
                <View style={styles.storyAdd}>
                    <View style={styles.storyBox}>
                    <ImageBackground source={require('./img/banner.png')} style={{width: '100%', height: '100%'}}>
                      <View style={styles.storyIcon}>
                        <FontAwesomeIcon icon={ faUserCircle } size={ 40 } color={'blue'} />
                      </View>
                      <View style={styles.storyName}>
                        <Text style={{color: 'white'}}>Add to story</Text>
                      </View>
                    </ImageBackground>
                    </View>
                </View>
                <View style={styles.storyList}>
                    <View style={styles.storyBox}>
                    <ImageBackground source={require('./img/banner.png')} style={{width: '100%', height: '100%'}}>
                      <View style={styles.storyIcon}>
                        <FontAwesomeIcon icon={ faUserCircle } size={ 40 } color={'blue'} />
                      </View>
                      <View style={styles.storyName}>
                        <Text style={{color: 'white'}}>John Wick</Text>
                      </View>
                    </ImageBackground>
                    </View>
                </View>
                <View style={styles.storyList}>
                    <View style={styles.storyBox}>
                    <ImageBackground source={require('./img/banner.png')} style={{width: '100%', height: '100%'}}>
                      <View style={styles.storyIcon}>
                        <FontAwesomeIcon icon={ faUserCircle } size={ 40 } color={'blue'} />
                      </View>
                      <View style={styles.storyName}>
                        <Text style={{color: 'white'}}>James Bond</Text>
                      </View>
                    </ImageBackground>
                    </View>
                </View>
                <View style={styles.storyList}>
                    <View style={styles.storyBox}>
                    <ImageBackground source={require('./img/banner.png')} style={{width: '100%', height: '100%'}}>
                      <View style={styles.storyIcon}>
                        <FontAwesomeIcon icon={ faUserCircle } size={ 40 } color={'blue'} />
                      </View>
                      <View style={styles.storyName}>
                        <Text style={{color: 'white'}}>Mr. Bean</Text>
                      </View>
                    </ImageBackground>
                    </View>
                </View>
                <View style={styles.storyList}>
                    <View style={styles.storyBox}>
                    <ImageBackground source={require('./img/banner.png')} style={{width: '100%', height: '100%'}}>
                      <View style={styles.storyIcon}>
                        <FontAwesomeIcon icon={ faUserCircle } size={ 40 } color={'blue'} />
                      </View>
                      <View style={styles.storyName}>
                        <Text style={{color: 'white'}}>Tony Stark</Text>
                      </View>
                    </ImageBackground>
                    </View>
                </View>
              </ScrollView>
            </View>
            <View style={styles.status}>
              <View style={styles.statusList}>
              <View style={styles.statusTitle}>
                <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                  <FontAwesomeIcon icon={ faUserCircle } size={ 40 } color={'black'} />
                </View>
                <View style={{flex: 4}}>
                  <Text style={{fontWeight: 'bold', color: 'black'}}>John Wick</Text>
                  <Text>1 hour ago</Text>
                </View>
                <View style={{flex: 1, alignItems: 'center'}}>
                  <Text style={{fontWeight: 'bold'}}>•••</Text>
                </View>
              </View>
              <View style={styles.statusContent}>
                <Text style={{padding: 10}}>Dont't you dare killing my dog!!!</Text>
              </View>
              <View style={styles.statusReact}>
                <View style={{flex: 1, justifyContent: 'flex-start', alignItems: 'center', flexDirection: 'row', paddingLeft: 10}}>
                  <FontAwesomeIcon icon={ faHeart } size={ 15 } color={'blue'} /><Text style={{paddingLeft: 5}}>8</Text>
                </View>
                <View style={{flex: 1, justifyContent: 'center', alignItems: 'flex-end', paddingRight: 10}}>
                  <Text>8 comments</Text>
                </View>
              </View>
              <View style={styles.statusAction}>
                <View style={{flex: 1, justifyContent: 'center', alignItems: 'center', flexDirection: 'row'}}>
                  <FontAwesomeIcon icon={ faThumbsUp } size={ 20 } color={'#606770'} /><Text style={{paddingLeft: 10}}>Like</Text>
                </View>
                <View style={{flex: 1, justifyContent: 'center', alignItems: 'center', flexDirection: 'row'}}>
                  <FontAwesomeIcon icon={ faCommentAlt } size={ 20 } color={'#606770'} /><Text style={{paddingLeft: 10}}>Comment</Text>
                </View>
              </View>
              </View>
              <View style={styles.statusList}>
              <View style={styles.statusTitle}>
                <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                  <FontAwesomeIcon icon={ faUserCircle } size={ 40 } color={'black'} />
                </View>
                <View style={{flex: 4}}>
                  <Text style={{fontWeight: 'bold', color: 'black'}}>James Bond</Text>
                  <Text>1 hour ago</Text>
                </View>
                <View style={{flex: 1, alignItems: 'center'}}>
                  <Text style={{fontWeight: 'bold'}}>•••</Text>
                </View>
              </View>
              <View style={styles.statusContent}>
                <Text style={{padding: 10}}>Don't take my girl John Wick!!!</Text>
              </View>
              <View style={styles.statusReact}>
                <View style={{flex: 1, justifyContent: 'flex-start', alignItems: 'center', flexDirection: 'row', paddingLeft: 10}}>
                  <FontAwesomeIcon icon={ faHeart } size={ 15 } color={'blue'} /><Text style={{paddingLeft: 5}}>12</Text>
                </View>
                <View style={{flex: 1, justifyContent: 'center', alignItems: 'flex-end', paddingRight: 10}}>
                  <Text>15 comments</Text>
                </View>
              </View>
              <View style={styles.statusAction}>
                <View style={{flex: 1, justifyContent: 'center', alignItems: 'center', flexDirection: 'row'}}>
                  <FontAwesomeIcon icon={ faThumbsUp } size={ 20 } color={'#606770'} /><Text style={{paddingLeft: 10}}>Like</Text>
                </View>
                <View style={{flex: 1, justifyContent: 'center', alignItems: 'center', flexDirection: 'row'}}>
                  <FontAwesomeIcon icon={ faCommentAlt } size={ 20 } color={'#606770'} /><Text style={{paddingLeft: 10}}>Comment</Text>
                </View>
              </View>
              </View>
              <View style={styles.statusList}>
              <View style={styles.statusTitle}>
                <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                  <FontAwesomeIcon icon={ faUserCircle } size={ 40 } color={'black'} />
                </View>
                <View style={{flex: 4}}>
                  <Text style={{fontWeight: 'bold', color: 'black'}}>Tony Stark</Text>
                  <Text>1 hour ago</Text>
                </View>
                <View style={{flex: 1, alignItems: 'center'}}>
                  <Text style={{fontWeight: 'bold'}}>•••</Text>
                </View>
              </View>
              <View style={styles.statusContent}>
                <Text style={{padding: 10}}>I Love You 3000</Text>
              </View>
              <View style={styles.statusReact}>
                <View style={{flex: 1, justifyContent: 'flex-start', alignItems: 'center', flexDirection: 'row', paddingLeft: 10}}>
                  <FontAwesomeIcon icon={ faHeart } size={ 15 } color={'blue'} /><Text style={{paddingLeft: 5}}>999</Text>
                </View>
                <View style={{flex: 1, justifyContent: 'center', alignItems: 'flex-end', paddingRight: 10}}>
                  <Text>500 comments</Text>
                </View>
              </View>
              <View style={styles.statusAction}>
                <View style={{flex: 1, justifyContent: 'center', alignItems: 'center', flexDirection: 'row'}}>
                  <FontAwesomeIcon icon={ faThumbsUp } size={ 20 } color={'#606770'} /><Text style={{paddingLeft: 10}}>Like</Text>
                </View>
                <View style={{flex: 1, justifyContent: 'center', alignItems: 'center', flexDirection: 'row'}}>
                  <FontAwesomeIcon icon={ faCommentAlt } size={ 20 } color={'#606770'} /><Text style={{paddingLeft: 10}}>Comment</Text>
                </View>
              </View>
              </View>
            </View>
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
      backgroundColor: 'blue'
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
  postField: {
    flex: 4
  },
  searchChat: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  textInput: {
    flex: 1,
  },
  postInput: {
    borderWidth: 1,
    borderRadius: 50,
    borderColor: '#ccd0d5',
    paddingLeft: 20
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

  // headerPost: {
  //   backgroundColor: 'white',
  //   flex: 1,
  //   flexDirection: 'row',
  //   padding: 10
  // },

  content: {
    flex: 9,
  },

  createPost: {
    backgroundColor: 'white',
    flex: 1,
    flexDirection: 'row',
    padding: 10
  },
  story: {
    marginTop: 15,
    flex: 4,
    backgroundColor: 'white',
    flexDirection: 'row',
    padding: 15
  },
  storyAdd: {
    // backgroundColor: 'red',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingRight: 10
  },
  storyList: {
    // backgroundColor: 'orange',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingRight: 10
  },
  storyBox: {
    flex: 1,
    width: 100, 
    height: 175, 
    backgroundColor: 'white',
    borderRadius: 15,
    overflow: 'hidden'
  },
  storyIcon: {
    flex: 1,
    paddingTop: 10,
    paddingLeft: 10
  },
  storyName: {
    flex: 1,
    justifyContent: 'flex-end',
    paddingLeft: 10,
    paddingBottom: 10
  },

  status: {
    flex: 5,
    marginTop: 15,
    marginBottom: 15
  },
  statusList: {
    flex: 1,
    backgroundColor: 'white',
    marginBottom: 15,
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: 10,
    paddingBottom: 5
  },
  statusTitle: {
    flex: 1,
    flexDirection: 'row',
  },
  statusContent: {
    flex: 2,
    paddingTop: 10,
    paddingBottom: 10
  },
  statusReact: {
    flex: 1,
    flexDirection: 'row',
    paddingTop: 10,
    paddingBottom: 10
  },
  statusAction: {
    flex: 1,
    flexDirection: 'row',
    borderTopWidth: 1,
    borderColor: '#dddfe2',
    padding: 10
  },
});
