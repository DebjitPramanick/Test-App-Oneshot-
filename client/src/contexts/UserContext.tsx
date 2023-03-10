import React, { useContext, createContext, useState } from "react";
import { getUser } from "../api/user.api";
import { UserType } from "../types/user.type";

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
    refetchUser: () => void,
    isLoggedIn: boolean
}

const UserContext = createContext<UserContextProps>({
    user: initialUser,
    saveUser: (data: any) => { },
    logoutUser: () => { },
    refetchUser: async () => { },
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

    const saveUser = (data: any) => {
        const userData = data.user;
        const token = data.token;
        setUser(userData)
        localStorage.setItem(cacheUserKey, JSON.stringify(userData))
        localStorage.setItem(cacheTokenKey, token)
    }


    const refetchUser = async () => {
        try {
            if (user && user._id) {
                const res = await getUser(user._id);
                console.log("USER", res)
                const userData = res.data;
                setUser(userData)
                localStorage.setItem(cacheUserKey, JSON.stringify(userData))
            }
        } catch (err: any) {
            throw new Error(err);
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
        refetchUser,
        isLoggedIn
    }

    return (
        <UserContext.Provider value={values}>
            {children}
        </UserContext.Provider>
    )
};
