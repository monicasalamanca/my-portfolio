import React, { useContext, useCallback } from "react";
import styled from 'styled-components';
import { useRouter } from 'next/dist/client/router'
import { locales, languageNames } from '../translations/config'
import { LocaleContext } from '../context/LocaleContext'

const MyStyling = styled.div`
  height: 40px;
  margin: 0 80px;
  justify-content: flex-end;
  display: flex;
  line-height: 40px;

  ul {
    display: flex;
    flex-direction: row;

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
    <MyStyling>
      <ul>
        {locales.map(locale => (
          <li key={locale} value={locale} >
            <a onClick={() => handleOnClick(locale)}>{locale.toUpperCase()}.</a>
          </li>
        ))}
      </ul>
    </MyStyling> 
  )
}

export default TopBar;