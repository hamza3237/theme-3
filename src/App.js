import { Link, Outlet } from 'react-router-dom';
import React from 'react';
function App() {
  return (
    <div className="">
   
   <div>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="products">product</Link>
          </li>
         
        </ul>
      </nav>
      <hr />
      <Outlet />
    </div>

     
    </div>
  );
}

export default App;
