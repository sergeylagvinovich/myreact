import React from 'react';

function ProfileCard(){
    return(
        <div class="profile-card">
            <img src="http://placehold.it/300x300" alt="user" class="profile-photo" />
            <h5><a href="timeline.html" class="text-white">Sarah Cruiz</a></h5>
            <a href="#" class="text-white"><i class="ion ion-android-person-add"></i> 1,299 followers</a>
        </div>
    );
}

export default ProfileCard;