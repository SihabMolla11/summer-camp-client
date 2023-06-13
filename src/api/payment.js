import axios from "axios";
import { useEffect } from "react";

export const SavePayment = (payData) => {
    useEffect(() => {
        axios
            .post(`${import.meta.env.VITE_API_LINK}/payments`, payData)
            .then((res) => console.log(res?.data));
    }, [payData]);
}