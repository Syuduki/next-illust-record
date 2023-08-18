import type { Meta, StoryObj } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import { CreateUserInputForm } from './CreateUserInputForm';

const meta: Meta<typeof CreateUserInputForm> = {
  title: 'Features/CreateUserInputForm',
  component: CreateUserInputForm,
};

export default meta;
type Story = StoryObj<typeof CreateUserInputForm>;

export const noData: Story = {
  args: {
    onAccept: action('onAccept'),
  },
};

export const entered: Story = {
  args: {
    onAccept: action('onAccept'),
    onClickLogin: action('onClickLogin'),
    _StorybookCreateFn: action('Accept'),
    _StorybookData: {
      userName: 'storybook',
      loginId: 'storybook123',
      email: 'illustRecord@example.com',
      password: 'story12345',
      afterPassword: 'story12345',
    },
  },
};

export const afterPassword_mismatch: Story = {
  args: {
    onAccept: action('onAccept'),
    onClickLogin: action('onClickLogin'),
    _StorybookCreateFn: action('Accept'),
    _StorybookData: {
      userName: 'storybook',
      loginId: 'storybook123',
      email: 'illustRecord@example.com',
      password: 'story12345',
      afterPassword: 'story123',
    },
  },
};
