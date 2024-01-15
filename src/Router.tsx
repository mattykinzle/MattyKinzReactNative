import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import WelcomeScreen from './pages/WelcomeScreen';

const Stack = createNativeStackNavigator();

export default function Router() {
  const unAuthStack = () => {
    return (
      <Stack.Navigator initialRouteName="Welcome">
        <Stack.Screen
          name="Welcome"
          component={WelcomeScreen}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    );
  };

  // const AuthStack = () => {
  //   return (
  //     <Stack.Navigator>
  //       <Stack.Screen
  //         name="Home"
  //         component={HomeScreen}
  //         options={{title: 'Welcome'}}
  //       />
  //       <Stack.Screen name="Profile" component={ProfileScreen} />
  //     </Stack.Navigator>
  //   );
  // };

  return <NavigationContainer>{unAuthStack()}</NavigationContainer>;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
