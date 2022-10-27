import React from 'react'
import { ActivityIndicator, StyleSheet, Text, View } from 'react-native'

export const Loading = () => {
  return (
    <View style={styles.activityContainer}>
      <ActivityIndicator
        color='#7076C9'
        size={80}
      />
      <Text style={{ color: '#7076C9', textAlign: 'center', fontFamily: 'FingerPaint-Regular' }}>Fetching data...</Text>
    </View>
  )
}


const styles = StyleSheet.create({
  activityContainer: {
    flex: 1, 
    justifyContent: 'center', 
    backgroundColor: '#FFFFFF'
  },
})
