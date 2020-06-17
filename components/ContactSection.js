import { useEffect, useState } from "react";
import styled from 'styled-components';
import udemy from './api/udemy';
import useTranslation from '../hooks/useTranslations';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Linkedin } from '@styled-icons/feather/Linkedin';
import { Coffee } from '@styled-icons/feather/Coffee';
import { faAddressCard } from '@fortawesome/free-solid-svg-icons';

const ContactSectionStyle = styled.div`

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

      &.contact {
        padding: 21px 17px;
        font-size: 58px;
      }
    }
  }

  p.contact-txt {
    line-height: unset;

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

  return (
    <ContactSectionStyle>
      <div className="icon-hero">
        <FontAwesomeIcon className="icon-awesome contact" icon={faAddressCard} />
      </div>
      <h1>{t('contact')}</h1>
      <p className="contact-txt">{t('coffee')} <Coffee size="20" /></p>
      <p className="contact-txt">{t('contactlinkedin')} <a href="https://www.linkedin.com/in/monicasalamanca/"><Linkedin size="20" /></a></p>
    </ContactSectionStyle>
  )
}

export default ContactSection;