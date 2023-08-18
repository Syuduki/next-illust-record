import type { Meta, StoryObj } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import { SortButton } from './SortButton';

const meta: Meta<typeof SortButton> = {
  title: 'Components/SortButton',
  component: SortButton,
  tags: ['component'],
};

export default meta;
type Story = StoryObj<typeof SortButton>;

export const Nomal: Story = {
  args: {
    sortData: [
      {
        key: 'create',
        label: '作成日',
      },
      {
        key: 'title',
        label: 'タイトル',
      },
    ],
    defaultSort: {
      key: 'create',
      state: 'asc',
    },
    onClickSort: action('onClickSort'),
  },
};
