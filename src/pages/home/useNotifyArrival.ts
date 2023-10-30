import {useState} from "react";
import axios from "axios";
import {Constants} from "../../constants";

export const useNotifyArrival = (orderId: string) => {
    const [notified, setNotified] = useState<boolean>(false)

    const notify = async () => {
        const response = await axios.post(
            `${Constants.API_URL}/orders/${orderId}`
        )

        setNotified(response.data.notified)
    }

    return {
        notify,
        notified
    }
}