import React, { Component } from 'react';
import { Text, View, StyleSheet, ImageBackground } from 'react-native';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons';

class Status extends Component {

    static propTypes = {
        storyName: PropTypes.string.isRequired,
      }
    
    render() {
        const { storyName } = this.props;

        return (
            <View style={styles.storyList}>
                <View style={styles.storyBox}>
                    <ImageBackground source={require('../../assets/images/banner.png')} style={{width: '100%', height: '100%'}}>
                        <View style={styles.storyIcon}>
                            <FontAwesomeIcon icon={ faUserCircle } size={ 40 } color={'#4267b2'} />
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

export default Status;

const styles = StyleSheet.create({
    story: {
      marginTop: 15,
      flex: 4,
      backgroundColor: 'white',
      flexDirection: 'row',
      padding: 15
    },
    storyAdd: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      paddingRight: 10
    },
    storyList: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      paddingRight: 10,
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
  });