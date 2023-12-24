import axios from 'axios'

export const getBlogByUser = async (userId) => {
    try {
        const response = await axios.get("https://noel-for-fun.onrender.com/api/v1/blog/user/" + userId);
        return response;
    } catch (err) {
        console.error(err);
    }
}

export const saveBlog = async (data) => {
    try {
        const response = await axios.post("https://noel-for-fun.onrender.com/api/v1/blog/", data);
        return response;
    } catch (err) {
        console.error(err);
    }
}

export const getBlogs = async (sort, page) => {
    try {
        const data = {
            "page": page
        }
        const response = await axios.get("https://noel-for-fun.onrender.com/api/v1/blog/", {params: data});
        console.log(response)
        return response;
    } catch (err) {
        console.error(err);
    }
}


export const increaseView = async (id) => {
    try {
        const response = await axios.get("https://noel-for-fun.onrender.com/api/v1/blog/increase-view/"+id);
        return response;
    } catch (err) {
        console.error(err);
    }
}

