import { View, Text, Button } from 'react-native'
import React from 'react'

export default function HomeScreen(props) {
  return (
    <View>
      {/* Navigation to another tab */}
      <Button 
        title="Item"
        onPress={() => props.navigation.navigate('Item')}
        />
        <Button 
        title="Setting"
        onPress={() => navigation.navigate('Settings')}
        />
    </View>
  )
}