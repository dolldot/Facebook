import React, { Component } from 'react';
import { View, Text, StyleSheet, ScrollView, FlatList, TouchableHighlight, Modal, ImageBackground, TouchableWithoutFeedback} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Materialicon from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Feather from 'react-native-vector-icons/Feather';

class Notification extends Component {

  constructor() {
    super();
    this.state = {
      background: false,
      modalVisible: false,
      date: '',
      friendRequest: [
        {
          name: 'James Bond',
          icon: require('../../assets/images/jamesbond.jpg'),
          mutual: 1,
          read: false,
          status: false
        },
        {
          name: 'Tony Stark',
          icon: require('../../assets/images/tony.jpg'),
          mutual: 2,
          read: false,
          status: false
        },
        {
          name: 'Mr. Bean',
          icon: require('../../assets/images/bean.jpg'),
          mutual: 3,
          read: false,
          status: false
        }
      ],
      notif: [
        {
          name: 'John Wick',
          icon: require('../../assets/images/johnwick.jpg'),
          text: <Text> and 7 others have their birthday today. Help them celebrate!</Text>,
          time: 'Tue at 08:01',
          read: false
        },
        {
          name: 'Tony Stark',
          icon: require('../../assets/images/tony.jpg'),
          text: <Text> added a new event in <Text style={{fontWeight: 'bold'}}>The New Avenger Facility, New York</Text></Text>,
          time: 'Mon at 22:26',
          read: false
        },
        {
          name: 'Mr. Bean',
          icon: require('../../assets/images/bean.jpg'),
          text: <Text> likes your Page <Text style={{fontWeight: 'bold'}}>Once a Gooner Always a Gooner</Text></Text>,
          time: 'Mon at 20:35',
          read: true
        },
        {
          name: 'James Bond',
          icon: require('../../assets/images/jamesbond.jpg'),
          text: <Text> and 8 others have their birthday yesterday. Help them celebrate!</Text>,
          time: 'Tue at 08:01',
          read: false
        },
        {
          name: 'Julaeha',
          icon: require('../../assets/images/story.jpg'),
          text: <Text>, your request to join <Text style={{fontWeight: 'bold'}}>Supreme Influential Communication</Text> has been approved</Text>,
          time: 'Mon at 12:56',
          read: true
        }
      ]
    }
  }

  setModalVisible(visible) {
    this.setState({modalVisible: visible});
  }

  changeBack = (bool) => {
    this.setState({
      background: bool,
    })
  }

  changeTopBackground = (index, value) => {
    var friendRequest = [...this.state.friendRequest]
    friendRequest[index] = {...friendRequest[index], read: value};
    this.setState({friendRequest})
  }

  deleteFriend = (index, value) => {
    var friendRequest = [...this.state.friendRequest]
    friendRequest[index] = {...friendRequest[index], status: value};
    this.setState({friendRequest})
  }

  changeBackground = (index, value) => {
    var notif = [...this.state.notif]
    notif[index] = {...notif[index], read: value};
    this.setState({notif})
  }

  componentDidMount() {
    var month = new Array();
    month[0] = "January";
    month[1] = "February";
    month[2] = "March";
    month[3] = "April";
    month[4] = "May";
    month[5] = "June";
    month[6] = "July";
    month[7] = "August";
    month[8] = "September";
    month[9] = "October";
    month[10] = "November";
    month[11] = "December";
    var n = month[new Date().getMonth()];

    var date = new Date().getDate(); //Current Date
    var month = month[new Date().getMonth()]; //Current Month
    var hours = new Date().getHours(); //Current Hours
    var min = new Date().getMinutes(); //Current Minutes

    this.setState({
      date:
        date + ' ' + month + ' at ' + hours + ':' + min ,
    });
  }

