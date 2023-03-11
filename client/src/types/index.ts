export interface UserType {
    _id: string,
    name: string,
    email: string,
    profile_pic: string,
    isAdmin: boolean,
    created_at: string,
    updatedAt: string
}

export interface PostType {
    _id: string,
    title: string,
    content: string,
    user: string,
    created_at: string,
    updatedAt: string
}