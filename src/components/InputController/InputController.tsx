import * as React from 'react';
import { Controller } from 'react-hook-form';

import { TextField, PassWordField } from '@/components';
import { Props } from './types';

export const InputController: React.FC<Props> = ({
  formData,
  value,
  setValue,
  control,
  formState,
}) => {
  return (
    <Controller
      control={control}
      name={formData.id}
      rules={formData.rules}
      render={({ field }) => (
        <div {...field} style={{ width: '100%' }}>
          {['text', 'multiline'].includes(formData.inputType) && (
            <TextField
              id={formData.id}
              label={formData.label}
              multiline={!!(formData.inputType === 'multiline')}
              size={formData.size}
              variant={formData.variant}
              required={formData.required}
              width={formData.width}
              onBlurValue={(blurValue) =>
                setValue({
                  ...value,
                  [formData.id]: blurValue,
                })
              }
              value={value as string}
              message={
                formState.errors[formData.id]?.message
                  ? `${formState.errors[formData.id]?.message}`
                  : ''
              }
            />
          )}
          {['password'].includes(formData.inputType) && (
            <PassWordField
              id={formData.id}
              label={formData.label}
              size={formData.size}
              variant={formData.variant}
              required={formData.required}
              width={formData.width}
              onBlurValue={(blurValue) =>
                setValue({
                  ...value,
                  [formData.id]: blurValue,
                })
              }
              value={value as string}
              message={
                formState.errors[formData.id]?.message
                  ? `${formState.errors[formData.id]?.message}`
                  : ''
              }
            />
          )}
        </div>
      )}
    />
  );
};
