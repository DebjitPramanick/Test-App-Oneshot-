import React from 'react'
import { Avatar, Flex } from '../../../../components/Styled/Shared'
import { LargeText, SmallText, Text } from '../../../../components/Styled/Typography'
import { formatDate } from '../../../../helpers/data.helper'
import { UserType } from '../../../../types/user.type'
import { Card } from './styles'
import {FiMoreVertical} from 'react-icons/fi'

interface PropsType {
    post: any,
    postUser: UserType | null,
    actions: boolean
}

const PostCardUI: React.FC<PropsType> = ({
    post,
    postUser,
    actions = false
}) => {

    return (
        <Card>
            <Flex style={{justifyContent: 'space-between', marginBottom: '26px'}}>
                <Flex style={{ gap: '10px' }}>
                    <Avatar src={postUser?.profile_pic || ""} width={40} />
                    <div>
                        <Text style={{ marginBottom: '4px' }}>{postUser?.name}</Text>
                        <SmallText>{formatDate(post.createdAt)}</SmallText>
                    </div>
                </Flex>
                {actions && <FiMoreVertical size={20} cursor="pointer"/>}
            </Flex>
            <div>
                <LargeText style={{ marginBottom: '20px' }}>{post.title}</LargeText>
                <Text>{post.content}</Text>
            </div>
        </Card>
    )
}

export default PostCardUI