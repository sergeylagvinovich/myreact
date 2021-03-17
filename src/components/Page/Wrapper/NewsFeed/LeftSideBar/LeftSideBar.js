import React from 'react';
import ChatsBlock from '../ChatsBlock/ChatsBlock';
import LeftMenu from '../LeftMenu/LeftMenu';
import ProfileCard from '../ProfileCard/ProfileCard';


function LeftSideBar(){
    return(
        <div class="col-md-3 static">
            <ProfileCard/>
            <LeftMenu/>
            <ChatsBlock/>     
        </div>
    );
}

export default LeftSideBar;