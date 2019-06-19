import React, { Component } from 'react';
import { Text, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';

class Button extends Component {

    static propTypes = {
        text: PropTypes.string.isRequired,
        textStyle: PropTypes.oneOfType([
            PropTypes.array,
            PropTypes.number,
            PropTypes.shape({}),
        ]).isRequired,
        buttonStyle: PropTypes.oneOfType([
            PropTypes.array,
            PropTypes.number,
            PropTypes.shape({}),
        ]).isRequired,
        onPress: PropTypes.func.isRequired
    }
    
    render() {
        const { textStyle, buttonStyle, text, onPress } = this.props;

        return (
            <TouchableOpacity 
                style={buttonStyle} 
                onPress={() => onPress()}>
              <Text style={textStyle}>{text}</Text>
            </TouchableOpacity>
        )
    }
}

export default Button;