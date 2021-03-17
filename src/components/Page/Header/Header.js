import React from 'react';
import Brand from './Brand/Brand';
import Menu from './Menu/Menu';
import Search from './Search/Search';


function Header(){
    return(
        <header id="header">
      <nav class="navbar navbar-default navbar-fixed-top menu">
        <div class="container">
          <Brand/>
          <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
            <Menu/>
            <Search/>
          </div>
        </div>
      </nav>
    </header>
    );
}

export default Header;