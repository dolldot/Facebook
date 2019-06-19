import React, { Component } from 'react';
import { Text, View, Modal, FlatList, TouchableHighlight } from 'react-native';
import PropTypes from 'prop-types';

class Button extends Component {

    constructor() {
        super();
        this.state = {
            language: [
                'Device Language',
                'English (United Kingdom)',
                'English',
                'Indonesia',
                'Polski',
                'Español',
                'Basa Jawa',
                'Français',
                'Italiano',
                'Bahasa Melayu',
                'Deutsch',
                'Filipino',
                'Nederlands',
                'Português'
            ]
        }
    }

    static propTypes = {
        text: PropTypes.string.isRequired,
        visible: PropTypes.bool.isRequired,
        onPress: PropTypes.func.isRequired
    }
    
    render() {
        const { visible, text, onPress } = this.props;

        return (
            <View>
                <Modal
                    animationType='fade'
                    transparent={true}
                    visible={visible}
                    onRequestClose={() => {
                    Alert.alert('Modal has been closed.')
                    }}>
                    <View style={{padding: 25, backgroundColor: 'rgba(0, 0, 0, 0.5)'}}>
                    <View style={{padding: 20, backgroundColor: 'white', width: '100%', height: '100%', borderRadius: 5}}>
                        <FlatList
                        data={this.state.language}
                        renderItem={({item}) => <Text style={{paddingTop: 10, paddingBottom: 10, fontSize: 18, height: 50, borderBottomWidth: 1, borderColor: '#e9eaed'}}>{item}</Text>} keyExtractor={item => item}
                        />

                        <TouchableHighlight
                        onPress={() => onPress()} style={{borderTopWidth: 1, borderColor: '#e9eaed', height: 60, alignItems: 'flex-end', justifyContent: 'center'}}>
                            <Text>{text}</Text>
                        </TouchableHighlight>
                    </View>
                    </View>
                </Modal>
            </View>
        )
    }
}

export default Button;