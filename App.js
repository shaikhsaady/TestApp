/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useEffect} from 'react';
import {ThemeProvider, theme} from './src/theme/Theme';
import Stack from './src/stacks/Stack';
import {SafeAreaView} from 'react-native-safe-area-context';
import {
  NavigationContainer,
  createNavigationContainerRef,
} from '@react-navigation/native';
import Orientation from 'react-native-orientation-locker';

// navigation ref
export const navigationRef = createNavigationContainerRef();

function App() {
  // lock orientation
  useEffect(() => {
    Orientation.lockToPortrait();
  }, []);
  return (
    <SafeAreaView style={{flex: 1}}>
      <ThemeProvider theme={theme}>
        <NavigationContainer ref={navigationRef}>
          <Stack />
        </NavigationContainer>
      </ThemeProvider>
    </SafeAreaView>
  );
}

export default App;
