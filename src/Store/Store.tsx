import {AsyncStorage} from 'react-native';

import defaultConfig from '../config';

const AppStore = {
  settings: defaultConfig,
  setData: async (data: typeof defaultConfig) => {
    try {
      await AsyncStorage.setItem('settings', JSON.stringify(data));
    } catch (error) {
      // Error saving data
    }
  },
  getData: async () => {
    try {
      const value = await AsyncStorage.getItem('settings');
      if (value !== null) {
        AppStore.settings = JSON.parse(value);
        // We have data!!
        console.log(value);
      }
    } catch (error) {
      // Error retrieving data
    }
  },
  init: async () => {
    try {
      const value = await AsyncStorage.getItem('settings');

      if (value !== null) {
        AppStore.settings = JSON.parse(value);
        // We have data!!
        console.log(value);
      } else {
        AppStore.setData(defaultConfig);
      }
    } catch (error) {
      // Error retrieving data
    }
  },
};

export default AppStore;
