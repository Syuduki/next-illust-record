import * as React from 'react';
import { useForm } from 'react-hook-form';

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';

import { useGetMessages } from '@/hooks';
import { InputController } from '@/components';
import { Props, CreateUserData } from './types';
import { FORM_DATA_LIST } from './formData';

export const CreateUserInputForm: React.FC<Props> = ({ ...props }) => {
  const getMessage = useGetMessages();
  const { control, trigger, clearErrors, setError, formState } = useForm({
    mode: 'onBlur',
  });

  const [createUserData, serCreateUserData] = React.useState<CreateUserData>({
    userName: '',
    loginId: '',
    password: '',
    afterPassword: '',
  });

  const checkPassWord = () => {
    if (createUserData['password'] === createUserData['afterPassword']) {
      return true;
    } else {
      setError('afterPassword', {
        type: 'mismatch',
        message: getMessage({ type: 'mismatch', label: 'パスワード' }),
      });
      return false;
    }
  };

  React.useEffect(() => {
    clearErrors();
  }, []);

  return (
    <Card sx={{ width: `300px`, height: `400px` }}>
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
          >
            {FORM_DATA_LIST.map((formData) => {
              return (
                <InputController
                  formData={formData}
                  value={createUserData[formData.id]}
                  setValue={serCreateUserData}
                  control={control}
                  formState={formState}
                />
              );
            })}
          </Stack>
          <Stack spacing={4} style={{ width: '100%' }}>
            <Button
              size="small"
              variant="contained"
              onClick={() => {
                (async () => {
                  if (await trigger()) {
                    checkPassWord() && props.onClickButton(createUserData);
                  }
                })();
              }}
              fullWidth
            >
              登録
            </Button>
          </Stack>
        </Stack>
      </CardContent>
    </Card>
  );
};
