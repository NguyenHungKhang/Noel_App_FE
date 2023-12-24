import axios from 'axios'

export const addUser = async (ipv4) => {
    try {
        const data = {
            "ipv4": ipv4
        }
        const response = await axios.post("https://noel-for-fun.onrender.com/api/v1/user/", data);
        return response;
    } catch (err) {
        console.error(err);
    }
}

export const getUserByIpv4 = async (ipv4) => {
    try {
        const data = {
            "ipv4": ipv4
        }
        const response = await axios.get("https://noel-for-fun.onrender.com/api/v1/user/by-ip/", { params: data });
        return response;
    } catch (err) {
        console.error(err);
    }
}
