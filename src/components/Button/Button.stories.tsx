/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Button from './Button';

export default {
  title: 'NeedUI/Button',
  component: Button,
  argTypes: {
    children: {
      name: 'Text',
    },
    size: {
      name: 'Size',
    },
    variant: {
      name: 'Variant',
    },
  },
  args: {
    children: 'Click me',
  },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args}>{args.children}</Button>;

export const Small = Template.bind({});
Small.args = {
  size: 'small',
};

export const Standard = Template.bind({});
Standard.args = {
  size: 'standard',
};

export const Large = Template.bind({});
Large.args = {
  size: 'large',
};
