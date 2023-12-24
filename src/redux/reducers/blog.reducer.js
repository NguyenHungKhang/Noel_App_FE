const initialState = {
    blog: null,
    error: null
};

const BlogReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_BLOG':
            return {
                ...state,
                blog: action.payload,
                error: null
            };
        default:
            return state;
    }
};

export default BlogReducer;