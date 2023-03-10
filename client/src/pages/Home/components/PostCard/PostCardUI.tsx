import React from 'react'
import { Avatar, Flex } from '../../../../components/Styled/Shared'
import { LargeText, Text } from '../../../../components/Styled/Typography'
import { useUser } from '../../../../contexts/UserContext'
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
            <Flex style={{ marginBottom: '26px', gap: '16px' }}>
                <Avatar src={postUser?.profile_pic || ""} width={30} />
                <Text>{postUser?.name}</Text>
            </Flex>
            <div>
                <LargeText style={{ marginBottom: '20px' }}>{post.title}</LargeText>
                <Text>{post.content}</Text>
            </div>
        </Card>
    )
}

export default PostCardUI