import React, { useState } from 'react';
import { Image, StyleSheet } from 'react-native';
import * as Yup from 'yup';

import Screen from '../components/Screen'
import AppButton from '../components/Button'
import AppForm from '../components/forms/Form'
import AppFormField from '../components/forms/FormField'
import authApi from '../api/auth';
import usersApi from '../api/users'
const validationSchema = Yup.object().shape({
    name: Yup.string().required().label('Name'),
    email: Yup.string().required().email().label('Email'),
    password: Yup.string().required().min(4).matches().label('Password')
});


function RegisterScreen(props) {

  const registerApi = useApi(usersApi.register);
  const loginApi = useApi(authApi.login);
  const auth = useAuth();
  const [error, setError] = useState();

  const handleSubmit = async (userInfo) => {
    const result = await registerApi.request(userInfo);

    if (!result.ok) {
      if (result.data) setError(result.data.error);
      else {
        setError("An unexpected error occurred.");
        console.log(result);
      }
      return;
    }

    const { data: authToken } = await loginApi.request(
      userInfo.email,
      userInfo.password
    );
    auth.logIn(authToken);
  };

  return (
    <Screen style={styles.container}>
        <Image style={styles.logo} source={require('../assets/oddjoblogo.png')}/>
        <AppForm
          initialValues={{name: '', email: '', password: '',}}
          onSubmit={() => console.log()}
          validationSchema={validationSchema}>
        <AppFormField
          autoCorrect={false}
          icon='account'
          name='name'
          placeholder='Name'
          textContentType='name'
        />
        <AppFormField
          autoCapitalize='none'
          autoCorrect={false}
          icon='email'
          keyboardType='email-address'
          name='email'
          placeholder='Email'
          textContentType='emailAddress'
        />
        <AppFormField 
          autoCapitalize='none'
          autoCorrect={false}
          icon='lock'
          name='password'
          placeholder='Password'
          secureTextEntry
          textContentType='password'
        />
        <AppButton 
          title='Register' 
        />
        </AppForm>

    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
        padding: 10
    },
    logo: {
      width: 80,
      height: 80,
      alignSelf: 'center',
      marginTop: 50,
      marginBottom: 20,
    }
});

export default RegisterScreen;