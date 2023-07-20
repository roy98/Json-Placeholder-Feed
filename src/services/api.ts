import { Comment, Post } from '../utils/types'

var baseURL = 'https://jsonplaceholder.typicode.com'

function getAllPosts (): Promise<Array<Post> | []> {
    return new Promise((resolve, reject) => {
        fetch(`${baseURL}/posts`)
            .then(response => response.json())
            .then(json => resolve(json))
            .catch((err) => reject(err))
    })
}

function getSinglePost (postID: number): Promise<Post> {
    return new Promise((resolve, reject) => {
        fetch(`${baseURL}/posts/${postID}`)
            .then(response => response.json())
            .then(json => resolve(json))
            .catch((err) => reject(err))
    })
}

function getPostComments (postID: number): Promise<Array<Comment>> {
    return new Promise((resolve, reject) => {
        fetch(`${baseURL}/comments?postId=${postID}`)
            .then(response => response.json())
            .then(json => resolve(json))
            .catch((err) => reject(err))
    })
}
export {
    getAllPosts,
    getSinglePost,
    getPostComments
}