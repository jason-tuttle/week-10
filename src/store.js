import { createStore } from 'redux';
import {cartApp} from './reducers/reducers';

let store = createStore(cartApp);
