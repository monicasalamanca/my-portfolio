import React, { useContext, useCallback } from "react";
import styled from 'styled-components';
import { useRouter } from 'next/dist/client/router';
import { locales, languageNames } from '../translations/config';
import { LocaleContext } from '../context/LocaleContext';
import TopMenu from '../components/TopMenu';

const TopBarStyle = styled.div`
  height: 40px;
  margin: 0 16px;
  display: flex;
  line-height: 40px;
  font-size: 16px;

  @media (min-width: 800px) {
    font-size: 16px;
    margin: 0 80px;
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
      <TopMenu />

      <ul>
        {locales.map(locale => (
          <li key={locale} value={locale} >
            <a onClick={() => handleOnClick(locale)}>{locale.toUpperCase()}.</a>
          </li>
        ))}
      </ul>

    </TopBarStyle> 
  )
}

export default TopBar;