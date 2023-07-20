import React from 'react'
import './Posts.css'

const SinglePost: React.FC<{}> = () => {

    return (
        <React.Fragment>
            <div>
                <div className='single-post-container'>
                    <div className='single-post-card'>
                            <h4 className='single-post-card-title'>Qui esse delror atei</h4>
                            <p className='single-post-card-body'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit cumque iure ratione ad deleniti explicabo natus iste quos quas voluptatibus? Nihil repellendus atque corrupti maiores earum corporis quas eaque quia.</p>
                    </div>
                </div>
                <div className='separator-vertical'></div>
                <div className='comments-container'>
                    <h3>Comments</h3>
                    <div className='comments-grid'>
                        <React.Fragment>
                            {[1,1,1,1].map((e, index) => (
                                <React.Fragment key={`${index}`}>
                                    <div className='comment-card'>
                                        <h5 className='comment-card-title'>Qui esse delror atei</h5>
                                        <p className='comment-card-body'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit cumque iure ratione ad deleniti explicabo natus iste quos quas voluptatibus? Nihil repellendus atque corrupti maiores earum corporis quas eaque quia.</p>
                                    </div>
                                    {/* Don't add a separator on the last item */}
                                    {index !== 3 && (
                                        <div className='separator-vertical-50'></div>
                                    )}
                                </React.Fragment>
                            ))}
                            <a className='btn'>Load more</a>
                        </React.Fragment>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default SinglePost;