import React from 'react';
import {StyleSheet} from 'react-native';
import {widthPercentage} from '../../../../../constants/StyleVariables';
const styles = StyleSheet.create({
  imageContainer: {
    width: widthPercentage(100),
    height: widthPercentage(50),
    backgroundColor: 'coral',
  },
  backWrapper: {
    width: widthPercentage(7),
    height: widthPercentage(7),
    borderRadius: widthPercentage(7),
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'red',
    marginLeft: widthPercentage(5),
  },
  backButton: {fontSize: widthPercentage(5), fontWeight: '700', color: 'white'},
  videoItemWrapper: {
    backgroundColor: 'white',
    width: widthPercentage(90),
    minHeight: widthPercentage(10),
    paddingBottom: widthPercentage(4),
    margin: widthPercentage(5),

    borderBottomLeftRadius: widthPercentage(5),
    borderBottomRightRadius: widthPercentage(5),
    justifyContent: 'center',

    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  thumbNail: {
    width: widthPercentage(90),
    height: widthPercentage(67.5),
  },
  videoDesc: {
    textAlign: 'left',
    marginTop: widthPercentage(4),
    marginLeft: widthPercentage(4),
    fontSize: widthPercentage(3),
    color: '#11180f',
  },
});
export default styles;
