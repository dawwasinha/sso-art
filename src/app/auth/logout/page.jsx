import { Link, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import AuthSwiper from '@/components/common/AuthSwiper';
import logoLight from '@/assets/images/logo-light.png';
import logOut from '@/assets/images/other/logout.svg';
import PageMetaData from '@/components/PageMetaData';
import { useAuth } from '@/contexts/AuthContext';

const Logout = () => {
  const { logout } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    // Perform logout when component mounts
    logout();
  }, []);

  return <>
      <PageMetaData title='Logout' />
      <div className="grid lg:grid-cols-2">
        <div className="flex h-full flex-col p-10">
          <div className="pb-10">
            <Link to="/" className="flex justify-center">
              <img src={logoLight} width={145} height={40} alt="dark logo" className="h-10" />
            </Link>
          </div>
          <div className="my-auto pb-6 text-center">
            <h4 className="mb-3 text-2xl font-bold text-white">See you Again!</h4>
            <p className="mx-auto mb-5 max-w-sm text-gray-300">You are now successfully signed out.</p>
            <div className="flex items-start justify-center">
              <img src={logOut} alt="" className="h-52" />
            </div>
          </div>
          <div className="w-full text-center">
            <p className="text-base font-medium leading-6 text-gray-300">
              Back to{' '}
              <Link to="/auth/login" className="ms-1 font-semibold text-primary">
                Log In
              </Link>
            </p>
          </div>
        </div>
        <AuthSwiper />
      </div>
    </>;
};
export default Logout;