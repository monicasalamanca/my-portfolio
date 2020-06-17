import { useEffect, useState } from "react";
import styled from 'styled-components';
import udemy from './api/udemy';
import useTranslation from '../hooks/useTranslations';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase } from '@fortawesome/free-solid-svg-icons';

const PortfolioSectionStyle = styled.div`

  border: 1px solid #bcbaba;
  border-radius: 5px;
  padding: 10px;
  box-shadow: 3px 3px 5px 0px rgba(201,201,201,1);
  margin-bottom: 36px;
  margin-top: 24px;
  padding: 36px 20px 24px;

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
    }
  }

  .project-wrapper {
    p {
      margin: 0;

      &:first-child {
        margin-top: 20px;
      }

      &:last-child {
        padding-bottom: 20px;
        /* border-bottom: 0.5px solid grey; */
      }

      span {
        color: #404040;
        font-weight: bolder;

        a {
          text-decoration: none;
        }
      }
    }
  }
`;

const PortfolioSection = () => {

  const { t } = useTranslation();

  return (
    <PortfolioSectionStyle>
      <div className="icon-hero">
        <FontAwesomeIcon className="icon-awesome" icon={faBriefcase} />
      </div>
      <h1>{t('myPortfolio')}</h1>
      <div className="project-wrapper">
        <p><span>{t('projectname')} </span>{t('projectmyportfolio')}</p>
        <p><span>{t('projectdescription')}</span> ReactJS app developer in NextJS</p>
        <p><span>Stack:</span>NextJS ReactJS</p>
        <p><span><a href="https://github.com/monicasalamanca/my-portfolio">Github repo</a></span></p>
      </div>

    </PortfolioSectionStyle>
  )
}

export default PortfolioSection;