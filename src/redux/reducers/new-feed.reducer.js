import api from "../../api";

const initialState = {
    blogs: null,
    page: null,
    sort: null,
    error: null,
    total: 0
};

const NewFeedReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_PAGE':
            return {
                ...state,
                page: action.payload,
                error: null
            };
        case 'SET_SORT':
            return {
                ...state,
                sort: action.payload,
                error: null
            };
        case 'SET_LIST':
            return {
                ...state,
                blogs: action.payload.blogs,
                total: action.payload.total,
                error: null
            };
        default:
            return state;
    }
};

export default NewFeedReducer;