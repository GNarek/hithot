import React, {useCallback, useState, useEffect} from 'react';
import {View, TouchableOpacity} from 'react-native';
import AppStore from '../../Store/Store';
import {Colors} from '../../MainStyle';
import styles from './SettingsStyle';

const Settings = () => {
  const [settings, setSettings] = useState(AppStore.settings);

  useEffect(() => {
    setTimeout(() => {
      setSettings({
        ...AppStore.settings,
      });
    });
  }, []);
  const toggle = useCallback(() => {
    // AppStore.settings.moveSoundEnabled = !AppStore.settings.moveSoundEnabled;

    AppStore.settings.hit.backgroundColor =
      AppStore.settings.hit.backgroundColor === Colors.black
        ? Colors.red
        : Colors.black;

    AppStore.setData({
      ...AppStore.settings,
    });

    setSettings({
      ...AppStore.settings,
    });
  }, []);

  return (
    <View style={styles.wrapper}>
      <TouchableOpacity onPress={toggle}>
        <View
          style={{
            ...styles.cube,
            backgroundColor: settings.hit.backgroundColor,
          }}
        />
      </TouchableOpacity>
    </View>
  );
};

export default Settings;
