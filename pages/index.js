import React from 'react';
import Meta from '../components/Meta';
import { getInitialLocale } from '../translations/getInitialLocale';
import { useRouter } from 'next/router';

const Index = (props) => {
  const router = useRouter();

  React.useEffect(() => {
    window.location.replace(`/${getInitialLocale()}${router.asPath}`);
  });

  return (
    <div>
      <Meta />
    </div>
  )
};

export default Index;