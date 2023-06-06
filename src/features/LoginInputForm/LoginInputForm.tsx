import * as React from 'react';
import { useForm } from 'react-hook-form';
import { AxiosResponse, AxiosError } from 'axios';

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';

import { InputController } from '@/components';
import { RepositoryFactory } from '@/lib';
import { ValidateMessage } from '@/types';
import { Props, LoginData } from './types';
import { FORM_DATA_LIST } from './formData';

/**
 *
 * @param onAccept -API成功時に発火する-
 * @param _StorybookLoginFn -Storybook検証用Props　ログイン処理確認-
 * @param _StorybookData -Storybook検証用Props 初期値設定-
 */
export const LoginInputForm: React.FC<Props> = ({ ...props }) => {
  const loginRepogitory = RepositoryFactory.get('login');
  const {
    control,
    formState,
    trigger,
    clearErrors,
    setError,
    setValue,
  } = useForm({
    mode: 'onBlur',
  });

  const [loginData, setLoginData] = React.useState<LoginData>(
    props._StorybookData
      ? props._StorybookData
      : {
          loginId: null,
          password: null,
        }
  );

  const createUserApi = async () => {
    await loginRepogitory
      .createUser({ ...loginData })
      .then((res: AxiosResponse) => {
        props.onAccept();
      })
      .catch((err: AxiosError<{ messages: ValidateMessage[] }>) => {
        if (typeof err.response !== 'undefined') {
          if (err.response.status === 422) {
            err.response.data.messages.forEach((data: ValidateMessage) => {
              setError(data.key, {
                type: 'Err',
                message: data.message,
              });
            });
          }
        }
      })
      .finally(() => {
        // Storybook専用
        props._StorybookLoginFn && props._StorybookLoginFn();
      });
  };

  React.useEffect(() => {
    clearErrors();
  }, []);

  // Storybook専用
  React.useEffect(() => {
    if (props._StorybookData) {
      setValue('userName', props._StorybookData['userName']);
      setValue('loginId', props._StorybookData['loginId']);
      setValue('password', props._StorybookData['password']);
      setValue('afterPassword', props._StorybookData['afterPassword']);
    }
  }, [props._StorybookData]);

  return (
    <Card sx={{ width: `300px`, height: `auto` }}>
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
            {FORM_DATA_LIST.map((formData) => {
              return (
                <InputController
                  key={Math.random()}
                  formData={formData}
                  value={loginData[formData.id]}
                  onBlue={(value) =>
                    setLoginData({
                      ...loginData,
                      [formData.id]: value,
                    })
                  }
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
                  (await trigger()) && createUserApi();
                })();
              }}
              fullWidth
            >
              ログイン
            </Button>
            <Button
              size="small"
              variant="outlined"
              onClick={() => props.onClickCreate()}
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
