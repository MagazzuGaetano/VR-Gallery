/* CollectionsBtn.js */
import React from 'react';
import {
  asset,
  Image,
  View,
  VrButton,
} from 'react-vr';

class CollectionsBtn extends React.Component {

  onButtonClick = () => {
    this.props.onClick();
  }

  render () {
    return (
      <View>
        <VrButton onClick={this.onButtonClick}
        style={{
        opacity: 0.6,
        borderRadius:1,
        borderColor: 'black',
        backgroundColor: 'grey',
        width: 0.35,
        height: 0.35,
        layoutOrigin: [0.5, 0.5],
        transform: [{translate: [0, 0.7, -3.15]}], }}
        >
          <Image style={{
            alignItems: 'center',
            margin: 0.025,
            width: 0.3,
            height: 0.3,
          }} source={asset(this.props.src)}>
          </Image>
        </VrButton>
      </View>
    );
  }
};

export default CollectionsBtn;
