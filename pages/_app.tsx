import { ReactElement } from 'react';
import Router from 'next/router';
import NProgress from 'nprogress';
import 'public/static/styles/nprogress.css';
import { NextPage } from 'next';
import { AppProps } from 'next/app';

Router.events.on('routeChangeStart', () => NProgress.start());
Router.events.on('routeChangeComplete', () => NProgress.done());
Router.events.on('routeChangeError', () => NProgress.done());

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => JSX.Element;
  dashboardPage?: boolean;
  marketplacePage?: boolean;
  adminPage?: boolean;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

const MyApp = ({ Component, pageProps }: AppPropsWithLayout) => {
  const getLayout = Component.getLayout ?? ((page) => page);
  return <>{getLayout(<Component {...pageProps} />)}</>;
};

export default MyApp;
