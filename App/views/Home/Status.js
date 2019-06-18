import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faUserCircle, faCommentAlt, faThumbsUp, faHeart } from '@fortawesome/free-solid-svg-icons';

class Status extends Component {

    static propTypes = {
        statusName: PropTypes.string.isRequired,
        statusTime: PropTypes.string.isRequired,
        statusContent: PropTypes.string.isRequired,
        statusLikes: PropTypes.number.isRequired,
        statusComments: PropTypes.string.isRequired,
      }
    
    // statusName, statusTime, statusContent, statusLikes, statusComments
    
    render() {
        const { statusName, statusTime, statusContent, statusLikes, statusComments } = this.props;

        return (
          <View style={styles.status}>
            <View style={styles.statusList}>
              <View style={styles.statusTitle}>
                <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                  <FontAwesomeIcon icon={ faUserCircle } size={ 40 } color={'black'} />
                </View>
                <View style={{flex: 4}}>
                  <Text style={{fontWeight: 'bold', color: 'black'}}>{statusName}</Text>
                  <Text>{statusTime}</Text>
                </View>
                <View style={{flex: 1, alignItems: 'center'}}>
                  <Text style={{fontWeight: 'bold'}}>•••</Text>
                </View>
              </View>
              <View style={styles.statusContent}>
                <Text style={{padding: 10}}>{statusContent}</Text>
              </View>
              <View style={styles.statusReact}>
                <View style={{flex: 1, justifyContent: 'flex-start', alignItems: 'center', flexDirection: 'row', paddingLeft: 10}}>
                  <FontAwesomeIcon icon={ faHeart } size={ 15 } color={'blue'} /><Text style={{paddingLeft: 5}}>{statusLikes}</Text>
                </View>
                <View style={{flex: 1, justifyContent: 'center', alignItems: 'flex-end', paddingRight: 10}}>
                  <Text>{statusComments}</Text>
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
        )
    }
}

export default Status;

const styles = StyleSheet.create({
  
    status: {
      flex: 5,
      marginTop: 15
    },
    statusList: {
      flex: 1,
      backgroundColor: 'white',
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