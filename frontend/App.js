import React, { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native'
import AuthNavigator from './app/navigation/AuthNavigation';
import navigationTheme from './app/navigation/navigationTheme';
import AppNavigator from './app/navigation/AppNavigator';
import AuthContext from './app/auth/context';
import authStorage from './app/auth/storage'

export default function App() {

  const [user, setUser] = useState()

  const restoreUser = async () => {
    const user = await authStorage.getToken()
    if(!user) return setUser(jwtDecode(user))
  }

  useEffect(() => {
    authStorage.getToken
  })

    return (
      <AuthContext.Provider value={{ user, setUser }}>
        <NavigationContainer theme={navigationTheme}>
          {user ? <AppNavigator /> : <AuthNavigator />}
        </NavigationContainer>
      </AuthContext.Provider>
    );
}
