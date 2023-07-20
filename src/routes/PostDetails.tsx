import React from 'react'
import { useParams } from '../../node_modules/react-router-dom/dist/index';
import MainLayout from '../components/layout/mainLayout'
import SinglePost from '../components/posts/SinglePost'

function PostDetail() {

    const { postID } = useParams();
    
    
    return (
        <>
            <MainLayout>
                <SinglePost />
            </MainLayout>
        </>
    )
}

export default PostDetail