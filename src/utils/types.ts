export type {
    Post,
    Comment
}

type Post = {
    id: number;
    userId: number
    title: string;
    body: string;
}

type Comment = {
    id: number;
    postId: number;
    name: string;
    email: string;
    body: string;
}