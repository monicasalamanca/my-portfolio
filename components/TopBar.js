import React, { useContext, useCallback } from "react";
import styled from 'styled-components';
import { useRouter } from 'next/dist/client/router';
import { locales, languageNames } from '../translations/config';
import { LocaleContext } from '../context/LocaleContext';
import SideBarMenu from '../components/SideBarMenu';
import Language from '../components/Language';

const TopBarStyle = styled.div`
  height: 40px;
  display: flex;
  line-height: 40px;
  font-size: 16px;
  position: relative;

  @media (min-width: 800px) {
    font-size: 16px;
  }

  ul {
    display: flex;
    flex-direction: row;
    justify-content: flex-end;

    li {
      margin-left: 10px;
      color: #404040;
      cursor: pointer;
    }
  }
`

const TopBar = () => {
  const router = useRouter()
  const { locale } = useContext(LocaleContext)

  const handleOnClick = useCallback((lang) => {
    const regex = new RegExp(`^/(${locales.join('|')})`);
    router.push(router.pathname, router.asPath.replace(regex, `/${lang}`));
  }, [router]);

  return (
    <TopBarStyle>
      {/* <SideBarMenu pageWrapId={"page-wrap"} outerContainerId={"App"} locales={locales} locale={locale} /> */}
      <p>Top Bar</p>
    </TopBarStyle> 
  )
}

export default TopBar;