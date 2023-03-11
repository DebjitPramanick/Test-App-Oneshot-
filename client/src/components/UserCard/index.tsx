import React from 'react'
import { UserType } from '../../types/user.type';
import UserCardUI from './UserCardUI'

interface PropsType {
  user: UserType,
  actions?: boolean
}

const UserCard: React.FC<PropsType> = ({
  user,
  actions = false
}) => {

  return (
    <UserCardUI
      user={user}
      actions={actions}/>
  )
}

export default UserCard