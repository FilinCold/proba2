import React from "react";
import Post from "./Post";


let Posts = (props) => {

    let posts = props.posts.map(p => {
        return (
            <div key={p.id}>
                <Post data={p}/>
            </div>
        )
    })
    return (
        <div>
            {posts}
        </div>
    )
}

export default Posts;