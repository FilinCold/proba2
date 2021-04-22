import React from "react";
import User from "./User";
import {loginAC, unLoginAC} from "../../reducers/UserReducer";
import {Button} from "@material-ui/core";

const {connect} = require("react-redux");

class UsersContainerAPI extends React.Component {

    loginAccount = () => {

        this.props.loginAC();
    }
    exitAccount = () => {

        this.props.unLoginAC();
    }

    render() {
        let check = this.props.checkAuthorization
        console.log(check)
        return (
            <div className='wrapper__user-button'>
                <div className="wrapper__user">
                    {check ? <User user={this.props.user}/> : null}
                </div>
                <div className="wrapper__button">
                    {check ?
                        <Button onClick={() => this.exitAccount()} variant="contained" color="primary">Logout</Button> :
                        <Button onClick={() => this.loginAccount()} variant="contained" color="primary">Sign In</Button>}
                </div>


            </div>

            // <User checkAuthorization={this.props.checkAuthorization} user={this.props.user} loginAccount={this.props.loginAC} exitAccount={this.props.unLoginAC}/>
        )
    }
}

let mapStateToProps = (state) => {
    return {
        user: state.userPage.user,
        checkAuthorization: state.userPage.checkAuthorization
    }
}

const UsersContainer = connect(mapStateToProps, {
    loginAC,
    unLoginAC
})(UsersContainerAPI)


export default UsersContainer;