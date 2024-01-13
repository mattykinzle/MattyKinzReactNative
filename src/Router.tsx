import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

function Router() {
  return (
    <View style={styles.container}>
      <Text>Hellos Worlds!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default Router;
