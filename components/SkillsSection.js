import styled from 'styled-components';
import useTranslation from '../hooks/useTranslations';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTools } from '@fortawesome/free-solid-svg-icons';


const SkillsSectionStyle = styled.div`

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
`;

const DividerStyle = styled.div`
  margin: 20px auto;
  border: 0.5px solid grey;
  height: 0;
  width: 70%;
`;

const PortfolioSection = () => {

  const { t } = useTranslation();

  return (
    <SkillsSectionStyle>
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
    </SkillsSectionStyle>
  )
}

export default PortfolioSection;