import { Component } from "react";
import styled from 'styled-components';
import useTranslation from '../hooks/useTranslations';

const MyStyling = styled.div`
  height: 400px;
  font-size: 80px;
  font-family: Arial, Helvetica, sans-serif;
  line-height: 150%;
`

const HomeComponent = () => {

  const { t } = useTranslation()

  return (
    <MyStyling>
      <p>Monica's Portfolio</p>
    </MyStyling> 
  )

}

export default HomeComponent