import React, { Component } from 'react';
import { Text, View, StyleSheet, ImageBackground } from 'react-native';
import PropTypes from 'prop-types';

class Story extends Component {

    static propTypes = {
        storyName: PropTypes.string.isRequired,
        storySrc: PropTypes.any.isRequired,
        storyIcon: PropTypes.any.isRequired,
      }
    
    render() {
        const { storyName, storySrc, storyIcon } = this.props;

        return (
            <View style={styles.storyList}>
                <View style={styles.storyBox}>
                    <ImageBackground source={{uri: storySrc}} style={{width: '100%', height: '100%'}}>
                        <View style={styles.storyIcon}>
                            <ImageBackground source={{uri: storyIcon}} style={{width: '100%', height: '100%'}} />
                        </View>
                        <View style={styles.storyName}>
                            <Text style={{color: 'white'}}>{storyName}</Text>
                        </View>
                    </ImageBackground>
                </View>
            </View>
        )
    }
}

export default Story;

const styles = StyleSheet.create({
    storyList: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      paddingLeft: 5
    },
    storyBox: {
      flex: 1,
      width: 100, 
      height: 180, 
      backgroundColor: 'white',
      borderRadius: 15,
      overflow: 'hidden'
    },
    storyIcon: {
      flex: 1,
      marginTop: 10,
      marginLeft: 10,
      backgroundColor: 'black',
      borderColor: '#1877f2',
      borderWidth: 2,
      borderRadius: 50,
      width: 42,
      overflow: 'hidden'
    },
    storyName: {
      flex: 3,
      justifyContent: 'flex-end',
      paddingLeft: 10,
      paddingBottom: 10
    },
  });