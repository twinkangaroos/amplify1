import { useAuthenticator } from '@aws-amplify/ui-react';
import { Heading, Flex } from '@aws-amplify/ui-react';
import { useEffect } from "react";

const DownloadPage = () => {
    const { route } = useAuthenticator((context) => [
        context.route,
    ]);

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
