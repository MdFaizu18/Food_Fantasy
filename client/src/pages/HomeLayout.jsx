import { Outlet } from 'react-router-dom';
import React from 'react'
import { createContext, useContext } from 'react';
import customFetch from '../utils/customFetch'
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom'



const MainDashboardContext = createContext();
const HomeLayout = () => {
    const navigate = useNavigate();

    const logoutUser = async () => {
        document.cookie = 'loggedIn=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
        navigate('/');
        await customFetch.get("/auth/logout");
        toast.success("Logout Successfully")
        console.log('logout user');
    };
    return (
        <div>
            <MainDashboardContext.Provider
                value={{
                    logoutUser
                }}>
               <Outlet />
            </MainDashboardContext.Provider>
        </div>
    )
}

export default HomeLayout;
export const useDashboardContext = () => useContext(MainDashboardContext);