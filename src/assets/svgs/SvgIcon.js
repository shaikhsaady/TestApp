import React from 'react';
import {SvgXml} from 'react-native-svg';

const SvgIcon = ({xmlPath}) => {
  return <SvgXml xml={xmlPath} />;
};

export default SvgIcon;
