import React from "react";

function Navbar({currentUser}) {
  return (
    <>
      <div className="navbar">
        <div className="navtab">Breakfast</div>
        <div className="navtab">Lunch</div>
        <div className="navtab">Dinner</div>
      </div>
      <div className="profileNav">
        <p>Logged In: <br/>
          <span style={{color:'peru'}}>{currentUser.email} </span> </p>
        {currentUser.isLoggedIn ? <button>Log Out</button> : <button>Sign In</button>}
      </div>
    </>
  );
}

export default Navbar;