import React from 'react';

function Header(props) {

  return (
    <header>
      <img
        src = {props.logo}
        alt = "logo"
        onClick={props.clickHandler}
      />
    </header>
  );
}

export default Header;
