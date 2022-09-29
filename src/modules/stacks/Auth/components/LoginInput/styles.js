import React from 'react';
import {StyleSheet} from 'react-native';
import {widthPercentage} from '../../../../../constants/StyleVariables';
const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: 'white',
    width: widthPercentage(89),
    alignSelf: 'center',
    height: widthPercentage(11),
    borderRadius: widthPercentage(2),
    marginTop: widthPercentage(20),
    justifyContent: 'center',
    alignItems: 'center',
  },
  error: {
    borderColor: 'red',
    borderWidth: 3,
  },
  textInput: {
    width: widthPercentage(80),
    height: widthPercentage(10),
    fontSize: widthPercentage(4),
  },
  errorText: {
    color: 'white',
    fontSize: widthPercentage(3),
    marginTop: widthPercentage(2),
    marginLeft: widthPercentage(8),
  },
});
export default styles;
