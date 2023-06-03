import type { Meta, StoryObj } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { useForm } from 'react-hook-form';

import { InputController } from './InputController';
import { FIX_FORM_DATA } from './fixture';

const meta: Meta<typeof InputController> = {
  title: 'components/InputController',
  component: InputController,
};

export default meta;

export const inputController = () => {
  const { control, formState } = useForm({
    mode: 'onBlur',
  });

  return (
    <InputController
      formData={FIX_FORM_DATA}
      value={'Storybook_Value'}
      setValue={action('setValue')}
      control={control}
      formState={formState}
    />
  );
};
