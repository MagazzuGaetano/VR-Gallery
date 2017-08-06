/* UI.js */
import React from 'react';
import {
  View,
} from 'react-vr';
import Button from './Button';

class UI extends React.Component {

  constructor(props) {
    super(props);

    this.buttons = this.props.buttonConfig;
  }

  render () {
    let mapButtons = (buttons) => {
      return buttons.map((button) =>
        <Button
          key={button.key}
          onClick={()=>{
            this.props.onClick(button.key);
          }}
          src={button.buttonImageSrc}
        />
      );
    }

    const buttonsLeft = mapButtons(this.buttons.slice(0, 2))
    const buttonsCenter = mapButtons(this.buttons.slice(2, 4))
    const buttonsRight = mapButtons(this.buttons.slice(4, 6))

    return (
      <View style={{
        flexDirection:'row'
      }}>

        <View
          style={{
            flexDirection: 'row',
            flexWrap: 'wrap',
            transform: [
              {translate: [-(this.buttons.length/2 * (2 + 0.05) + 0.05)/2 , 1, -3]},
              {rotateY: 10},
            ],
            width: buttonsCenter.length/2 * (2 + 0.05) + 0.05,
            padding:0.025
          }}
        >
          {buttonsCenter}
        </View>

        <View
          style={{
            flexDirection: 'row',
            flexWrap: 'wrap',
            transform: [
              {translate: [-(this.buttons.length/2 * (2 + 0.05) + 0.05)/2 , 1, -3.15]},
            ],
            width: buttonsLeft.length/2 * (2 + 0.05) + 0.05,
            padding:0.025
          }}
        >
          {buttonsLeft}
        </View>

        <View
          style={{
            flexDirection: 'row',
            flexWrap: 'wrap',
            transform: [
              {translate: [-(this.buttons.length/2 * (2 + 0.05) + 0.05)/2 , 1, -3]},
              {rotateY:350},
            ],
            width: buttonsRight.length/2 * (2 + 0.05) + 0.05,
            padding:0.025
          }}
        >
          {buttonsRight}
        </View>
      </View>
    );
  }
};

export default UI;
