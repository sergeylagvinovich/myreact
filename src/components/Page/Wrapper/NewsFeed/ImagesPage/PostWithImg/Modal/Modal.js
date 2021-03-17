import React from 'react';

function Modal(){
    return(
        <div class="modal fade modal-1" tabindex="-1" role="dialog" aria-hidden="true">
            <div class="modal-dialog modal-lg">
                <div class="modal-content">
                    <div class="post-content">
                    <img src="http://placehold.it/1920x1280" alt="post-image" class="img-responsive post-image" />
                    <div class="post-container">
                    <img src="http://placehold.it/300x300" alt="user" class="profile-photo-md pull-left" />
                        <div class="post-detail">
                            <div class="user-info">
                                <h5><a href="timeline.html" class="profile-link">Alexis Clark</a> <span class="following">following</span></h5>
                                <p class="text-muted">Published a photo about 3 mins ago</p>
                            </div>
                            <div class="reaction">
                                <a class="btn text-green"><i class="icon ion-thumbsup"></i> 13</a>
                                <a class="btn text-red"><i class="fa fa-thumbs-down"></i> 0</a>
                            </div>
                            <div class="line-divider"></div>
                            <div class="post-text">
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. <i class="em em-anguished"></i> <i class="em em-anguished"></i> <i class="em em-anguished"></i></p>
                            </div>
                            <div class="line-divider"></div>
                            <div class="post-comment">
                                <img src="http://placehold.it/300x300" alt="" class="profile-photo-sm" />
                                <p><a href="timeline.html" class="profile-link">Diana </a><i class="em em-laughing"></i> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud </p>
                            </div>
                            <div class="post-comment">
                                <img src="http://placehold.it/300x300" alt="" class="profile-photo-sm" />
                                <p><a href="timeline.html" class="profile-link">John</a> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud </p>
                            </div>
                            <div class="post-comment">
                                <img src="http://placehold.it/300x300" alt="" class="profile-photo-sm" />
                                <input type="text" class="form-control" placeholder="Post a comment"/>
                            </div>
                        </div>
                    </div>
                </div>
                </div>
            </div>
        </div>  
    );
}

export default Modal;