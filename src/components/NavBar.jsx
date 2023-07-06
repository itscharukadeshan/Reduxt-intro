/** @format */

import React from "react";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <>
      <div className='navbar bg-base-300'>
        <div className='flex-1'>
          <a className='btn btn-ghost normal-case text-xl'>Redux App</a>
        </div>
        <div className='flex-none'>
          <ul className='menu menu-horizontal px-10 font-bold '>
            <li>
              <Link to='/'>Home</Link>
            </li>

            <li>
              <Link to='post'>Post</Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default NavBar;
