const Link = () => {
  const navigation = useNavigation() 
  return (
  <Button 
  title='Click'
  onPress={() => navigation.navigate('TweetDetails')}/>
)}

const Tweets = ({ navigation }) => (
  <Screen>
    <Text>Tweets</Text>
    <Button 
      title='Click'
      onPress={() => navigation.navigate('TweetDetails', { id: 1})}
    />
  </Screen>
)

const TweetDetails = ({ route }) => (
  <Screen>
    <Text>Tweet Details {route.params.id}</Text>
  </Screen>
)

const Stack = createStackNavigator()
const StackNavigator = () => (
  <Stack.Navigator
    screenOptions={{
      headerStyle: {backgroundColor: 'dodgerblue'},
      headerTintColor: 'white',
    }}>
    <Stack.Screen 
    name='Tweets' 
    component={Tweets} 
    options={{
      headerStyle: {backgroundColor: 'tomato'},
      headerTintColor: 'white',
      headerShown: false,
    }}/>
    <Stack.Screen 
    name='TweetDetails' 
    component={TweetDetails} 
    options={({ route }) => ({ title: route.params.id })} />
  </Stack.Navigator>
)

const Account = () => <Screen><Text>Account</Text></Screen>

const Tab = createBottomTabNavigator();

const TabNavigator = () => (
  <Tab.Navigator
  tabBarOptions={{
    activeBackgroundColor: 'tomato',
    activeTintColor: 'white',
    inactiveBackgroundColor: '#eee',
    inactiveTintColor: 'black'
  }}>
    <Tab.Screen name='Feed' component={StackNavigator} />
    <Tab.Screen name='Account' component={Account}/>
  </Tab.Navigator>
)