import React from 'react'
import { Navigate } from 'react-router-dom';
import { useUser } from '../../contexts/UserContext';

const ProtectedRoute: React.FC<any> = ({ children }) => {

    const { isLoggedIn } = useUser();

    if (!isLoggedIn) {
        return <Navigate to="/auth" />
    }

    return children
}

export default ProtectedRoute