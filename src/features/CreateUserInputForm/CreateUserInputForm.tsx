import * as React from 'react';
import { useForm } from 'react-hook-form';
import { AxiosResponse, AxiosError } from 'axios';

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';

import { getMessage } from '@/utils';
import { InputController } from '@/components';
import { RepositoryFactory } from '@/lib';
import { CreateUserMessageList } from '@/types';
import { Props, CreateUserData } from './types';
import { FORM_DATA_LIST } from './formData';

/**
 *
 * @param onAccept -API成功時に発火する-
 * @param _StorybookCreateFn -Storybook検証用Props　新規作成処理確認-
 * @param _StorybookData -Storybook検証用Props 初期値設定-
 */
export const CreateUserInputForm: React.FC<Props> = ({ ...props }) => {
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

  const [createUserData, serCreateUserData] = React.useState<CreateUserData>(
    props._StorybookData
      ? props._StorybookData
      : {
          name: null,
          loginId: null,
          email: null,
          password: null,
          afterPassword: null,
        }
  );

  const checkPassWord = () => {
    if (createUserData['password'] === createUserData['afterPassword']) {
      return true;
    } else {
      setError('afterPassword', {
        type: 'misMatch',
        message: getMessage({ type: 'misMatch', label: 'パスワード' }),
      });
      return false;
    }
  };

  const createUserApi = async () => {
    await loginRepogitory.csrfToken().then(async () => {
      await loginRepogitory
        .createUser({
          name: createUserData.name,
          loginId: createUserData.loginId,
          email: createUserData.email,
          password: createUserData.password,
        })
        .then((res: AxiosResponse) => {
          props.onAccept();
        })
        .catch((err: AxiosError<{ errors: CreateUserMessageList }>) => {
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
          props._StorybookCreateFn && props._StorybookCreateFn();
        });
    });
  };

  React.useEffect(() => {
    clearErrors();
  }, []);

  React.useEffect(() => {
    console.log(createUserData);
  }, [createUserData]);

  // Storybook専用
  React.useEffect(() => {
    if (props._StorybookData) {
      setValue('name', props._StorybookData['name']);
      setValue('loginId', props._StorybookData['loginId']);
      setValue('email', props._StorybookData['email']);
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
                  value={createUserData[formData.id]}
                  onBlue={(value) =>
                    serCreateUserData({
                      ...createUserData,
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
                  if (await trigger()) {
                    checkPassWord() && createUserApi();
                  }
                })();
              }}
              fullWidth
            >
              登録
            </Button>
            <Button
              size="small"
              variant="outlined"
              onClick={() => props.onClickLogin()}
              fullWidth
            >
              ログイン
            </Button>
          </Stack>
        </Stack>
      </CardContent>
    </Card>
  );
};
