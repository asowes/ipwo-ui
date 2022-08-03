import React from 'react';
import { Stack, ChakraProvider } from '@chakra-ui/react';
import { css } from '@emotion/css';
import { Text, getTagStyle } from '@mik-technology/mik-ui.ui.text';
import theme from '@mik-technology/new_core.theme';
import 'michaels-ssr/styles/global.css';

const HeadingGroup = css`
  width: 1200px;
  height: fit-content;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 15px;
  border: 1px solid #dfdfdf;
  border-radius: 10px;
  padding: 20px;
  margin: 40px auto;
`;
const HeadingGroupTitle = css`
  font-size: 50px;
  color: #a5a5a5;
  margin-bottom: 15px;
  margin-left: 5px;
`;

const primaryColor = theme.colors.primary.default;

const basicColor = theme.colors.gray[600];

export function BasicText() {
  console.log('getTagStyle', getTagStyle('TX1'));
  return (
    <ChakraProvider>
      <div className={HeadingGroup}>
        <div className={HeadingGroupTitle}>Text Responsive</div>
        <Text
          tagName={{ base: 'TX5', md: 'TX2', lg: 'TX3', xl: 'TX4' }}
          isTruncated
          color={primaryColor}
        >
          TX1 Find fun and interesting projects! Check out our fun family projects! Sign
          up for fun classes and events suitable for all ages and skill levels taught by
          our respected Teachers.
        </Text>
      </div>
      <div className={HeadingGroup}>
        <div className={HeadingGroupTitle}>Mobile</div>
        <Text tagName="T2-M" isTruncated color={primaryColor}>
          T2-M Find fun and interesting projects! Check out our fun family projects! Sign
          up for fun classes and events suitable for all ages and skill levels taught by
          our respected Teachers.
        </Text>
        <Text tagName="T3-M" isTruncated color={primaryColor}>
          T3-M Find fun and interesting projects! Check out our fun family projects! Sign
          up for fun classes and events suitable for all ages and skill levels taught by
          our respected Teachers.
        </Text>
        <Text tagName="T4-M" isTruncated color={primaryColor}>
          T4-M Find fun and interesting projects! Check out our fun family projects! Sign
          up for fun classes and events suitable for all ages and skill levels taught by
          our respected Teachers.
        </Text>
        <Text tagName="TX1-M" isTruncated color={primaryColor}>
          TX1-M Find fun and interesting projects! Check out our fun family projects! Sign
          up for fun classes and events suitable for all ages and skill levels taught by
          our respected Teachers.
        </Text>
      </div>
      <div className={HeadingGroup}>
        <div className={HeadingGroupTitle}>TX1 - 10</div>
        <Stack spacing={50}>
          <Text tagName="TX1" isTruncated color={primaryColor}>
            TX1 Find fun and interesting projects! Check out our fun family projects! Sign
            up for fun classes and events suitable for all ages and skill levels taught by
            our respected Teachers.
          </Text>
          <Text tagName="TX2" isTruncated color={basicColor}>
            TX2 Find fun and interesting projects! Check out our fun family projects! Sign
            up for fun classes and events suitable for all ages and skill levels taught by
            our respected Teachers.
          </Text>
          <Text tagName="TX3" isTruncated color={basicColor}>
            TX3 Find fun and interesting projects! Check out our fun family projects! Sign
            up for fun classes and events suitable for all ages and skill levels taught by
            our respected Teachers.
          </Text>
          <Text tagName="TX4" isTruncated color={basicColor}>
            TX4 Find fun and interesting projects! Check out our fun family projects! Sign
            up for fun classes and events suitable for all ages and skill levels taught by
            our respected Teachers.
          </Text>
          <Text tagName="TX5" isTruncated color={basicColor}>
            TX5 Find fun and interesting projects! Check out our fun family projects! Sign
            up for fun classes and events suitable for all ages and skill levels taught by
            our respected Teachers.
          </Text>
          <Text tagName="TX6" color={basicColor}>
            TX6 Find fun and interesting projects! Check out our fun family projects! Sign
            up for fun classes and events suitable for all ages and skill levels taught by
            our respected Teachers.
          </Text>
          <Text tagName="TX7" isTruncated color={basicColor}>
            TX7 Find fun and interesting projects! Check out our fun family projects! Sign
            up for fun classes and events suitable for all ages and skill levels taught by
            our respected Teachers.
          </Text>
          <Text tagName="TX8" isTruncated color={basicColor}>
            TX8 Find fun and interesting projects! Check out our fun family projects! Sign
            up for fun classes and events suitable for all ages and skill levels taught by
            our respected Teachers.
          </Text>
          <Text tagName="TX9" isTruncated color={basicColor}>
            TX9 Find fun and interesting projects! Check out our fun family projects! Sign
            up for fun classes and events suitable for all ages and skill levels taught by
            our respected Teachers.
          </Text>
          <Text tagName="TX10" color={basicColor}>
            TX10 Find fun and interesting projects! Check out our fun family projects!
            Sign up for fun classes and events suitable for all ages and skill levels
            taught by our respected Teachers.
          </Text>
        </Stack>
      </div>
      <div className={HeadingGroup}>
        <div className={HeadingGroupTitle}>A-1 A-2</div>
        <Text tagName="A-1" color={primaryColor}>
          A-1 Find fun and interesting projects! Check out our fun family projects! Sign
          up for fun classes and events suitable for all ages and skill levels taught by
          our respected Teachers.
        </Text>
        <Text tagName="A-2" color={basicColor}>
          A-2 Find fun and interesting projects! Check out our fun family projects! Sign
          up for fun classes and events suitable for all ages and skill levels taught by
          our respected Teachers.
        </Text>
      </div>
      <div className={HeadingGroup}>
        <div className={HeadingGroupTitle}>B-1 B-2 B-3</div>
        <Text tagName="B-1" color={primaryColor}>
          B-1 Find fun and interesting projects! Check out our fun family projects! Sign
          up for fun classes and events suitable for all ages and skill levels taught by
          our respected Teachers.
        </Text>
        <Text tagName="B-2" color={basicColor}>
          B-2 Find fun and interesting projects! Check out our fun family projects! Sign
          up for fun classes and events suitable for all ages and skill levels taught by
          our respected Teachers.
        </Text>
        <Text tagName="B-3" color={basicColor}>
          B-3 Find fun and interesting projects! Check out our fun family projects! Sign
          up for fun classes and events suitable for all ages and skill levels taught by
          our respected Teachers.
        </Text>
      </div>
      <div className={HeadingGroup}>
        <div className={HeadingGroupTitle}>C-1 C-2 C-3</div>
        <Text tagName="C-1" color={primaryColor}>
          C-1 Find fun and interesting projects! Check out our fun family projects! Sign
          up for fun classes and events suitable for all ages and skill levels taught by
          our respected Teachers.
        </Text>
        <Text tagName="C-2" color={basicColor}>
          C-2 Find fun and interesting projects! Check out our fun family projects! Sign
          up for fun classes and events suitable for all ages and skill levels taught by
          our respected Teachers.
        </Text>
        <Text tagName="C-3" color={basicColor}>
          C-3 Find fun and interesting projects! Check out our fun family projects! Sign
          up for fun classes and events suitable for all ages and skill levels taught by
          our respected Teachers.
        </Text>
      </div>
    </ChakraProvider>
  );
}
