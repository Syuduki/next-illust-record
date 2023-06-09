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
import { ValidateMessage } from '@/types';
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
          userName: null,
          loginId: null,
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
    await loginRepogitory
      .createUser({
        userName: createUserData.userName,
        loginId: createUserData.loginId,
        password: createUserData.password,
      })
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
        props._StorybookCreateFn && props._StorybookCreateFn();
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
          >
            {FORM_DATA_LIST.map((formData) => {
              return (
                <InputController
                  key={Math.random()}
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
          </Stack>
        </Stack>
      </CardContent>
    </Card>
  );
};
