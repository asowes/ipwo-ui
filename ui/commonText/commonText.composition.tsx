import React from 'react';
import { Stack, ChakraProvider } from '@chakra-ui/react';
import { css } from '@emotion/css';
import { getTagStyle, CommonText } from '@asow-core/ipow-ui.common-text';
import theme from '@asow-core/ipow-ui.theme';

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
        <CommonText
          tagName={{ base: 'T1', md: 'T2', lg: 'T3', xl: 'TX1' }}
          as="h1"
          isTruncated
          color={primaryColor}
        >
          T1 See how Michaels can meet all of your Maker needs
        </CommonText>
        <div className={HeadingGroupTitle}>Text Responsive</div>
        <CommonText
          tagName={{ base: 'TX5', md: 'TX2', lg: 'TX3', xl: 'TX4' }}
          isTruncated
          color={primaryColor}
        >
          TX1 Find fun and interesting projects! Check out our fun family
          projects! Sign up for fun classes and events suitable for all ages and
          skill levels taught by our respected Teachers.
        </CommonText>
      </div>
      <div className={HeadingGroup}>
        <div className={HeadingGroupTitle}>TX1 - 10</div>
        <Stack spacing={50}>
          <CommonText tagName="TX1" isTruncated color={primaryColor}>
            TX1 Find fun and interesting projects! Check out our fun family
            projects! Sign up for fun classes and events suitable for all ages
            and skill levels taught by our respected Teachers.
          </CommonText>
          <CommonText tagName="TX2" isTruncated color={basicColor}>
            TX2 Find fun and interesting projects! Check out our fun family
            projects! Sign up for fun classes and events suitable for all ages
            and skill levels taught by our respected Teachers.
          </CommonText>
          <CommonText tagName="TX3" isTruncated color={basicColor}>
            TX3 Find fun and interesting projects! Check out our fun family
            projects! Sign up for fun classes and events suitable for all ages
            and skill levels taught by our respected Teachers.
          </CommonText>
          <CommonText tagName="TX4" isTruncated color={basicColor}>
            TX4 Find fun and interesting projects! Check out our fun family
            projects! Sign up for fun classes and events suitable for all ages
            and skill levels taught by our respected Teachers.
          </CommonText>
          <CommonText tagName="TX5" isTruncated color={basicColor}>
            TX5 Find fun and interesting projects! Check out our fun family
            projects! Sign up for fun classes and events suitable for all ages
            and skill levels taught by our respected Teachers.
          </CommonText>
          <CommonText tagName="TX6" color={basicColor}>
            TX6 Find fun and interesting projects! Check out our fun family
            projects! Sign up for fun classes and events suitable for all ages
            and skill levels taught by our respected Teachers.
          </CommonText>
          <CommonText tagName="TX7" isTruncated color={basicColor}>
            TX7 Find fun and interesting projects! Check out our fun family
            projects! Sign up for fun classes and events suitable for all ages
            and skill levels taught by our respected Teachers.
          </CommonText>
          <CommonText tagName="TX8" isTruncated color={basicColor}>
            TX8 Find fun and interesting projects! Check out our fun family
            projects! Sign up for fun classes and events suitable for all ages
            and skill levels taught by our respected Teachers.
          </CommonText>
          <CommonText tagName="TX9" isTruncated color={basicColor}>
            TX9 Find fun and interesting projects! Check out our fun family
            projects! Sign up for fun classes and events suitable for all ages
            and skill levels taught by our respected Teachers.
          </CommonText>
          <CommonText tagName="TX10" color={basicColor}>
            TX10 Find fun and interesting projects! Check out our fun family
            projects! Sign up for fun classes and events suitable for all ages
            and skill levels taught by our respected Teachers.
          </CommonText>
        </Stack>
      </div>
      <div className={HeadingGroup}>
        <div className={HeadingGroupTitle}>A-1 A-2</div>
        <CommonText tagName="A-1" color={primaryColor}>
          A-1 Find fun and interesting projects! Check out our fun family
          projects! Sign up for fun classes and events suitable for all ages and
          skill levels taught by our respected Teachers.
        </CommonText>
        <CommonText tagName="A-2" color={basicColor}>
          A-2 Find fun and interesting projects! Check out our fun family
          projects! Sign up for fun classes and events suitable for all ages and
          skill levels taught by our respected Teachers.
        </CommonText>
      </div>
    </ChakraProvider>
  );
}
