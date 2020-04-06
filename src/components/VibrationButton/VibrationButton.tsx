import React, {useCallback, useState, useEffect} from 'react';
import {View, TouchableOpacity, Text} from 'react-native';
import AppStore from '../../Store/Store';
import styles from './VibrationButtonStyle';

const ColorButton = () => {
  const [settings, setSettings] = useState(AppStore.settings);

  useEffect(() => {
    setTimeout(() => {
      setSettings({
        ...AppStore.settings,
      });
    });
  }, []);
  const toggleVibration = useCallback(() => {
    AppStore.settings.vibrationEnabled = !AppStore.settings.vibrationEnabled;

    AppStore.setData({
      ...AppStore.settings,
    });

    setSettings({
      ...AppStore.settings,
    });
  }, []);

  return (
    <View style={styles.wrapper}>
      <TouchableOpacity onPress={toggleVibration}>
        <View style={styles.phoneWrapper}>
          <View style={styles.vibrateWrapper}>
            <View style={styles.vibrateSmall} />
            <View style={styles.vibrateLarge} />
          </View>
          <View style={styles.phone}>
            <View style={styles.textWrapper}>
              <Text style={styles.whiteText}>
                {settings.vibrationEnabled ? 'On' : 'Off'}
              </Text>
            </View>
          </View>
          <View style={styles.vibrateWrapper}>
            <View style={styles.vibrateLarge} />
            <View style={styles.vibrateSmall} />
          </View>
          {!settings.vibrationEnabled ? (
            <View style={styles.stickWrapper}>
              <View style={styles.stick} />
            </View>
          ) : null}
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default ColorButton;
