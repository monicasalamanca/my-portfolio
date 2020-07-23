import React from 'react';
import Meta from '../components/Meta';
import { getInitialLocale } from '../translations/getInitialLocale';
import { useRouter } from 'next/router';
import ReactGa from 'react-ga';

const Index = (props) => {
  const router = useRouter();

  React.useEffect(() => {
    window.location.replace(`/${getInitialLocale()}${router.asPath}`);
    ReactGa.initialize('UA-44996520-1');
    ReactGa.pageview(`/${getInitialLocale()}${router.asPath}`);
  });

  return (
    <div>
      <Meta />
    </div>
  )
};

export default Index;