import React from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import ColorStyle from '../../Assets/Styles/color';
import RadioFooter from './Partails/RadioFooter';
import FlexStyle from '../../Assets/Styles/flex';
import StationCover from './Partails/StationCover';
import STORE from '../../Redux/Store';
import {
  STATE_RADIO_INTERFACE,
  STATION_INTERFACE,
} from '../../Helpers/Types/Interfaces';
import {TOGGLE_ID} from '../../Redux/Actions';
import {useSelector} from 'react-redux';

function Radio() {
  const stations: STATION_INTERFACE[] = useSelector(
    (state: STATE_RADIO_INTERFACE) => state.stations,
  );
  ////////////////////////////////////////////////////////////////////////////////////
  const LIST_ACTION = (id: number) =>
    STORE.dispatch<any>({
      type: TOGGLE_ID,
      payload: stations.find((station) => station.id === id),
    });
  ////////////////////////////////////////////////////////////////////////////////////
  return (
    <View style={styles.container}>
      <ScrollView style={styles.scrollView}>
        {stations &&
          stations.map((station: STATION_INTERFACE) => (
            <TouchableOpacity
              onPress={() => LIST_ACTION(station.id)}
              key={station.id}>
              <View style={styles.view}>
                <Text style={styles.title}>{station.name}</Text>
                <Text style={styles.title}>{station.number}</Text>
              </View>
              <StationCover IMAGE_SRC={station.image} ID={station.id} />
            </TouchableOpacity>
          ))}
      </ScrollView>
      <RadioFooter />
    </View>
  );
}
const {rowProperties} = FlexStyle;
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollView: {
    backgroundColor: ColorStyle.Dark,
    paddingHorizontal: 15,
  },
  view: {
    paddingVertical: 15,
    borderBottomColor: ColorStyle.Light,
    borderBottomWidth: 1,
    flex: 2,
    ...rowProperties,
  },
  title: {
    fontSize: 18,
    fontWeight: '600',
    color: ColorStyle.Light,
  },
});

export default Radio;
