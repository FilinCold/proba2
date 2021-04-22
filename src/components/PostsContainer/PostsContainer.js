const {connect} = require("react-redux");


class PostsContainerAPI extends React.Component {

    render() {
        return (
            <Posts posts={this.props.posts}/>
        )
    }
}


let mapStateToProps = (state) => {
    return {
        posts: state.postsPage.posts
    }
}


const PostsContainer = connect(mapStateToProps)(PostsContainerAPI);


export default PostsContainer;