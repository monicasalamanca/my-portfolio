import styled from 'styled-components';
import useTranslation from '../hooks/useTranslations';

const WelcomeSectionStyle = styled.div`
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

  .logo-style {
    display: flex;
    flex-direction: row;
    justify-content: center;
  }

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

`;

const ContactSection = () => {

  const { t } = useTranslation();

  return (
    <WelcomeSectionStyle>
      <div className='logo-style'>
        <img className="me-img" src="/img/me.jpg" alt="Logo" width="140" height="140" />
      </div>
      <p>{t('description')}</p>
    </WelcomeSectionStyle>
  )
}

export default ContactSection;