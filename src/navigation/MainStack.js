import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import MainScreen from '../modules/stacks/Main/MainScreen';
import MainDetail from '../modules/stacks/Main/screens/MainDetail/MainDetail';

const Stack = createNativeStackNavigator();

const MainNavigator = props => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={'MainScreen'}
        component={MainScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name={'MainDetail'}
        component={MainDetail}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default MainNavigator;
