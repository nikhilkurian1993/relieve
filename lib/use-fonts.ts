import localFont from 'next/font/local';

const mono = localFont({
  src: '../public/static/fonts/AeonikMono-Regular.woff2',
  weight: '400',
  display: 'swap',
});

const planar = localFont({
  src: [
    {
      path: '../public/static/fonts/GT-Planar-Light.woff2',
      weight: '300',
      style: 'normal',
    },
    {
      path: '../public/static/fonts/GT-Planar-Regular.woff2',
      weight: '400',
      style: 'normal',
    },
  ],
  display: 'swap',
});

const fonts = { mono, planar };

export default fonts;
