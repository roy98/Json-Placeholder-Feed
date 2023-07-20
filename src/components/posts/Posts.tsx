import React from 'react'
import './Posts.css'

const Posts: React.FC<{}> = () => {

    return (
        <React.Fragment>
            <div>
                <div className='search-container'>
                    <input type="search" title='Search by title' placeholder='Search a post by title' />
                    <a className='btn'>Search</a>
                </div>
                <div className='posts-grid'>
                    {[1,1,1,1,1,1,1,1,1,1,1].map((e, index) => (
                        <div className='post-card' key={`${index}`}>
                            <h4 className='post-card-title'>Qui esse delror atei</h4>
                            <p className='post-card-body'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit cumque iure ratione ad deleniti explicabo natus iste quos quas voluptatibus? Nihil repellendus atque corrupti maiores earum corporis quas eaque quia.</p>
                        </div>
                    ))}
                </div>
                <div className='pagination-container'>
                    <div>
                        <a className='btn'>Previous</a>
                        <a className='btn'>Next</a>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default Posts;