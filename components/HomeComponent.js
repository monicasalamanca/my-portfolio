import { Component } from "react";
import styled from 'styled-components';
import useTranslation from '../hooks/useTranslations';
import Icons from '../components/Icons.js'

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
    margin-top: 32px;
    font-size: 32px;
    word-break: 'break-word';
    font-family: 'Montserrat', sans-serif;
    font-weight: 900;
    text-align: center;
    text-shadow: 3px 3px 3px rgba(150, 150, 150, 0.92);
    position: relative;

  }

  p {
    font-family: 'Quicksand', sans-serif;
    margin-top: 20px;
    text-align: center;
    font-size: 20px;
    line-height: 26px;
  }
`

const HomeComponent = () => {

  const { t } = useTranslation()

  return (
    <HomeStyle>
      <div className='logo-style'>
        <img src="/img/salmon.png" alt="Logo" width="232" height="170" />
      </div>
      <p>Hi! My name is Monica and I am a creative and detailed oriented Frontend Developer with a bachelor degree in software engineer. I am passionate about HTML, CSS, JavaScript, UX designs and trending technologies, which over the course of my career I have used to build many websites and web applications in different fields. </p>
      <h1>Portfolio</h1>
      <Icons />
      <h1>Skills</h1>
      <p>&middot; Javascript &middot; HTML5 &middot; CSS &middot; Git &middot; SASS &middot; Gulp &middot; ReactJS &middot; NextJS &middot; Webpack &middot; Babel &middot; ES6 &middot; PHP &middot; Laravel &middot; Photoshop &middot; Wordpress &middot; MySQL &middot; Agile &middot; NodeJS &middot;</p>
      <h1>Contact</h1>
    </HomeStyle> 
  )

}

export default HomeComponent