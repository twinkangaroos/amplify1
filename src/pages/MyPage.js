import { useAuthenticator } from '@aws-amplify/ui-react';
import { Card, Image, View, Heading, Flex, Badge, Text, Button, useTheme} from '@aws-amplify/ui-react';
import { Tabs, TabItem } from '@aws-amplify/ui-react';
import Home from "./Home";
import { useNavigate } from 'react-router-dom';

const MyPage = () => {
    //const { user, signOut } = useAuthenticator((context) => [
    //    context.user
    //]);

    const { user, route, signOut } = useAuthenticator((context) => [
        context.user,
        context.route,
        context.signOut,
    ]);

    const navigate = useNavigate();
    const { tokens } = useTheme();
    return (
        <>
            {
                route !== 'authenticated' ? 
                ''
                :
                <Flex direction="column" gap="1rem" alignItems="center">
                    <Heading level={6}>ようこそ、{user.attributes.nickname}さん</Heading>
                </Flex>
            }
            
            
            <Tabs justifyContent="flex-start">
                <TabItem title="Home">
                    <Home />
                </TabItem>
                <TabItem title="注目記事">
                    <Home />
                </TabItem>
                <TabItem title="トップ10">
                    <Home />
                </TabItem>
                <TabItem title="Premium" isDisabled={true}>
                    Cannot click
                </TabItem>
            </Tabs>


        </>
    );
}

export default MyPage;
