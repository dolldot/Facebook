import React, { Component } from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import Entypo from 'react-native-vector-icons/Entypo';
import AntDesign from 'react-native-vector-icons/AntDesign';

class List extends Component {

    constructor() {
        super();
        this.state = {

        }
    }

    static propTypes = {
        listName: PropTypes.string.isRequired,
        itemListStyle: PropTypes.any.isRequired,
        itemIcon: PropTypes.any.isRequired
    }
    
    render() {
        const { listName, itemListStyle, itemIcon } = this.props;

        return (
            <TouchableOpacity>
            <View style={itemListStyle}>
                <View style={styles.itemIcon}>
                    {itemIcon}
                </View>
                <View style={styles.itemText}>
                    <Text style={{color: 'black', fontSize: 16}}>{listName}</Text>
                </View>
            </View>
            </TouchableOpacity>
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