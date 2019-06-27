import React, { Component } from 'react';
import { Text, View, Modal, TextInput, ImageBackground, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';

class CustomModal extends Component {

    constructor() {
        super();
        this.state = {
        }
    }

    static propTypes = {
        visible: PropTypes.bool.isRequired,
        title: PropTypes.string.isRequired,
        onPress: PropTypes.func.isRequired,
        submitText: PropTypes.string.isRequired,
        avatar: PropTypes.string,
        name: PropTypes.string.isRequired,
        changeText: PropTypes.any.isRequired,
        value: PropTypes.string,
        iconStyle: PropTypes.any.isRequired,
        back: PropTypes.any.isRequired
    }
    
    render() {
        const { visible, title, onPress, submitText, avatar, name, changeText, value, iconStyle, back } = this.props;

        return (
            <View>
                <Modal
                    animationType='fade'
                    transparent={true}
                    visible={visible}
                    onRequestClose={() => {
                    Alert.alert('Modal has been closed.')
                    }}>
                    <View style={{backgroundColor: 'rgba(0, 0, 0, 0.5)'}}>
                    <View style={{backgroundColor: 'white', width: '100%', height: '100%', borderRadius: 5}}>
                    <View style={{flexDirection: 'row', backgroundColor: 'blue', height: 55}}>
                        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center', padding: 10}}>
                        <TouchableOpacity onPress={back} >
                            <Text style={{color: 'white'}}>Back</Text>
                        </TouchableOpacity>
                        </View>
                        <View style={{flex: 4, justifyContent: 'center', padding: 10}}>
                        <Text style={{color: 'white'}}>{title}</Text>
                        </View>
                        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center', padding: 10}}>
                        <TouchableOpacity onPress={onPress}>
                            <Text style={{color: 'white'}}>{submitText}</Text>
                        </TouchableOpacity>
                        </View>
                    </View>
                    <View style={{flexDirection: 'row', paddingTop: 5, paddingBottom: 5, paddingLeft: 5}}>
                        <View style={[iconStyle, {flex: 1, height: 60}]}>
                        <ImageBackground source={{uri: avatar}} style={{width: '100%', height: '100%'}} />
                        </View>
                        <View style={{flex: 5, paddingLeft: 10}}>
                        <Text style={{color: 'black', fontWeight: 'bold', fontSize: 16}}>{name}</Text>
                        </View>
                    </View>
                    <TextInput onChangeText={changeText} style={{flex: 8}} multiline={true} numberOfLines={4} placeholder="What's on your mind?">{value}</TextInput>
                        <TouchableOpacity
                        onPress={() => alert("Woroworo")} style={{justifyContent: 'center', flex: 1, borderTopWidth: 1, borderColor: '#e9eaed'}}>
                            <Text style={{paddingLeft: 10}}>Add to your post</Text>
                        </TouchableOpacity>
                    </View>
                    </View>
                </Modal>
            </View>
        )
    }
}

export default CustomModal;