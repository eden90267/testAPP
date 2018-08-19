import {AsyncStorage} from 'react-native';

export const getMySetting = (key) => AsyncStorage.getItem(key);

export const setMySetting = (key, value) => AsyncStorage.setItem(key, value);