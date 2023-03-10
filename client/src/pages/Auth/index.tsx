import React from 'react'
import { GoogleLogin } from '@react-oauth/google';
import { useUser } from '../../contexts/UserContext';
import { checkIfUserExists, createUser, loginUser } from '../../api/user.api';
import { toast } from 'react-toastify'
import jwt_decode from "jwt-decode";

const Auth = () => {

    const { saveUser } = useUser()

    const handleLoginUser = async (userId: string) => {
        try {
            const user = await loginUser(userId)
            saveUser(user)
            window.location.href = "/"
        } catch (error: any) {
            toast.error(error.message, {
                autoClose: 3500,
                pauseOnHover: true
            })
        }
    }

    const registerUser = async (userData: any) => {
        try {
            const data = {
                profile_pic: userData.picture,
                name: userData.name,
                email: userData.email,
                isAdmin: false
            }
            const user = await createUser(data)
            saveUser(user)
            window.location.href = "/"
        } catch (error: any) {
            toast.error(error.message, {
                autoClose: 3500,
                pauseOnHover: true
            })
        }
    }

    return (
        <div>
            <GoogleLogin
                onSuccess={async (credentialResponse) => {
                    const credToken = credentialResponse.credential || ""
                    const data: any = jwt_decode(credToken);
                    const result: any = await checkIfUserExists(data.email)
                    console.log("RES ==> ", result)
                    if(result.exists){
                        await handleLoginUser(result.userId)
                    } else {
                        await registerUser(data)
                    }
                }}
                onError={() => {
                    toast.error("Login failed!", {
                        autoClose: 3500,
                        pauseOnHover: true
                    })
                }}
                cancel_on_tap_outside={true}
                auto_select={false}
            />;
        </div>
    )
}

export default Auth