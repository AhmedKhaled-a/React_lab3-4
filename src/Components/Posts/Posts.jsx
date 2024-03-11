import { useContext } from "react";
import React from "react";
import PostsContext from "./PostsContext";

function Posts() {
    let {posts} = useContext(PostsContext)
    return ( 
        <div>
            <h1>Posts</h1>
            {
                posts? (posts.map((p)=>{
                    return(
                        <div key={p.id}>
                            <h1>{p.title}</h1>
                        </div>
                    )
                })):(<div>Loading</div>)
            }
        </div>
     );
}

export default Posts;