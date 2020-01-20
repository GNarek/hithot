import React from 'react';
import {SafeAreaView, StatusBar, StyleSheet} from 'react-native';
import codePush from 'react-native-code-push';

import HitHot from './src/HitHot';
import {Colors} from './src/MainStyle';

declare var global: {HermesInternal: null | {}};

const App = () => {
  return (
    <>
      <StatusBar
        backgroundColor={Colors.grey2}
        barStyle="light-content"
        hidden
      />
      <SafeAreaView style={styles.appContainer}>
        <HitHot />
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    backgroundColor: Colors.grey2,
  },
});

const codePushOptions = {
  checkFrequency: codePush.CheckFrequency.ON_APP_START,
};

export default codePush(codePushOptions)(App);
