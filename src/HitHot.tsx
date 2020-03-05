import React, {useState, useCallback} from 'react';
import {View} from 'react-native';

import BackgroundBoard from './components/BackgroundBoard/BackgroundBoard';
import GameBoard from './components/GameBoard/GameBoard';
import WelcomeScreen from './components/WelcomeScreen/WelcomeScreen';
import styles from './MainStyle';

const initialPoints = {
  hit: 0,
  hot: 0,
};

const HitHot = () => {
  const [isGameStarted, setIsGameStarted] = useState(false);
  const [points, setPoints] = useState(initialPoints);

  const _handleOnGameFinished = useCallback((newPoints = initialPoints) => {
    setPoints({...newPoints});
    setIsGameStarted(false);
  }, []);

  const _handleOnGameStart = useCallback(() => {
    setPoints({...initialPoints});
    setIsGameStarted(true);
  }, []);

  return (
    <View style={styles.flex1}>
      <BackgroundBoard />
      {isGameStarted ? (
        <GameBoard
          initialPoints={points}
          onGameFinished={_handleOnGameFinished}
        />
      ) : (
        <WelcomeScreen points={points} onPress={_handleOnGameStart} />
      )}
    </View>
  );
};

export default HitHot;
