import React from "react";
import styled from 'styled-components';
import useTranslation from '../hooks/useTranslations';
import UdemySection from '../components/UdemySection';
import SkillsSection from '../components/SkillsSection';
import CodeSection from '../components/CodeSection';
import ContactSection from '../components/ContactSection';
import PortfolioSection from '../components/PortfolioSection';


const HomeStyle = styled.div`
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
      <SkillsSection />
      <UdemySection />
      <CodeSection />
      <PortfolioSection />
      <ContactSection />
    </HomeStyle> 
  )

}

export default HomeComponent