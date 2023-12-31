import React from 'react'
import { useNavigate } from 'react-router-dom';
import { Post } from '../../utils/types';
import Fuse from 'fuse.js'
import './Posts.css'

interface PostsProps {
    posts: Array<Post>
}

const fuseOptions = {
    includeScore: true,
    isCaseSensitive: false,
    findAllMatches: false,
    distance: 0,
    keys: ['title'],
    threshold: 0.6,
}

const Posts: React.FC<PostsProps> = ({ posts }: PostsProps) => {
    const [searchText, setSearchText] = React.useState<string>('')
    const [filteredPosts, setFilteredPosts] = React.useState<Array<Post>>(posts)
    const navigate = useNavigate();

    const getPostDetails = (postId: number) => {

        navigate(`/post/${postId}`)
    }

    const onKeyPressed = (key: string) => {
        
        if (key == "Enter") {
            filterByTitle()
        }
    }

    const filterByTitle = () => {
        
        if (!searchText.trim()) {
            setFilteredPosts(posts)
        }else {
            const fuse = new Fuse(posts, fuseOptions)
            const result = fuse.search(searchText)
            
            setFilteredPosts((prev) => result.map((result: any) => result.item))
        }

        setCurrentPage(1)
    }

    // Pagination elements
    const ITEMS_PER_PAGE = 20
    const TOTAL_ITEMS = filteredPosts.length
    const [currentPage, setCurrentPage] = React.useState<number>(1)
    const START_INDEX = (currentPage - 1) * ITEMS_PER_PAGE
    const END_INDEX = START_INDEX + ITEMS_PER_PAGE

    const handlePreviousPage = () => {
        setCurrentPage((prevPage) => prevPage - 1)
    }

    const handleNextPage = () => {
        setCurrentPage((prevPage) => prevPage + 1)
    }

    return (
        <React.Fragment>
            <div>
                <div className='search-container'>
                    <input data-testid="search-1" type="search" title='Search by title' placeholder='Search a post by title' value={searchText} 
                            onInput={(event) => setSearchText(event.currentTarget.value)} onKeyDown={(event) => onKeyPressed(event.key)} />
                    <a className='btn' onClick={() => filterByTitle()}>Search</a>
                </div>
                {filteredPosts?.length > 1 ? 
                    (
                    <>
                        <div data-testid="posts-grid-1" className='posts-grid'>
                            {filteredPosts.slice(START_INDEX, END_INDEX).map((post, index) => (
                                <div className='post-card' key={`${index}-${post.id}`} onClick={() => getPostDetails(post.id)}>
                                    <h4 className='post-card-title'>{post.title}</h4>
                                    <p className='post-card-body'>{post.body}</p>
                                </div>
                            ))}
                        </div>
                        <div className='pagination-container'>
                            <div>
                                <button className='btn' disabled={currentPage == 1} onClick={() => handlePreviousPage()}>Previous</button>
                                <button className='btn' disabled={END_INDEX >= TOTAL_ITEMS} onClick={() => handleNextPage()}>Next</button>
                            </div>
                        </div>
                    </>) : (
                    <p data-testid="no-data-1" style={{textAlign: 'center', margin: '4rem'}}>No Data found</p>
                )}
            </div>
        </React.Fragment>
    )
}

export default Posts;