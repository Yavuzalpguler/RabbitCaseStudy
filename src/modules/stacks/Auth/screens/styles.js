import React from 'react';
import {StyleSheet} from 'react-native';
import {widthPercentage} from '../../../../constants/StyleVariables';
const styles = StyleSheet.create({
  headerWrapper: {alignSelf: 'center', marginTop: widthPercentage(20)},
  loginText: {
    color: 'white',
    fontWeight: '800',
    fontSize: widthPercentage(10),
  },
  authWrapper: {backgroundColor: 'rgb(202,82,77)', flex: 1},
  loginCTA: {
    backgroundColor: '#FF5A5F',
    width: widthPercentage(89),
    alignSelf: 'center',
    height: widthPercentage(11),
    borderRadius: widthPercentage(2),
    marginTop: widthPercentage(20),
    justifyContent: 'center',
    alignItems: 'center',
  },
  loginCTAText: {
    color: 'white',
    fontSize: widthPercentage(4),
    fontWeight: 'bold',
  },
});
export default styles;
