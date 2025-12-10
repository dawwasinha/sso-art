import { useEffect, useRef } from 'react';
import Gumshoe from 'gumshoejs';
import { Link } from 'react-router-dom';
import IconifyIcon from './wrappers/IconifyIcon';
import useScrollEvent from '@/hooks/useScrollEvent';
import { cn } from '@/helpers/cn';
import logoDark from '@/assets/images/logo-dark.png';
import logoLight from '@/assets/images/logo-light.png';
import { useAuth } from '@/contexts/AuthContext';

const TopNavbar = ({
  navLinks,
  isDark
}) => {
  const navRef = useRef(null);
  const { scrollY } = useScrollEvent();
  const { user, isAuthenticated, logout } = useAuth();

  useEffect(() => {
    if (navRef.current) new Gumshoe('.navbar-nav a', {
      offset: 80
    });
  }, []);
  return <header id="navbar-sticky" className={cn('navbar', isDark ? 'nav-dark' : 'nav-light', {
    'nav-sticky': scrollY >= 50
  })}>
      <div className="container">
        <nav>
          <Link to="/" className="logo">
            <img src={logoDark} width={145} height={40} className="logo-dark h-10" alt="Opixo Logo" />
            <img src={logoLight} width={145} height={40} className="logo-light h-10" alt="Opixo Logo" />
          </Link>
          <div className="ms-auto flex items-center px-2.5 lg:hidden">
            <button className="hs-collapse-toggle inline-flex h-9 w-12 items-center justify-center rounded-md border border-gray-300 bg-slate-300/30" type="button" id="hs-unstyled-collapse" data-hs-collapse="#mobileMenu" data-hs-type="collapse">
              <IconifyIcon icon="uil:bars" className="text-2xl" />
            </button>
          </div>
          <div ref={navRef} id="mobileMenu" className="hs-collapse mx-auto mt-2 hidden grow basis-full items-center justify-center overflow-hidden transition-all duration-300 lg:mt-0 lg:flex lg:basis-auto">
            <ul id="navbar-navlist" className="navbar-nav">
              {navLinks.map((item, idx) => <li key={item.link + idx} className="nav-item">
                  <a href={item.link} className="nav-link">
                    {item.label}
                  </a>
                </li>)}
            </ul>
            <div className="mt-4 flex items-center border-t border-gray-200 pt-4 lg:mt-0 lg:hidden lg:border-none lg:pt-0">
              {isAuthenticated ? (
                <div className="flex items-center gap-3">
                  <button 
                    onClick={logout} 
                    className="nav-btn"
                  >
                    <IconifyIcon icon="lucide:log-out" className="me-2 h-5 w-5" />
                    Logout
                  </button>
                </div>
              ) : (
                <Link to="/auth/login" className="nav-btn">
                  <IconifyIcon icon="lucide:log-in" className="me-2 h-5 w-5" />
                  Login
                </Link>
              )}
            </div>
          </div>
          <div className="hidden items-center lg:flex">
            {isAuthenticated ? (
              <div className="flex items-center gap-3">
                <button 
                  onClick={logout} 
                  className="nav-btn"
                >
                  <IconifyIcon icon="lucide:log-out" className="me-2 h-5 w-5" />
                  Logout
                </button>
              </div>
            ) : (
              <Link to="/auth/login" className="nav-btn">
                <IconifyIcon icon="lucide:log-in" className="me-2 h-5 w-5" />
                Login
              </Link>
            )}
          </div>
        </nav>
      </div>
    </header>;
};
export default TopNavbar;