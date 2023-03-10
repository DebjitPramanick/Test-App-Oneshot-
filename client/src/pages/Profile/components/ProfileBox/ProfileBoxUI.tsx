import React from 'react'
import { Avatar } from '../../../../components/Styled/Shared'
import { LargeText, SmallText, Text } from '../../../../components/Styled/Typography'
import { useUser } from '../../../../contexts/UserContext'
import { Container } from './styles'

const ProfileBoxUI = () => {

  const {user} = useUser()

  return (
    <Container>
        <Avatar src={user.profile_pic} width={120} border={2} />
        <LargeText style={{textAlign: 'center'}}>{user.name}</LargeText>
        <SmallText style={{textAlign: 'center'}}>{user.email}</SmallText>
    </Container>
  )
}

export default ProfileBoxUI