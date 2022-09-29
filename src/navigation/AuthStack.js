import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Auth from '../modules/stacks/Auth/screens/Auth';

const Stack = createNativeStackNavigator();

const AuthNavigator = props => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={'AuthScreen'}
        component={Auth}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default AuthNavigator;
