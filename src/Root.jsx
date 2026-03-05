import { Outlet, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

const Root = () => {
  const location = useLocation();

  // পেইজ চেঞ্জ হলে টপে স্ক্রোল করবে
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  // চেক করুন current path error পেইজ কিনা
  const isErrorPage = location.pathname === '/error' || 
                      (location.pathname !== '/' && 
                       !location.pathname.match(/^\/(properties|booking|agents|blog|article|contact-us)/));

  return (
    <div className="flex flex-col min-h-screen">
      {!isErrorPage && <Navbar />}
      <main className="flex-1">
        <Outlet />
      </main>
      {!isErrorPage && <Footer />}
    </div>
  );
};

export default Root;