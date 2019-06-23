import React, { Component } from 'react';
import { View, Text, StyleSheet, ScrollView, TextInput, TouchableOpacity, ImageBackground} from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Entypo from 'react-native-vector-icons/Entypo';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';

class Pages extends Component {

  constructor() {
    super();
    this.state = {

    }
  }


  render() {

    return (

      <View style={styles.container}>

        <View style={styles.content}>
            <ScrollView>
                <View style={{backgroundColor: 'white', flex: 1, paddingBottom: 15, borderBottomColor: '#ccd0d5', borderBottomWidth: 1}}>
                  <View style={{flexDirection: 'row', padding: 10, paddingBottom: 25, alignItems: 'flex-end'}}>
                    <Text style={{fontWeight: 'bold', fontSize: 20, paddingRight: 20, color: 'black'}}>Arsenal Indonesia</Text>
                    <Ionicons name="md-arrow-dropdown" size={20} color="black" />
                  </View>
                  
                  <View style={{flexDirection: 'row', justifyContent: 'space-evenly', alignItems: 'center'}}>
                    <View style={{justifyContent: 'center', alignItems: 'center'}}>
                      <View style={{backgroundColor: '#e6f1ff', borderRadius: 50, width: 45, height: 45, justifyContent: 'center', alignItems: 'center'}}>
                        <FontAwesome5 name="home" size={20} color="#1877f2" />
                      </View>
                      <Text style={{color: '#1877f2'}}>Home</Text>
                    </View>
                    <View style={{justifyContent: 'center', alignItems: 'center'}}>
                      <View style={{backgroundColor: '#e6f1ff', borderRadius: 50, width: 45, height: 45, justifyContent: 'center', alignItems: 'center'}}>
                        <FontAwesome5 name="flag" size={20} color="black" />
                      </View>
                      <Text style={{color: 'black'}}>Page</Text>
                    </View>
                    <View style={{justifyContent: 'center', alignItems: 'center'}}>
                      <View style={{backgroundColor: '#e6f1ff', borderRadius: 50, width: 45, height: 45, justifyContent: 'center', alignItems: 'center'}}>
                        <Ionicons name="md-chatboxes" size={20} color="black" />
                      </View>
                      <Text style={{color: 'black'}}>Messages</Text>
                    </View>
                    <View style={{justifyContent: 'center', alignItems: 'center'}}>
                      <View style={{backgroundColor: '#e6f1ff', borderRadius: 50, width: 45, height: 45, justifyContent: 'center', alignItems: 'center'}}>
                        <AntDesign name="notification" size={20} color="black" />
                      </View>
                      <Text style={{color: 'black'}}>Ads</Text>
                    </View>
                    <View style={{justifyContent: 'center', alignItems: 'center'}}>
                      <View style={{backgroundColor: '#e6f1ff', borderRadius: 50, width: 45, height: 45, justifyContent: 'center', alignItems: 'center'}}>
                        <Ionicons name="ios-more" size={20} color="black" />
                      </View>
                      <Text style={{color: 'black'}}>More</Text>
                    </View>
                  </View>
                </View>
                
                <View style={{backgroundColor: 'white', flex: 1, marginTop: 10, marginBottom: 10, borderColor: '#ccd0d5', borderTopWidth: 1, borderBottomWidth: 1}}>
                  <View style={{flexDirection: 'row', paddingTop: 10, paddingRight: 10, paddingLeft: 10}}>
                    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                      <FontAwesome5 name="user-circle" size={50} color="#606770" />
                    </View>
                    <TouchableOpacity style={{backgroundColor: "#e6f1ff", flex: 5, borderRadius: 10, margin: 5, justifyContent: 'center', alignItems: 'center'}}>
                      <Text style={{color: '#1877f2', fontWeight: 'bold', fontSize: 16}}>Create a Post</Text>
                    </TouchableOpacity>
                  </View>
                  <View style={{flexDirection: 'row', paddingBottom: 5}}>
                    <View style={{padding: 10, flex: 1, justifyContent:'center', alignItems: 'center', flexDirection: 'row'}}>
                      <FontAwesome name="photo" size={15} color="#606770" />
                      <Text> Photos</Text>
                    </View>
                    <View style={{padding: 10, flex: 1, justifyContent:'center', alignItems: 'center', flexDirection: 'row'}}>
                      <Entypo name="camera" size={15} color="#606770" />
                      <Text> Camera</Text>
                    </View>
                    <View style={{padding: 10, flex: 1, justifyContent:'center', alignItems: 'center', flexDirection: 'row'}}>
                      <Entypo name="video-camera" size={15} color="#606770" />
                      <Text> Live</Text>
                    </View>
                  </View>
                </View>
                
                <View style={{backgroundColor: 'white', flex: 1, padding: 10, borderTopColor: '#ccd0d5', borderTopWidth: 1}}>
                  <Text style={{fontWeight: 'bold', paddingBottom: 20, fontSize: 20, color: 'black'}}>Update</Text>
                  
                  <View style={{flexDirection: 'row', alignItems: 'center', paddingBottom: 10, borderBottomWidth: 1, borderBottomColor: '#ccd0d5'}}>
                    <Ionicons name="ios-notifications-outline" size={30} color="#606770" />
                    <Text style={{paddingLeft: 15, color: 'black', fontWeight: 'bold'}}>4 Notifications</Text>
                  </View>

                  <Text style={{fontWeight: 'bold', paddingTop: 10, paddingBottom: 10, fontSize: 20, color: 'black'}}>Insight</Text>

                  <View style={{paddingBottom: 10}}>
                    <Text style={{paddingBottom: 10, paddingLeft: 5, color: 'black'}}>Last 28 days: <Text style={{fontWeight: 'bold'}}>May 24 - Jun 20</Text></Text>

                    <View style={{flexDirection: 'row', justifyContent: 'space-evenly', paddingLeft: 5, paddingRight: 5}}>
                      <View style={{backgroundColor: '#1877f2', borderRadius: 5, width: 105, height: 110, padding: 5}}>
                        <Text style={{color: 'white'}}>New page Likes</Text>
                        <Text style={{color: 'white', fontWeight: 'bold', fontSize: 20}}>32</Text>
                        <Text style={{color: 'white'}}>47%</Text>
                      </View>
                      <View style={{backgroundColor: '#39afd5', borderRadius: 5, width: 105, height: 110, padding: 5}}>
                        <Text style={{color: 'white'}}>New page Likes</Text>
                        <Text style={{color: 'white', fontWeight: 'bold', fontSize: 20}}>32</Text>
                        <Text style={{color: 'white'}}>47%</Text>
                      </View>
                      <View style={{backgroundColor: '#4dbba6', borderRadius: 5, width: 105, height: 110, padding: 5}}>
                        <Text style={{color: 'white'}}>New page Likes</Text>
                        <Text style={{color: 'white', fontWeight: 'bold', fontSize: 20}}>32</Text>
                        <Text style={{color: 'white'}}>47%</Text>
                      </View>
                    </View>
                  </View>

                  <View style={{borderBottomWidth: 1, borderBottomColor: '#ccd0d5'}}>
                    <TouchableOpacity style={{backgroundColor: '#ebedf0', padding: 10, justifyContent: 'center', alignItems: 'center', borderRadius: 5, marginTop: 10, marginBottom: 20}}>
                      <Text style={{color: 'black', fontWeight: 'bold'}}>See All</Text>
                    </TouchableOpacity>
                  </View>

                  <Text style={{fontWeight: 'bold', fontSize: 20, paddingTop: 10, color: 'black'}}>Recent posts</Text>

                  <View style={{paddingTop: 10}}>
                    <View style={{flexDirection: 'row', paddingBottom: 10}}>
                      <View style={{flex: 6}}>
                        <Text>21 May . Julaeha</Text>
                        <Text style={{color: 'black', fontWeight: 'bold', fontSize: 16, paddingBottom: 5}}>Gooners Forever</Text>
                        <FontAwesome5 name="user-circle" size={20} color="#606770" />
                        <Text style={{paddingTop: 5, borderBottomWidth: 5, borderColor: '#eee', marginRight: 200, paddingBottom: 5}}>Reach            0</Text>
                      </View>
                      <View style={{flex: 1}}>
                        <FontAwesome5 name="user-circle" size={50} color="#606770" />
                      </View>
                    </View>
                    <View style={{borderBottomWidth: 1, borderBottomColor: '#ccd0d5'}}>
                      <TouchableOpacity style={{backgroundColor: '#e6f1ff', padding: 10, justifyContent: 'center', alignItems: 'center', borderRadius: 5, marginTop: 10, marginBottom: 20}}>
                        <Text style={{color: '#1877f2', fontWeight: 'bold'}}>Boost Post</Text>
                      </TouchableOpacity>
                    </View>
                  </View>

                  <View style={{paddingTop: 10}}>
                    <View style={{flexDirection: 'row', paddingBottom: 10}}>
                      <View style={{flex: 6}}>
                        <Text>21 May . Julaeha</Text>
                        <Text style={{color: 'black', fontWeight: 'bold', fontSize: 16, paddingBottom: 5}}>Gooners Forever</Text>
                        <FontAwesome5 name="user-circle" size={20} color="#606770" />
                        <Text style={{paddingTop: 5, borderBottomWidth: 5, borderColor: '#eee', marginRight: 200, paddingBottom: 5}}>Reach            0</Text>
                      </View>
                      <View style={{flex: 1}}>
                        <FontAwesome5 name="user-circle" size={50} color="#606770" />
                      </View>
                    </View>
                    <View style={{borderBottomWidth: 1, borderBottomColor: '#ccd0d5'}}>
                      <TouchableOpacity style={{backgroundColor: '#e6f1ff', padding: 10, justifyContent: 'center', alignItems: 'center', borderRadius: 5, marginTop: 10, marginBottom: 20}}>
                        <Text style={{color: '#1877f2', fontWeight: 'bold'}}>Boost Post</Text>
                      </TouchableOpacity>
                    </View>
                  </View>

                </View>
            </ScrollView>
        </View>
      </View>
    )
  }
}

export default Pages;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f5f6f7'
    },
    content: {
        flex: 9,
    },
});
