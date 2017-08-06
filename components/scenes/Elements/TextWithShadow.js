/* TextWithShadow.js */
import React from 'react';
import {
  View,
  Text,
} from 'react-vr';

class TextWithShadow extends React.Component {

  render () {
    return (
      <View>
        <Text  style={{
          color: 'black',
          fontSize: 0.2,
          borderColor: 'black',
          borderSize: 1,
          fontWeight: 'bold',
          layoutOrigin: [0.5, 0.5],
          paddingLeft: 0.2,
          paddingRight: 0.2,
          textAlign: 'center',
          textAlignVertical: 'center',
          transform: [{translate: [0, 1, -3]}],
          }}>
        {this.props.shadowtext}</Text>
        <Text  style={{
          color: 'white',
          fontSize: 0.2,
          borderColor: 'black',
          borderSize: 1,
          fontWeight: 'bold',
          layoutOrigin: [0.5, 0.5],
          paddingLeft: 0.2,
          paddingRight: 0.2,
          textAlign: 'center',
          textAlignVertical: 'center',
          transform: [{translate: [0, 1.3, -3]}],
          }}>
        {this.props.normaltext}</Text>
      </View>
    );
  }
};

export default TextWithShadow;
