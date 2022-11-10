import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../Context/AuthProvider';

const PrivateRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext)
    const location = useLocation();


    if (loading) {
        return (
            <div class="flex justify-center items-center">
            <div class="border-green-600 spinner-border animate-spin inline-block w-8 h-8 border-8 rounded-full" role="status">
            </div>
            </div>
        )
    }
    if (user) {
        return children;
    }
    return <Navigate to='/login' state={{ from: location }} replace></Navigate>
};

export default PrivateRoute;