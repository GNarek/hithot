import React from 'react';
import {View} from 'react-native';
import {TapGestureHandler} from 'react-native-gesture-handler';

interface IProps {
  style: Object;
  hitSlop: {
    top: number;
    right: number;
    bottom: number;
    left: number;
  };
  children: any;
  onPress: () => void;
}

const Button = (props: IProps) => {
  return (
    <TapGestureHandler
      hitSlop={props.hitSlop}
      onHandlerStateChange={props.onPress}>
      <View style={props.style}>{props.children}</View>
    </TapGestureHandler>
  );
};

export default Button;
