import React from 'react'
import OrderDetails from './orderTabs/OrderDetails'
import Address from './orderTabs/Address'
import Payment from './orderTabs/Payment'

const Order = () => {
    return (
        <div>
            Order
            <OrderDetails />
            <Address />
            <Payment />
        </div>
    )
}

export default Order
