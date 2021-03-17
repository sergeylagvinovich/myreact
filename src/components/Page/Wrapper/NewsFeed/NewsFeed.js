import React from 'react';
import ImagePage from './ImagesPage/ImagePage';
import LeftSideBar from './LeftSideBar/LeftSideBar';
import NewsPage from './NewsPage/NewsPage';
import RightSideBar from './RightSideBar/RightSideBar';
import {BrowserRouter, Route} from 'react-router-dom';

function NewsFeed(){
    return(
        <BrowserRouter>
            <div id="page-contents">
                <div class="container">
                    <div class="row">
                        <LeftSideBar/>
                        <Route component={NewsPage} path={['/newsfeednews']}/>
                        <Route component={ImagePage} path='/newsfeedimages'/>
                        <RightSideBar/>
                    </div>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default NewsFeed;