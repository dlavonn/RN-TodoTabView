import { View, Text } from 'react-native'
import React from 'react'
import SettingScreen from '../settings/SettingScreen'
import ItemScreen from '../item/ItemScreen'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../home/HomeScreen';



const  HomeStackScreen = () => {

  HomeStack = createNativeStackNavigator()

   
    // Create sub stack navigator so we can navigate
    // stack we add our screens 
  return (
    <HomeStack.Navigator>
        <HomeStack.Screen name="Home" component={HomeScreen} />
        <HomeStack.Screen name="Settings" component={SettingScreen} />
        <HomeStack.Screen name="Item" component={ItemScreen} />
    </HomeStack.Navigator>
  )
}

export default HomeStackScreen