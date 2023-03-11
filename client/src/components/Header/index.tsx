import { useMenu } from '../../contexts/MenuContext'
import { useThemeMode } from '../../contexts/ThemeModeContext'
import { googleLogout } from '@react-oauth/google'
import { useLocation } from 'react-router-dom'
import { useUser } from '../../contexts/UserContext'
import { useNavigate } from 'react-router-dom'
import HeaderUI from './HeaderUI'


const Header = () => {

  const { selectTheme, theme } = useThemeMode()
  const { showMenu, toggleMenu } = useMenu()
  const { logoutUser } = useUser()
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
    toggleMenu(!showMenu)
    navigate("/auth")
  }

  const goTo = (path: string) => {
    navigate(path)
    toggleMenu(!showMenu)
  }

  return (
    <HeaderUI
      changeTheme={changeTheme}
      handleLogout={handleLogout}
      goTo={goTo} />
  )
}

export default Header