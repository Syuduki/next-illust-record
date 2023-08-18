import * as React from 'react';
import { Controller } from 'react-hook-form';

import { TextField, PassWordField } from '@/components';

import { Props } from './types';

export const InputController: React.FC<Props> = ({ ...props }) => {
  return (
    <Controller
      control={props.control}
      name={props.formData.id}
      rules={props.formData.rules}
      render={({ field }) => (
        <div {...field} style={{ width: '100%' }}>
          {['text', 'multiline'].includes(props.formData.inputType) && (
            <TextField
              id={props.formData.id}
              label={props.formData.label}
              multiline={!!(props.formData.inputType === 'multiline')}
              size={props.formData.size}
              variant={props.formData.variant}
              required={props.formData.required}
              width={props.formData.width}
              onBlur={(blurValue) => props.onBlue(blurValue)}
              value={props.value as string}
              message={
                props.formState.errors[props.formData.id]?.message
                  ? `${props.formState.errors[props.formData.id]?.message}`
                  : ''
              }
              disabled={props.disabled}
            />
          )}
          {['password'].includes(props.formData.inputType) && (
            <PassWordField
              id={props.formData.id}
              label={props.formData.label}
              size={props.formData.size}
              variant={props.formData.variant}
              required={props.formData.required}
              width={props.formData.width}
              onBlur={(blurValue) => props.onBlue(blurValue)}
              value={props.value as string}
              message={
                props.formState.errors[props.formData.id]?.message
                  ? `${props.formState.errors[props.formData.id]?.message}`
                  : ''
              }
              disabled={props.disabled}
            />
          )}
        </div>
      )}
    />
  );
};
