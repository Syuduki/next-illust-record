import * as React from 'react';
import { Props, State } from './types';

import {
  OutlinedInput,
  InputAdornment,
  IconButton,
  FormHelperText,
  FormControl,
} from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import Stack from '@mui/material/Stack';

export const PassWordField: React.FC<Props> = ({ ...props }) => {
  const [values, setValues] = React.useState<State>({
    password: '',
    showPassword: false,
  });

  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword });
  };

  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };

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
      <FormControl
        variant={props.variant}
        size={props.size}
        error={!!props.message}
        style={{ width: props.width ? `${props.width}px` : '100%' }}
      >
        <OutlinedInput
          type={values.showPassword ? 'text' : 'password'}
          value={props.value ?? ''}
          inputProps={{
            autoComplete: 'new-password',
          }}
          onBlur={(e) => props.onBlur(e.target.value)}
          endAdornment={
            <InputAdornment position="end">
              <IconButton
                aria-label="toggle password visibility"
                onClick={handleClickShowPassword}
                onMouseDown={handleMouseDownPassword}
                edge="end"
              >
                {values.showPassword ? <Visibility /> : <VisibilityOff />}
              </IconButton>
            </InputAdornment>
          }
        />
        <FormHelperText id="standard-weight-helper-text">
          {props.message}
        </FormHelperText>
      </FormControl>
    </Stack>
  );
};
