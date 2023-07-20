import React, { useEffect } from 'react'
import Loader from '../components/generic/Loader'
import MainLayout from '../components/layout/mainLayout'
import Posts from '../components/posts/Posts'
import { getAllPosts } from '../services/api'
import { Post } from '../utils/types'

function Root() {
    const [posts, setPosts] = React.useState<Array<Post>>([])
    const [isLoading, setIsLoading] = React.useState<boolean>(false)

    useEffect(() => {
        setIsLoading(true)

        getAllPosts()
        .then((response) => {
            setPosts(response)
            setIsLoading(false)
        })
        .catch((err) => {
            setIsLoading(false);
            alert(err?.message || 'Something went wrong!')
        })
    }, [])

  return (
    <>
        <MainLayout>
            {isLoading ? (
                <Loader />
            ): (
                <Posts posts={posts} />
            )}
        </MainLayout>
    </>
  )
}

export default Root
