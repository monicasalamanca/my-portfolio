import React, { useCallback } from 'react';
import { useRouter } from 'next/dist/client/router';
import styled from 'styled-components';

const StyledLang = styled.div`

  ul {
    display: flex;

    li {
      margin: 6px 6px 0;
      cursor: pointer;
    }
  }
`;

const Language = ({ locales }) => {
  const router = useRouter()

  const handleOnClick = useCallback((lang) => {
    const regex = new RegExp(`^/(${locales.join('|')})`);
    router.push(router.pathname, router.asPath.replace(regex, `/${lang}`));
  }, [router]);

  return (
    <StyledLang>
      <ul>
        {locales.map(locale => (
          <li key={locale} value={locale} >
            <a onClick={() => handleOnClick(locale)}>{locale.toUpperCase()}.</a>
          </li>
        ))}
      </ul>
    </StyledLang>
  )
}

export default Language;  