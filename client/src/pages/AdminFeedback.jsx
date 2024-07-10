import React from 'react'
import AdminNavbar from '../components/AdminNavbar'
import { WrapperAdminResponiveBox } from '../assets/wrapper/AdminResponsiveWrapper'

const AdminFeedback = () => {
    return (
        <div>
            <AdminNavbar propName='Feedback' />
            <WrapperAdminResponiveBox>
                <h1>Feedback</h1>
            </WrapperAdminResponiveBox>
        </div>
    )
}

export default AdminFeedback;