import React from 'react';
import FollowUser from './FollowUser/FollowUser';

function RightSideBar(){
    return(
        <div class="col-md-2 static">
            <div class="suggestions" id="sticky-sidebar">
              <h4 class="grey">Who to Follow</h4>
              <FollowUser/>
              <FollowUser/>
              <FollowUser/>
              <FollowUser/>
              <FollowUser/>
            </div>
          </div>
    );
}

export default RightSideBar;