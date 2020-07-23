import styled from 'styled-components';
import useTranslation from '../hooks/useTranslations';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { LinkedinIn } from '@styled-icons/fa-brands/LinkedinIn';
import { Coffee } from '@styled-icons/fa-solid/Coffee';
import { faAddressCard } from '@fortawesome/free-solid-svg-icons';
import ReactGa from 'react-ga';

const ContactSectionStyle = styled.div`

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

      &.contact {
        padding: 21px 17px;
        font-size: 58px;
      }
    }
  }

  p.contact-txt {
    line-height: unset;

    a {
      text-decoration: none;
      color: #404040;
    }

    &:last-child {
      margin-top:12px;

      svg {
        color: #0073B1;
      }
    }

    svg {
      vertical-align: bottom;
    }
  }
`;

const ContactSection = () => {

  const { t } = useTranslation();

  const analyticsHandler = (category, action) => {
    ReactGa.event({
      category: category,
      action: action
    })
  }

  return (
    <ContactSectionStyle>
      <div className="icon-hero">
        <FontAwesomeIcon className="icon-awesome contact" icon={faAddressCard} />
      </div>
      <h1>{t('contact')}</h1>
      <p className="contact-txt"><a href="https://www.buymeacoffee.com/monsal" onClick={analyticsHandler('ContactMe', 'Coffee')}>{t('coffee')}  <Coffee size="20" /></a></p>
      <p className="contact-txt">{t('contactlinkedin')} <a href="https://www.linkedin.com/in/monicasalamanca/" onClick={analyticsHandler('ContactMe', 'Linkedin')}><LinkedinIn size="20" /></a></p>
    </ContactSectionStyle>
  )
}

export default ContactSection;