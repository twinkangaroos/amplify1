// import { generateClient } from "@aws-amplify/api";
// import { listTestPosts, getTestPost } from "../graphql/queries";
import { useEffect } from 'react';

const TestPost = () => {
    
    useEffect(() => {
        getTestPost()
    }, [])
    
    const getTestPost = async() => {
        console.log("getTestPost Start1.")
        // const client = generateClient()
        // List all items
        // const allTestPosts = await client.graphql({
        //     query: listTestPosts
        // });
        // console.log("allTestPosts", allTestPosts);
        
        // Get a specific item
        // const oneTestPost = await client.graphql({
        //     query: getTestPost,
        //     variables: { id: 'YOUR_RECORD_ID' }
        // });
    }
    

}

export default TestPost