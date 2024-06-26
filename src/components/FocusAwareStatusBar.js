import React from 'react';
import {StatusBar} from 'react-native';
import {useIsFocused} from '@react-navigation/native';
import {theme} from '../theme/Theme';

const FocusAwareStatusBar = props => {
  const isFocused = useIsFocused();
  return isFocused ? (
    <StatusBar backgroundColor={theme.lightColor.background} {...props} />
  ) : null;
};
export default FocusAwareStatusBar;
