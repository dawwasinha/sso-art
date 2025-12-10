import saasImg2 from '@/assets/images/landing/saas/arise2.png';
import saasImg from '@/assets/images/landing/saas/arise3.png';
const Features = () => {
  return <section id="features" className="bg-slate-50 bg-[url(../images/landing/saas/hero-3-bg.png)] bg-cover bg-left bg-no-repeat">
      <div className="py-24">
        <div className="container">
          <div className="mb-14 flex items-center justify-center">
            <div className="max-w-2xl text-center">
              <h5 className="mb-3 text-lg font-semibold uppercase tracking-wider text-primary">
                Keunggulan STAR
              </h5>
              <h2 className="mb-4 text-4xl/snug font-bold text-gray-800">Mengapa Memilih Platform STAR?</h2>
              <p className="text-lg text-gray-600">
                Platform terintegrasi dengan fitur lengkap untuk meningkatkan efisiensi manajemen aset, pelacakan operasi, dan konfigurasi perubahan
              </p>
            </div>
          </div>
          <div className="mt-14 grid grid-cols-1 items-center gap-12 md:grid-cols-2">
            <div>
              <img src={saasImg2} width={596} height={398} className="max-h-full max-w-full rounded-2xl shadow-xl" alt="ART Platform" />
            </div>
            <div className="my-auto">
              <div className="mb-6 inline-block rounded-lg bg-primary/10 px-4 py-2">
                <span className="text-sm font-semibold text-primary">Integrasi Seamless</span>
              </div>
              <h2 className="mb-4 text-3xl font-bold text-gray-800 lg:text-4xl">Platform Terpadu untuk Semua Kebutuhan</h2>
              <div className="flex flex-col gap-y-5">
                <div className="flex items-start gap-4">
                  <div className="mt-1 flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-primary/10">
                    <svg className="h-5 w-5 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
                      <polyline points="22 4 12 14.01 9 11.01"/>
                    </svg>
                  </div>
                  <div>
                    <h5 className="mb-1 text-lg font-semibold text-gray-800">Single Sign-On</h5>
                    <p className="text-base text-gray-600">Akses ketiga aplikasi dengan satu kali login yang aman</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="mt-1 flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-primary/10">
                    <svg className="h-5 w-5 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <circle cx="12" cy="12" r="10"/>
                      <line x1="2" y1="12" x2="22" y2="12"/>
                      <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
                    </svg>
                  </div>
                  <div>
                    <h5 className="mb-1 text-lg font-semibold text-gray-800">Real-time Synchronization</h5>
                    <p className="text-base text-gray-600">Data tersinkronisasi otomatis antar aplikasi</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="mt-1 flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-primary/10">
                    <svg className="h-5 w-5 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
                      <polyline points="9 22 9 12 15 12 15 22"/>
                    </svg>
                  </div>
                  <div>
                    <h5 className="mb-1 text-lg font-semibold text-gray-800">Cloud-Based Infrastructure</h5>
                    <p className="text-base text-gray-600">Akses dari mana saja dengan infrastruktur cloud yang handal</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white py-24">
        <div className="container">
          <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-2">
            <div className="order-2 md:order-1">
              <div className="mb-6 inline-block rounded-lg bg-primary/10 px-4 py-2">
                <span className="text-sm font-semibold text-primary">SmSTAR Analytics</span>
              </div>
              <h2 className="mb-4 text-3xl font-bold text-gray-800 lg:text-4xl">Dashboard Analytics yang Komprehensif</h2>
              <p className="mb-8 text-lg text-gray-600">
                Dapatkan wawasan mendalam dengan dashboard analytics terpadu yang menampilkan data dari ketiga aplikasi secara real-time
              </p>
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                <div className="rounded-xl bg-gradient-to-br from-blue-50 to-blue-100/50 p-6 transition-transform hover:scale-105">
                  <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-lg bg-blue-600 text-white">
                    <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/>
                      <polyline points="3.27 6.96 12 12.01 20.73 6.96"/>
                      <line x1="12" y1="22.08" x2="12" y2="12"/>
                    </svg>
                  </div>
                  <h5 className="mb-2 text-lg font-bold text-gray-800">Data Integration</h5>
                  <p className="text-sm text-gray-600">Sinkronisasi otomatis lintas aplikasi</p>
                </div>
                <div className="rounded-xl bg-gradient-to-br from-emerald-50 to-emerald-100/50 p-6 transition-transform hover:scale-105">
                  <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-lg bg-emerald-600 text-white">
                    <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M18 20V10"/>
                      <path d="M12 20V4"/>
                      <path d="M6 20v-6"/>
                    </svg>
                  </div>
                  <h5 className="mb-2 text-lg font-bold text-gray-800">Live Reports</h5>
                  <p className="text-sm text-gray-600">Laporan real-time dan akurat</p>
                </div>
                <div className="rounded-xl bg-gradient-to-br from-violet-50 to-violet-100/50 p-6 transition-transform hover:scale-105">
                  <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-lg bg-violet-600 text-white">
                    <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <circle cx="12" cy="12" r="3"/>
                      <path d="M12 1v6m0 6v6"/>
                      <path d="m4.2 4.2 4.2 4.2m5.6 5.6 4.2 4.2"/>
                      <path d="M1 12h6m6 0h6"/>
                      <path d="m4.2 19.8 4.2-4.2m5.6-5.6 4.2-4.2"/>
                    </svg>
                  </div>
                  <h5 className="mb-2 text-lg font-bold text-gray-800">Automation</h5>
                  <p className="text-sm text-gray-600">Otomatisasi proses bisnis</p>
                </div>
                <div className="rounded-xl bg-gradient-to-br from-amber-50 to-amber-100/50 p-6 transition-transform hover:scale-105">
                  <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-lg bg-amber-600 text-white">
                    <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                    </svg>
                  </div>
                  <h5 className="mb-2 text-lg font-bold text-gray-800">Compliance</h5>
                  <p className="text-sm text-gray-600">Standar regulasi terpenuhi</p>
                </div>
              </div>
            </div>
            <div className="order-1 md:order-2">
              <img src={saasImg} height={650} width={371} className="mx-auto max-h-[650px] max-w-full bg-transparent" alt="STAR Dashboard" />
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default Features;