import React from "react";
import styled from 'styled-components';
import useTranslation from '../hooks/useTranslations';
import WelcomeSection from '../components/WelcomeSection';
import UdemySection from '../components/UdemySection';
import SkillsSection from '../components/SkillsSection';
import CodeSection from '../components/CodeSection';
import ContactSection from '../components/ContactSection';
import PortfolioSection from '../components/PortfolioSection';

const HomeStyle = styled.div`
  color: #404040;
  box-sizing: 'border-box';

  h1 {
    margin-top: 32px;
    font-size: 30px;
    word-break: 'break-word';
    font-family: 'Montserrat', sans-serif;
    font-weight: 900;
    text-align: center;
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
`;

const HomeComponent = () => {

  const { t } = useTranslation();

  return (
    <HomeStyle>
      <WelcomeSection />
      <SkillsSection />
      <CodeSection />
      <PortfolioSection />
      <ContactSection />
    </HomeStyle> 
  )

}

export default HomeComponent