import { Authenticator } from '@aws-amplify/ui-react';
import DownloadPage from "./DownloadPage";

const Download = () => {
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
            <DownloadPage />
        )}
        </Authenticator>
    );
}

export default Download;
