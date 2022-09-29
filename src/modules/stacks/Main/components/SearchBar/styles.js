import React from 'react';
import {StyleSheet} from 'react-native';
import {widthPercentage} from '../../../../../constants/StyleVariables';
const styles = StyleSheet.create({
  wrapper: {
    marginTop: widthPercentage(3),
    flexDirection: 'row',
    alignItems: 'center',
    height: widthPercentage(7.4),
    borderColor: 'wjote',
    borderWidth: 1,
    width: widthPercentage(89),
    borderRadius: widthPercentage(3.7),
    backgroundColor: 'white',
    alignSelf: 'center',
  },
  textInput: {
    alignSelf: 'center',
    paddingLeft: widthPercentage(2.4),
    color: '#8fa2cc',
    fontSize: widthPercentage(3.3),
  },
  searchIndicator: {paddingLeft: widthPercentage(4)},
});
export default styles;
