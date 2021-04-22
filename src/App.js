import logo from './logo.svg';
import './App.css';
import {Button} from "@material-ui/core";
import {
    Route,
    Switch,
    Redirect,
    withRouter
} from "react-router-dom"
import PostsContainer from "./components/PostsContainer/PostsContainer";
import Posts from "./components/PostsContainer/Posts";
import UsersContainer from "./components/UserContainer/UsersContainer";


function App() {

    return (
        <div className="wrapper">

                <div className="container__user-posts">
                    <div className="container__user">
                        <Route render={() => <UsersContainer  />}/>
                    </div>
                    <div className="vertical__line">

                    </div>
                    <div className="container__posts">
                        <Route render={() => <PostsContainer  />}/>
                    </div>
                </div>



        </div>
    );
}

export default App;
