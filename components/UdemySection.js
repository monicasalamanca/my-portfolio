import styled from 'styled-components';
import useTranslation from '../hooks/useTranslations';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLightbulb } from '@fortawesome/free-solid-svg-icons'

const UdemySectionStyle = styled.div`

  h1 {
    margin-bottom: 32px;
  }

  .icon-hero {
    display: flex;
    justify-content: center;

    &.lightbulb {
      padding: 20px 32px;
    }
  }
`;

const ProgressBarStyle = styled.div`

  display: flex;
  flex-direction: column;

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
      }
    }
  }

  h2 {
    text-align: center;
    margin: 4px;

    a {
      font-size: 14px;
      padding: 4px;
      text-decoration: none;
      color: #6a686b;
      font-weight: bold;
    }
  }
`;

const UdemySection = () => {

  const [results, setResults] = useState([]);

  const { t } = useTranslation();

  return (
    <UdemySectionStyle>
      <div className="icon-hero">
        <FontAwesomeIcon className="icon-awesome lightbulb" icon={faLightbulb} />
      </div>
      <h1>{t('learning')}</h1>
      <ProgressBarStyle>
        <h2><a href="https://www.udemy.com/course/the-complete-react-native-and-redux-course/">The Complete React Native + Hooks Course [2020 Edition]</a></h2>
        <div className="wrapper">
          <div className="percentage">
            <p>50%</p>
          </div>
          <div className="progress-bar">
            <div className="filler"></div>
          </div>
        </div>
      </ProgressBarStyle>
      

    </UdemySectionStyle>
  )

}

export default UdemySection;