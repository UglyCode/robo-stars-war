import React from 'react';

const Post = ({postText, postTitle}) => {

    return(
        <div className='bg-light-blue pa2 ma2'>
            <p className='b tl pa0 ma0'>{postTitle}</p>
            <p className='tl pa0 ma0 i'>{postText}</p>
        </div>
    );
};

export default Post;