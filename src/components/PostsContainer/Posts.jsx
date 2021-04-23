import React from "react";
import Post from "./Post";


const Posts = (props) => {

    return (
        <div>
            {props.posts.map(p => {
                return (
                  <div key={p.id}>
                      <Post data={p}/>
                  </div>
                )
            })}
        </div>
    )
}

export default Posts;