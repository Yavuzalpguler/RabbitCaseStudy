import {
  ActivityIndicator,
  SafeAreaView,
  Platform,
  NativeModules,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';

import MainNavigator from '../../navigation/MainStack';
import AuthNavigator from '../../navigation/AuthStack';
import {useSelector, useDispatch} from 'react-redux';
import {retrieveData} from '../../common/Utility';

const Router = () => {
  const dispatch = useDispatch();
  const [hasUser, setHasUser] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const user = useSelector(state => state.main.user);

  const handlePass = async () => {
    setIsLoading(true);
    const access_token = await retrieveData('access_token');
    if (access_token !== null && access_token !== undefined) {
      setHasUser(true);
      setIsLoading(false);
      return;
    }
    setIsLoading(false);
    setHasUser(false);
  };

  useEffect(() => {
    if (!user?.loading) {
      handlePass();
    }
  }, [user?.success]);

  return isLoading ? (
    <View style={{flex: 1, backgroundColor: 'rgb(202,82,77)'}}>
      <ActivityIndicator
        size="large"
        color="rgb(255,255,255)"
        style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}
      />
    </View>
  ) : hasUser ? (
    <MainNavigator />
  ) : (
    <AuthNavigator />
  );
};

export default Router;
