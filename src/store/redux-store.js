import {combineReducers, createStore} from "redux";
import PostsReducer from "../reducers/PostsReducer";
import UserReducer from "../reducers/UserReducer";

const reducers = combineReducers({
    postsPage: PostsReducer,
    userPage: UserReducer
})
const store = createStore(reducers);


export default store;