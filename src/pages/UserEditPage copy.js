import { useAuthenticator } from '@aws-amplify/ui-react';
import { useState } from "react";
import { Auth } from 'aws-amplify';
import { Flex, Button, TextField, Heading } from '@aws-amplify/ui-react';

const UserEditPage = () => {
    const { user, signOut } = useAuthenticator((context) => [context.user]);
    const [nickname, setNickname] = useState(user.attributes.nickname);
    const [family_name, setFamilyName] = useState(user.attributes.family_name);
    const [given_name, setGivenName] = useState(user.attributes.given_name);
    const [birthdate, setBirthdate] = useState(user.attributes.birthdate);
    const [email, setEmail] = useState(user.attributes.email);
    const [phone_number, setPhoneNumber] = useState(user.attributes.phone_number);
    const [profile, setProfile] = useState(user.attributes.profile);

    //console.log(nickname);

    async function updateUserInfo() {
        let result = null;
        try {
            const user = await Auth.currentAuthenticatedUser();
            result = await Auth.updateUserAttributes(user, {
                nickname: nickname,
                family_name: family_name,
                given_name: given_name,
                birthdate: birthdate,
                email: email,
                phone_number: phone_number,
                profile: profile,
            });
        } catch(error) {
            console.log('error update: ', error);
        }
        if (result === 'SUCCESS') {
            alert("ユーザー情報を更新しました！");
        }
        else {
            alert("ユーザー情報の更新に失敗しました・・・");
        }
        return result;
    }

    return (

        // https://ui.docs.amplify.aws/react/components/flex
        <Flex direction="column" gap="1rem" alignItems="center">
            
            <Heading level={4}>アカウント設定</Heading>
            <Flex>
                <TextField
                    descriptiveText=""
                    defaultValue={user.attributes.family_name}
                    label="姓"
                    errorMessage=""
                    width="20rem"
                    onChange={e => setFamilyName(e.target.value)}
                />
            </Flex>

            <Flex>
                <TextField
                    descriptiveText=""
                    defaultValue={user.attributes.given_name}
                    label="名"
                    errorMessage=""
                    width="20rem"
                    onChange={e => setGivenName(e.target.value)}
                />
            </Flex>

            <Flex>
                <TextField
                    descriptiveText=""
                    defaultValue={user.attributes.birthdate}
                    label="生年月日"
                    errorMessage=""
                    width="20rem"
                    onChange={e => setBirthdate(e.target.value)}
                />
            </Flex>

            <Flex>
                <TextField
                    descriptiveText=""
                    defaultValue={user.attributes.email}
                    label="メールアドレス"
                    errorMessage=""
                    width="20rem"
                    onChange={e => setEmail(e.target.value)}
                />
            </Flex>

            <Flex>
                <TextField
                    descriptiveText=""
                    defaultValue={user.attributes.phone_number}
                    label="電話番号"
                    errorMessage=""
                    width="20rem"
                    onChange={e => setPhoneNumber(e.target.value)}
                />
            </Flex>

            <Flex>
                <TextField
                    descriptiveText=""
                    defaultValue={user.attributes.nickname}
                    label="ニックネーム"
                    errorMessage=""
                    width="20rem"
                    onChange={e => setNickname(e.target.value)}
                />
            </Flex>

            <Flex>
                <TextField
                    descriptiveText=""
                    defaultValue={user.attributes.profile}
                    label="プロフィール"
                    errorMessage=""
                    width="20rem"
                    onChange={e => setProfile(e.target.value)}
                />
            </Flex>

            <Flex>
                <Button onClick={() => window.location.href = '/mypage'} >マイページに戻る</Button>
                <Button variation="primary" onClick={() => updateUserInfo()}>ユーザー情報を変更する</Button>
            </Flex>
            <Flex>
                <Button variation="" onClick={signOut}>ログアウト</Button>
            </Flex>
        </Flex>

        
    );
}

export default UserEditPage;

/*
        <main>
            <h2>ユーザー情報の変更</h2>
            <li>birthdate: <input defaultValue={user.attributes.birthdate} /></li>
            <li>email: <input defaultValue={user.attributes.email} /></li>
            <li>family_name: <input defaultValue={user.attributes.family_name} /></li>
            <li>given_name: <input defaultValue={user.attributes.given_name} /></li>
            <li>name: <input defaultValue={user.attributes.name} /></li>
            <li>nickname: <input defaultValue={nickname} onChange={e => setNickname(e.target.value)} /></li>
            
            <p><button onClick={() => updateUserInfo()}>ユーザー情報を変更する</button></p>
            <p><button onClick={signOut}>ログアウトする</button></p>
        </main>
*/