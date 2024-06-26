import {Text} from 'react-native';
import React from 'react';
import {theme} from '../theme/Theme';

export default function ValidationError({errorTitle}) {
  return (
    <Text
      style={{
        fontSize: 12,
        fontFamily: theme.fontFamily.InterRegular,
        color: theme.lightColor.red,
        marginTop: 6,
        paddingHorizontal: 8,
        fontWeight: theme.fontWeight.normal,
      }}>
      {errorTitle}
    </Text>
  );
}
