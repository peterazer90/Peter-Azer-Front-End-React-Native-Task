import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import ColorStyle from '../../../Assets/Styles/color';
import {useSelector} from 'react-redux';
import {STATE_RADIO_INTERFACE} from '../../../Helpers/Types/Interfaces';

function RadioFooter() {
  const activeID = useSelector(
    (state: STATE_RADIO_INTERFACE) => state.activeStation,
  );
  return (
    <View style={styles.footer}>
      <Text style={styles.footerText}>CURRENTLY PLAYING</Text>
      <Text style={styles.footerText}>
        {activeID ? activeID.name : 'No Station Selected'}
      </Text>
    </View>
  );
}
const styles = StyleSheet.create({
  footer: {
    backgroundColor: ColorStyle.Dark,
    padding: 15,
    borderTopColor: ColorStyle.Light,
    borderTopWidth: 1,
  },
  footerText: {
    color: ColorStyle.Light,
    fontWeight: '800',
    textAlign: 'center',
  },
});
export default RadioFooter;
