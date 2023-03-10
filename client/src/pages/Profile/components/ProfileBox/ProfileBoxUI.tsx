import React from 'react'
import ReactSwitch from 'react-switch'
import { Avatar, Flex } from '../../../../components/Styled/Shared'
import { LargeText, SmallText, Text } from '../../../../components/Styled/Typography'
import { useUser } from '../../../../contexts/UserContext'
import { Container } from './styles'

const ProfileBoxUI = () => {

  const { user } = useUser()

  return (
    <Container>
      <Avatar src={user.profile_pic} width={120} border={2} />
      <div style={{ width: '100%' }}>
        <LargeText style={{ marginBottom: '8px' }}>{user.name}</LargeText>
        <SmallText>{user.email}</SmallText>
        <Flex style={{ justifyContent: 'space-between', margin: '20px 0', width: '100%' }}>
          <Text>Is Admin?</Text>
          <div>
            <ReactSwitch
              width={44}
              height={24}
              handleDiameter={18}
              checked={user.isAdmin}
              uncheckedIcon={false}
              checkedIcon={false}
              onChange={() => { }}
              offColor={"#FFFFFF"}
              offHandleColor={"#858484"}
              onColor={"#858484"}
              onHandleColor={"#FFFFFF"}
            />
          </div>
        </Flex>
      </div>
    </Container>
  )
}

export default ProfileBoxUI