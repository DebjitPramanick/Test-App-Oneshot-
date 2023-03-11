import React from 'react'
import { Avatar, Flex } from '../../components/Styled/Shared'
import { LargeText, SmallText, Text } from '../../components/Styled/Typography'
import { formatDate } from '../../helpers/data.helper'
import { UserType } from '../../types/user.type'
import { Card } from './styles'
import { FiMoreVertical } from 'react-icons/fi'
import ConfirmPopup from '../Popups/ConfirmPopup'
import MenuPopup from '../Popups/MenuPopup'
import PostFormPopup from '../Popups/PostFormPopup'

interface PropsType {
    post: any,
    postUser: UserType | null,
    actions: boolean,
    toggleEditPopup: (postId?: string) => void,
    shouldEdit: string | null,
    toggleDeletePopup: (postId?: string) => void,
    shouldDelete: string | null,
    toggleMenuPopup: (postId: string) => void,
    showMenu: string | null,
    menuItems: any[],
    handleDeletePost: () => void
}

const PostCardUI: React.FC<PropsType> = ({
    post,
    postUser,
    actions = false,
    shouldEdit,
    toggleEditPopup,
    toggleDeletePopup,
    shouldDelete,
    showMenu,
    toggleMenuPopup,
    menuItems,
    handleDeletePost
}) => {

    return (
        <Card>
            <Flex style={{ justifyContent: 'space-between', marginBottom: '26px' }}>
                <Flex style={{ gap: '10px' }}>
                    <Avatar src={postUser?.profile_pic || ""} width={40} />
                    <div>
                        <Text style={{ marginBottom: '4px' }}>{postUser?.name}</Text>
                        <SmallText>{formatDate(post.createdAt)}</SmallText>
                    </div>
                </Flex>
                {actions && <FiMoreVertical
                    onClick={() => toggleMenuPopup(!showMenu ? post._id : null)}
                    size={20}
                    cursor="pointer" />}
            </Flex>
            <div>
                <LargeText style={{ marginBottom: '20px' }}>{post.title}</LargeText>
                <Text>{post.content}</Text>
            </div>

            {shouldDelete === post._id && (
                <ConfirmPopup
                    header={'Delete this Post?'}
                    message={'Are you sure you want to delete this post? Your actions cannot be undone.'}
                    closePopup={toggleDeletePopup}
                    onConfirm={handleDeletePost}
                    onCancel={toggleDeletePopup} />
            )}

            {shouldEdit === post._id && (
                <PostFormPopup
                    closePopup={toggleEditPopup}
                    refetchPosts={function (): void {
                        throw new Error('Function not implemented.')
                    }}
                    post={post}
                    heading="Edit Post" />
            )}

            {showMenu === post._id && (
                <MenuPopup
                    menuItems={menuItems} />
            )}
        </Card>
    )
}

export default PostCardUI