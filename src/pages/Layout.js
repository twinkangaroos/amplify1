import React from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import { useAuthenticator, Button, Heading, View } from '@aws-amplify/ui-react';
import { Menu, MenuItem, Divider } from '@aws-amplify/ui-react';
import { Flex, Link, Badge } from '@aws-amplify/ui-react';

const Layout = () => {
  const { route, signOut } = useAuthenticator((context) => [
    context.route,
    context.signOut,
  ]);
  const navigate = useNavigate();

  function logOut() {
    signOut();
    navigate('/');
  }

  return (
    <>
      <Flex direction="column" gap="1rem" alignItems="center">
        <Heading level={3}><Link href="/">Twin kangaroos</Link></Heading>

      </Flex>
      <Flex direction="column" gap="1rem" alignItems="flex-end">
        {
          route === 'authenticated' ? 
          <Menu menuAlign="end" size="small">
            <MenuItem onClick={() => alert('お知らせ画面に遷移予定・・・')}>
              お知らせ&nbsp;<Badge size="small" variation="info">3</Badge>
            </MenuItem>
            <MenuItem onClick={() => alert('お気に入りの記事に遷移予定・・・')}>
              お気に入りの記事
            </MenuItem>
            <MenuItem onClick={() => window.location.href = '/user'}>
              アカウント設定
            </MenuItem>
            <Divider />
            <MenuItem isDisabled onClick={() => alert('プレミアム会員専用ページです。')}>
              プレミアム
            </MenuItem>
            <MenuItem onClick={signOut}>
              ログアウト
            </MenuItem>
          </Menu>
          :
          <Menu menuAlign="end" size="small">
            <MenuItem onClick={() => window.location.href = '/login'}>
              ログイン
            </MenuItem>
          </Menu>
        }
      </Flex>
      <Flex direction="column" gap="1rem" alignItems="center">
        {
          route !== 'authenticated' ? 
          <View padding="0.5rem">
            ログインすると会員限定コンテンツを見ることができます。
          </View>
          :
          ''
        }
        <Outlet />
      </Flex>
    </>
  );
}

export default Layout;

{/*
        <nav>
          <Flex direction="column" alignItems="flex-end" gap="1rem">
            {route !== 'authenticated' ? (
                <>&nbsp;</>
            ) : (
                <Button onClick={() => logOut()}>ログアウト</Button>
            )}
          </Flex>
        </nav>
*/}
/*


            {route !== 'authenticated' ? (
                <>&nbsp;</>
            ) : (
                <Button onClick={() => navigate('/mypage')}>マイページトップ</Button>
            )}
            

<Button onClick={() => navigate('/mypage')}>ログイン</Button>
                

        <Button onClick={() => navigate('/protected')}>
          First Protected Route
        </Button>
        <Button onClick={() => navigate('/protected2')}>
          Second Protected Route
        </Button>
*/