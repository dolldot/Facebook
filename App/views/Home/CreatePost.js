import React, { Component } from 'react';
import { View, TextInput } from 'react-native';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faUserCircle, faImages } from '@fortawesome/free-solid-svg-icons';

class CreatePost extends Component {

  static propTypes = {
      containStyle: PropTypes.any.isRequired,
      pictStyle: PropTypes.any.isRequired,
      fieldStyle: PropTypes.any.isRequired,
      pictsStyle: PropTypes.any.isRequired,
      inputStyle: PropTypes.any.isRequired
  }

  render() {

    const { containStyle, pictStyle, fieldStyle, pictsStyle, inputStyle } = this.props;

      return (
          <View style={containStyle}>
              <View style={pictStyle}>
                  <FontAwesomeIcon icon={ faUserCircle } size={ 40 } color={'black'} />
              </View>
              <View style={fieldStyle}>
                  <TextInput style={inputStyle} placeholder="What's on your mind?"/>
              </View>
              <View style={pictsStyle}>
                  <FontAwesomeIcon icon={ faImages } size={ 40 } color={'black'} />
              </View>
          </View>
      )

      
  }
}

export default CreatePost;