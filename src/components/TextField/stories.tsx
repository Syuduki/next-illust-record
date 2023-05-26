import type { Meta, StoryObj } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import { TextField } from './TextField';

const meta: Meta<typeof TextField> = {
  title: 'Component/TextField',
  component: TextField,
  tags: ['component'],
};

export default meta;
type Story = StoryObj<typeof TextField>;

export const Nomal: Story = {
  args: {
    width: 500,
    variant: 'outlined',
    size: 'medium',
    multiline: true,
    required: false,
    message: '',
    id: 'story',
    label: 'ストーリーテキスト',
    value: 'storybook',
    onBlurValue: action('onBlurValue'),
  },
};

export const Required: Story = {
  args: {
    variant: 'outlined',
    size: 'medium',
    multiline: false,
    required: true,
    message: '',
    id: 'story',
    label: 'ストーリーテキスト',
    value: 'storybook',
    onBlurValue: action('onBlurValue'),
  },
};

export const Error: Story = {
  args: {
    variant: 'outlined',
    size: 'medium',
    multiline: false,
    required: true,
    id: 'story',
    label: 'ストーリーテキスト',
    value: 'storybook',
    message: 'この項目は必須です。',
    onBlurValue: action('onBlurValue'),
  },
};

export const Multiline: Story = {
  args: {
    variant: 'outlined',
    size: 'medium',
    multiline: true,
    required: false,
    message: '',
    id: 'story',
    label: 'ストーリーテキスト',
    value: 'storybook',
    onBlurValue: action('onBlurValue'),
  },
};
