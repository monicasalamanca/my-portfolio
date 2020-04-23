import { Component } from "react";
import styled from 'styled-components';
import useTranslation from '../hooks/useTranslations';

const MyStyling = styled.div`
    color: #292929;
    color: #4f4f4f;
    color: #404040;
    padding: 16px;
    box-sizing: 'border-box';

  h1 {
    /* animation-name: example;
    animation-duration: 4s; 
    font-size: 32px; */
    /* animation-delay: 2s; */

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

    /* @keyframes example {
      from {font-size: 32px;}
      to {font-size: 10px;}
    } */

    span {
      /* animation-name: example; */
      /* animation-duration: 4s;  */
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
    <MyStyling>
      <h1>Monica <span>S</span>alamanca.</h1>
      <p>{t('homePageText')}</p>
    </MyStyling> 
  )

}

export default HomeComponent