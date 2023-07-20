import React from 'react'
import { useParams } from '../../node_modules/react-router-dom/dist/index';
import Loader from '../components/generic/Loader';
import MainLayout from '../components/layout/mainLayout'
import SinglePost from '../components/posts/SinglePost'
import { getPostComments, getSinglePost } from '../services/api';
import { Comment, Post } from '../utils/types';

function PostDetail() {
    const [post, setPost] = React.useState<Post>()
    const [comments, setComments] = React.useState<Array<Comment>>([])
    const [isLoading, setIsLoading] = React.useState<boolean>(false)

    const { postID } = useParams();

    React.useEffect(() => {
        setIsLoading(true)

        Promise.all([
            getSinglePost(postID),
            getPostComments(postID)
        ])
        .then(([postResponse, commentsResponse]) => {
            setPost(postResponse)
            setComments(commentsResponse)

            setIsLoading(false)
        })
        .catch((err) => {
            setIsLoading(false)
            alert(err || `Something went wrong!`)
        })
    }, [postID])
    
    
    return (
        <>
            <MainLayout>
                {isLoading ? (
                    <Loader />
                ): (
                    <SinglePost post={post} comments={comments} />
                )}
            </MainLayout>
        </>
    )
}

export default PostDetail