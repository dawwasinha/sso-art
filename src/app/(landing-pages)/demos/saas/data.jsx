import avatar3 from '@/assets/images/avatars/img-3.png';
import avatar5 from '@/assets/images/avatars/img-5.png';
import avatar7 from '@/assets/images/avatars/img-7.png';
import avatar8 from '@/assets/images/avatars/img-8.png';
export const navLinks = [{
  label: 'Home',
  link: '#home'
}, {
  label: 'Aplikasi',
  link: '#aplikasi'
}, {
  label: 'Features',
  link: '#features'
}];
export const applications = [{
  title: 'ARISE',
  subtitle: 'Asset & Risk Integrated Systems',
  description: 'Sistem terintegrasi untuk mengelola aset dan risiko dengan efisien dan komprehensif.',
  icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-emerald-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>,
  variant: 'bg-emerald-50',
  link: 'http://127.0.0.1:8000/api/sso/callback'
}, {
  title: 'REPORT',
  subtitle: 'Regional e-Portal for Operation & Request Tracking',
  description: 'Portal elektronik regional untuk melacak operasi dan permintaan secara real-time dengan efisien.',
  icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-violet-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
        <line x1="12" y1="1" x2="12" y2="23" />
        <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
      </svg>,
  variant: 'bg-violet-50',
  link: '#'
}, {
  title: 'TRACE',
  subtitle: 'Tracking For Change Configuration',
  description: 'Sistem pelacakan untuk konfigurasi perubahan yang akurat dan terstruktur.',
  icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-amber-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
        <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
      </svg>,
  variant: 'bg-amber-50',
  link: '#'
}]
export const pricingPlans = [{
  name: 'Basic Plan',
  monthlyPrice: 8,
  yearlyPrice: 28,
  features: [{
    icon: 'lucide:check',
    name: '10 users',
    variant: 'bg-primary/20 text-primary'
  }, {
    icon: 'lucide:check',
    name: '50 GB storage',
    variant: 'bg-primary/20 text-primary'
  }, {
    icon: 'lucide:check',
    name: 'Front plan features',
    variant: 'bg-primary/20 text-primary'
  }, {
    icon: 'lucide:check',
    name: '100 apps',
    variant: 'bg-primary/20 text-primary'
  }, {
    icon: 'lucide:x',
    name: 'Product support',
    variant: 'bg-red-500/20 text-red-500'
  }, {
    icon: 'lucide:x',
    name: 'Advanced security',
    variant: 'bg-red-500/20 text-red-500'
  }, {
    icon: 'lucide:x',
    name: 'Free subdomain',
    variant: 'bg-red-500/20 text-red-500'
  }]
}, {
  name: 'Business Plan',
  monthlyPrice: 18,
  yearlyPrice: 48,
  features: [{
    icon: 'lucide:check',
    name: '10 users',
    variant: 'bg-primary/20 text-primary'
  }, {
    icon: 'lucide:check',
    name: '50 GB storage',
    variant: 'bg-primary/20 text-primary'
  }, {
    icon: 'lucide:check',
    name: 'Front plan features',
    variant: 'bg-primary/20 text-primary'
  }, {
    icon: 'lucide:check',
    name: '100 apps',
    variant: 'bg-primary/20 text-primary'
  }, {
    icon: 'lucide:check',
    name: 'Product support',
    variant: 'bg-primary/20 text-primary'
  }, {
    icon: 'lucide:check',
    name: 'Advanced security',
    variant: 'bg-primary/20 text-primary'
  }, {
    icon: 'lucide:x',
    name: 'Free subdomain',
    variant: 'bg-red-500/20 text-red-500'
  }],
  isPopular: true
}, {
  name: 'Exclusive Plan',
  monthlyPrice: 28,
  yearlyPrice: 68,
  features: [{
    icon: 'lucide:check',
    name: '10 users',
    variant: 'bg-primary/20 text-primary'
  }, {
    icon: 'lucide:check',
    name: '50 GB storage',
    variant: 'bg-primary/20 text-primary'
  }, {
    icon: 'lucide:check',
    name: 'Front plan features',
    variant: 'bg-primary/20 text-primary'
  }, {
    icon: 'lucide:check',
    name: '100 apps',
    variant: 'bg-primary/20 text-primary'
  }, {
    icon: 'lucide:check',
    name: 'Product support',
    variant: 'bg-primary/20 text-primary'
  }, {
    icon: 'lucide:check',
    name: 'Advanced security',
    variant: 'bg-primary/20 text-primary'
  }, {
    icon: 'lucide:check',
    name: 'Free subdomain',
    variant: 'bg-primary/20 text-primary'
  }]
}];
export const teamMembers = [{
  avatar: avatar7,
  userName: '@maxine',
  name: 'Maxine Gilmer',
  position: 'Web designer',
  description: 'These alternatives to the classic Lorem Ipsum texts are often amusing and tell short, funny or nonsensical stories.'
}, {
  avatar: avatar3,
  userName: '@michael',
  name: 'Michael Ellis',
  position: 'UI/UX designer',
  description: 'We all intend to plan ahead, but too often let the day-to-day minutia get in the way of making a calendar.'
}, {
  avatar: avatar8,
  userName: '@ruben',
  name: 'Ruben Gouse',
  position: 'Web developer',
  description: 'These qualities can be combined perfectly natural. However, things like people look miserable.'
}, {
  avatar: avatar5,
  userName: '@francis',
  name: 'Francis Ibikunle',
  position: 'Manager',
  description: 'These alternatives to the classic Lorem Ipsum are often amusing and tell short, funny or nonsensical stories.'
}];