import { AdminTag, Avatar } from '../../../../components/Styled/Shared'
import { LargeText, SmallText } from '../../../../components/Styled/Typography'
import { useUser } from '../../../../contexts/UserContext'
import { Container } from './styles'
import { MdOutlineAdminPanelSettings } from 'react-icons/md'

const ProfileBoxUI = () => {

  const { user } = useUser()

  return (
    <Container>
      <Avatar src={user.profile_pic} width={120} border={2} />
      <div style={{ width: '100%' }}>
        <LargeText style={{ marginBottom: '8px' }}>{user.name}</LargeText>
        <SmallText>{user.email}</SmallText>
        {user.isAdmin && (
          <AdminTag style={{ marginTop: '20px' }}>
            <MdOutlineAdminPanelSettings size={14} />
            Admin
          </AdminTag>
        )}
      </div>
    </Container>
  )
}

export default ProfileBoxUI