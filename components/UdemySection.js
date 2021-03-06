import styled from 'styled-components';
import useTranslation from '../hooks/useTranslations';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLightbulb } from '@fortawesome/free-solid-svg-icons';
import ReactGa from 'react-ga';

const UdemySectionStyle = styled.div`
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

  h1 {
    margin-bottom: 32px;
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
    }
  }
`;

const ProgressBarStyle = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 300px;
  margin: 0 auto;

  .wrapper {
    background-color: #ad65c0;
    border-radius: 4px;
    padding: 6px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;

    .percentage {
      border-radius: 4px;
      background-color: #8b30a2;
      padding: 8px 6px;
      box-sizing: border-box;
      margin-right: 6px;

      p {
        margin: 0;
        color: #fff;
        font-size: 11px;
        line-height: unset;
      }
    }

    .progress-bar {
      border-radius: 4px;
      background-color: #8b30a2;
      width: 100%;
      height: 8px;
      margin-top: 10px;

      .filler {
        background-color: #e5e1e1;
        width: 50%;
        height: 100%;
        border-radius: 4px;

        &.full {
          width: 100%;
        }

        &.algo {
          width: 5%;
        }
      }
    }
  }

  h2 {
    text-align: center;
    margin: 4px;
    margin-bottom: 12px;

    a {
      font-size: 14px;
      padding: 4px;
      text-decoration: none;
      color: #6a686b;
      font-weight: bold;
    }
  }
`;

const DividerStyle = styled.div`
  margin: 20px auto;
  border: 0.5px solid grey;
  height: 0;
  width: 70%;
`;

const UdemySection = () => {

  const { t } = useTranslation();

  const analyticsHandler = (category, action) => {
    ReactGa.event({
      category: category,
      action: action
    })
  }

  return (
    <UdemySectionStyle>
      <div className="icon-hero">
        <FontAwesomeIcon className="icon-awesome lightbulb" icon={faLightbulb} />
      </div>
      <h1>{t('learning')}</h1>
      <ProgressBarStyle>
        <h2><a href="https://www.udemy.com/course/the-complete-react-native-and-redux-course/" onClick={analyticsHandler('UdemyLinks', 'React Native Course')}>The Complete React Native + Hooks Course [2020 Edition]</a></h2>
        <div className="wrapper">
          <div className="percentage">
            <p>100%</p>
          </div>
          <div className="progress-bar">
            <div className="filler full"></div>
          </div>
        </div>
      </ProgressBarStyle>
      <DividerStyle />
      <ProgressBarStyle>
        <h2><a href="https://www.udemy.com/course/js-algorithms-and-data-structures-masterclass/" onClick={analyticsHandler('UdemyLinks', 'Data Structures')}>JavaScript Algorithms and Data Structures Masterclass</a></h2>
        <div className="wrapper">
          <div className="percentage">
            <p>5%</p>
          </div>
          <div className="progress-bar">
            <div className="filler algo"></div>
          </div>
        </div>
      </ProgressBarStyle>
      <DividerStyle />
      <ProgressBarStyle>
        <h2><a href="https://www.udemy.com/course/microservices-with-node-js-and-react/" onClick={analyticsHandler('UdemyLinks', 'Microservices')}>Microservices with Node JS and React</a></h2>
        <div className="wrapper">
          <div className="percentage">
            <p>2%</p>
          </div>
          <div className="progress-bar">
            <div className="filler algo"></div>
          </div>
        </div>
      </ProgressBarStyle>

    </UdemySectionStyle>
  )

}

export default UdemySection;