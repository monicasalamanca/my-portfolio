import React, { useContext, useCallback } from "react";
import styled from 'styled-components';
import { useRouter } from 'next/dist/client/router';
import { locales, languageNames } from '../translations/config';
import { LocaleContext } from '../context/LocaleContext';
import Language from '../components/Language';

const TopBarStyle = styled.div`
  height: 40px;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  line-height: 40px;
  font-size: 16px;
  padding: 0 16px;

  @media (min-width: 576px) {
    margin-left: 50px;
    margin-right: 50px;
  }

  @media (min-width: 768px) {
    margin-left: 80px;
    margin-right: 80px;
  }

  @media (min-width: 992px) {
    margin-left: 20%;
    margin-right: 20%;
  }
`;

const TopBar = (props) => {
  const router = useRouter();
  const { locale } = useContext(LocaleContext);

  const handleOnClick = useCallback((lang) => {
    const regex = new RegExp(`^/(${locales.join('|')})`);
    router.push(router.pathname, router.asPath.replace(regex, `/${lang}`));
  }, [router]);

  return (
    <TopBarStyle>
      <Language locales={locales} />
    </TopBarStyle> 
  )
}

export default TopBar;