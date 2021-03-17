import React from 'react';
import Chat from './Chat/Chat';

function ChatsBlock(){
    return(
        <div id="chat-block">
            <div class="title">Chats online</div>
            <ul class="online-users list-inline">
                <Chat/>    
                <Chat/>
                <Chat/>
                <Chat/>
                <Chat/>
                <Chat/>
                <Chat/>
                <Chat/>
            </ul>
      </div>
    );
}

export default ChatsBlock;