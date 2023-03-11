import React from 'react'
import { Avatar, Flex } from '../Styled/Shared'
import { SmallText, Text } from '../Styled/Typography'
import { formatDate } from '../../helpers/data.helper'
import { Card } from './styles'
import { FiMoreVertical } from 'react-icons/fi'

interface PropsType {
    user: any,
    actions: boolean,
}

const UserCardUI: React.FC<PropsType> = ({
    user,
    actions = false,
}) => {

    return (
        <Card>
            <Flex style={{ justifyContent: 'space-between'}}>
                <Flex style={{ gap: '10px' }}>
                    <Avatar src={user.profile_pic || ""} width={60} />
                    <div>
                        <Text style={{ marginBottom: '4px' }}>{user.name}</Text>
                        <SmallText style={{ marginBottom: '4px' }}>{user.email}</SmallText>
                        <SmallText>Joined: {formatDate(user.createdAt)}</SmallText>
                    </div>
                </Flex>
                {actions && <FiMoreVertical size={20} cursor="pointer" />}
            </Flex>
        </Card>
    )
}

export default UserCardUI