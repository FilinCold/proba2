import React from "react";
import Posts from "./Posts";

const {connect} = require("react-redux");


class PostsContainerAPI extends React.Component {

    render() {

        return (
            <div>
                <Posts posts={this.props.posts}/>
            </div>

        )
    }
}


let mapStateToProps = (state) => {

    return {
        posts: state.postsPage.posts
    }
}


const PostsContainer = connect(mapStateToProps, null)(PostsContainerAPI);


export default PostsContainer;