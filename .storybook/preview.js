import React from 'react';
import { NeedProvider } from '../src';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: grid;
  place-items: center;
  height: 100%;
`;

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};

export const decorators = [
  (Story) => (
    <NeedProvider>
      <Wrapper>
        <Story />
      </Wrapper>
    </NeedProvider>
  ),
];
