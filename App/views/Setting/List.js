import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons';

class List extends Component {

    static propTypes = {
        listName: PropTypes.string.isRequired,
        itemListStyle: PropTypes.oneOfType([
            PropTypes.array,
            PropTypes.number,
            PropTypes.shape({}),
          ]).isRequired,
      }
    
    render() {
        const { listName, itemListStyle } = this.props;

        return (
            <View style={itemListStyle}>
                <View style={styles.itemIcon}>
                    <FontAwesomeIcon icon={ faUserCircle } size={ 40 } color={'black'} />
                </View>
                <View style={styles.itemText}>
                    <Text style={{color: 'black'}}>{listName}</Text>
                </View>
            </View>
        )
    }
}

export default List;

const styles = StyleSheet.create({

    itemIcon: {
        justifyContent: 'center', 
        alignItems: 'center',
        flex: 1
    },
    itemText: {
        flex: 5, 
        justifyContent: 'center',
        paddingLeft: 10,
    }
});