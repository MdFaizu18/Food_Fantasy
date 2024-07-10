import React from 'react'
import AdminNavbar from '../../pages/orders/Orders'
import { WrapperAdminResponiveBox } from '../../assets/wrapper/AdminResponsiveWrapper'

const Orders = () => {
    return (
        <div>
            <AdminNavbar propName='Orders' />
            <WrapperAdminResponiveBox>
                <h1>Orders</h1>
            </WrapperAdminResponiveBox>
        </div>
    )
}

export default Orders;