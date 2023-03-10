import React from 'react'
import { AiOutlineLogout } from 'react-icons/ai'
import ReactSwitch from 'react-switch'
import { useMobile } from '../../contexts/MobileContext'
import { useThemeMode } from '../../contexts/ThemeModeContext'
import { useUser } from '../../contexts/UserContext'
import { Button } from '../Styled/Form'
import { Avatar, Flex } from '../Styled/Shared'
import { Heading, Text } from '../Styled/Typography'
import { FloatingContainer, HeaderContaier, HeaderContent } from './styles'

interface PropsType {
    changeTheme: () => void,
    goTo: (path: string) => void,
    handleLogout: () => void
}

const HeaderUI: React.FC<PropsType> = ({
    changeTheme,
    goTo,
    handleLogout
}) => {

    const { theme } = useThemeMode()
    const { showMenu, toggleMobileMenu } = useMobile()
    const { user } = useUser()

    return (
        <HeaderContaier>
            <HeaderContent>
                {/* <img src={theme === 'light' ? Logo : DarkModeLogo} alt="logo" style={{cursor: 'pointer'}} /> */}
                <Heading>Test App</Heading>
                <div className='header-search-container' style={{ width: '100%' }}>
                    {/* <SearchBar type='header' /> */}
                </div>
                <Avatar src={user.profile_pic} width={36} border={2} onClick={() => toggleMobileMenu(!showMenu)} />

                <FloatingContainer height={"fit-content"}
                    className={`${showMenu ? 'expand' : 'collapse'}`}>
                    <div className='floating-container-content'>
                        <Text style={{ marginBottom: '16px', cursor: 'pointer' }} onClick={() => goTo("/")}>Home</Text>
                        <Text style={{ marginBottom: '16px', cursor: 'pointer' }} onClick={() => goTo("/profile")}>Profile</Text>
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
                        <Flex style={{ justifyContent: 'space-between' }}>
                            <Text>Log Out</Text>
                            <Button onClick={handleLogout} style={{ width: '39px', height: '35px' }}><AiOutlineLogout size={16} /></Button>
                        </Flex>
                    </div>
                </FloatingContainer>
            </HeaderContent>
        </HeaderContaier>
    )
}

export default HeaderUI