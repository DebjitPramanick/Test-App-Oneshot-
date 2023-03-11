import React, { createContext, useContext, useState } from 'react'

export const useMenu = () => {
    return useContext(MenuContext)
}

const MenuContext = createContext<{
    showMenu: boolean,
    toggleMenu: (val: boolean) => void,
}>({
    showMenu: false,
    toggleMenu: (val: boolean) => { },
})

export const MenuProvider = ({ children }: any) => {

    const [showMenu, setShowMenu] = useState(false)


    const toggleMenu = (val: boolean) => {
        setShowMenu(val)
    }
    return (
        <MenuContext.Provider value={{ showMenu, toggleMenu}}>
            {children}
        </MenuContext.Provider>
    )
}