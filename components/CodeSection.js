import styled from 'styled-components';
import useTranslation from '../hooks/useTranslations';
import Icons from '../components/Icons.js';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode } from '@fortawesome/free-solid-svg-icons';


const CodeSectionStyle = styled.div`

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

      &.code {
        padding: 20px 13px;
        font-size: 58px;
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

const SkillsSection = () => {

  const { t } = useTranslation();

  return (
    <CodeSectionStyle>
      <div className="icon-hero">
        <FontAwesomeIcon className="icon-awesome code" icon={faCode} />
      </div>
      <h1>{t('code')}</h1>
      <Icons />
    </CodeSectionStyle>
  )
}

export default SkillsSection;