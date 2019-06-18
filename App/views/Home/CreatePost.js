import React, { Component } from 'react';
import { View, StyleSheet, TextInput } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faUserCircle, faImages } from '@fortawesome/free-solid-svg-icons';

class CreatePost extends Component {

    render() {

        return (
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
        )
    }
}

export default CreatePost;

const styles = StyleSheet.create({
    searchCamera: {
      flex: 1,
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
    postInput: {
      borderWidth: 1,
      borderRadius: 50,
      borderColor: '#ccd0d5',
      paddingLeft: 20
    },
  
    createPost: {
      backgroundColor: 'white',
      flex: 1,
      flexDirection: 'row',
      padding: 10
    },
});