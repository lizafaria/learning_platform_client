
import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';

import { AuthContext } from '../Context/AuthContext';
import Loader from './Loader';


const ProtectedRoute = ({children}) => {
    const {user, loading} = useContext(AuthContext);
        const location = useLocation();
        if(loading){
            return  <Loader></Loader>
        }

        if(!user){
            return <Navigate to="/login" state={{from: location}} replace></Navigate>
        }
        return children;

};

export default ProtectedRoute;