import React from 'react'
import ReactSwitch from 'react-switch'
import { AiOutlineLogout } from 'react-icons/ai'
import { useMobile } from '../../contexts/MobileContext'
import { useThemeMode } from '../../contexts/ThemeModeContext'
import { Avatar, Flex } from '../Styled/Shared'
// import SearchBar from '../SearchBar'
import { FloatingContainer, HeaderContaier, HeaderContent } from './styles'
import { googleLogout } from '@react-oauth/google'
import { useLocation } from 'react-router-dom'
import { Button } from '../Styled/Form'
import { useUser } from '../../contexts/UserContext'
import { Text } from '../Styled/Typography'
import {useNavigate} from 'react-router-dom'


const Header = () => {

  const { selectTheme, theme } = useThemeMode()
  const { showMenu, toggleMobileMenu } = useMobile()
  const { user, logoutUser } = useUser()
  const location = useLocation()
  const navigate = useNavigate()

  if (location.pathname === '/auth') {
    return null;
  }

  const changeTheme = () => {
    if (theme === 'dark') {
      selectTheme('light')
    } else {
      selectTheme('dark')
    }
  }

  const handleLogout = () => {
    googleLogout()
    logoutUser()
    toggleMobileMenu(!showMenu)
    navigate("/auth")
  }

  const goTo = (path:string) => {
    navigate(path)
    toggleMobileMenu(!showMenu)
  }

  return (
    <HeaderContaier>
      <HeaderContent>
        {/* <img src={theme === 'light' ? Logo : DarkModeLogo} alt="logo" style={{cursor: 'pointer'}} /> */}
        <div className='header-search-container' style={{ width: '100%' }}>
          {/* <SearchBar type='header' /> */}
        </div>
        <Avatar src={user.profile_pic} width={36} onClick={() => toggleMobileMenu(!showMenu)} />

        <FloatingContainer height={"fit-content"}
          className={`${showMenu ? 'expand' : 'collapse'}`}>
          <div className='floating-container-content'>
            <Text style={{marginBottom: '16px', cursor: 'pointer'}} onClick={() => goTo("/profile")}>Profile</Text>
            <Flex style={{ justifyContent: 'space-between', marginBottom: '16px' }}>
              <Text>Dark Mode</Text>
              <div>
                <ReactSwitch
                  width={44}
                  height={24}
                  handleDiameter={18}
                  checked={theme === 'dark'}
                  uncheckedIcon={false}
                  checkedIcon={false}
                  onChange={changeTheme}
                  onColor={"#FFFFFF"}
                  onHandleColor={"#858484"}
                  offColor={"#858484"}
                  offHandleColor={"#FFFFFF"}
                />
              </div>
            </Flex>
            <Flex style={{ justifyContent: 'space-between'}}>
              <Text>Log Out</Text>
              <Button onClick={handleLogout} style={{ width: '35px', height: '35px' }}><AiOutlineLogout size={16} /></Button>
            </Flex>
          </div>
        </FloatingContainer>
      </HeaderContent>
    </HeaderContaier>
  )
}

export default Header