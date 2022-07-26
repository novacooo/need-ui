/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Input from './Input';

export default {
  title: 'NeedUI/Input',
  component: Input,
  argTypes: {
    label: {
      name: 'Label',
    },
  },
  args: {
    label: 'Label',
  },
} as ComponentMeta<typeof Input>;

const Template: ComponentStory<typeof Input> = (args) => <Input {...args} />;

export const StandardInput = Template.bind({});
StandardInput.args = {};
