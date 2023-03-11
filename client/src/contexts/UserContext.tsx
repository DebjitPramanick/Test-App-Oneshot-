import React, { useContext, createContext, useState, useEffect } from "react";
import { toast } from "react-toastify";
import { getUser, deleteUser } from "../api/user.api";
import { UserType } from "../types";

const initialUser: UserType = {
    _id: '',
    name: '',
    email: "",
    profile_pic: "",
    isAdmin: false,
    created_at: "",
    updatedAt: ""
}

export interface UserContextProps {
    user: UserType,
    saveUser: (data: any) => void,
    logoutUser: () => void,
    deleteUserAccount: () => void,
    isLoggedIn: boolean
}

const UserContext = createContext<UserContextProps>({
    user: initialUser,
    saveUser: (data: any) => { },
    logoutUser: () => { },
    deleteUserAccount: async () => { },
    isLoggedIn: false
});

export const useUser = () => {
    return useContext(UserContext);
}

export const UserProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {

    const cacheUserKey = 'test-app-user';
    const cacheTokenKey = 'test-app-user-token';
    const cachedUser = JSON.parse(localStorage.getItem(cacheUserKey) || 'null');

    const [user, setUser] = useState<UserType>(cachedUser || initialUser);
    const [isLoggedIn, setIsLoggedIn] = useState<boolean>(cachedUser || false);

    useEffect(() => {
        fetchUser()
    }, [])


    const saveUser = (data: any) => {
        const userData = data.user;
        const token = data.token;
        setUser(userData)
        localStorage.setItem(cacheUserKey, JSON.stringify(userData))
        localStorage.setItem(cacheTokenKey, token)
    }


    const fetchUser = async () => {
        try {
            if (user && user._id) {
                const res: any = await getUser(user._id);
                const userData = res.user;
                setUser(userData)
                localStorage.setItem(cacheUserKey, JSON.stringify(userData))
            }
        } catch (err: any) {
            toast.error(err.message, {
                autoClose: 3500,
                pauseOnHover: true
            })
        }
    }

    const deleteUserAccount = async () => {
        try {
            if (user && user._id) {
                await deleteUser(user._id);
                logoutUser()
                window.location.href = "/"
            }
        } catch (err: any) {
            toast.error(err.message, {
                autoClose: 3500,
                pauseOnHover: true
            })
        }
    }

    const logoutUser = () => {
        localStorage.removeItem(cacheUserKey)
        localStorage.removeItem(cacheTokenKey)
        setIsLoggedIn(false);
    }

    const values = {
        user,
        saveUser,
        logoutUser,
        deleteUserAccount,
        isLoggedIn
    }

    return (
        <UserContext.Provider value={values}>
            {children}
        </UserContext.Provider>
    )
};
