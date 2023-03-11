export interface UserType {
    _id: string,
    name: string,
    email: string,
    profile_pic: string,
    isAdmin: boolean,
    createdAt?: string,
    updatedAt?: string
}

export interface PostType {
    _id: string,
    title: string,
    content: string,
    user: string,
    createdAt: string,
    updatedAt: string
}