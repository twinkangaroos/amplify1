import { useAuthenticator } from '@aws-amplify/ui-react';
import { Card, Image, View, Heading, Flex, Badge, Text, Button, useTheme} from '@aws-amplify/ui-react';
import { Tabs, TabItem } from '@aws-amplify/ui-react';

const MyPage = () => {
    const { user, signOut } = useAuthenticator((context) => [context.user]);

    //const GoEdit = () => {
    //    window.location.href = '/user_edit';
    //};

    const { tokens } = useTheme();
    return (
        <>
            <Flex direction="column" gap="1rem" alignItems="center">
                <Heading level={4}>{user.attributes.nickname}のページ</Heading>
            </Flex>
            
            <Tabs justifyContent="flex-start">
                <TabItem title="ホーム">
                    ホーム
                </TabItem>
                <TabItem title="注目の記事">
                    注目の記事
                </TabItem>
                <TabItem title="交流の場">
                    交流の場
                </TabItem>
                <TabItem title="身近な話題">
                    身近な話題
                </TabItem>
                <TabItem title="プレミアム" isDisabled={true}>
                    Cannot click
                </TabItem>
            </Tabs>

            <Card>
                <Flex direction="row" alignItems="center">
                    <Image
                        alt="profile image"
                        src="/twinkangaroos.jpg"
                        width="20%"
                    />
                    <Flex
                        direction="column"
                        alignItems="center"
                        gap={tokens.space.xs}
                    >
                        <Flex>
                            <Badge size="small" variation="info">
                                {user.attributes.birthdate}
                            </Badge>
                        </Flex>
            
                        <Heading level={5}>
                            {user.attributes.nickname}
                        </Heading>
            
                        <Text as="span">
                            {user.attributes.profile}
                        </Text>
                        <Button variation="primary" onClick={() => window.location.href = '/user_edit'} >アカウント設定</Button>
                        
                    </Flex>
                </Flex>
            </Card>
        </>
    );
}

export default MyPage;
