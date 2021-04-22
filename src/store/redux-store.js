import {combineReducers, createStore} from "redux";

const reducers = combineReducers({
    postsPage: PostsReducer,
    userPage: UserReducer
})
const store = createStore(reducers);


export default store;