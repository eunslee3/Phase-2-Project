import React from "react";
import NavBar from './navigationBar/NavBar'

function Header() {
  return (
    <header>
      <h1 className="nav-bar-title">
      AnimeFlix
        <span className="logo" role="img">
        {/* ༼ つ ◕_◕ ༽つ🍰🍔🍕 "૮₍  ˶•⤙•˶ ₎ა */}
        </span>
      </h1>
      <NavBar />
    </header>
  );
}

export default Header;