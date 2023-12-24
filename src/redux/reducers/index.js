import UserReducer from './user.reducer';
import BlogReducer from './blog.reducer'
import NewFeedReducer from './new-feed.reducer';
import { combineReducers } from 'redux';

const allReducers = {
    user: UserReducer,
    blog: BlogReducer,
    newFeed: NewFeedReducer,
};

const rootReducer = combineReducers(allReducers);
export default rootReducer;