'use client';
import { CreateUserInputForm, LoginInputForm } from '@/features';
import { NextPage } from 'next';
import * as React from 'react';
import { useRouter } from 'next/navigation';

const Login: NextPage = () => {
  const router = useRouter();

  const [pageState, setPageState] = React.useState<'login' | 'createUser'>(
    'login'
  );

  return (
    <main style={{ position: 'relative', height: '100vh', width: '100vw' }}>
      <div
        style={{
          position: 'absolute',
          top: '20%',
          left: '65%',
        }}
      >
        {pageState === 'login' && (
          <LoginInputForm
            onAccept={() => router.push('/illust-record')}
            onClickCreate={() => setPageState('createUser')}
          />
        )}
        {pageState === 'createUser' && (
          <CreateUserInputForm
            onAccept={() => router.push('/illust-record')}
            onClickLogin={() => setPageState('login')}
          />
        )}
      </div>
    </main>
  );
};

export default Login;
