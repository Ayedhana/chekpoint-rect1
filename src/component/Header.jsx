import React from "react";
import './Header.css';
function Header(){
return (
  <div className="Header">
    <img
      className="Header-logo"
      src="https://pbs.twimg.com/profile_images/1313134923650412546/oUCnszs1_400x400.jpg"
      alt="GoMyCode"
    />
    <h2 className="Header-title">Cours complet - Formation certifiante</h2>
  </div>
);

}
export default Header;