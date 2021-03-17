import React from 'react';

function Search(){
    return(
        <form class="navbar-form navbar-right hidden-sm">
              <div class="form-group">
                <i class="icon ion-android-search"></i>
                <input type="text" class="form-control" placeholder="Search friends, photos, videos"/>
              </div>
        </form>
    );
}

export default Search;