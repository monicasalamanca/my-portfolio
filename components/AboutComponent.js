import { Component } from "react";
import styled from 'styled-components';
import useTranslation from '../hooks/useTranslations';

const MyStyling = styled.div`
  height: 400px;
  font-size: 80px;
  font-family: 'Montserrat', sans-serif;
  line-height: 150%;
  font-weight: 900;
`

const HomeComponent = () => {

  const { t } = useTranslation()

  return (
    <MyStyling>
      <p>{t('homePageTitle')}</p>
    </MyStyling> 
  )

}

export default HomeComponent