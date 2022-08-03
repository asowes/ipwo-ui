import { forwardRef } from '@chakra-ui/system';
import { __DEV__ } from '@chakra-ui/utils';
import * as React from 'react';
import {
  getTagStyle,
  CommonText,
  TextProps,
} from '@mik-technology/mik-ui.ui.common-text';

export type { TextProps };
export { getTagStyle };

export const Text = forwardRef((props: TextProps, ref) => {
  const { tagName = 'TX1', as = 'p' } = props;
  return <CommonText {...props} tagName={tagName} as={as} ref={ref} />;
});

if (__DEV__) {
  Text.displayName = 'Text';
}
