import * as React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { useForm } from 'react-hook-form';

import { InputController } from './InputController';
import { FIX_FORM_DATA } from './fixture';

const meta: Meta<typeof InputController> = {
  title: 'Components/InputController',
  component: InputController,
};

export default meta;

export const noData = () => {
  const { control, formState } = useForm({
    mode: 'onBlur',
  });

  return (
    <InputController
      formData={FIX_FORM_DATA}
      value={null}
      onBlue={action('onBlue')}
      control={control}
      formState={formState}
      disabled={false}
    />
  );
};

export const entered = () => {
  const { control, formState, setValue } = useForm({
    mode: 'onBlur',
  });

  React.useEffect(() => {
    setValue('fixture', 'Storybook_Value');
  }, []);

  return (
    <InputController
      formData={FIX_FORM_DATA}
      value={'Storybook_Value'}
      onBlue={action('onBlue')}
      control={control}
      formState={formState}
      disabled={true}
    />
  );
};

export const disabled = () => {
  const { control, formState, setValue } = useForm({
    mode: 'onBlur',
  });

  React.useEffect(() => {
    setValue('fixture', 'Storybook_Value');
  }, []);

  return (
    <InputController
      formData={FIX_FORM_DATA}
      value={'Storybook_Value'}
      onBlue={action('onBlue')}
      control={control}
      formState={formState}
      disabled={true}
    />
  );
};
