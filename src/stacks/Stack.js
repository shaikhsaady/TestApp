import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from '../screens/Home';

const Stacks = createNativeStackNavigator();

export default function Stack() {
  const options = {
    gestureEnabled: true,
    gestureDirection: 'horizontal',
    headerShown: false,
  };
  return (
    <Stacks.Navigator
      initialRouteName={'Home'}
      screenOptions={{headerShown: options.headerShown}}>
      <Stacks.Screen name="Home" component={Home} options={options} />
    </Stacks.Navigator>
  );
}
