import Rest from "./Rest";

export const loginData = async (payload) => {
    try {
        console.log(payload);
        const { data } = await Rest.post("/auth/login", payload);

        return data;
    } catch (error) {
        return {
            error: true,
            data: error,
        };
    }
};


export const registerData = async (payload) => {
    try {
        const { data } = await Rest.post("auth/register", payload);

        return data;
    } catch (error) {
        return {
            error: true,
            data: error,
        };
    }
};