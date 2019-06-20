import React, { Component } from 'react';
import { View, ScrollView} from 'react-native';
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
      story: [
        {
          name: 'Add to story',
          src: require('../../assets/images/story.jpg'),
          icon: require('../../assets/images/plus.jpg')
        },
        {
          name: 'John Wick',
          src: require('../../assets/images/johnwick.jpg'),
          icon: require('../../assets/images/johnwick.jpg')
        },
        {
          name: 'James Bond',
          src: require('../../assets/images/jamesbond.jpg'),
          icon: require('../../assets/images/jamesbond.jpg')
        },
        {
          name: 'Tony Stark',
          src: require('../../assets/images/tony.jpg'),
          icon: require('../../assets/images/tony.jpg')
        },
        {
          name: 'Mr. Bean',
          src: require('../../assets/images/bean.jpg'),
          icon: require('../../assets/images/bean.jpg')
        }
      ],
      posts: [
        {
          icon: require('../../assets/images/johnwick.jpg'),
          name: 'John Wick',
          time: '1 hours ago',
          content: "Don't you dare kill my dog!!!",
          likes: 10,
          comments: 7
        },
        {
          icon: require('../../assets/images/jamesbond.jpg'),
          name: 'James Bond',
          time: '1 hours ago',
          content: "Don't take my girl John Wick!!!",
          likes: 15,
          comments: 11
        },
        {
          icon: require('../../assets/images/tony.jpg'),
          name: 'Tony Stark',
          time: '1 hours ago',
          content: "I Love You 3000",
          likes: 999,
          comments: 999
        },
        {
          icon: require('../../assets/images/bean.jpg'),
          name: 'Mr. Bean',
          time: '1 hours ago',
          content: "bla bla bla bla bla bla",
          likes: 0,
          comments: 0
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

              <View style={styles.story}>
                <ScrollView horizontal={true}>
                  <FlatList
                    horizontal 
                    data={this.state.story}
                    renderItem={ ({item}) => (
                      <Story 
                        storyName={item.name} 
                        storySrc={item.src}
                        storyIcon={item.icon} />
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
                    statusComments={item.comments}
                    statusDp={item.icon} />
                )} 
                keyExtractor={item => item.name} />

            </ScrollView>
          </View>
      </View>
    )
  }
}

export default Home;