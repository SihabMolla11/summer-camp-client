import axios from "axios";

export const SavePayment = (payData) => {
    axios
        .post(`${import.meta.env.VITE_API_LINK}/payments`, payData)
        .then((res) => console.log(res?.data));
}
