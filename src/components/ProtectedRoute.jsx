import React from 'react';
import { Navigate } from 'react-router-dom';
import jwt from 'jsonwebtoken';

const ProtectedRoute = ({ children }) => {
    const token = localStorage.getItem('token');
    const SECRET_KEY = "your_secret_key";


    
    if (!token) {
        return <Navigate to="/login" />;
    }

    try {
        jwt.verify(token, SECRET_KEY);
        return children;
    } catch (error) {
        return <Navigate to="/login" />;
    }
};

export default ProtectedRoute;
