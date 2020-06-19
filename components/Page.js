import Head from 'next/head';
import useTranslation from '../hooks/useTranslations';
import TopBar from './TopBar';
import BottomBar from './BottomBar';
import styled, { createGlobalStyle } from 'styled-components'; 
import reset from 'styled-reset';

const GlobalStyle = createGlobalStyle`
  ${reset}
  body {
    font-family: 'Quicksand', sans-serif;
    align-items: center;
    justify-content: center;
    text-rendering: optimizeLegibility;
  }
`;

const MyPageStyle = styled.div`
  padding: 16px;
`;

const Wrapper = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const ContentWrapper = styled.div`
  flex-direction: row;
  flex-grow: 2;
  box-sizing: 'border-box';
`;

const Page = ({ titleKey, children }) => {

  const { t } = useTranslation();

  return(
    <MyPageStyle>
      <GlobalStyle />
      <Head>
        <title>{t(titleKey)}</title>
      </Head>
      <Wrapper>
        <TopBar />
        <ContentWrapper>
          {children}
        </ContentWrapper>
        <BottomBar />
      </Wrapper>
    </MyPageStyle>
  )

}

export default Page;
