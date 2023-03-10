import React from 'react'
import { Avatar, Flex } from '../../components/Styled/Shared'
import { LargeText, SmallText, Text } from '../../components/Styled/Typography'
import { formatDate } from '../../helpers/data.helper'
import { UserType } from '../../types/user.type'
import { Card } from './styles'
import { FiMoreVertical } from 'react-icons/fi'
import ConfirmPopup from '../Popups/ConfirmPopup'

interface PropsType {
    post: any,
    postUser: UserType | null,
    actions: boolean,
    toggleEditPopup: (postId: string) => void,
    shouldEdit: string | null,
    toggleDeletePopup: (postId: string) => void;
    shouldDelete: string | null
}

const PostCardUI: React.FC<PropsType> = ({
    post,
    postUser,
    actions = false,
    shouldEdit,
    toggleEditPopup,
    toggleDeletePopup,
    shouldDelete
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
                {actions && <FiMoreVertical size={20} cursor="pointer" />}
            </Flex>
            <div>
                <LargeText style={{ marginBottom: '20px' }}>{post.title}</LargeText>
                <Text>{post.content}</Text>
            </div>

            {shouldDelete && (
                <ConfirmPopup
                    header={'Do you want to delete this Post?'}
                    message={'Are you sure you want to delete this post? Your actions cannot be undone.'}
                    closePopup={function (): void {
                        throw new Error('Function not implemented.')
                    }}
                    onCofirm={function (): void {
                        throw new Error('Function not implemented.')
                    }} />
            )}
        </Card>
    )
}

export default PostCardUI