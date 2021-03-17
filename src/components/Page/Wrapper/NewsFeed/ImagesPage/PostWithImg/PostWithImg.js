import React from 'react';
import Img from './Img/Img';
import MeidaInfo from './MediaInfo/MeidaInfo';
import Modal from './Modal/Modal';


function PostWithImg(){
    return(
        <div class="grid-item col-md-6 col-sm-6">
            <div class="media-grid">
                <Img/>
                <MeidaInfo/>    
                <Modal/>           
            </div>
        </div>
    );
}

export default PostWithImg;