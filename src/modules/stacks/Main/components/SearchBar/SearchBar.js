import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  FlatList,
  ActivityIndicator,
} from 'react-native';
import React from 'react';
import {widthPercentage} from '../../../../../constants/StyleVariables';

import styles from './styles';

const SearchBar = ({value, onChangeText, isLoading}) => {
  return (
    <View>
      <View style={styles.wrapper}>
        {isLoading && (
          <ActivityIndicator
            size="small"
            color="#0000ff"
            style={styles.searchIndicator}
          />
        )}
        <TextInput
          style={styles.textInput}
          onChangeText={onChangeText}
          value={value}
          placeholder="Search"
          placeholderTextColor="#8fa2cc"
        />
      </View>
    </View>
  );
};

export default SearchBar;
