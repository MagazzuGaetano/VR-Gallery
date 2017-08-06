/* Button.js */
import React from 'react';
import {
  asset,
  Image,
  View,
  VrButton,
} from 'react-vr';

class Button extends React.Component {

  onButtonClick = () => {
    this.props.onClick();
  }

  render () {
    return (
      <View>
        <VrButton
          onClick={this.onButtonClick}
        >
          <Image
            style={{
              alignItems: 'center',
              margin:0.025,
              width: 2,
              height: 1,
            }}
            source={asset(this.props.src)}
          >
          </Image>
        </VrButton>
      </View>
    );
  }
};

export default Button;
