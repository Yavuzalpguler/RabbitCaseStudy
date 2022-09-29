import {View, Text, TouchableOpacity, ActivityIndicator} from 'react-native';
import React, {useEffect} from 'react';
import {widthPercentage} from '../../../../constants/StyleVariables';
import LoginInput from '../components/LoginInput/LoginInput';
import {useDispatch, useSelector} from 'react-redux';
import {mockLogin, updateMainCustomState} from '../../+store/Main/Main.actions';
import styles from './styles';
const Auth = () => {
  const dispatch = useDispatch();

  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [emailError, setEmailError] = React.useState('');
  const [passwordError, setPasswordError] = React.useState('');
  const [isEmailValid, setIsEmailValid] = React.useState(false);
  const [isPasswordValid, setIsPasswordValid] = React.useState(false);

  const [isEmailTouched, setIsEmailTouched] = React.useState(false);
  const [isPasswordTouched, setIsPasswordTouched] = React.useState(false);
  const user = useSelector(state => state.main.user);

  useEffect(() => {
    if (user?.user?.success) {
      alert('Login Successful');
    } else if (user?.error) {
      alert(user?.error);
    }
  }, [user]);

  const validateEmail = email => {
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
  };

  const validatePassword = password => {
    return password.length >= 6;
  };

  const handleEmailChange = email => {
    setEmail(email);
    setIsEmailTouched(true);
    if (validateEmail(email)) {
      setEmailError('');
      setIsEmailValid(true);
    } else {
      setEmailError('Please enter a valid email');
      setIsEmailValid(false);
    }
  };

  const handlePasswordChange = password => {
    setPassword(password);
    setIsPasswordTouched(true);
    if (validatePassword(password)) {
      setPasswordError('');
      setIsPasswordValid(true);
    } else {
      setPasswordError('Password must be at least 6 characters');
      setIsPasswordValid(false);
    }
  };

  const handleLogin = () => {
    if (isEmailValid && isPasswordValid) {
      dispatch(updateMainCustomState('user', {success: false, error: null}));

      dispatch(mockLogin(email, password));
    } else {
      console.log('Invalid');
    }

    if (!isEmailValid) {
      setEmailError('Please enter a valid email');
    }

    if (!isPasswordValid) {
      setPasswordError('Password must be at least 6 characters');
    }
  };

  const renderHeader = () => {
    return (
      <View style={styles.headerWrapper}>
        <Text style={styles.loginText}>Login</Text>
      </View>
    );
  };

  return (
    <View style={styles.authWrapper}>
      {renderHeader()}

      <LoginInput
        value={email}
        onChangeText={handleEmailChange}
        placeholder="Email"
        error={emailError}
        touched={isEmailTouched}
      />

      <LoginInput
        value={password}
        onChangeText={handlePasswordChange}
        placeholder="Password"
        error={passwordError}
        touched={isPasswordTouched}
        secureTextEntry={true}
      />

      <TouchableOpacity
        style={[
          styles.loginCTA,
          !isEmailValid || !isPasswordValid
            ? {backgroundColor: 'rgb(235, 235, 228)'}
            : null,
        ]}
        onPress={handleLogin}>
        {user?.loading ? (
          <ActivityIndicator size="small" color="white" />
        ) : (
          <Text
            style={[
              styles.loginCTAText,
              !isEmailValid || !isPasswordValid
                ? {color: 'rgb(90, 90, 90)'}
                : null,
            ]}>
            Login
          </Text>
        )}
      </TouchableOpacity>
    </View>
  );
};

export default Auth;
