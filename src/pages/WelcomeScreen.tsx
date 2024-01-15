import React from 'react';
import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const GRADIENT = ['#264653', '#2a9d8f', '#e9c46a'];

export default function WelcomeScreen() {
  return (
    <LinearGradient colors={GRADIENT} style={styles.container}>
      <SafeAreaView style={styles.innerContainer}>
        <Text>Welcome Bitches</Text>
      </SafeAreaView>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  innerContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
