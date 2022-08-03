import { forwardRef } from '@chakra-ui/system';
import { __DEV__ } from '@chakra-ui/utils';
import * as React from 'react';
import { enumList, getEnumProperty } from './enum';

import {
  Text as ChakraText,
  TextProps as ChakraTextProps,
} from '@chakra-ui/react';

import { isObject, isString } from '@asow-core/ipow-ui.utils';

interface ResponsiveObj {
  base?: number | string;
  md?: string | number;
  lg?: string | number;
  xl?: string | number;
}

export interface TextProps extends ChakraTextProps {
  tagName: 'T1' | 'T2' | 'T3' | 'T4' | 'T5' | 'T6' | string | ResponsiveObj;
}

export function getTagStyle(key) {
  return enumList[key];
}

export const CommonText = forwardRef((props: TextProps, ref) => {
  const { tagName, as, className, ...rest } = props;
  let tagStyle = {};
  let fontSize = {};
  let fontWeight = {};
  let lineHeight = {};
  let fontFamily = {};
  if (isString(tagName)) {
    tagStyle = enumList[tagName] || {};
  }
  if (isObject(tagName)) {
    fontSize = getEnumProperty(tagName, 'fontSize');

    fontWeight = getEnumProperty(tagName, 'fontWeight');

    lineHeight = getEnumProperty(tagName, 'lineHeight');

    fontFamily = getEnumProperty(tagName, 'fontFamily');
  }
  return (
    <ChakraText
      as={as}
      fontFamily={fontFamily}
      fontSize={fontSize}
      fontWeight={fontWeight}
      lineHeight={lineHeight}
      {...tagStyle}
      {...rest}
      ref={ref}
      tabIndex={0}
      className={className}
    />
  );
});

if (__DEV__) {
  CommonText.displayName = 'CommonText';
}
