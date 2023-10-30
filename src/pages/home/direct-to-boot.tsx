import React, {ReactNode} from 'react';
import './direct-to-boot.css';
import {useOrder} from "./useOrder";
import {useNotifyArrival} from "./useNotifyArrival";

const Notified = () => {
    return (
        <Section title="Direct to Boot">
            <p data-testid="description">
                Thanks for letting us know, you order will come to you in a minute
            </p>
            <p data-testid="store-is-notified">Notified</p>
        </Section>
    )
}

const Prompt = ({ orderId, notify } : {orderId: string, notify: () => void}) => {
    const { isReady} = useOrder(orderId)

    return (
        <Section title="Direct to Boot">
            <p data-testid="description">Please click the button when you have arrived, one of our friendly staff
                will bring your order to you.</p>
            <button data-testid="i-am-here" disabled={!isReady} onClick={notify}>I'm Here</button>
        </Section>
    )
}

const CallStoreNumber = () => {
    return (
        <Section title="Direct to Boot">
            <button data-testid="store-phone-number">(555) 867-5309</button>
        </Section>
    )
}

const Section = ({ title, children} : { title: string, children: ReactNode }) => {
    return (
        <div>
            <h2>{title}</h2>
            {children}
        </div>
    )
}

export  const DirectToBoot = ({ orderId } : { orderId: string }) => {
    const { notified, notifiable, notify } = useNotifyArrival(orderId)

    if (!notifiable) {
        return <CallStoreNumber />
    }

    return notified ? <Notified /> : <Prompt orderId={orderId} notify={notify} />
}
