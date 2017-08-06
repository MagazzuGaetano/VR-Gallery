/* Collections.js */
import React from 'react';
import {
  View,
  Text,
  Image,
  asset,
  VrButton,
} from 'react-vr';

import Canvas from './Elements/Canvas';
import UI from './Elements/UI';
import CollectionsBtn from './Elements/CollectionsBtn';
import TextWithShadow from './Elements/TextWithShadow';

const Config = [
  {
    key: 0,
    imageSrc: '9.jpg',
    buttonImageSrc: '9.jpg',
  },
  {
    key: 1,
    imageSrc: '14.jpg',
    buttonImageSrc: '14.jpg',
  },
  {
    key: 2,
    imageSrc: '16.jpg',
    buttonImageSrc: '16.jpg',
  },
  {
    key: 3,
    imageSrc: '4.jpg',
    buttonImageSrc: '4.jpg',
  },
  {
    key: 4,
    imageSrc: '13.jpg',
    buttonImageSrc: '13.jpg',
  },
  {
    key: 5,
    imageSrc: '11.jpg',
    buttonImageSrc: '11.jpg',
  }
];

class Collections extends React.Component {

  toggleCollections()
  {
    this.setState({collections: !this.state.collections})
    //if(this.state.collections) {} else this.setState({src: '16.jpg'});
  }

  constructor() {
    super();

    this.state = {
      src: '16.jpg',
      collections: true,
    };
  }

  render() {
    return (
      <View>

      <TextWithShadow shadowtext={'VR-Gallery'} normaltext = {'VR-Gallery'}/>

      <Canvas
        src={this.state.src}
      />

      {
        this.state.collections ?
        (
          <UI
            buttonConfig={Config}
            onClick={(key)=>{
              this.setState({src: Config[key].imageSrc});
            }}
          />
        ):null
      }

      <CollectionsBtn
      onClick={()=>{ this.toggleCollections();}}
      src={'ic_apps_white_48dp_2x.png'}></CollectionsBtn>

      </View>
    );
  }
};

export default Collections;
