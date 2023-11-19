import { useState, useEffect} from 'react';
import { DataStore } from '@aws-amplify/datastore';
import { Blog, Post, Comment } from '../../models';

const BlogList = () => {
    const [blogs, setBlogs] = useState([])
    useEffect(() => {
        fetchBlogs();
        async function fetchBlogs() {
            const blogData = await DataStore.query(Blog);
            setBlogs(blogData)
        }
        DataStore.observe(Blog).subscribe(()  => {
            fetchBlogs()
        })
    }, [])
    return (
        <>
            <h1>Blogsリスト</h1>
            {
                blogs.map(blog => (
                <a href={`/blogs/${blog.id}`}>
                    <h2>{blog.name}</h2>
                </a>
                ))
            }
      </>
    )
}

export default BlogList