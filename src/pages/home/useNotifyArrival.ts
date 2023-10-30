import {useState} from "react";
import axios from "axios";
import {Constants} from "../../constants";

export const useNotifyArrival = (orderId: string) => {
    const [notified, setNotified] = useState<boolean>(false)
    const [notifiable, setNotifiable] = useState<boolean>(true)

    const notify = async () => {
        try {
            const response = await axios.post(
                `${Constants.API_URL}/orders/${orderId}`
            )
            setNotifiable(true)
            setNotified(response.data.notified)
        } catch (error: unknown) {
            setNotifiable(false)
            setNotified(false)
        }
    }

    return {
        notify,
        notified,
        notifiable
    }
}