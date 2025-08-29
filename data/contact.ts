interface ContactItem {
  type: 'email' | 'phone' | 'location'
  label: string
  value: string
  link?: string
  icon: {
    path: string
    viewBox: string
  }
}

export const contactInfo: ContactItem[] = [
  {
    type: 'email',
    label: 'Email',
    value: 'martinezyaacob@gmail.com',
    link: 'mailto:martinezyaacob@gmail.com',
    icon: {
      path: 'M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z',
      viewBox: '0 0 24 24'
    }
  },
  {
    type: 'phone',
    label: 'Phone',
    value: '+63 (915) 980-3576',
    link: 'tel:+639159803576',
    icon: {
      path: 'M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z',
      viewBox: '0 0 24 24'
    }
  },
  {
    type: 'location',
    label: 'Location',
    value: 'Bulacan, Philippines',
    icon: {
      path: 'M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z M15 11a3 3 0 11-6 0 3 3 0 016 0z',
      viewBox: '0 0 24 24'
    }
  }
] 