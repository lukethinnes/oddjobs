import React, { useContext, useState } from 'react';
import { Image, StyleSheet } from 'react-native';

import * as Yup from 'yup';

import authApi from '../api/auth'
import jwtDecode from 'jwt-decode'
import Screen from '../components/Screen';
import { AppForm, AppFormField, ErrorMessage, SubmitButton } from '../components/forms'
import AuthContext from '../auth/context';
import authStorage from '../auth/storage';

const validationSchema = Yup.object().shape({
  email: Yup.string().required().email().label('Email'),
  password: Yup.string().required().min(4).matches().label('Password')
})

function LoginScreen(props) {
  const authContext = useContext(AuthContext)
  const [loginFailed, setLoginFailed] = useState(false)

  const handleSubmit = async ({ email, password }) => {
    const result = await authApi.login(email, password)
    if(!result.ok) return setLoginFailed(true)
    setLoginFailed(false)
    const user = jwtDecode(result.data)
    authContext.setUser(user)
    authStorage.storeToken(result.data)
  }

  return (
    <Screen style={styles.container}>
      <Image style={styles.logo} source={require('../assets/oddjoblogo.png')}/>
      <AppForm
      initialValues={{ email: '', password: ''}}
      onSubmit={handleSubmit}
      validationSchema={validationSchema}
      >
        <ErrorMessage error='Invalid email and/or password.' visible={loginFailed} />
        <AppFormField
            autoCapitalize='none'
            autoCorrect={false}
            icon='email'
            name='email'
            placeholder='Email'
            />
        <AppFormField
          autoCapitalize='none'
          autoCorrect={false}
          icon='lock'
          name='password'
          placeholder='Password'
          secureTextEntry={true}
          textContentType='password'
        />   
      <SubmitButton title='Login' />
      </AppForm>  
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  logo: {
    width: 80,
    height: 80,
    alignSelf: 'center',
    marginTop: 50,
    marginBottom: 20,
  }
});

export default LoginScreen;