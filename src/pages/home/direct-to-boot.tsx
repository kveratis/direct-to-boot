import React from 'react';
import './direct-to-boot.css';
import {useOrder} from "./useOrder";

export  const DirectToBoot = ({ orderId } : { orderId: string }) => {
    const { isReady } = useOrder(orderId)

    return (
        <div>
            <h2>Direct to Boot</h2>
            <p>Please click the button when you have arrived, one of our friendly staff will bring your order to you.</p>
            <button data-testid="iamhere" disabled={!isReady}>I'm Here</button>
        </div>
    );
}
