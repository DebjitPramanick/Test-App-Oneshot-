import React from 'react'
import ClipLoader from "react-spinners/ClipLoader";
import { useThemeMode } from '../../contexts/ThemeModeContext';
import { PageLoaderContainer, LoaderContainer } from './styles';

const Loader: React.FC<{ type: 'page' | 'normal' }> = ({ type }) => {
    const {theme} = useThemeMode()
    return (
        <>
            {type === 'page' ? (
                <PageLoaderContainer>
                    <ClipLoader size={100} 
                    color={theme === 'dark' ? '#fff' : '#000'}/>
                </PageLoaderContainer>
            ) : (
                <LoaderContainer>
                    <ClipLoader size={20} color={theme === 'dark' ? '#fff' : '#000'}/>
                </LoaderContainer>
            )}
        </>
    )
}

export default Loader