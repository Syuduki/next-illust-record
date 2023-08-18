import * as React from 'react';
import { Props } from './types';

import { TextField as MuiTextField } from '@mui/material';
import Stack from '@mui/material/Stack';

export const TextField: React.FC<Props> = ({ ...props }) => {
  const [value, setValue] = React.useState<string>(props.value ?? '');

  React.useEffect(() => {
    setValue(value);
  }, [props.value]);

  return (
    <Stack
      direction="column"
      justifyContent="flex-start"
      alignItems="flex-start"
      spacing={0.5}
      style={{ width: '100%' }}
    >
      <Stack
        direction="row"
        justifyContent="flex-start"
        alignItems="flex-start"
        spacing={1}
      >
        <label
          style={{ paddingLeft: '5px', fontSize: '13px', fontWeight: 'bold' }}
        >
          {props.label}
        </label>
        {props.required || (
          <label style={{ fontSize: '13px', color: 'gray' }}> - 任意</label>
        )}
      </Stack>
      <MuiTextField
        id={props.id}
        size={props.size}
        variant={props.variant}
        value={value}
        multiline={props.multiline}
        onChange={(event) => {
          setValue(event.target.value);
        }}
        onBlur={() => {
          props.onBlur(value ? value : null);
        }}
        error={!!props.message}
        helperText={props.message}
        sx={{
          width: props.width ? `${props.width}px` : '100%',
          '& .MuiFilledInput-root': {
            background: props.disabled ? undefined : 'white',
            textAlign: 'center',
          },
        }}
        disabled={props.disabled}
      />
    </Stack>
  );
};
