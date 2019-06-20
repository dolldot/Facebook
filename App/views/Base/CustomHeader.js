import React from "react";
import { Header } from "react-navigation";
import { View, TextInput, StyleSheet } from "react-native";
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Entypo from 'react-native-vector-icons/Entypo';

const CustomHeader = props => {
  return (

    <View style={styles.headerSearch}>
        <View style={styles.searchCamera}>
            <Entypo name="camera" size={30} color="white" />
        </View>
        <View style={styles.searchInput}>
            <FontAwesome5 name="search" size={15} color="white" />
            <TextInput style={styles.textInput} placeholder="Search" placeholderTextColor="#a1b3d9"/>
        </View>
        <View style={styles.searchChat}>
            <FontAwesome5 name="facebook-messenger" size={30} color="white" />
        </View>
        <Header {...props} />
    </View>
  );
};

export default CustomHeader;

const styles = StyleSheet.create({
    headerSearch: {
        backgroundColor: '#4267b2',
        flexDirection: 'row',
        paddingBottom: 5,
        height: 48
    },
    searchCamera: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    searchInput: {
        flex: 4,
        flexDirection: 'row',
        borderBottomWidth: 1,
        borderColor: '#8da8d3',
        alignItems: 'center'
    },
    searchChat: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    textInput: {
        color: 'white'
    }
})