import * as React from 'react';

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';

import { TextField, PassWordField } from '@/components';
import { Props } from './types';

export const LoginInputForm: React.FC<Props> = ({ ...props }) => {
  const [loginId, setLoginId] = React.useState<string>('');
  const [password, setPassword] = React.useState<string>('');

  return (
    <Card sx={{ width: `300px`, height: `290px` }}>
      <CardContent>
        <Stack
          direction="column"
          justifyContent="center"
          alignItems="center"
          spacing={2}
        >
          <Stack
            direction="column"
            justifyContent="flex-start"
            alignItems="center"
            spacing={2}
            style={{ width: '100%' }}
          >
            <TextField
              id="loginId"
              label="ログインID"
              multiline={false}
              size="small"
              variant="outlined"
              required={true}
              onBlurValue={(value) => setLoginId(value)}
              value={loginId}
            />
            <PassWordField
              id="password"
              label="パスワード"
              size="small"
              variant="outlined"
              required={true}
              onBlurValue={(value) => setPassword(value)}
              value={password}
            />
          </Stack>
          <Stack spacing={4} style={{ width: '100%' }}>
            <Button
              size="small"
              variant="contained"
              onClick={() => props.onClickButton('login', loginId, password)}
              fullWidth
            >
              ログイン
            </Button>
            <Button
              size="small"
              variant="outlined"
              onClick={() => props.onClickButton('create', '', '')}
              fullWidth
            >
              新規登録
            </Button>
          </Stack>
        </Stack>
      </CardContent>
    </Card>
  );
};
