import React from 'react'
import ClipLoader from "react-spinners/ClipLoader";
import { PageLoaderContainer, LoaderContainer } from './styles';

const Loader: React.FC<{ type: 'page' | 'normal' }> = ({ type }) => {
    return (
        <>
            {type === 'page' ? (
                <PageLoaderContainer>
                    <ClipLoader size={100}/>
                </PageLoaderContainer>
            ) : (
                <LoaderContainer>
                    <ClipLoader size={30}/>
                </LoaderContainer>
            )}
        </>
    )
}

export default Loader