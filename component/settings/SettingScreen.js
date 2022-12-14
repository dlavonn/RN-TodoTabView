import { View, Text, Button } from 'react-native'
import React from 'react'

export default function SettingScreen({navigation}) {

  return (
    <View>

      {/* Navigation to another tab */}
      <Text>SettingScreen</Text>
      <Button 
        title="Item"
        onPress={() => navigation.navigate('Itam')}
        />
        <Button 
        title="Home"
        onPress={() => navigation.navigate('Home')}
        />
    </View>
  )
}