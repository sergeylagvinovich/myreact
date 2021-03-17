import React from 'react';
import MyPost from '../../UseAll/Posts/MyPost/MyPost';
import Post from '../../UseAll/Posts/Post/Post';

function NewsPage(){
    return(
        <div class="col-md-7">
            <MyPost/>
            <Post/>
            <Post/>
            <Post/>
        </div>
    );
}

export default NewsPage;