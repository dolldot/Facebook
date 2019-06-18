import React, { Component } from 'react';
import { Text, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';

class ButtonLogin extends Component {

    static propTypes = {
        content: PropTypes.string.isRequired,
        textStyles: PropTypes.oneOfType([
            PropTypes.array,
            PropTypes.number,
            PropTypes.shape({}),
        ]).isRequired,
        buttonStyles: PropTypes.oneOfType([
            PropTypes.array,
            PropTypes.number,
            PropTypes.shape({}),
        ]).isRequired,
        goal: PropTypes.oneOfType([
            PropTypes.array,
            PropTypes.number,
            PropTypes.shape({}),
        ]).isRequired,
      }
    
    render() {
        const { textStyles, buttonStyles, content, goal } = this.props;

        return (
            <TouchableOpacity 
                style={buttonStyles} 
                onPress={() => this.props.navigation.navigate({goal})}>
              <Text style={textStyles}>{content}</Text>
            </TouchableOpacity>
        )
    }
}

export default ButtonLogin;