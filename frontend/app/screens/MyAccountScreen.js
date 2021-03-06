import React, { useContext } from 'react'
import { FlatList, StyleSheet, View } from 'react-native';
import AuthContext from '../auth/context';
import authStorage from '../auth/storage';
import useAuth from '../auth/useAuth';
import Icon from '../components/Icon';
import ListItem from '../components/lists/ListItem';
import ListItemSeparator from '../components/lists/ListItemSeparator';
import Screen from '../components/Screen';
import colors from '../config/colors';

const menuItems = [
  { title: 'My Listings',
  icon: {
    name: 'format-list-bulleted',
    backgroundColor: colors.primary,
  }},
  { title: 'Messages (4)',
  icon: {
    name: 'email',
    backgroundColor: colors.secondary,
  },
  targetScreen: 'Messages'
},
]
function MyAccountScreen({ navigation }) {
  const { user, setUser } = useAuth()

  const handleLogOut = () => {
    setUser(null)
    authStorage.removeToken()
  }

  return (
    <Screen style={styles.screen}>
      <View style={styles.container}> 
      <ListItem
      title={user.name}
      subTitle={user.email}
      image={require('../assets/me.png')}
      />
      </View>
      <View>
        <FlatList 
          data={menuItems}
          keyExtractor={item => item.title} 
          ItemSeparatorComponent={ListItemSeparator}
          renderItem={({ item }) => 
        <ListItem 
          title={item.title}
          IconComponent={
            <Icon 
              name={item.icon.name}
              backgroundColor={item.icon.backgroundColor} />}
              onPress={() => navigation.navigate(item.targetScreen)}
          />}/> 
        </View>
        <ListItem
          title='Logout'
          ItemSeparatorComponent={ListItemSeparator}
          IconComponent={
            <Icon name='logout' backgroundColor='#ffe66e'
          />}
          onPress={handleLogOut}
        />
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 20
  },
  screen: {
    backgroundColor: colors.light,
  }
});

export default MyAccountScreen;