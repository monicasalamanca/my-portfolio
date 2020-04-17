import { Component } from "react";
import styled from 'styled-components';
import useTranslation from '../hooks/useTranslations';

const MyStyling = styled.div`
    color: #292929;
    color: #4f4f4f;
    color: #404040;

  h1 {
    margin-top: 60px;
    font-size: 100px;
    font-family: 'Montserrat', sans-serif;
    line-height: 100%;
    font-weight: 900;
  }

  p {
    font-family: 'Quicksand', sans-serif;
    margin-top: 40px;
    text-align: right;
    font-size: 30px;
  }
`

const HomeComponent = () => {

  const { t } = useTranslation()

  return (
    <MyStyling>
      <h1>Monica Salamanca</h1>
      <p>{t('homePageText')}</p>
    </MyStyling> 
  )

}

export default HomeComponent