  render() {

    return (

      <View style={styles.container}>
        <View>
        <Modal
          animationType="slide"
          transparent={false}
          visible={this.state.modalVisible}
          onRequestClose={() => {
            Alert.alert('Modal has been closed.');
          }}>
          <View style={{paddingTop: 450, backgroundColor: 'rgba(0, 0, 0, 0.5)'}}>
          <View style={{padding: 20, backgroundColor: 'white', width: '100%', height: '100%'}}>
              <View style={{justifyContent: 'center', alignItems: 'center', paddingBottom: 20}}>
                <MaterialCommunityIcons name="emoticon-happy-outline" size={50} color="#606770" />
                <Text>Don't mind me, I'm just passing by</Text>
              </View>

              <TouchableHighlight
                onPress={() => {this.setModalVisible(!this.state.modalVisible);}} style={{height: 40, justifyContent: 'center'}}>
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                  <Feather name="x-square" size={30} color="#606770" />
                  <Text>  Remove this notification</Text>
                </View>
                
              </TouchableHighlight>
          </View>
          </View>
        </Modal>
        </View>

        <ScrollView>
        <View style={styles.content}>
          <View style={styles.topContent}>
            <View style={styles.headerText}>
              <Text style={{flex: 5, fontWeight: 'bold', color: 'black',}}>Friend requests</Text>
              <Text style={{flex: 1, color: 'blue'}}>SEE ALL</Text>
            </View>

            <View style={styles.boxContent}>
              <FlatList
                data={this.state.friendRequest}
                renderItem={ ({item, index}) => (
                  
                  <View>
                  {this.state.friendRequest[index].status != true ? 
                  <TouchableHighlight underlayColor="black" onPress={() => this.changeBack}>
                    
                    <View style={[styles.listContent, this.state.friendRequest[index].read ? {backgroundColor: 'white'} : {backgroundColor: '#e6f2ff'}]}>

                      <View style={styles.iconContent}>
                        <ImageBackground source={item.icon} style={{width: '100%', height: '100%'}} />
                      </View>
  
                      <View style={styles.textContent}>
                        <Text style={{color: 'black'}}><Text style={{fontWeight: 'bold'}}>{item.name}</Text> sent you a friend request.</Text>
                        <Text>{item.mutual} mutual friend.</Text>

                        {this.state.friendRequest[index].read != true ? 

                          <View style={styles.button}>
                            <TouchableHighlight style={styles.confirmButton} underlayColor="rgba(24, 119, 242, 0.6)" onPress={() => {this.changeTopBackground(index, !this.state.friendRequest[index].read)}}>
                              <Text style={{color: 'white'}}>CONFIRM</Text>
                            </TouchableHighlight>
                            
                            <TouchableHighlight style={styles.deleteButton} underlayColor="rgba(225, 225, 225, 0.8)" onPress={() => {this.deleteFriend(index, !this.state.friendRequest[index].status)}}>
                              <Text>DELETE</Text>
                            </TouchableHighlight>
                          </View>

                        : <Text>{this.state.date} • Confirmed</Text> }

                      </View>

                      
                        <View style={styles.moreContent}>
                          <TouchableWithoutFeedback onPress={() => {this.setModalVisible(true)}}>
                            <Materialicon name="more-horiz" size={23} color="#606770" />
                          </TouchableWithoutFeedback>
                        </View>
                      

                    </View>
                  
                  </TouchableHighlight>
                  : null }
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
            <View style={styles.headerText}>
              <Text style={{flex: 5, fontWeight: 'bold', color: 'black',}}>Earlier</Text>
            </View>
            <View style={styles.boxBottomContent}>
            <FlatList
                data={this.state.notif}
                renderItem={ ({item, index}) => (
                  <TouchableHighlight underlayColor="black" onPress={() => {this.changeBackground(index, true)}}>
                  <View style={[styles.listContent, this.state.notif[index].read ? {backgroundColor: 'white'} : {backgroundColor: '#e6f2ff'}]}>
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
                      <TouchableWithoutFeedback onPress={() => {this.setModalVisible(true)}}>
                        <Materialicon name="more-horiz" size={23} color="#606770" />
                      </TouchableWithoutFeedback>
                    </View>
                  </View>
                  </TouchableHighlight>
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
      flexDirection: 'row',
      backgroundColor: 'white',
      padding: 5,
      paddingLeft: 10,
      borderBottomWidth: 1,
      borderBottomColor: '#ccd0d5'
    },
    boxContent: {
      flex: 7,
      
    },
    listContent: {
      flexDirection:'row', 
      flex: 1,
      padding: 10,
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
      padding: 10,
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
      // borderWidth: 1,
      // borderColor: '#1877f2',
      borderRadius: 5
    },
    confirmButtonPress: {
      backgroundColor: 'white', 
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
