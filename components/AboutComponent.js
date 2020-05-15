import { Component } from "react";
import styled from 'styled-components';
import useTranslation from '../hooks/useTranslations';

const AboutStyle = styled.div`
  height: 400px;
  font-size: 80px;
  font-family: 'Montserrat', sans-serif;
  line-height: 150%;
  font-weight: 900;
`

const AboutComponent = () => {

  const { t } = useTranslation()

  return (
    <AboutStyle>

    </AboutStyle> 
  )

}

export default AboutComponent