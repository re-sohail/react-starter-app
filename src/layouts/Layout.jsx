import React from 'react';
import { Outlet } from 'react-router-dom';

function Layout() {
  return (
    <div>
      <div className='w-full h-screen bg-zinc-900 text-white'>
        <Outlet />
      </div>
    </div>
  );
}

export default Layout;
