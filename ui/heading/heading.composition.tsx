import React from 'react';
import { Stack, ChakraProvider } from '@chakra-ui/react';
import { css } from '@emotion/css';
import { Heading, getTagStyle } from '@mik-technology/mik-ui.ui.heading';
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

export function BasicHeading() {
  console.log('getTagStyle', getTagStyle('T1'));
  return (
    <ChakraProvider>
      <div className={HeadingGroup}>
        <div className={HeadingGroupTitle}>Title Responsive</div>
        <Heading
          tagName={{ base: 'T1', md: 'T2', lg: 'T3', xl: 'TX1' }}
          as="h1"
          isTruncated
          color={theme.colors.primary.default}
        >
          T1 See how Michaels can meet all of your Maker needs
        </Heading>
      </div>
      <div className={HeadingGroup}>
        <div className={HeadingGroupTitle}>Title</div>
        <Stack spacing={10}>
          <Heading tagName="T1" as="h1" isTruncated color={theme.colors.primary.default}>
            T1 See how Michaels can meet all of your Maker needs
          </Heading>
          <Heading tagName="T2" as="h2" color={theme.colors.gray[1000]}>
            T2 See how Michaels can meet all of your Maker needs
          </Heading>
          <Heading tagName="T3" as="h3" isTruncated color={theme.colors.gray[600]}>
            T3 See how Michaels can meet all of your Maker needs
          </Heading>
          <Heading tagName="T4" as="h4" isTruncated color={theme.colors.gray[500]}>
            T4 See how Michaels can meet all of your Maker needs
          </Heading>
          <Heading tagName="T5" as="h5" isTruncated color={theme.colors.gray[400]}>
            T5 See how Michaels can meet all of your Maker needs
          </Heading>
          <Heading tagName="T6" as="h6" isTruncated color={theme.colors.gray[300]}>
            T6 See how Michaels can meet all of your Maker needs
          </Heading>
        </Stack>
      </div>
    </ChakraProvider>
  );
}
