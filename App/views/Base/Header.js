import React, { Component } from 'react';
import { View, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faCamera, faComments, faUsers, faUserCircle, faFlag, faBell, faHome, faBars, faSearch } from '@fortawesome/free-solid-svg-icons';
import { createStackNavigator } from 'react-navigation';

class Header extends Component {

  constructor() {
    super();
    this.state = {
      
    }
  }

    render() {

      const { navigate } = this.props.navigation;

        return (
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
                        <FontAwesomeIcon icon={ faHome } size={ 25 } color={'#4267b2'} />
                    </View>
                    <View style={styles.menuItem}>
                        <FontAwesomeIcon icon={ faUsers } size={ 25 } color={'#4267b2'} />
                    </View>
                    <View style={styles.menuItem}>
                        <FontAwesomeIcon icon={ faUserCircle } size={ 25 } color={'#4267b2'} />
                    </View>
                    <View style={styles.menuItem}>
                        <FontAwesomeIcon icon={ faFlag } size={ 25 } color={'#4267b2'} />
                    </View>
                    <View style={styles.menuItem}>
                        <FontAwesomeIcon icon={ faBell } size={ 25 } color={'#4267b2'} />
                    </View>
                    <View style={styles.menuItem}>
                      <TouchableOpacity onPress={() => navigate('Setting')}>
                        <FontAwesomeIcon icon={ faBars } size={ 25 } color={'#4267b2'} />
                      </TouchableOpacity>
                    </View>
                </View>
            </View>
        )
    }
}

export default Header;

const styles = StyleSheet.create({
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
});