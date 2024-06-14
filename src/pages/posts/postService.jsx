import Rest from "contexts/auth-reducer/Rest";

export const getPost = async () => {
    try {
        const { data } = await Rest.get("/posts");
        console.log(data);
        return data;
    } catch (error) {
        console.error(error);
        return {
            error: true,
            data: error,
        };
    }
};

export const createPost = async (payload) => {
    try {
        // let jsonObject = {};
        // for (let key of payload.keys()) {
        //     jsonObject[key] = payload.get(key);
        //     console.log(jsonObject[key])
        // }
        const { data } = await Rest.post("/posts", payload, true);
        console.log(data);
        return data;
    } catch (error) {
        console.error(error);
        return {
            error: true,
            data: error,
        };
    }
};


export const deletePost = async (payload) => {
    try {
        const { data } = await Rest.delete("/posts/" + payload);
        console.log(data);
        return data;
    } catch (error) {
        console.error(error);
        return {
            error: true,
            data: error,
        };
    }
};


export const getPostbyID = async (id) => {
    try {
        const { data } = await Rest.get("/posts/" + id);
        console.log(data);
        return data;
    } catch (error) {
        console.error(error);
        return {
            error: true,
            data: error,
        };
    }
};



export const updatePost = async (payload, id) => {
    try {
        const { data } = await Rest.post("/posts/" + id, payload, true);
        console.log(data);
        return data;
    } catch (error) {
        console.error(error);
        return {
            error: true,
            data: error,
        };
    }
};