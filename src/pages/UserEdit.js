import { Authenticator } from '@aws-amplify/ui-react';
import UserEditPage from "./UserEditPage";

const UserEdit = () => {
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
            ]}>
        {({ signOut, user }) => (
            <UserEditPage />
        )}
        </Authenticator>
    );
}

export default UserEdit;
