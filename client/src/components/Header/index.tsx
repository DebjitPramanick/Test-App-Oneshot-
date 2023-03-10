import { useMobile } from '../../contexts/MobileContext'
import { useThemeMode } from '../../contexts/ThemeModeContext'
import { googleLogout } from '@react-oauth/google'
import { useLocation } from 'react-router-dom'
import { useUser } from '../../contexts/UserContext'
import { useNavigate } from 'react-router-dom'
import HeaderUI from './HeaderUI'


const Header = () => {

  const { selectTheme, theme } = useThemeMode()
  const { showMenu, toggleMobileMenu } = useMobile()
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
    toggleMobileMenu(!showMenu)
    navigate("/auth")
  }

  const goTo = (path: string) => {
    navigate(path)
    toggleMobileMenu(!showMenu)
  }

  return (
    <HeaderUI
      changeTheme={changeTheme}
      handleLogout={handleLogout}
      goTo={goTo} />
  )
}

export default Header