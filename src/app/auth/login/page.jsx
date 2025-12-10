import { Link, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import AuthSwiper from '@/components/common/AuthSwiper';
import ThirdPartyLogin from '@/components/common/ThirdPartyLogin';
import IconifyIcon from '@/components/wrappers/IconifyIcon';
import logoLight from '@/assets/images/logo-light.png';
import PageMetaData from '@/components/PageMetaData';
import { useAuth } from '@/contexts/AuthContext';

const Login = () => {
  const [loginData, setLoginData] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const { login, isAuthenticated } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    // Redirect if already authenticated
    if (isAuthenticated) {
      navigate('/');
    }
  }, [isAuthenticated, navigate]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    const result = await login(loginData, password);

    if (!result.success) {
      setError(result.error || 'Login failed. Please check your credentials.');
      setLoading(false);
    }
    // If successful, the login function will handle navigation
  };

  return <>
      <div className="flex min-h-screen w-full items-center justify-center">
        <div className="w-full max-w-md rounded-2xl bg-white px-10 py-12 shadow-2xl">
          {/* Logo */}
          <div className="mb-6 flex justify-center">
            <Link to="/">
              <img src={logoLight} width={100} height={30} alt="logo" className="h-10" />
            </Link>
          </div>

          {/* Title */}
          <div className="mb-8 text-center">
            <p className="text-sm text-gray-600">Enter your email or username and password.</p>
          </div>

          {/* Error Message */}
          {error && (
            <div className="mb-4 rounded-md bg-red-50 p-3 text-sm text-red-800">
              {error}
            </div>
          )}

          {/* Form */}
          <form className="space-y-4" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="loginData" className="mb-2 block text-sm font-medium text-gray-700">
                Email or Username
              </label>
              <input 
                className="block w-full rounded-md border border-gray-300 px-3 py-2 text-sm text-gray-900 placeholder-gray-400 transition-colors focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500" 
                type="text" 
                id="loginData" 
                required 
                placeholder="Enter your email or username"
                value={loginData}
                onChange={(e) => setLoginData(e.target.value)}
                disabled={loading}
              />
            </div>

            <div>
              <label htmlFor="password" className="mb-2 block text-sm font-medium text-gray-700">
                Password
              </label>
              <input 
                className="block w-full rounded-md border border-gray-300 px-3 py-2 text-sm text-gray-900 placeholder-gray-400 transition-colors focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500" 
                type="password" 
                required 
                id="password" 
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                disabled={loading}
              />
            </div>

            {/* <div className="flex items-center justify-between py-1">
              <div className="flex items-center">
                <input 
                  type="checkbox" 
                  className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500" 
                  id="checkbox-signin" 
                />
                <label className="ml-2 text-sm text-gray-600" htmlFor="checkbox-signin">
                  Remember me
                </label>
              </div>
              <Link to="/auth/forgot-pw" className="text-sm text-blue-600 hover:underline">
                Forgot your password?
              </Link>
            </div> */}

            <button 
              className="mt-4 flex w-full items-center justify-center rounded-lg bg-blue-600 px-4 py-2.5 text-sm font-semibold text-white transition-all hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50" 
              type="submit"
              disabled={loading}
            >
              <IconifyIcon icon="uil:navigator" className="me-2 text-base" />
              {loading ? 'Logging in...' : 'Log In'}
            </button>
          </form>

          {/* Sign Up Link */}
          {/* <div className="mt-8 text-center">
            <p className="text-sm text-gray-600">
              Don&apos;t have an account?{' '}
              <Link to="/auth/register" className="font-semibold text-blue-600 hover:text-blue-700 hover:underline">
                Sign Up
              </Link>
            </p>
          </div> */}
        </div>
      </div>
    </>;
};
export default Login;