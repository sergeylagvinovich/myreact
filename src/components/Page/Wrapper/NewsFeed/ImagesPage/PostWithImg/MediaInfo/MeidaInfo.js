import React from 'react';

function MeidaInfo(){
    return(
        <div class="media-info">
            <div class="reaction">
                <a class="btn text-green"><i class="fa fa-thumbs-up"></i> 63</a>
                <a class="btn text-red"><i class="fa fa-thumbs-down"></i> 12</a>
            </div>
            <div class="user-info">
                <img src="http://placehold.it/300x300" alt="" class="profile-photo-sm pull-left" />
                <div class="user">
                    <h6><a href="#" class="profile-link">Richard Bell</a></h6>
                    <a class="text-green" href="#">Friend</a>
                </div>
            </div>
        </div>
    );
}

export default MeidaInfo;