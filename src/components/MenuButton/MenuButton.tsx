import React from 'react';
import {TouchableOpacity} from 'react-native';
import Menu from '../../icons/Menu';
import style from './MenuButtonStyle';

const MenuButton = (props: any) => {
  return (
    <TouchableOpacity {...props} style={style.wrapper} activeOpacity={0.6}>
      <Menu />
    </TouchableOpacity>
  );
};

export default MenuButton;
