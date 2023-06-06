import type { Meta, StoryObj } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import { LoginInputForm } from './LoginInputForm';

const meta: Meta<typeof LoginInputForm> = {
  title: 'Features/LoginInputForm',
  component: LoginInputForm,
};

export default meta;
type Story = StoryObj<typeof LoginInputForm>;

export const noData: Story = {
  args: {
    onAccept: action('onAccept'),
  },
};

export const entered: Story = {
  args: {
    onAccept: action('onAccept'),
    _StorybookLoginFn: action('Accept'),
    _StorybookData: {
      loginId: 'storybook123',
      password: 'story12345',
    },
  },
};
