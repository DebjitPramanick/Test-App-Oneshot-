import React from 'react'
import { Avatar, AvatarAdminBadge, Flex } from '../Styled/Shared'
import { SmallText, Text } from '../Styled/Typography'
import { formatDate } from '../../helpers/data.helper'
import { Card } from './styles'
import { MdOutlineAdminPanelSettings } from 'react-icons/md'

interface PropsType {
    user: any,
}

const UserCardUI: React.FC<PropsType> = ({
    user,
}) => {

    return (
        <Card>
            <Flex style={{ justifyContent: 'space-between' }}>
                <Flex style={{ gap: '10px' }}>
                    <Avatar src={user.profile_pic || ""} width={60}>
                        {user.isAdmin && (
                            <AvatarAdminBadge><MdOutlineAdminPanelSettings size={16}/></AvatarAdminBadge>
                        )}
                    </Avatar>
                    <div>
                        <Text style={{ marginBottom: '4px' }}>{user.name}</Text>
                        <SmallText style={{ marginBottom: '4px' }}>{user.email}</SmallText>
                        <SmallText>Joined: {formatDate(user.createdAt)}</SmallText>
                    </div>
                </Flex>

            </Flex>
        </Card>
    )
}

export default UserCardUI