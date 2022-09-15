import { View, Text, Button } from 'react-native'
import React from 'react'

export default function ItemScreen({navigation}) {
  return (
    <View>

        
      {/* Navigation to another tab */}
      <Text>ItemScreen</Text>
      <Button 
        title="Home"
        onPress={() => navigation.navigate('Home')}
        />
        <Button 
        title="Setting"
        onPress={() => navigation.navigate('Settings')}
        />
    </View>
  )
}