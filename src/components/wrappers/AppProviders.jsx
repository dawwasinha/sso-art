import { Fragment, useEffect } from 'react';
import BackToTop from '../BackToTop';
import { useLocation } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { AuthProvider } from '@/contexts/AuthContext';

const AppProviders = ({
  children
}) => {
  const {
    pathname
  } = useLocation();
  useEffect(() => {
    import('preline/preline');
  }, []);
  useEffect(() => {
    setTimeout(() => {
      if (window.HSStaticMethods) window.HSStaticMethods.autoInit();
    }, 400);
  }, [pathname]);
  return <Fragment>
      <HelmetProvider>
        <AuthProvider>
          {children}
          <BackToTop />
        </AuthProvider>
      </HelmetProvider>
    </Fragment>;
};
export default AppProviders;