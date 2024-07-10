import React from 'react'
import AdminNavbar from '../components/AdminNavbar'
import { WrapperAdminResponiveBox } from '../assets/wrapper/AdminResponsiveWrapper'

const AdminFavourites = () => {
    return (
        <div>
            <AdminNavbar propName='Favourites' />
            <WrapperAdminResponiveBox>
                <h1>Favourites</h1>
            </WrapperAdminResponiveBox>
        </div>
    )
}

export default AdminFavourites;