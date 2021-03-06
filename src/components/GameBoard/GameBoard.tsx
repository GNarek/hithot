import React, {
  useState,
  useEffect,
  FunctionComponentElement,
  useCallback,
} from 'react';
import {View, Text, AppState} from 'react-native';
import Sound from 'react-native-sound';

import AppStore from '../../Store/Store';
import MenuButton from '../MenuButton/MenuButton';
import styles from './GameBoardStyle';
import Cube from './Cube/Cube';
import {uniqueID, getRandomInt} from './../../utils/utils';
import {cubeSize} from './Cube/CubeStyle';

import {IPoints} from '../../types';

interface IProps {
  onGameFinished: (points: IPoints) => void;
  style?: Object;
  initialPoints: IPoints;
}

interface ICube {
  id: string;
  element: FunctionComponentElement<typeof Cube>;
  isHitPlayer: boolean;
}

interface ICubes {
  [key: string]: ICube;
}

let isHitPlayer = true;
let wrapperHeight = 0;
const maxPoint = 100;

const startSound = new Sound('start.mp3');
const clickSound = new Sound('clicked.mp3');
const windSound = new Sound('wind.mp3');
const thunder = new Sound('thunder.mp3');
let stateInitialazed = false;

const playPauseBackgroundSound = () => {
  if (!stateInitialazed) {
    stateInitialazed = true;
    Sound.setCategory('Playback');

    windSound.setNumberOfLoops(-1);
    windSound.play();

    AppState.addEventListener('change', state => {
      if (state === 'background') {
        windSound.pause();
      } else {
        windSound.play();
      }
    });
  }
};

const GameBoard = ({style = {}, onGameFinished, initialPoints}: IProps) => {
  const [cubes, setCubes]: [ICubes, (e: any) => void] = useState({});
  const [points, setPoints]: [IPoints, (e: any) => void] = useState(
    initialPoints,
  );

  const _handleClick = useCallback(
    (id: string, isClicked: boolean, offset: number) => {
      if (isClicked) {
        const half = wrapperHeight / 2;
        const isHalfPassed = half < offset + cubeSize;

        clickSound.stop();
        clickSound.play();

        if (cubes[id].isHitPlayer) {
          // Player Hit
          if (isHalfPassed) {
            points.hot += 5;
          } else {
            points.hit++;
          }
        } else {
          // Player Hot
          if (isHalfPassed) {
            points.hot++;
          } else {
            points.hit += 5;
          }
        }
        setPoints({...points});
        delete cubes[id];

        if (points.hit >= maxPoint || points.hot >= maxPoint) {
          onGameFinished(points);
          thunder.play();
        }
      }
      delete cubes[id];
      setCubes({...cubes});
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [],
  );

  const generateCube = useCallback(() => {
    isHitPlayer = getRandomInt(0, 1) > 0;
    const id = uniqueID();
    const element = (
      <Cube id={id} onPress={_handleClick} isHitPlayer={isHitPlayer} />
    );

    cubes[id] = {
      id,
      isHitPlayer,
      element,
    };

    if (AppStore.settings.moveSoundEnabled) {
      startSound.stop();
      startSound.play();
    }

    setCubes({...cubes});
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    const interval = setInterval(generateCube, 500);

    return () => {
      clearInterval(interval);
      windSound.pause();
    };
  }, [generateCube]);

  playPauseBackgroundSound();

  return (
    <View
      style={[styles.wrapper, style]}
      onLayout={event => (wrapperHeight = event.nativeEvent.layout.height)}>
      {Object.keys(cubes).map(index => (
        <View key={cubes[index].id}>{cubes[index].element}</View>
      ))}
      <View style={styles.separationLine}>
        <MenuButton onLongPress={onGameFinished} />
      </View>
      <Text>V: 1.0.5</Text>
      <Text style={[styles.name, styles.hitname]}>{`Hit: ${points.hit}`}</Text>
      <Text style={[styles.name, styles.hotname]}>{`Hot: ${points.hot}`}</Text>
    </View>
  );
};

export default GameBoard;
