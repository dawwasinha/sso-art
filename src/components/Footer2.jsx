import { Link } from 'react-router-dom';
import logoLight from '@/assets/images/logo-light.png';
import { footerLinks } from '@/assets/data';
import IconifyIcon from './wrappers/IconifyIcon';
import { currentYear, developedBy } from '@/common/constants';
const Footer2 = () => {
  return <footer className="bg-slate-900 bg-[url('../images/footer-bg.png')] bg-center bg-no-repeat">
      <div className="container lg:px-20">
        <div className="flex flex-col justify-between gap-8 py-16 lg:flex-row lg:items-start">
          <div className="lg:w-5/12">
            <Link to="/" className="logo mb-4 flex items-center gap-2">
              <img src={logoLight} className="w-36" alt="" />
            </Link>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-gray-400">
              Platform STAR menggabungkan empat aplikasi powerful dalam satu ekosistem untuk transformasi digital yang terintegrasi.
            </p>
          </div>
          <div className="flex flex-col gap-6 lg:w-6/12 lg:flex-row lg:justify-end lg:gap-12">
            <div>
              <h5 className="mb-3 font-semibold text-gray-200">Site Map</h5>
              <ul className="flex flex-col gap-2">
                <li>
                  <Link to="/" className="text-sm text-gray-400 transition-all hover:text-white">
                    Homepage
                  </Link>
                </li>
                <li>
                  <Link to="#aplikasi" className="text-sm text-gray-400 transition-all hover:text-white">
                    Aplikasi
                  </Link>
                </li>
                <li>
                  <Link to="#features" className="text-sm text-gray-400 transition-all hover:text-white">
                    Features
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="border-t border-slate-700/20 py-6">
        <div className="container flex flex-wrap items-center justify-center gap-4 text-center md:justify-between md:text-start lg:px-20">
          <p className="text-sm text-gray-400">
            {currentYear} © STAR
          </p>
        </div>
      </div>
    </footer>;
};
export default Footer2;