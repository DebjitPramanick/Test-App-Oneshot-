import React from 'react'
import { Avatar, Flex } from '../../../../components/Styled/Shared'
import { LargeText, SmallText, Text } from '../../../../components/Styled/Typography'
import { useUser } from '../../../../contexts/UserContext'
import { formatDate } from '../../../../helpers/data.helper'
import { UserType } from '../../../../types/user.type'
import { Card } from './styles'

interface PropsType {
    post: any,
    postUser: UserType | null
}

const PostCardUI: React.FC<PropsType> = ({
    post,
    postUser
}) => {

    return (
        <Card>
            <Flex style={{ marginBottom: '26px', gap: '10px' }}>
                <Avatar src={postUser?.profile_pic || ""} width={40} />
                <div>
                  <Text style={{marginBottom: '4px'}}>{postUser?.name}</Text>  
                  <SmallText>{formatDate(post.createdAt)}</SmallText>
                </div>
            </Flex>
            <div>
                <LargeText style={{ marginBottom: '20px' }}>{post.title}</LargeText>
                <Text>{post.content}</Text>
            </div>
        </Card>
    )
}

export default PostCardUI