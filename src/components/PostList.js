import React from 'react';
import Post from "./Post";

const PostList = ({posts})=>{

    return(
        <div>
            {
                posts.map((elem) => {
                    return <Post postText={elem.body} postTitle={elem.title}/>
                })
            }
        </div>
    );
};

export default PostList;