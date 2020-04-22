import Head from 'next/head';
import useTranslation from '../hooks/useTranslations';
import TopBar from './TopBar';
import BottomBar from './BottomBar';
import Menu from './Menu';
import Icons from './Icons';
import styled, { createGlobalStyle } from 'styled-components'; 
import reset from 'styled-reset';

const GlobalStyle = createGlobalStyle`
  ${reset}
  body {
    font-family: 'Quicksand', sans-serif;
  }
`

const MyPageStyle = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  margin: 40px;
  box-sizing: 'border-box';
`

const Wrapper = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
`

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-grow: 2;
  box-sizing: 'border-box';
  margin: 0 40px;

  .component-wrapper {
    flex-grow: 2;
    padding: 60px;
    margin: 10px;
    border-radius: 5px;
    /* -webkit-box-shadow: 15px 14px 37px -12px rgba(0,0,0,0.65);
    -moz-box-shadow: 15px 14px 37px -12px rgba(0,0,0,0.65); */
    box-shadow: 15px 14px 37px -12px rgba(0,0,0,0.65);
    /* background-color: #ff47bf; */
  }
`

const Page = ({ titleKey, children }) => {

  const { t } = useTranslation()

  return(
    <MyPageStyle>
      <GlobalStyle />
      <Head>
        <title>{t(titleKey)}</title>
      </Head>
      <Wrapper>
        <TopBar />
        <ContentWrapper>
          <Menu />
          <div className='component-wrapper'>{children}</div>
          <Icons />
        </ContentWrapper>
        <BottomBar />
      </Wrapper>
    </MyPageStyle>
  )

}

export default Page;
