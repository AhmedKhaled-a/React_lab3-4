import axios from "axios";
import { createContext, useEffect, useMemo, useState } from "react";
import React from "react";

const PostsContext = React.createContext();

export const PostsContextProvider = (props) => {
    let [posts, setPosts] = useState([]);
    let getPosts = () => {
        axios.get("https://dummyjson.com/posts")
        .then(res => {setPosts(res.data.posts);console.log(res.data.posts);})
        .catch(err => console.log(err));
    }

    useEffect(() => {   
        getPosts();
    }, []);

    const contextVal = useMemo(()=> ({posts}), [posts]);

    return (
        <PostsContext.Provider value={contextVal}>
            {props.children}
        </PostsContext.Provider>
    );

}

export default PostsContext;