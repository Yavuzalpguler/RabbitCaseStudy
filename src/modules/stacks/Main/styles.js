import React from 'react';
import {StyleSheet} from 'react-native';
import {
  heightPercentage,
  widthPercentage,
} from '../../../constants/StyleVariables';
const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: heightPercentage(100),
    width: widthPercentage(100),
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'red',
  },
  map: {
    height: heightPercentage(100),
    width: widthPercentage(100),
  },
});
export default styles;
