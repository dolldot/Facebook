import React, { Component } from 'react';
import { View, Text, StyleSheet, ScrollView, TextInput, TouchableOpacity} from 'react-native';

class Profile extends Component {

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
                <Text>Profile Page</Text>
            </ScrollView>
        </View>
      </View>
    )
  }
}

export default Profile;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#dcdee3'
    },
    content: {
        flex: 9,
        justifyContent: 'center',
        alignItems: 'center'
    },
});
