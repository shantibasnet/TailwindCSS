import LogIn from "./LogIn";
import React, { useState } from 'react';
function NavBar() {

    const [showLoginForm, setShowLoginForm] = useState(false);

    const handleLogInClick = () => {
        setShowLoginForm(true);
      };
    
 return (
        <div className="bg-blue-200 p-4">
        <ul className=" text-red-600 flex justify-between">
          <li className="hover:text-blue-600">Home</li>
          <li>About</li>
          <li>Contact</li>
          <button
          className="bg-blue-400 text-blue-900 py-5 px-8 rounded-full font-semibold hover:bg-yellow-400 transition duration-300"
          onClick={handleLogInClick}
        >
          Log In
        </button>
      </ul>
      {showLoginForm && <LogIn/>}
          
      </div>
      
    );
  }

  export default NavBar
  