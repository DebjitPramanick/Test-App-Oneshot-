import React from 'react'
import { MenuPopupBody, MenuPopupContainer, MenuPopupItem } from '../../Styled/Popup'
import { Text } from '../../Styled/Typography'

interface PropsType {
    menuItems: {
        id: number,
        title: string,
        action: () => void,
        icon: any
    }[]
}

const MenuPopup: React.FC<PropsType> = ({
    menuItems
}) => {
    return (
        <MenuPopupContainer height={"fit-content"} width={"200px"} top={"56px"}
            className={'expand'}>
            <MenuPopupBody>
                {menuItems.map(item => (
                    <MenuPopupItem onClick={item.action}>
                        {item.icon}
                        <Text>{item.title}</Text>
                    </MenuPopupItem>
                ))}
            </MenuPopupBody>
        </MenuPopupContainer>
    )
}

export default MenuPopup