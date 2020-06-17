import React from "react";
import styled from 'styled-components';
import useTranslation from '../hooks/useTranslations';
import Icons from '../components/Icons.js';
import UdemySection from '../components/UdemySection';
import ContactSection from '../components/ContactSection';
import PortfolioSection from '../components/PortfolioSection';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTools, faCode, faAddressCard } from '@fortawesome/free-solid-svg-icons';


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
    font-size: 30px;
    word-break: 'break-word';
    font-family: 'Montserrat', sans-serif;
    font-weight: 900;
    text-align: center;
    /* text-shadow: 3px 3px 3px rgba(150, 150, 150, 0.92); */
    position: relative;
    color: #ff7e30;
    color: #808080;
  }

  p {
    font-family: 'Quicksand', sans-serif;
    margin-top: 36px;
    text-align: center;
    font-size: 16px;
    line-height: 24px;
    color: #404040;
  }
`

const SectionStyle = styled.div`
  border: 1px solid #bcbaba;
  border-radius: 5px;
  padding: 10px;
  box-shadow: 3px 3px 5px 0px rgba(201,201,201,1);
  margin-bottom: 36px;
  margin-top: 24px;
  padding: 36px 20px 24px;

  &:first-child {
    margin-top: 0;
  }

  .logo-style {
    img {


      &.me-img {
        border-radius: 100px;
        border: 4px solid #21a9b6;
      }
    }
  }

  span {
    background-color: #ff4c4c;
    padding: 4px 10px;
    color: #fff;
    border-radius: 8px;
    font-family: monospace;
    display: inline-flex;
    max-width: fit-content;
    margin: 3px;
  }

  .icon-hero {
    display: flex;
    justify-content: center;

    .icon-awesome {
      font-size: 58px;
      padding: 20px;
      border: 1px solid #cfcfcf;
      border-radius: 80px;
      color: #808080;
      color: #efe811;

      &.lightbulb {
        padding: 20px 29px;
      }

      &.code {
        padding: 20px 13px;
        font-size: 58px;
      }
    }
  }
`

const HomeComponent = () => {

  const { t } = useTranslation();

  return (
    <HomeStyle>

      <SectionStyle>
        <div className='logo-style'>
          <img className="me-img" src="/img/me.jpg" alt="Logo" width="140" height="140" />
        </div>
        <p>{t('description')}</p>
      </SectionStyle>
      <SectionStyle>
        <div className="icon-hero">
          <FontAwesomeIcon className="icon-awesome" icon={faTools} />
        </div>
        <h1>{t('skills')}</h1>
        <p>
          <span>#HTML5</span>
          <span>#CSS</span>
          <span>#SASS</span>
          <span>#Javascript</span>
          <span>#JQuery</span>
          <span>#Git</span>
          <span>#Gulp</span>
          <span>#ReactJS</span>
          <span>#NextJS</span>
          <span>#Webpack</span>
          <span>#Babel</span>
          <span>#ES6</span>
          <span>#PHP</span>
          <span>#Laravel</span>
          <span>#Photoshop</span>
          <span>#Wordpress</span>
          <span>#MySQL</span>
          <span>#Agile</span>
        </p>
      </SectionStyle>
      <SectionStyle>
        <UdemySection />
      </SectionStyle>
      <SectionStyle>
        <div className="icon-hero">
          <FontAwesomeIcon className="icon-awesome code" icon={faCode} />
        </div>
        <h1>{t('code')}</h1>
        <Icons />
      </SectionStyle>
      <PortfolioSection />
      <ContactSection />
    </HomeStyle> 
  )

}

export default HomeComponent