import React from 'react';
import {Image, StyleSheet, View} from 'react-native';
import ButtonIcon from '../../../Components/ButtonIcon';
import ColorStyle from '../../../Assets/Styles/color';
import FlexStyle from '../../../Assets/Styles/flex';
import {useSelector} from 'react-redux';
import {STATE_RADIO_INTERFACE} from '../../../Helpers/Types/Interfaces';

interface props {
  IMAGE_SRC: any;
  ID: number;
}

function StationCover({IMAGE_SRC, ID}: props) {
  const activeID = useSelector(
    (state: STATE_RADIO_INTERFACE) => state.activeStation,
  );
  ////////////////////////////////////////////////////////////////
  const MINUS_PRESS = (): any => {};
  const PLUS_PRESS = (): any => {};
  ////////////////////////////////////////////////////////////////
  console.log(activeID);
  return (
    <View
      style={{
        ...styles.view,
        display: activeID && activeID.id === ID ? 'flex' : 'none',
      }}>
      <ButtonIcon
        IMAGE_SRC={require('../../../Assets/Images/minus.png')}
        PRESS_ACTION={MINUS_PRESS}
      />
      <Image
        style={{height: 100, width: 100, resizeMode: 'contain'}}
        source={IMAGE_SRC}
      />
      <ButtonIcon
        IMAGE_SRC={require('../../../Assets/Images/plus.png')}
        PRESS_ACTION={PLUS_PRESS}
      />
    </View>
  );
}
const {rowProperties} = FlexStyle;
const styles = StyleSheet.create({
  view: {
    paddingVertical: 15,
    borderBottomColor: ColorStyle.Light,
    borderBottomWidth: 1,
    flex: 3,
    ...rowProperties,
  },
});
export default StationCover;
