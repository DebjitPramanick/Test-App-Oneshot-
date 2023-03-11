import React from 'react'
import { AiOutlineLogout } from 'react-icons/ai'
import ReactSwitch from 'react-switch'
import { useMenu } from '../../contexts/MenuContext'
import { useThemeMode } from '../../contexts/ThemeModeContext'
import { useUser } from '../../contexts/UserContext'
import SearchBox from '../SearchBox'
import { Button } from '../Styled/Form'
import { MenuPopupBody, MenuPopupContainer, MenuPopupItem } from '../Styled/Popup'
import { Avatar, Flex } from '../Styled/Shared'
import { Heading, Text } from '../Styled/Typography'
import { HeaderContaier, HeaderContent } from './styles'

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
    const { showMenu, toggleMenu } = useMenu()
    const { user } = useUser()

    return (
        <HeaderContaier>
            <HeaderContent>
                <Heading>Test App</Heading>
                <div className='header-search-container' style={{ width: '100%' }}>
                    <SearchBox />
                </div>
                <Avatar src={user.profile_pic} width={36} border={2} onClick={() => toggleMenu(!showMenu)} />

                <MenuPopupContainer height={"fit-content"}
                    className={`${showMenu ? 'expand' : 'collapse'}`}>
                    <MenuPopupBody>
                        <MenuPopupItem onClick={() => goTo("/")}>
                            <Text>Home</Text>
                        </MenuPopupItem>
                        <MenuPopupItem onClick={() => goTo("/profile")}>
                            <Text>Profile</Text>
                        </MenuPopupItem>

                        <MenuPopupItem style={{ justifyContent: 'space-between' }}>
                            <Text>Dark Mode</Text>
                            <div>
                                <ReactSwitch
                                    width={36}
                                    height={18}
                                    handleDiameter={14}
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
                        </MenuPopupItem>
                        <MenuPopupItem style={{ justifyContent: 'space-between' }} onClick={handleLogout}>
                            <Text>Log Out</Text>
                            <AiOutlineLogout size={20} />
                        </MenuPopupItem>
                    </MenuPopupBody>
                </MenuPopupContainer>
            </HeaderContent>
        </HeaderContaier>
    )
}

export default HeaderUI