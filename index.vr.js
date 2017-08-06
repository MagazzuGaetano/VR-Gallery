/* index.vr.js */
import React from 'react';
import {
  AppRegistry,
  View,
  Text,
  Image,
  asset,
  VrButton,
} from 'react-vr';
import Collections from './components/scenes/Collections';

export default class vr_gallery extends React.Component {

  render() {
    return (
      <View>
        <Collections/>
      </View>
    );
  }
};

AppRegistry.registerComponent('vr_gallery', () => vr_gallery);
