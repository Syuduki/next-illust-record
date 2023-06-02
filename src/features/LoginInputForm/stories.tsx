import type { Meta, StoryObj } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import { LoginInputForm } from './LoginInputForm';

const meta: Meta<typeof LoginInputForm> = {
  title: 'Feature/LoginInputForm',
  component: LoginInputForm,
};

export default meta;
type Story = StoryObj<typeof LoginInputForm>;

export const loginInputForm: Story = {
  args: {
    onClickButton: action('onClickButton'),
  },
};
