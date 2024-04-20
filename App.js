import React from 'react'
import { SafeAreaView, StatusBar, StyleSheet } from 'react-native'
import { Colors } from './source/Themes/Colors'
import AppRoutes from './source/Routes/AppRoutes'

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor={Colors.appColorDark} />
      <AppRoutes />
    </SafeAreaView>
  )
}

export default App

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
})