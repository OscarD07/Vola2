import axios from "axios";
import {
    HOST,
    PAYPAL_API_URL,
    PAYPAL_API_CLIENT,
    PAYPAL_API_SECRET
} from "../config/config.dev.js";

const controller = {
    createOrder: async function (req, res) {
        const order = {
            intent: "CAPTURE",
            purchase_units: [
                {
                    amount: {
                        currency_code: "USD",
                        value: "100.00",
                    },
                },
            ],
            application_context: {
                brand_name: "Vola2",
                landing_page: "NO_PREFERENCE",
                user_action: "PAY_NOW",
                return_url: `${HOST}/capture-order`,
                cancel_url: `${HOST}/cancel-order`,
            }
        }
        const params = new URLSearchParams();
        params.append('grant_type', 'client_credentials');
        const { data: { access_token } } = await axios.post(`${PAYPAL_API_URL}/v1/oauth2/token`, params, {
            auth: {
                username: PAYPAL_API_CLIENT,
                password: PAYPAL_API_SECRET,
            },
        })

        const response = await axios.post(`${PAYPAL_API_URL}/v2/checkout/orders`, order,
            {
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${access_token}`,
                }
            })
        return res.json(response.data);
    },
    captureOrder: async function (req, res) {

        const { token } = req.query;
        //TODO: guardar el token en la bdd

        const response = await axios.post(`${PAYPAL_API_URL}/v2/checkout/orders/${token}/capture`,
            {}, {
            auth: {
                username: PAYPAL_API_CLIENT,
                password: PAYPAL_API_SECRET,
            }
        })
        console.log(response.data);

        // return res.redirect(`${HOST}/success.html`);
        return res.json(`payed`);
    },
    cancelOrder: async function (req, res) {
        return res.redirect(`${HOST}/home.html`);
    }



}

export default controller;