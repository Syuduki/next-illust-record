import type { Meta, StoryObj } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import { PassWordField } from './PassWordField';

const meta: Meta<typeof PassWordField> = {
  title: 'Components/PassWordField',
  component: PassWordField,
  tags: ['component'],
};

export default meta;
type Story = StoryObj<typeof PassWordField>;

export const Nomal: Story = {
  args: {
    width: 500,
    variant: 'outlined',
    size: 'medium',
    required: false,
    message: '',
    id: 'story',
    label: 'ストーリーパスワード',
    value: 'storybook',
    onBlur: action('onBlur'),
  },
};

export const Required: Story = {
  args: {
    variant: 'outlined',
    size: 'medium',
    required: true,
    message: '',
    id: 'story',
    label: 'ストーリーパスワード',
    value: 'storybook',
    onBlur: action('onBlur'),
  },
};

export const Error: Story = {
  args: {
    variant: 'outlined',
    size: 'medium',
    required: true,
    id: 'story',
    label: 'ストーリーパスワード',
    value: null,
    message: 'この項目は必須です。',
    onBlur: action('onBlur'),
  },
};
