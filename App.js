import { StatusBar } from 'expo-status-bar';
import { Alert, StyleSheet, Text, View } from 'react-native';
import Starter from './component/Starter';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './component/home/HomeScreen';
import ItemScreen from './component/item/ItemScreen';
import SettingScreen from './component/settings/SettingScreen';
import HomeStack from './component/tabnabsub/HomeStackScreen'

export default function App() {

  //there are some properties that are set when you initialize the tab navigator and others that can be customized per-screen in options.
  // Initalizing tab obj
  // Hide inner header with: HeaderShown: false
  const Tab = createBottomTabNavigator();

  return (
      <NavigationContainer>
        <Tab.Navigator
        screenOptions={{ headerShown: false }}>
          <Tab.Screen name="Home" component={HomeStack} /> 
          <Tab.Screen  name="Item" component={ItemScreen}/>
          <Tab.Screen name="Settings" component={SettingScreen} />
        </Tab.Navigator>
      </NavigationContainer>
  );r
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
