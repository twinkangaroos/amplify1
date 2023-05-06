import { useAuthenticator } from '@aws-amplify/ui-react';
import { Card, Image, View, Heading, Flex, Badge, Text, Button, useTheme} from '@aws-amplify/ui-react';
import { Tabs, TabItem } from '@aws-amplify/ui-react';
import { useNavigate } from 'react-router-dom';
import { useEffect } from "react";

const DownloadPage = () => {
    const { user, route, signOut } = useAuthenticator((context) => [
        context.user,
        context.route,
        context.signOut,
    ]);

    const navigate = useNavigate();
    const { tokens } = useTheme();

    useEffect(() => {
        const setDownloadHistoryData = () => {
          console.log("setDownloadHistoryData.")
          //fetch("https://monotein-books.vercel.app/api/corona-tracker/summary")
          //.then(res => res.json())
          //.then(data => setAllCountriesData(data.Countries))
          //.catch(err => alert("データを読み込めませんでした。"));
        }
        setDownloadHistoryData();
    }, []);
    
    return (
        <>
            {
                route !== 'authenticated' ? 
                ''
                :
                <Flex direction="column" gap="1rem" alignItems="center">
                    <Heading level={4}>ダウンロードダミーページ</Heading>
                    このページにアクセスされた際、ダウンロードファイル名と共にログ保存されます。
                </Flex>
            }
            
        </>
    );
}

export default DownloadPage;
