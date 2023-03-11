import { useGoogleLogin } from '@react-oauth/google';
import { useUser } from '../../contexts/UserContext';
import { checkIfUserExists, createUser, loginUser } from '../../api/user.api';
import { toast } from 'react-toastify'
import AuthUI from './AuthUI';
import { fetchGoogleUser } from '../../api/google.api';
import { useState } from 'react';

const Auth = () => {

    const { saveUser } = useUser()
    const [loading, setLoading] = useState(false)

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

    const onSuccessHandler = async (codeResponse: any) => {
        setLoading(true)
        try {
            const credToken = codeResponse.access_token || ""
            const data: any = await fetchGoogleUser(credToken);
            const result: any = await checkIfUserExists(data.email)
            if (result.exists) {
                await handleLoginUser(result.userId)
            } else {
                await registerUser(data)
            }
            setLoading(false)
        } catch (error: any) {
            toast.error("Google login error.", {
                autoClose: 3500,
                pauseOnHover: true
            })
            setLoading(false)
        }

    }

    const googleAuthHanlder = useGoogleLogin({
        onSuccess: onSuccessHandler,
    });

    return (
        <AuthUI
            authHandler={googleAuthHanlder}
            loading={loading} />
    )
}

export default Auth