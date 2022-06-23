/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useCallback, useEffect, useMemo} from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import TimeSelector from './components/TimeSelector';

function App() {
  const arr1DTime = useMemo(() => {
    const tempArr1DTime = [];

    let hour = 0,
      minute,
      time_stamp = '';
    for (let i = 0; i < 48; i++) {
      if (i % 2 === 0) {
        minute = '00';
      } else {
        minute = '30';
      }

      if (Math.floor(hour / 2) < 10) {
        time_stamp = `0${Math.floor(hour / 2)}:${minute}`;
      } else {
        time_stamp = `${Math.floor(hour / 2)}:${minute}`;
      }

      tempArr1DTime.push({id: i, time_stamp: time_stamp, disable: false});
      hour++;
    }

    return tempArr1DTime;
  }, []);

  console.log(arr1DTime);

  return (
    <SafeAreaView style={styles.container}>
      <TimeSelector arr1DTime={arr1DTime} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
