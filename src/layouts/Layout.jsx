import { Outlet } from 'react-router-dom';

const Layout = () => (
  <div className='w-full h-screen bg-zinc-900 text-white'>
    <main>
      <Outlet />
    </main>
  </div>
);

export { Layout };
