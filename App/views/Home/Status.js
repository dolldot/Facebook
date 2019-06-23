import React, { Component } from 'react';
import { Text, View, StyleSheet, ImageBackground, Image, TouchableOpacity, TouchableHighlight } from 'react-native';
import PropTypes from 'prop-types';

import FontAwesome from 'react-native-vector-icons/FontAwesome';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import Entypo from 'react-native-vector-icons/Entypo';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

class Status extends Component {

    static propTypes = {
        statusName: PropTypes.string.isRequired,
        statusTime: PropTypes.string.isRequired,
        statusContent: PropTypes.string.isRequired,
        statusLikes: PropTypes.number.isRequired,
        statusComments: PropTypes.number.isRequired,
        statusDp: PropTypes.any.isRequired,
        likeAction: PropTypes.func.isRequired,
        statusPhoto: PropTypes.any
      }
    
    render() {
        const { statusName, statusTime, statusContent, statusLikes, statusComments, statusDp, likeAction, statusPhoto } = this.props;

        return (
          <View style={styles.status}>
            <View style={styles.statusList}>

            <TouchableHighlight underlayColor="rgba(225,225,225,0.8)" onPress={() => alert('Wow, aku terkejut XD')}>
              <View style={styles.statusTitle}>
                <View style={styles.statusDp}>
                  <ImageBackground source={statusDp} style={{width: '100%', height: '100%'}} />
                </View>
                <View style={styles.statusName}>
                  <Text style={{fontWeight: 'bold', color: 'black'}}>{statusName}</Text>
                  <Text>{statusTime}</Text>
                </View>
                <View style={styles.statusMore}>
                  <MaterialIcon name="more-horiz" size={20} color="black" />
                </View>
              </View>
            </TouchableHighlight>
            <TouchableHighlight underlayColor="rgba(225,225,225,0.8)" onPress={() => alert('Wow, aku terkejut XD')}>
              <View style={styles.statusContent}>
                <View>
                  {/* <Image source={statusPhoto} style={{width: '100%', height: '50%'}} /> */}
                  <Text style={{paddingTop: 10, paddingBottom: 10, color: 'black'}}>{statusContent}</Text>
                </View>
              </View>
            </TouchableHighlight>
            <TouchableHighlight underlayColor="rgba(225,225,225,0.8)" onPress={() => alert('Wow, aku terkejut XD')}>
              <View style={styles.statusReact}>
                <View style={styles.reactLike}>
                  <MaterialCommunityIcons name="heart-circle" size={20} color="red" />
                  <MaterialCommunityIcons name="emoticon-excited-outline" size={20} color="#f8ae3e" />
                  <Text style={{paddingLeft: 5, color: 'black'}}>{statusLikes}</Text>
                </View>
                <View style={styles.reactComment}>
                  <Text style={{color: 'black'}}>{statusComments} comments</Text>
                </View>
              </View>
            </TouchableHighlight>

              <View style={styles.statusAction}>
                <TouchableHighlight underlayColor="rgba(225,225,225,0.8)" onPress={likeAction}>
                <View style={styles.actionLike}>
                  <AntDesign name="like2" size={20} color="#606770" />
                  <Text style={{paddingLeft: 5}}>Like</Text>
                </View>
                </TouchableHighlight>
                <TouchableHighlight underlayColor="rgba(225,225,225,0.8)" onPress={() => alert('Wow, aku terkejut XD')}>
                <View style={styles.actionComment}>
                  <FontAwesome5 name="comment-alt" size={20} color="#606770" />
                  <Text style={{paddingLeft: 5}}>Comment</Text>
                </View>
                </TouchableHighlight>
                <TouchableHighlight underlayColor="rgba(225,225,225,0.8)" onPress={() => alert('Wow, aku terkejut XD')}>
                <View style={styles.actionShare}>
                  <MaterialCommunityIcons name="share" size={20} color="#606770" />
                  <Text style={{paddingLeft: 5}}>Share</Text>
                </View>
                </TouchableHighlight>
              </View>

            </View>
          </View>
        )
    }
}

export default Status;

const styles = StyleSheet.create({
  
  status: {
    flex: 5,
    marginTop: 12
  },
  statusList: {
    flex: 1,
    backgroundColor: 'white',
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: 10,
  },
  statusTitle: {
    flex: 1,
    flexDirection: 'row',
  },
  statusContent: {
    flex: 2,
    paddingTop: 10,
    paddingBottom: 10,
  },
  statusReact: {
    flex: 1,
    flexDirection: 'row',
    paddingTop: 10,
    paddingBottom: 10
  },
  reactLike: {
    flex: 1, 
    justifyContent: 'flex-start', 
    alignItems: 'center', 
    flexDirection: 'row', 
  },
  reactComment: {
    flex: 1, 
    justifyContent: 'center', 
    alignItems: 'flex-end',
    
  },
  statusAction: {
    flex: 1,
    flexDirection: 'row',
    borderTopWidth: 1,
    borderColor: '#dddfe2',
    alignItems: 'center',
    justifyContent: 'center'
  },
  actionLike: {
    flex: 1,
    paddingTop: 10,
    paddingLeft: 30,
    paddingRight: 30,
    paddingBottom: 10,
    justifyContent: 'center', 
    alignItems: 'center',
    flexDirection: 'row',
  },
  actionComment: {
    flex: 1,
    paddingTop: 10,
    paddingLeft: 20,
    paddingRight: 20,
    paddingBottom: 10,
    justifyContent: 'center', 
    alignItems: 'center',
    flexDirection: 'row',
  },
  actionShare: {
    flex: 1,
    paddingTop: 10,
    paddingLeft: 30,
    paddingRight: 30,
    paddingBottom: 10,
    justifyContent: 'center', 
    alignItems: 'center',
    flexDirection: 'row',
  },
  statusDp: {
    flex: 1, 
    justifyContent: 'center', 
    alignItems: 'center',
    backgroundColor: 'blue',
    borderRadius: 50,
    overflow: 'hidden'
  },
  statusName: {
    flex: 7,
    paddingLeft: 10
  },
  statusMore: {
    flex: 1, 
    alignItems: 'center'
  }
});