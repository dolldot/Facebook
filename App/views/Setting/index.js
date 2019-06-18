/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */


import React, { Component } from 'react';
import { View, Text, StyleSheet, ScrollView, TextInput, TouchableOpacity, FlatList } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faCamera, faComments, faUsers, faUserCircle, faFlag, faBell, faHome, faBars, faSearch } from '@fortawesome/free-solid-svg-icons';
import List from "./List";

// Parent
class Setting extends Component {

  constructor() {
    super();
    this.state = {
      textItems: [
          'Bareksa Fund Academy - Belajar Reksadana Online',
          'Friends',
          'Groups',
          'Marketplace',
          'Videos on Watch',
          'Events',
          'Memories',
          'Saved',
          'Messenger',
          'Pages',
          'Local',
          'Nearby Friends',
          'See More'
      ],
      textBottom: [
          'Help & Support',
          'Settings & Privacy',
          'Log Out'
      ]
    }
  }


  render() {
    
    const { navigate } = this.props.navigation;

    return (

      <View style={styles.container}>
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
                    <TouchableOpacity onPress={() => navigate('Home')}>
                        <FontAwesomeIcon icon={ faHome } size={ 25 } color={'#4267b2'} />
                    </TouchableOpacity>
                </View>
                <View style={styles.menuItem}>
                    <TouchableOpacity onPress={() => navigate('Groups')}>
                        <FontAwesomeIcon icon={ faUsers } size={ 25 } color={'#4267b2'} />
                    </TouchableOpacity>
                </View>
                <View style={styles.menuItem}>
                    <TouchableOpacity onPress={() => navigate('Profile')}>
                        <FontAwesomeIcon icon={ faUserCircle } size={ 25 } color={'#4267b2'} />
                    </TouchableOpacity>
                </View>
                <View style={styles.menuItem}>
                    <TouchableOpacity onPress={() => navigate('Pages')}>
                        <FontAwesomeIcon icon={ faFlag } size={ 25 } color={'#4267b2'} />
                    </TouchableOpacity>
                </View>
                <View style={styles.menuItem}>
                    <TouchableOpacity onPress={() => navigate('Notification')}>
                        <FontAwesomeIcon icon={ faBell } size={ 25 } color={'#4267b2'} />
                    </TouchableOpacity>
                </View>
                <View style={styles.menuItem}>
                    <TouchableOpacity onPress={() => navigate('Setting')}>
                        <FontAwesomeIcon icon={ faBars } size={ 25 } color={'#4267b2'} />
                    </TouchableOpacity>
                </View>
            </View>
        </View>

        <View style={styles.content}>
            <ScrollView>
            <View style={styles.topList}>
                <View style={styles.itemList}>
                    <View style={styles.itemIcon}>
                        <FontAwesomeIcon icon={ faUserCircle } size={ 50 } color={'black'} />
                    </View>
                    <View style={styles.itemText}>
                        <Text style={{color: 'black'}}>Aliyul Ajis</Text>
                        <Text>View your profile</Text>
                    </View>
                </View>
                <View style={styles.itemList}>
                    <View style={styles.itemIcon}>
                        <FontAwesomeIcon icon={ faUserCircle } size={ 50 } color={'black'} />
                    </View>
                    <View style={styles.itemText}>
                        <Text style={{color: 'black'}}>Arsenal Indonesia</Text>
                        <Text>3 new</Text>
                    </View>
                </View>
            </View>
            <View style={styles.bottomList}>
                <FlatList
                    data={this.state.textItems}
                    renderItem={ ({item}) => (
                      <List itemListStyle={styles.itemList} listName={item} />
                    )} 
                    keyExtractor={item => item}
                  />
                  <FlatList
                    data={this.state.textBottom}
                    renderItem={ ({item}) => (
                        <List itemListStyle={styles.itemBottom} listName={item} />
                    )}
                    keyExtractor={item => item}
                />
            </View>
            </ScrollView>
        </View>
      </View>
    )
  }
}

export default Setting;

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
    },
    menuItem: {
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
    },
    content: {
        flex: 9,
        backgroundColor: 'white'
    },
    topList: {
        flex: 1, 
        borderBottomWidth: 1,
        borderColor: '#c6c7cc',
    },
    bottomList: {
        flex: 3
    },
    itemList: {
        flex: 1, 
        flexDirection: 'row',
        paddingTop: 5,
        paddingRight: 40,
        paddingLeft: 10,
        paddingBottom: 5
    },
    itemBottom: {
        flex: 1,
        flexDirection: 'row',
        paddingTop: 5,
        paddingRight: 40,
        paddingLeft: 10,
        paddingBottom: 5,
        backgroundColor: '#f5f6f7',
        borderTopWidth: 1,
        borderColor: '#c6c7cc',
    },
    itemIcon: {
        justifyContent: 'center', 
        alignItems: 'center',
        flex: 1
    },
    itemText: {
        flex: 5, 
        justifyContent: 'center',
        paddingLeft: 10
    }
});
