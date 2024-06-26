import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {theme} from '../theme/Theme';

export default function Button({
  title,
  marginBottom,
  onPressHandler = () => null,
}) {
  return (
    <TouchableOpacity
      style={[
        styles.container,
        {marginBottom: marginBottom ? marginBottom : 20},
      ]}
      onPress={() => onPressHandler()}>
      <Text style={[styles.heading, {fontSize: 16}]}>{title ?? ''}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
    backgroundColor: theme.lightColor.red,
    marginHorizontal: 20,
    borderRadius: 12,
  },
  heading: {
    fontSize: 23,
    fontFamily: theme.fontFamily.InterMedium,
    color: theme.lightColor.white,
    fontWeight: theme.fontWeight.medium,
  },
});
