import * as React from 'react';
import { useForm } from 'react-hook-form';
import { AxiosResponse, AxiosError } from 'axios';

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';

import { InputController } from '@/components';
import { RepositoryFactory } from '@/lib';
import { LoginMessageList } from '@/types';
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
          login_id: null,
          password: null,
        }
  );

  const loginApi = async () => {
    await loginRepogitory.csrfToken().then(async () => {
      await loginRepogitory
        .login({ ...loginData })
        .then((res: AxiosResponse) => {
          props.onAccept();
        })
        .catch((err: AxiosError<{ errors: LoginMessageList }>) => {
          if (typeof err.response !== 'undefined') {
            if (err.response.status === 422) {
              Object.keys(err.response.data.errors).forEach((key: string) => {
                setError(key, {
                  type: 'Err',
                  message: err.response!.data.errors[key][0],
                });
              });
            }
          }
        })
        .finally(() => {
          // Storybook専用
          props._StorybookLoginFn && props._StorybookLoginFn();
        });
    });
  };

  React.useEffect(() => {
    clearErrors();
  }, []);

  // Storybook専用
  React.useEffect(() => {
    if (props._StorybookData) {
      setValue('login_id', props._StorybookData['login_id']);
      setValue('password', props._StorybookData['password']);
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
          <img
            src="/images/logo.png"
            alt="IllustRecord Logo"
            width={250}
            style={{ marginTop: '30px', marginBottom: '30px' }}
          />
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
                  key={formData.id}
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
                  disabled={false}
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
                  (await trigger()) && loginApi();
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
