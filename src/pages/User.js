import { Authenticator } from '@aws-amplify/ui-react';
import UserPage from "./UserPage";

const User = () => {
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
            <UserPage />
        )}
        </Authenticator>
    );
}

export default User;
