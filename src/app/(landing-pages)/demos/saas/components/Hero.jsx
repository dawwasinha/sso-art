import saas1 from '@/assets/images/landing/saas/arise.png';
const Hero = () => {
  return <>
      <section id="home" className="relative overflow-hidden bg-opacity-50 bg-gradient-to-r from-blue-100 to-blue-50 pb-96 pt-40">
        <div className="container relative">
          <div className="text-center">
            <div className="mt-6 flex justify-center">
              <div className="max-w-3xl">
                <div className="mb-6 inline-block rounded-full bg-primary/10 px-4 py-2">
                  <span className="text-sm font-semibold text-primary">STAR Ecosystem</span>
                </div>
                <h1 className="mb-6 text-5xl/tight font-bold text-gray-800 lg:text-6xl/tight">
                  Solusi <span className="text-primary">Terintegrasi</span> untuk Transformasi Digital
                </h1>
                <p className="mx-auto text-lg text-gray-600 lg:max-w-2xl">
                  Platform STAR menggabungkan tiga aplikasi powerful dalam satu ekosistem: ARISE untuk manajemen aset & risiko, REPORT untuk tracking operasi, dan TRACE untuk konfigurasi perubahan.
                </p>
              </div>
            </div>
            <div className="mt-10 flex items-center justify-center gap-4">
              <a href="#aplikasi" className="rounded-lg bg-primary px-8 py-3.5 text-base font-semibold text-white shadow-lg transition-all hover:bg-primary/90 hover:shadow-xl">
                Lihat Aplikasi
              </a>
              <a href="#features" className="rounded-lg border-2 border-gray-300 px-8 py-3.5 text-base font-semibold text-gray-700 transition-all hover:border-primary hover:text-primary">
                Pelajari Lebih Lanjut
              </a>
            </div>
          </div>
        </div>
        <div className="shape absolute -bottom-[1px] end-0 start-0 overflow-hidden text-white sm:-bottom-px">
          <svg className="h-auto w-full origin-top scale-[2.0]" viewBox="0 0 2880 48" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 48H1437.5H2880V0H2160C1442.5 52 720 0 720 0H0V48Z" fill="currentColor" />
          </svg>
        </div>
      </section>
      <div className="pb-24">
        <div className="relative z-10 mx-auto -mt-80 max-w-3xl px-6">
          <div className="hidden lg:block">
            <div className="absolute -end-5 -top-10 -z-[1] h-24 w-24 bg-[url('../images/other/dot.svg')]" />
            <div className="absolute -bottom-10 -start-5 -z-[1] h-24 w-24 bg-[url('../images/other/dot2.svg')]" />
          </div>
          <img src={saas1} alt="STAR Platform Dashboard" className="h-full w-full rounded-2xl shadow-2xl" />
        </div>
      </div>
    </>;
};
export default Hero;