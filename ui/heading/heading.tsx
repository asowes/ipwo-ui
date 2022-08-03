import { forwardRef } from '@chakra-ui/system';
import { __DEV__ } from '@chakra-ui/utils';
import * as React from 'react';

import {
  getTagStyle,
  CommonText,
  TextProps as HeadingProps,
} from '@mik-technology/mik-ui.ui.common-text';

export type { HeadingProps };

export { getTagStyle };

export const Heading = forwardRef((props: HeadingProps, ref) => {
  const { tagName = 'T1', as = 'p' } = props;
  return <CommonText {...props} tagName={tagName} as={as} ref={ref} />;
});

if (__DEV__) {
  Heading.displayName = 'Heading';
}
