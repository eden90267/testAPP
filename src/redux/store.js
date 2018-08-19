import {createStore} from 'redux';
import reducer from './reducer';

// This connects the reducer to the store
export default function configureStore() {
  return createStore(
    reducer
  );
}