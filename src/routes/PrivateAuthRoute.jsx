import React from "react";
import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

export const PrivateRoute = ({ children }) => {
    const { isLoggedIn } = useSelector((state) => state?.persist);
    console.log(isLoggedIn, '-----');

    return isLoggedIn ? children : <Navigate to="/login" replace={true} />;
};

export const AuthRoute = ({ children }) => {
    const { isLoggedIn } = useSelector((state) => state?.persist);
    console.log(children);
    return !isLoggedIn ? children : <Navigate to="/" />;
};
