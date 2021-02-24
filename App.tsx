import React from 'react';
import {StatusBar} from 'react-native';
import Radio from './src/Screens/Radio/Radio';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import ButtonIcon from './src/Components/ButtonIcon';
import ColorStyle from './src/Assets/Styles/color';
import {Provider} from 'react-redux';
import STORE from './src/Redux/Store';
import {RECEIVE_STATIONS} from './src/Redux/Actions';
import demoData from './src/Helpers/DemoData';
const Stack = createStackNavigator();

function App() {
  STORE.dispatch({type: RECEIVE_STATIONS, payload: demoData});
  //////////////////////////////////////////////////////////////////
  const BACK_ACTION = (): void => {};
  //////////////////////////////////////////////////////////////////
  const SWITCH_ACTION = (): void => {};
  //////////////////////////////////////////////////////////////////
  return (
    <Provider store={STORE}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Radio"
            component={Radio}
            options={{
              headerStyle: {backgroundColor: ColorStyle.Orange},
              headerTitleStyle: {alignSelf: 'center', color: '#FFF'},
              title: 'STATIONS',
              headerLeft: () => (
                <ButtonIcon
                  IMAGE_SRC={require('./src/Assets/Images/back-arrow.png')}
                  PRESS_ACTION={BACK_ACTION}
                />
              ),
              headerRight: () => (
                <ButtonIcon
                  IMAGE_SRC={require('./src/Assets/Images/switch.png')}
                  PRESS_ACTION={SWITCH_ACTION}
                />
              ),
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
      <StatusBar barStyle="dark-content" />
    </Provider>
  );
}

export default App;
