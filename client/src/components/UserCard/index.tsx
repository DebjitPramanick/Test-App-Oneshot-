import React from 'react'
import { UserType } from '../../types/user.type';
import UserCardUI from './UserCardUI'

interface PropsType {
  user: UserType
}

const UserCard: React.FC<PropsType> = ({
  user
}) => {

  return (
    <UserCardUI
      user={user}/>
  )
}

export default UserCard