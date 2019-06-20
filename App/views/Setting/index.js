import React, { Component } from 'react';
import { View, Text, StyleSheet, ScrollView, TextInput, TouchableOpacity, FlatList, ImageBackground } from 'react-native';
import List from "./List";
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import Entypo from 'react-native-vector-icons/Entypo';
import AntDesign from 'react-native-vector-icons/AntDesign';

class Setting extends Component {

  constructor() {
    super();
    this.state = {
        
      textItems: [
          {
            text: 'Bareksa Fund Academy - Belajar Reksadana Online',
            icon: <FontAwesome name="home" size={30} color="#4267b2" />
          },
          {
            text: 'Friends',
            icon: <FontAwesome5 name="user-friends" size={30} color="#4267b2" />
          },
          {
            text: 'Groups',
            icon: <FontAwesome name="users" size={30} color="#4267b2" />
          },
          {
            text: 'Marketplace',
            icon: <FontAwesome name="home" size={30} color="#4267b2" />
          },
          {
            text: 'Videos on Watch',
            icon: <FontAwesome name="youtube-play" size={30} color="#4267b2" />
          },
          {
            text: 'Events',
            icon: <MaterialIcon name="event" size={30} color="#4267b2" />
          },
          {
            text: 'Memories',
            icon: <Entypo name="back-in-time" size={30} color="#4267b2" />
          },
          {
            text: 'Saved',
            icon: <FontAwesome name="save" size={30} color="#4267b2" />
          },
          {
            text: 'Messenger',
            icon: <FontAwesome5 name="facebook-messenger" size={30} color="#4267b2" />
          },
          {
            text: 'Pages',
            icon: <AntDesign name="flag" size={30} color="#4267b2" />
          },
          {
            text: 'Local',
            icon: <MaterialIcon name="place" size={30} color="#4267b2" />
          },
          {
            text: 'See More',
            icon: <FontAwesome5 name="boxes" size={30} color="#4267b2" />
          },
      ],
      textBottom: [
        {
            text: 'Help & Support',
            body: 'Hi. I love this component. What do you think?',
            icon: <AntDesign name="questioncircle" size={30} color="#5a616a" />
        },
        {
            text: 'Settings & Privacy',
            body: 'Hi. I love this component. What do you think?',
            icon: <AntDesign name="setting" size={30} color="#5a616a" />
        },
        {
            text: 'Log Out',
            body: 'Hi. I love this component. What do you think?',
            icon: <Entypo name="log-out" size={30} color="#5a616a" />
        }
      ]
    }
  }


  render() {

    return (

      <View style={styles.container}>

        <View style={styles.content}>
            <ScrollView>
                <View style={styles.topList}>
                  <TouchableOpacity>
                    <View style={styles.itemList}>
                        <View style={styles.iconDp}>
                            <ImageBackground source={require('../../assets/images/story.jpg')} style={{width: '100%', height: '100%'}} />
                        </View>
                        <View style={styles.itemText}>
                            <Text style={{color: 'black', fontSize: 20}}>Julaeha</Text>
                            <Text>View your profile</Text>
                        </View>
                    </View>
                  </TouchableOpacity>
                  <TouchableOpacity>
                    <View style={styles.itemList}>
                        <View style={styles.iconDp}>
                          <ImageBackground source={require('../../assets/images/gooner.jpg')} style={{width: '100%', height: '100%'}} />
                        </View>
                        <View style={styles.itemText}>
                            <Text style={{color: 'black', fontSize: 16}}>Once a Gooner always a Gooner</Text>
                            <Text>3 new</Text>
                        </View>
                    </View>
                  </TouchableOpacity>
                </View>
                <View style={styles.bottomList}>
                    <FlatList
                        data={this.state.textItems}
                        renderItem={ ({item}) => (
                            <List 
                              itemListStyle={styles.itemList} 
                              listName={item.text}
                              itemIcon={item.icon} />
                        )} 
                        keyExtractor={item => item.text} />
                    <FlatList
                        data={this.state.textBottom}
                        renderItem={ ({item}) => (
                            <List
                              itemListStyle={styles.itemBottom}
                              listName={item.text}
                              itemIcon={item.icon} />
                        )}
                        keyExtractor={item => item.text} />
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
        paddingTop: 10,
        paddingRight: 40,
        paddingLeft: 10,
        paddingBottom: 10,
    },
    itemBottom: {
        flex: 1,
        flexDirection: 'row',
        paddingTop: 10,
        paddingRight: 40,
        paddingLeft: 10,
        paddingBottom: 10,
        backgroundColor: '#f5f6f7',
        borderTopWidth: 1,
        borderColor: '#c6c7cc',
    },
    itemIcon: {
        justifyContent: 'center', 
        alignItems: 'center',
        flex: 1
    },
    iconDp: {
      flex: 1,
      backgroundColor: 'blue',
      borderRadius: 50,
      overflow: 'hidden',
      height: 50
    },
    itemText: {
        flex: 5, 
        justifyContent: 'center',
        paddingLeft: 10
    }
});
