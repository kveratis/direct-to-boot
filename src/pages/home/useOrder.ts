import {useState} from "react";
import axios from "axios/index";
import {Constants} from "../../constants";
import {useInterval} from "usehooks-ts";

const pollingDelay = 1000;
const stopPollingDelay = 0;

export const useOrder = (orderId: string) => {
    const [isReady, setReady] = useState<boolean>(false)
    const [delay, setDelay] = useState<number>(pollingDelay)

    const fetchOrderStatus = async () => {
        try {
            const response = await axios.get(`${Constants.API_URL}/orders/${orderId}`)
            const isOrderReady = response.data.status === "ready"
            setReady(isOrderReady)
            setDelay(isOrderReady ? stopPollingDelay : pollingDelay)
        } catch (error: unknown) {
            console.error(error);
        }
    }

    useInterval(fetchOrderStatus, delay)

    return {
        isReady
    }
}