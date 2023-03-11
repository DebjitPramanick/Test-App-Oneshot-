import React from 'react'
import { AuthPageLayout } from "../../components/Styled/Layout"
import { BoxContainer } from './styles'
import { ImGoogle3 } from 'react-icons/im'
import { GoogleButton } from '../../components/Styled/Form'
import { Heading, Text } from '../../components/Styled/Typography'
import { Flex } from '../../components/Styled/Shared'
import Loader from '../../components/Loader'
const IMAGE = require("../../assets/auth-img.png")

interface PropsType {
    authHandler: (creds: any) => void,
    loading: boolean
}

const AuthUI: React.FC<PropsType> = ({
    authHandler,
    loading
}) => {
    return (
        <AuthPageLayout>
            <div className='auth-image-section'>
                <img src={IMAGE} alt="/" />
            </div>
            <div className='auth-form-section'>
                <Heading>TestApp</Heading>
                <Flex style={{ height: "calc(100vh - 70px)", justifyContent: 'center' }}>
                    <BoxContainer>
                        <Text className='no-truncate' style={{ marginBottom: '32px' }}>Please register / login with google to coninue.</Text>
                        <GoogleButton onClick={authHandler}>
                            {loading ? <Loader type='normal' /> : (
                                <>
                                    <ImGoogle3 size={20} /> Continue with Google
                                </>
                            )}
                        </GoogleButton>
                    </BoxContainer>
                </Flex>
            </div>

        </AuthPageLayout>
    )
}

export default AuthUI