import api from "../../api";

export const setPage = (data) => ({
    type: 'SET_PAGE',
    payload: data,
});

export const setSort = (data) => ({
    type: 'SET_SORT',
    payload: data,
});

const setList = (payload) => {
    return {
        type: 'SET_LIST',
        payload: payload
    };
};

const setError = (error) => {
    return {
        type: 'SET_ERROR',
        payload: error
    };
};

export const fetchBlogs = (sort, page) => {
    return async (dispatch) => {
        try {
            const response = await api.BlogApi.getBlogs(sort, page);
            const blogs = response.data;
            dispatch(setList(blogs));
        } catch (error) {
            dispatch(setError(error.message));
        }
    };
};