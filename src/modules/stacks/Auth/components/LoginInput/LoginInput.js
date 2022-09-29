import {View, Text, TextInput} from 'react-native';
import React from 'react';
import {widthPercentage} from '../../../../../constants/StyleVariables';
import styles from './styles';
const LoginInput = ({
  value,
  onChangeText,

  placeholder,
  error,
  touched,
  secureTextEntry,
}) => {
  return (
    <>
      <View
        style={[
          styles.wrapper,
          error && touched && styles.error,
          placeholder === 'Password' && {
            marginTop: widthPercentage(10),
          },
        ]}>
        <TextInput
          value={value}
          onChangeText={onChangeText}
          placeholder={placeholder}
          style={styles.textInput}
          secureTextEntry={secureTextEntry}
        />
      </View>
      {error && touched && <Text style={styles.errorText}>{error}</Text>}
    </>
  );
};

export default LoginInput;
