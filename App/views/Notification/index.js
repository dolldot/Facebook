import React, { Component } from 'react';
import { View, Text, StyleSheet, ScrollView, FlatList, TextInput, TouchableOpacity, ImageBackground} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Materialicon from 'react-native-vector-icons/MaterialIcons';

class Notification extends Component {

  constructor() {
    super();
    this.state = {
      friendRequest: [
        {
          name: 'James Bond',
          icon: require('../../assets/images/jamesbond.jpg'),
          mutual: 1
        },
        {
          name: 'Tony Stark',
          icon: require('../../assets/images/tony.jpg'),
          mutual: 2
        },
        {
          name: 'Mr. Bean',
          icon: require('../../assets/images/bean.jpg'),
          mutual: 3
        }
      ],
      notif: [
        {
          name: 'John Wick',
          icon: require('../../assets/images/johnwick.jpg'),
          text: <Text> and 7 others have their birthday today. Help them celebrate!</Text>,
          time: 'Tue at 08:01'
        },
        {
          name: 'Tony Stark',
          icon: require('../../assets/images/tony.jpg'),
          text: <Text> added a new event in <Text style={{fontWeight: 'bold'}}>The New Avenger Facility, New York</Text></Text>,
          time: 'Mon at 22:26'
        },
        {
          name: 'Mr. Bean',
          icon: require('../../assets/images/bean.jpg'),
          text: <Text> likes your Page <Text style={{fontWeight: 'bold'}}>Once a Gooner Always a Gooner</Text></Text>,
          time: 'Mon at 20:35'
        },
        {
          name: 'James Bond',
          icon: require('../../assets/images/jamesbond.jpg'),
          text: <Text> and 8 others have their birthday yesterday. Help them celebrate!</Text>,
          time: 'Tue at 08:01'
        },
        {
          name: 'Julaeha',
          icon: require('../../assets/images/story.jpg'),
          text: <Text>, your request to join <Text style={{fontWeight: 'bold'}}>Supreme Influential Communication</Text> has been approved</Text>,
          time: 'Mon at 12:56'
        }
      ]
    }
  }


  render() {

    return (

      <View style={styles.container}>
        <ScrollView>
        <View style={styles.content}>
          <View style={styles.topContent}>
            <Text style={styles.headerText}>Friend requests</Text>

            <View style={styles.boxContent}>
              <FlatList
                data={this.state.friendRequest}
                renderItem={ ({item}) => (

                  <View style={styles.listContent}>
                    <View style={styles.iconContent}>
                      <ImageBackground source={item.icon} style={{width: '100%', height: '100%'}} />
                    </View>

                    <View style={styles.textContent}>
                      <Text style={{color: 'black'}}><Text style={{fontWeight: 'bold'}}>{item.name}</Text> sent you a friend request.</Text>
                      <Text>{item.mutual} mutual friend.</Text>

                      <View style={styles.button}>
                        <TouchableOpacity style={styles.confirmButton}>
                          <Text style={{color: 'white'}}>CONFIRM</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.deleteButton}>
                          <Text>DELETE</Text>
                        </TouchableOpacity>
                      </View>
                    </View>
                    <View style={styles.moreContent}>
                      <Materialicon name="more-horiz" size={23} color="#606770" />
                    </View>
                  </View>
                )} 
                keyExtractor={item => item.name} />
            </View>

            <View style={styles.footerText}>
              <Text>See all  </Text>
              <Ionicons name="ios-arrow-forward" size={20} color="#606770" />
            </View>
          </View>

          <View style={styles.bottomContent}>
            <Text style={styles.headerText}>Earlier</Text>
            <View style={styles.boxBottomContent}>
            <FlatList
                data={this.state.notif}
                renderItem={ ({item}) => (
                  <View style={styles.listContent}>
                    <View style={styles.iconContent}>
                      <ImageBackground source={item.icon} style={{width: '100%', height: '100%'}} />
                    </View>

                    <View style={styles.textContent}>
                      <Text style={{color: 'black'}}>
                        <Text style={{fontWeight: 'bold'}}>{item.name}</Text>{item.text}
                      </Text>
                      <Text style={{color: '#1877f2'}}>{item.time}</Text>
                    </View>
                    <View style={styles.moreContent}>
                      <Materialicon name="more-horiz" size={23} color="#606770" />
                    </View>
                  </View>
                )} 
                keyExtractor={item => item.name} />
            </View>
          </View>
        </View>
        </ScrollView>
      </View>
    )
  }
}

export default Notification;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#dcdee3'
    },
    content: {
      flex: 9,
    },
    topContent: {
      flex: 1
    },
    headerText: {
      flex: 1,
      backgroundColor: 'white',
      padding: 5,
      paddingLeft: 10,
      fontWeight: 'bold',
      color: 'black',
      borderBottomWidth: 1,
      borderBottomColor: '#ccd0d5'
    },
    boxContent: {
      flex: 7,
      backgroundColor: '#e6f2ff'
    },
    listContent: {
      flexDirection:'row', 
      flex: 1,
      padding: 10
    },
    iconContent: {
      flex: 2,
      justifyContent:'center', 
      alignItems: 'center',
      overflow: 'hidden',
      borderRadius: 50,
      height: 50,
      marginTop: 5,
      marginRight: 10,
    },
    textContent: {
      flex: 9,
    },
    moreContent: {
      justifyContent: 'center',
      alignItems: 'flex-end',
      flex: 2
    },
    footerText: {
      flex: 1,
      padding: 5,
      backgroundColor: 'white',
      alignItems: 'center',
      justifyContent: 'center',
      color: 'black',
      borderTopWidth: 1,
      borderTopColor: '#ccd0d5',
      borderBottomWidth: 1,
      borderBottomColor: '#ccd0d5',
      flexDirection: 'row'
    },
    button: {
      flexDirection: 'row'
    },
    confirmButton: {
      backgroundColor: '#1877f2', 
      flex: 1, 
      marginTop: 10,
      marginBottom: 10,
      marginRight: 5, 
      padding: 5, 
      justifyContent: 'center', 
      alignItems: 'center', 
      borderWidth: 1,
      borderColor: '#1877f2',
      borderRadius: 5
    },
    deleteButton: {
      backgroundColor: 'transparent', 
      flex: 1, 
      marginTop: 10,
      marginBottom: 10,
      marginLeft: 5, 
      justifyContent: 'center', 
      alignItems: 'center', 
      borderWidth: 1,
      borderColor: '#8d949e',
      borderRadius: 5
    },
    bottomContent: {
      flex: 1,
      marginTop: 5,
      backgroundColor: 'white',
    },
});
