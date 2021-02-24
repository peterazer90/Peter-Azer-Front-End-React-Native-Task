import React from 'react';
import {Image, TouchableOpacity} from 'react-native';

interface props {
  IMAGE_SRC: any;
  PRESS_ACTION: () => void;
}

function ButtonIcon({PRESS_ACTION, IMAGE_SRC}: props) {
  return (
    <TouchableOpacity style={{padding: 5}} onPress={PRESS_ACTION}>
      <Image style={{height: 25, resizeMode: 'contain'}} source={IMAGE_SRC} />
    </TouchableOpacity>
  );
}

export default ButtonIcon;
