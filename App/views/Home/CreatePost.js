import React, { Component } from 'react';
import { View, TextInput, ImageBackground } from 'react-native';
import PropTypes from 'prop-types';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

class CreatePost extends Component {

  static propTypes = {
      containStyle: PropTypes.any.isRequired,
      pictStyle: PropTypes.any.isRequired,
      fieldStyle: PropTypes.any.isRequired,
      pictsStyle: PropTypes.any.isRequired,
      inputStyle: PropTypes.any.isRequired,
      background: PropTypes.any.isRequired
  }

  render() {

    const { containStyle, pictStyle, fieldStyle, pictsStyle, inputStyle, background } = this.props;

      return (
          <View style={containStyle}>
              <View style={pictStyle}>
                <ImageBackground source={background} style={{width: '100%', height: '100%'}} />
              </View>
              <View style={fieldStyle}>
                  <TextInput style={inputStyle} placeholder="What's on your mind?"/>
              </View>
              <View style={pictsStyle}>
                <FontAwesome5 name="images" size={35} color="#606770" />
              </View>
          </View>
      )

      
  }
}

export default CreatePost;