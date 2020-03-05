import React, {useCallback, useState, useEffect} from 'react';
import {View, TouchableOpacity} from 'react-native';
import AppStore from '../../Store/Store';
// import {Colors} from '../../MainStyle';
import {getRandomColor} from '../../utils/utils';
import styles from './ColorButtonStyle';
interface IProps {
  player: 'hit' | 'hot';
}

const ColorButton = ({player}: IProps) => {
  const [settings, setSettings] = useState(AppStore.settings);

  useEffect(() => {
    setTimeout(() => {
      setSettings({
        ...AppStore.settings,
      });
    });
  }, []);
  const setRandomColor = useCallback(() => {
    AppStore.settings[player].backgroundColor = getRandomColor();

    AppStore.setData({
      ...AppStore.settings,
    });

    setSettings({
      ...AppStore.settings,
    });
  }, [player]);

  return (
    <View style={styles.wrapper}>
      <TouchableOpacity onPress={setRandomColor}>
        <View
          style={{
            ...styles.cube,
            backgroundColor: settings[player].backgroundColor,
          }}
        />
      </TouchableOpacity>
    </View>
  );
};

export default ColorButton;
