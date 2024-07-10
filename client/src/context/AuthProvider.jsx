import React, { createContext, useState, useEffect, useContext } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
        // Parse document.cookie to get an object of key-value pairs
        const cookies = Object.fromEntries(
            document.cookie.split("; ").map(cookie => cookie.split("="))
        );
        console.log(cookies)

        // Check if the loggedIn cookie exists and its value is 'true'
        const loggedInCookieExists = cookies.loggedIn === 'true';
        setIsLoggedIn(loggedInCookieExists);
    }, []);

    return (
        <AuthContext.Provider value={{ isLoggedIn, setIsLoggedIn }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);


