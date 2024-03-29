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
  const [showPassword, setShowPassword] = React.useState<boolean>(false);

  const [value, setValue] = React.useState<string>(props.value ?? '');

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
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
          type={showPassword ? 'text' : 'password'}
          value={value}
          inputProps={{
            autoComplete: 'new-password',
          }}
          onBlur={() => props.onBlur(value ? value : null)}
          onChange={(event) => {
            setValue(event.target.value);
          }}
          endAdornment={
            <InputAdornment position="end">
              <IconButton
                onClick={handleClickShowPassword}
                onMouseDown={handleMouseDownPassword}
                edge="end"
              >
                {showPassword ? <Visibility /> : <VisibilityOff />}
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
