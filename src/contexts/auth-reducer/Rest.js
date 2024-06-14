import axios from "axios";
import { store } from "./store";
import { showToastMessage, validationMessage } from "./helper";
// import { store } from "../Store";
// import { showToastMessage, validationMessage } from "../../utils/helper";

axios.defaults.timeout = 1000 * 60;
axios.defaults.headers = {
    Pragma: "no-cache",
    Accept: "application/json",
};

export default class Rest {
    static async get(url) {
        const { userData } = store.getState()?.persist;
        const token = userData?.data?.token;

        const instance = axios.create({
            baseURL: "http://localhost:3001/api/",
            headers: { authorization: `Bearer ${token}` },
        });

        return await instance
            .get(url)
            .then((res) => {
                return res;
            })
            .catch((error) => {
                return error;
            });
    }

    static async post(
        url,
        payload = {},
        formData = false,
        headers = {},
        loginToken = null
    ) {

        const { userData } = store.getState()?.persist;
        const token = loginToken || userData?.data?.token;
        const instance = axios.create({
            baseURL: "http://localhost:3001/api/",
            headers: {
                authorization: `Bearer ${token}`,
                "Content-Type": formData ? "multipart/form-data" : "application/json",
                ...headers,
            },
        });

        return await instance
            .post(url, payload)
            .then((res) => {
                return res;
            })
            .catch((error) => {

                showToastMessage(validationMessage(error?.response?.data?.data));
                return error;
            });
    }
    static async delete(url, formData = false, headers = {}, loginToken = null) {
        const { userData } = store.getState()?.persist;
        const token = loginToken || userData?.data?.token;
        const instance = axios.create({
            baseURL: "http://localhost:3001/api/",
            headers: {
                authorization: `Bearer ${token}`,
                "Content-Type": formData ? "multipart/form-data" : "application/json",
                ...headers,
            },
        });

        return await instance
            .delete(url)
            .then((res) => {
                return res;
            })
            .catch((error) => {
                return error;
            });
    }

    static async getDetails(url, payload) {
        const instance = axios.create({
            baseURL: process.env.REACT_APP_API_URL,
            headers: {
                authorization: `Bearer ${payload}`,
                "Content-Type": "application/json",
            },
        });

        return await instance
            .get(url)
            .then((res) => {
                return res;
            })
            .catch((error) => {
                return error;
            });
    }
}