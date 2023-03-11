import React, { useRef, useEffect } from 'react'
import { MenuPopupBody, MenuPopupContainer, MenuPopupItem } from '../../Styled/Popup'
import { Text } from '../../Styled/Typography'

interface PropsType {
    menuItems: {
        id: number,
        title: string,
        action: () => void,
        icon: any,
        disabled: boolean
    }[],
    closeMenu: () => void,
    trigger: any,
    show: boolean
}

const MenuPopup: React.FC<PropsType> = ({
    menuItems,
    closeMenu,
    trigger,
    show
}) => {

    const menuRef = useRef(null)

    useEffect(() => {
        const handleClose = (e: any) => {
            const menu: any = menuRef.current;

            if(trigger?.contains(e.target)) return;
            
            if (menu && !menu.contains(e.target)) {
                closeMenu()
            }
        }
        document.addEventListener('mousedown', handleClose)
    }, [])

    if(!show) return null;


    return (
        <MenuPopupContainer height={"fit-content"} width={"200px"} top={"56px"}
            className={'expand'} ref={menuRef}>
            <MenuPopupBody>
                {menuItems.map(item => (
                    <MenuPopupItem onClick={!item.disabled ? item.action : () => null} className={item.disabled ? "disabled" : ''}>
                        {item.icon}
                        <Text className={item.disabled ? "disabled" : ''}>{item.title}</Text>
                    </MenuPopupItem>
                ))}
            </MenuPopupBody>
        </MenuPopupContainer>
    )
}

export default MenuPopup