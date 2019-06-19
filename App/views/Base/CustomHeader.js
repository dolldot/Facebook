import React from "react";
import { Header } from "react-navigation";
import { View, TextInput, StyleSheet } from "react-native";
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faCamera, faComments, faSearch } from '@fortawesome/free-solid-svg-icons';

const CustomHeader = props => {
  return (

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
})