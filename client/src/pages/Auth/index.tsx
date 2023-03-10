import React from 'react'
import { GoogleLogin } from '@react-oauth/google';
import { useUser } from '../../contexts/UserContext';
import { createUser } from '../../api/user.api';
import { toast } from 'react-toastify'
import jwt_decode from "jwt-decode";
import {useNavigate} from 'react-router-dom'

const Auth = () => {

    const { saveUser } = useUser()
    const navigate = useNavigate()

    const registerUser = async (userData: any) => {
        try {
            const data = {
                profile_pic: userData.picture,
                name: userData.name,
                email:  userData.email,
                isAdmin: false
            }
            const user = await createUser(data)
            saveUser(user)
            navigate("/")
        } catch (error) {
            toast.error("Error occurred!", {
                autoClose: 3500,
                pauseOnHover: true
            })
            console.log(error)
        }
    }

    return (
        <div>
            <GoogleLogin
                onSuccess={async (credentialResponse) => {
                    const credToken = credentialResponse.credential || ""
                    const data = jwt_decode(credToken);
                    await registerUser(data)
                }}
                onError={() => {
                    toast.error("Login failed!", {
                        autoClose: 3500,
                        pauseOnHover: true
                    })
                }}
                
            />;
        </div>
    )
}

export default Auth