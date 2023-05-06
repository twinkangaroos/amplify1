import { Authenticator } from '@aws-amplify/ui-react';
import MyPage from "./MyPage";
import { useTheme, View, Image, Text, Heading, useAuthenticator, Button } from '@aws-amplify/ui-react';



const components = {
  // 共通ヘッダー（ロゴ）
  /*
  Header() {
    const { tokens } = useTheme();

    return (
      <View textAlign="center" padding={tokens.space.large}>
        <Image
          alt="Amplify logo"
          src="twinkangaroos.jpg"
          height="50%"
          width="50%"
        />
      </View>
    );
  },
  */

  // 共通フッター
  Footer() {
    const { tokens } = useTheme();

    return (
      <View textAlign="center" padding={tokens.space.large}>
        <Text color={tokens.colors.neutral[80]}>
          &copy; Twin kangaroos All Rights Reserved
        </Text>
      </View>
    );
  },

  // ログイン
  // ━━━━━━━━━━
  SignIn: {
    // ログインのヘッダー
    Header() {
      const { tokens } = useTheme();

      return (
        <Heading
          padding={`${tokens.space.xl} 0 0 ${tokens.space.xl}`}
          level={4}
        >
          ログイン
        </Heading>
      );
    },
    // ログインのフッター
    Footer() {
      const { toResetPassword } = useAuthenticator();

      return (
        <View textAlign="center">
          <Button
            fontWeight="normal"
            onClick={toResetPassword}
            size="small"
            variation="link"
          >
            パスワードを忘れた方
          </Button>
        </View>
      );
    },
  },
  // ━━━━━━━━━━

  // 会員登録
  // ━━━━━━━━━━
  SignUp: {
    Header() {
      const { tokens } = useTheme();

      return (
        <Heading
          padding={`${tokens.space.xl} 0 0 ${tokens.space.xl}`}
          level={4}
        >
          Twin kangaroosに会員登録
        </Heading>
      );
    },
    Footer() {
      const { toSignIn } = useAuthenticator();

      return (
        <View textAlign="center">
          <Button
            fontWeight="normal"
            onClick={toSignIn}
            size="small"
            variation="link"
          >
            ログイン画面に戻る
          </Button>
        </View>
      );
    },
  },
  ConfirmSignUp: {
    Header() {
      const { tokens } = useTheme();
      return (
        <Heading
          padding={`${tokens.space.xl} 0 0 ${tokens.space.xl}`}
          level={3}
        > 
          確認コードの入力:
        </Heading>
      );
    },
    Footer() {
      return <Text></Text>;
    },
  },
  /*
  // 以下、確認画面などのカスタマイズをするのであれば必要。
  SetupTOTP: {
    Header() {
      const { tokens } = useTheme();
      return (
        <Heading
          padding={`${tokens.space.xl} 0 0 ${tokens.space.xl}`}
          level={3}
        >
          Enter Information:
        </Heading>
      );
    },
    Footer() {
      return <Text>Footer Information</Text>;
    },
  },
  ConfirmSignIn: {
    Header() {
      const { tokens } = useTheme();
      return (
        <Heading
          padding={`${tokens.space.xl} 0 0 ${tokens.space.xl}`}
          level={3}
        >
          Enter Information:
        </Heading>
      );
    },
    Footer() {
      return <Text>Footer Information</Text>;
    },
  },
  ResetPassword: {
    Header() {
      const { tokens } = useTheme();
      return (
        <Heading
          padding={`${tokens.space.xl} 0 0 ${tokens.space.xl}`}
          level={3}
        >
          Enter Information:
        </Heading>
      );
    },
    Footer() {
      return <Text>Footer Information</Text>;
    },
  },
  ConfirmResetPassword: {
    Header() {
      const { tokens } = useTheme();
      return (
        <Heading
          padding={`${tokens.space.xl} 0 0 ${tokens.space.xl}`}
          level={3}
        >
          Enter Information:
        </Heading>
      );
    },
    Footer() {
      return <Text>Footer Information</Text>;
    },
  },
  */
};


const LoginPage = () => {

    return (
        <Authenticator signUpAttributes={[
            //'birthdate',
            'email',
            //'family_name',
            //'given_name',
            //'name',
            'nickname',
            //'phone_number',
            //'profile',
            ]}
             components={components}
        >
        {({ signOut, user }) => ( 
            <MyPage />
        )}
        </Authenticator>
      );
}
// formFields={formFields}

export default LoginPage;

/*
// 以下、日本語対応しておけばわざわざここで個別に設定する必要はない。
// ただし、任意にする、カラムの順番を変えるのであれば必要。
// 入力フィールド・ラベル
const formFields = {
  // ログイン
  signIn: {
    username: {
      placeholder: 'メールアドレスを入力してください',
      label: 'メールアドレス',
    },
    password: {
      label: 'パスワード:',
      placeholder: 'パスワードを入力してください',
    },
  },
  // 会員登録
  signUp: {
    email: {
      placeholder: 'メールアドレスを入力してください',
      label: 'メールアドレス',
    },
    password: {
      label: 'パスワード',
      placeholder: 'パスワードを入力してください',
      isRequired: false,
      //order: 1,
    },
    confirm_password: {
      label: 'パスワード（確認）',
      //order: 2,
    },
  },
  forceNewPassword: {
    password: {
      placeholder: 'あなたのパスワードを入力してください',
    },
  },
  resetPassword: {
    username: {
      placeholder: 'メールアドレスを入力してください',
    },
  },
  confirmResetPassword: {
    confirmation_code: {
      placeholder: '受信した確認コードを入力してください。',
      label: '確認コード',
      isRequired: false,
    },
    confirm_password: {
      placeholder: 'パスワードを入力してください。',
    },
  },
  setupTOTP: {
    QR: {
      totpIssuer: 'test issuer',
      totpUsername: 'amplify_qr_test_user',
    },
    confirmation_code: {
      label: 'New Label',
      placeholder: 'Enter your Confirmation Code:',
      isRequired: false,
    },
  },
  confirmSignIn: {
    confirmation_code: {
      label: 'New Label',
      placeholder: 'Enter your Confirmation Code:',
      isRequired: false,
    },
  },
};

*/
/*
<Authenticator.Provider>

</Authenticator.Provider>

loginMechanisms={['email']} signUpAttributes={[
          'email',
          'name',
          'nickname']}

//import { Link } from "react-router-dom";

          <main>
            <h1>Hello {user.username}</h1>
            <button onClick={signOut}>Sign out</button>
            <p><Link to="/user_edit">ユーザー情報変更</Link></p>
          </main>

            'address', // Not displayed
            'birthdate',
            'email',
            'family_name',
            'gender', // Not displayed
            'given_name',
            'locale', // Not displayed
            'middle_name', // Not used in Japan
            'name',
            'nickname',
            'phone_number',
            'picture', // Not displayed
            'preferred_username', // Not used in Japan
            'profile',
            'updated_at', // Not displayed
            'website',
            'zoneinfo', // Not displayed
            //
            // custom attribute, not standard
            'custom:prefecture',
*/