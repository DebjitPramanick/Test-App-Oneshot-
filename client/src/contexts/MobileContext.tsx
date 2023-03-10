import React, { createContext, useContext, useState } from 'react'

export const useMobile = () => {
    return useContext(MobileContext)
}

const MobileContext = createContext<{
    showMenu: boolean,
    toggleMobileMenu: (val: boolean) => void,
    showMobileSearch: boolean,
    toggleMobileSearch: (val: boolean) => void,
}>({
    showMenu: false,
    toggleMobileMenu: (val: boolean) => { },
    showMobileSearch: false,
    toggleMobileSearch: (val: boolean) => { }
})

export const MobileProvider = ({ children }: any) => {

    const [showMobileSearch, setShowSearchBar] = useState(false)
    const [showMenu, setShowMenu] = useState(false)

    const toggleMobileSearch = (val: boolean) => {
        setShowSearchBar(val)
    }

    const toggleMobileMenu = (val: boolean) => {
        setShowMenu(val)
    }
    return (
        <MobileContext.Provider value={{ showMenu, toggleMobileMenu, showMobileSearch, toggleMobileSearch}}>
            {children}
        </MobileContext.Provider>
    )
}