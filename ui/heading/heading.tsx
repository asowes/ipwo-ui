import { forwardRef } from '@chakra-ui/system';
import { __DEV__ } from '@chakra-ui/utils';
import * as React from 'react';
import {
  CommonText,
  getTagStyle,
  TextProps as HeadingProps,
} from '@asow-core/ipow-ui.common-text';

export type { HeadingProps };

export { getTagStyle };

export const Heading = forwardRef((props: HeadingProps, ref) => {
  const { tagName = 'T1', as = 'p' } = props;
  return <CommonText {...props} tagName={tagName} as={as} ref={ref} />;
});

if (__DEV__) {
  Heading.displayName = 'Heading';
}
