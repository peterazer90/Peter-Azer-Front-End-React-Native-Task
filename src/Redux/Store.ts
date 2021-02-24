import {createStore} from 'redux';
import RADIO_REDUCER from './Reducer';
const STORE = createStore(RADIO_REDUCER);
export default STORE;
