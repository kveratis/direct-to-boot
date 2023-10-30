import React from 'react';
import './direct-to-boot.css';
import {useOrder} from "./useOrder";
import {useNotifyArrival} from "./useNotifyArrival";

export  const DirectToBoot = ({ orderId } : { orderId: string }) => {
    const { isReady} = useOrder(orderId)
    const { notified, notifiable, notify } = useNotifyArrival(orderId)

    return (
        <div>
            <h2>Direct to Boot</h2>
            <p>Please click the button when you have arrived, one of our friendly staff will bring your order to you.</p>
            {
                notifiable ? (notified ? <p data-testid="store-is-notified">Notified</p> :
                    <button data-testid="i-am-here" disabled={!isReady} onClick={notify}>I'm Here</button>) : (
                        <button data-testid="store-phone-number">(555) 867-5309</button>
                )
            }
        </div>
    );
}
