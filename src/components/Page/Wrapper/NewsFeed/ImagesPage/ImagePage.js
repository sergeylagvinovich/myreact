import React from 'react';
import MyPost from '../../UseAll/Posts/MyPost/MyPost';
import PostWithImg from './PostWithImg/PostWithImg';

function ImagePage(){
    return(
        <div class="col-md-7">
            <MyPost/>
            <div class="media">
                <div class="row js-masonry" data-masonry='{ "itemSelector": ".grid-item", "columnWidth": ".grid-sizer", "percentPosition": true }'>
                    <div class="grid-sizer col-md-6 col-sm-6"></div>
                        <PostWithImg/>
                        <PostWithImg/>
                        <PostWithImg/>
                        <PostWithImg/>
                        <PostWithImg/>
                </div>
            </div>
        </div>
    );
}

export default ImagePage;