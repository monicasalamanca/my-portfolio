import { Component } from "react";
import styled from 'styled-components';
import useTranslation from '../hooks/useTranslations';

const HomeStyle = styled.div`
  color: #292929;
  color: #4f4f4f;
  color: #404040;
  box-sizing: 'border-box';

  .logo-style {
    display: flex;
    flex-direction: row;
    justify-content: center;
  }

  h1 {
    margin-top: 24px;
    font-size: 32px;
    word-break: 'break-word';
    font-family: 'Montserrat', sans-serif;
    font-weight: 900;
    text-align: right;
    text-shadow: 3px 3px 3px rgba(150, 150, 150, 0.92);

    position: relative;

    @media (min-width: 800px) {
      margin-top: 60px;
      font-size: 90px;
      line-height: 90%;
    }

    span {
      font-size: 32px;
    }
  }

  p {
    font-family: 'Quicksand', sans-serif;
    margin-top: 24px;
    text-align: right;
    font-size: 14px;
    color: #6b6b6b;

    @media (min-width: 800px) {
      margin-top: 60px;
      font-size: 25px;
    }
  }
`

const HomeComponent = () => {

  const { t } = useTranslation()

  return (
    <HomeStyle>
      <div className='logo-style'>
        <img src="/img/salmon.png" alt="Logo" width="232" height="170" />
      </div>
      <h1>Monica <span>S</span>alamanca.</h1>
      <p>{t('homePageText')}</p>
    </HomeStyle> 
  )

}

export default HomeComponent