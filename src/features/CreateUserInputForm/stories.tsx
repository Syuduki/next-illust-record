import type { Meta, StoryObj } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import { CreateUserInputForm } from './CreateUserInputForm';

const meta: Meta<typeof CreateUserInputForm> = {
  title: 'Feature/CreateUserInputForm',
  component: CreateUserInputForm,
};

export default meta;
type Story = StoryObj<typeof CreateUserInputForm>;

export const loginInputForm: Story = {
  args: {
    onClickButton: action('onClickButton'),
  },
};
