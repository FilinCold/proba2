import logo from './logo.svg';
import './App.css';
import {Button} from "@material-ui/core";
import {
    Route,
    Switch,
    Redirect,
    withRouter
} from "react-router-dom"

function App() {
    return (
        <div className="wrapper">
            <Switch>
                <div className="container__user-posts">
                    <div className="container__user">
                        <Button variant="contained" color="primary">Sign In</Button>
                    </div>
                    <div className="vertical__line">

                    </div>
                    <div className="container__posts">
                        {/*<Route render={() => {<PostsContainer />}}/>*/}
                    </div>
                </div>


            </Switch>
        </div>
    );
}

export default App;
