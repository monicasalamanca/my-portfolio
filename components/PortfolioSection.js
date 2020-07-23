import styled from 'styled-components';
import useTranslation from '../hooks/useTranslations';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase } from '@fortawesome/free-solid-svg-icons';
import { SocialGithub } from '@styled-icons/typicons/SocialGithub';
import ReactGa from 'react-ga';

const PortfolioSectionStyle = styled.div`

  border: 1px solid #bcbaba;
  border-radius: 5px;
  padding: 10px;
  box-shadow: 3px 3px 5px 0px rgba(201,201,201,1);
  margin-bottom: 36px;
  margin-top: 24px;
  padding: 36px 20px 24px;

  @media (min-width: 576px) {
    margin-left: 50px;
    margin-right: 50px;
  }

  @media (min-width: 768px) {
    margin-left: 80px;
    margin-right: 80px;
  }

  @media (min-width: 992px) {
    margin-left: 20%;
    margin-right: 20%;
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

const DividerStyle = styled.div`
  margin: 20px auto;
  border: 0.5px solid grey;
  height: 0;
  width: 70%;
`;

const PortfolioSection = () => {

  const { t } = useTranslation();

  const analyticsHandler = (category, action) => {
    ReactGa.event({
      category: category,
      action: action
    })
  }

  return (
    <PortfolioSectionStyle>
      <div className="icon-hero">
        <FontAwesomeIcon className="icon-awesome" icon={faBriefcase} />
      </div>
      <h1>{t('myPortfolio')}</h1>
      <div className="project-wrapper">
        <p><span>{t('projectname')} </span>{t('projectmyportfolio')}</p>
        <p><span>{t('projectdescription')}</span> ReactJS app developed in NextJS</p>
        <p><span>Stack:</span>NextJS ReactJS</p>
        <p><span><a href="https://github.com/monicasalamanca/my-portfolio" onClick={analyticsHandler('Portfolio', 'Github')}><SocialGithub size='40' color='#29adc4' /></a></span></p>
      </div>
    </PortfolioSectionStyle>
  )
}

export default PortfolioSection;