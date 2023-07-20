import React from 'react'
import { Comment, Post } from '../../utils/types'
import './Posts.css'

interface SinglePostProps {
    post?: Post;
    comments: Comment[];
}

const SinglePost: React.FC<SinglePostProps> = ({ post, comments }: SinglePostProps) => {

    // Paging
    const TOTAL_COMMENTS = comments.length
    const ITEMS_TO_PREVIEW = 3
    const [currentIndex, setCurrentIndex] = React.useState<number>(ITEMS_TO_PREVIEW)

    const handleLoadMore = () => {
        setCurrentIndex((prevIndex) => prevIndex + ITEMS_TO_PREVIEW)
    }

    return (
        <React.Fragment>
            <div>
                <div className='single-post-container'>
                    <div className='single-post-card'>
                            <h4 className='single-post-card-title'>{post?.title}</h4>
                            <p className='single-post-card-body'>{post?.body}</p>
                    </div>
                </div>
                <div className='separator-vertical'></div>
                <div className='comments-container'>
                    <h3>Comments</h3>
                    <div className='comments-grid'>
                        <React.Fragment>
                            {comments?.slice(0, currentIndex)?.map((comment, index) => (
                                <React.Fragment key={`${index}-${comment?.id}`}>
                                    <div className='comment-card'>
                                        <h5 className='comment-card-title'>{comment?.name}</h5>
                                        <p className='comment-card-body'>{comment?.body}</p>
                                    </div>
                                    {/* Don't add a separator on the last item */}
                                    {index !== (comments?.slice(0, currentIndex).length - 1) && (
                                        <div className='separator-vertical-50'></div>
                                    )}
                                </React.Fragment>
                            ))}
                            <button onClick={() => handleLoadMore()} className='btn btn-disabled' disabled={currentIndex >= comments?.length}>Load more</button>
                        </React.Fragment>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default SinglePost;