import axios from 'axios'

export const addUser = async () => {
    try {
        const response = await axios.post("https://noel-for-fun.onrender.com/api/v1/user/");
        return response;
    } catch (err) {
        console.error(err);
    }
}

export const getUserByIpv4 = async () => {
    try {
        const response = await axios.get("https://noel-for-fun.onrender.com/api/v1/user/by-ip");
        return response;
    } catch (err) {
        console.error(err);
    }
}
