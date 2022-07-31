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

export const SolidSmall = Template.bind({});
SolidSmall.args = {
  variant: 'solid',
  size: 'small',
};

export const SolidStandard = Template.bind({});
SolidStandard.args = {
  variant: 'solid',
  size: 'standard',
};

export const SolidLarge = Template.bind({});
SolidLarge.args = {
  variant: 'solid',
  size: 'large',
};

export const OutlineSmall = Template.bind({});
OutlineSmall.args = {
  variant: 'outline',
  size: 'small',
};

export const OutlineStandard = Template.bind({});
OutlineStandard.args = {
  variant: 'outline',
  size: 'standard',
};

export const OutlineLarge = Template.bind({});
OutlineLarge.args = {
  variant: 'outline',
  size: 'large',
};

export const GhostSmall = Template.bind({});
GhostSmall.args = {
  variant: 'ghost',
  size: 'small',
};

export const GhostStandard = Template.bind({});
GhostStandard.args = {
  variant: 'ghost',
  size: 'standard',
};

export const GhostLarge = Template.bind({});
GhostLarge.args = {
  variant: 'ghost',
  size: 'large',
};
