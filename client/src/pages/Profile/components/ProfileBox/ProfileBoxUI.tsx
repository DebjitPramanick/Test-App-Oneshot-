import { AdminTag, Avatar } from '../../../../components/Styled/Shared'
import { LargeText, SmallText } from '../../../../components/Styled/Typography'
import { useUser } from '../../../../contexts/UserContext'
import { Container } from './styles'
import { MdOutlineAdminPanelSettings } from 'react-icons/md'
import { Button } from '../../../../components/Styled/Form'
import { AiOutlineDelete } from 'react-icons/ai'

interface PropsType {
  togglePopup: () => void
}

const ProfileBoxUI: React.FC<PropsType> = ({
  togglePopup
}) => {

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

      <Button style={{ width: '100%', marginTop: '20px' }}
        onClick={togglePopup}>
        <AiOutlineDelete size={20} />
        Delete Account
      </Button>
    </Container>
  )
}

export default ProfileBoxUI