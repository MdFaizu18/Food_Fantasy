import React from 'react'
import AdminNavbar from '../components/AdminNavbar'
import { WrapperAdminResponiveBox } from '../assets/wrapper/AdminResponsiveWrapper'

const AdminOrders = () => {
    return (
        <div>
            <AdminNavbar propName='Orders ' />
            <WrapperAdminResponiveBox>
                <h1>hi hello order in our website</h1>
            </WrapperAdminResponiveBox>
        </div>
    )
}

export default AdminOrders;