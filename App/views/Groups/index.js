import React, { Component } from 'react';
import { View, Text, StyleSheet, ScrollView, TextInput, TouchableOpacity} from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faCamera, faComments, faUsers, faUserCircle, faFlag, faBell, faHome, faBars, faSearch } from '@fortawesome/free-solid-svg-icons';

class Groups extends Component {

  constructor() {
    super();
    this.state = {
        menus: [
        {
            name: 'Home',
            style: 'styles.menuItem',
            iconName: faHome,
            color: '#4267b2',
            onPress: 'Home'
        },
        {
            name: 'Groups',
            style: 'styles.menuItem',
            iconName: faUsers,
            color: '#4267b2',
            onPress: 'Groups'
        },
        {
            name: 'User',
            style: 'styles.menuItem',
            iconName: faUserCircle,
            color: '#4267b2',
            onPress: 'Profile'
        },
        {
            name: 'Pages',
            style: 'styles.menuItem',
            iconName: faFlag,
            color: '#4267b2',
            onPress: 'Pages'
        },
        {
            name: 'Notification',
            style: 'styles.menuItem',
            iconName: faBell,
            color: '#4267b2',
            onPress: 'Notification'
        },
        {
            name: 'Setting',
            style: 'styles.menuItem',
            iconName: faBars,
            color: '#4267b2',
            onPress: 'Setting'
        }
        ]
    }
  }


  render() {
    
    const { navigate } = this.props.navigation;

    return (

      <View style={styles.container}>

        <View style={styles.content}>
            <ScrollView>
                <Text>Notification Page</Text>
            </ScrollView>
        </View>
      </View>
    )
  }
}

export default Groups;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#dcdee3'
    },
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
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingLeft: 20,
        paddingRight: 20
    },
    menuItem: {
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
    },
    content: {
        flex: 9,
        justifyContent: 'center',
        alignItems: 'center'
    },
});
