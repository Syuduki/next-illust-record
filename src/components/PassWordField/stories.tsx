import type { Meta, StoryObj } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import { PassWordField } from './PassWordField';

const meta: Meta<typeof PassWordField> = {
  title: 'Component/PassWordField',
  component: PassWordField,
  tags: ['component'],
};

export default meta;
type Story = StoryObj<typeof PassWordField>;

export const Nomal: Story = {
  args: {
    variant: 'outlined',
    size: 'medium',
    required: false,
    message: '',
    id: 'story',
    label: 'ストーリーパスワード',
    value: 'storybook',
    onBlurValue: action('onBlurValue'),
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
    onBlurValue: action('onBlurValue'),
  },
};

export const Error: Story = {
  args: {
    variant: 'outlined',
    size: 'medium',
    required: true,
    id: 'story',
    label: 'ストーリーパスワード',
    value: 'storybook',
    message: 'この項目は必須です。',
    onBlurValue: action('onBlurValue'),
  },
};
