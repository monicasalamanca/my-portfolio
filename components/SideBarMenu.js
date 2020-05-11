import React, { useState } from "react";
import { slide as Menu } from "react-burger-menu";
import styled from 'styled-components';
import Language from './Language';
import Link from 'next/link'

const SideMenuStyle = styled.div`
  position: absolute;
  /* top: 40px; */
  overflow: auto;

    /* Individual item */
  .bm-item {
    display: inline-block;

    /* Our sidebar item styling */
    text-decoration: none;
    margin-bottom: 10px;
    color: #d1d1d1;
    transition: color 0.2s;
  }

  /* Change color on hover */
  .bm-item:hover {
    color: white;
  }

  /* The rest copied directly from react-burger-menu docs */

  /* Position and sizing of burger button */
  .bm-burger-button {
    position: fixed;
    width: 30px;
    height: 24px;
    left: 16px;
    top: 16px;
  }

  /* Color/shape of burger icon bars */
  .bm-burger-bars {
    background: #373a47;
  }

  /* Position and sizing of clickable cross button */
  .bm-cross-button {
    height: 24px;
    width: 24px;
  }

  /* Color/shape of close button cross */
  .bm-cross {
    background: #bdc3c7;
  }

  /* General sidebar styles */
  .bm-menu {
    background: #36bcd1;
    padding: 2.5em 1.5em 0;
    font-size: 1.15em;
  }

  /* Morph shape necessary with bubble or elastic */
  .bm-morph-shape {
    fill: #373a47;
  }

  /* Wrapper for item list */
  .bm-item-list {
    color: #b8b7ad;
  }

  /* Styling of overlay */
  .bm-overlay {
    background: rgba(0, 0, 0, 0.3);
  }

  .menu-item {
    color: blue;
    text-decoration: none;
    display: flex;
    color: #404040;
  }

`;


const SideLeftMenu = (props) => {
  const [menuState, setMenuState] = useState(true);

  return (
    <SideMenuStyle>
      <Menu 
        {...props}
        isOpen={menuState}
      >
        <Link href="/[lang]" as={`/${props.locale}`} >
          <a className="menu-item" onClick={() => setMenuState(!menuState)}>
            Home
          </a>
        </Link>

        <Link href="/[lang]" >
          <a className="menu-item">
            About
          </a>
        </Link>

        <Link href="/[lang]" >
          <a className="menu-item">
            Side gigs
          </a>
        </Link>

        <Link href="/[lang]" >
          <a className="menu-item">
            Desserts
          </a>
        </Link>

        <Language locales={props.locales} test={() => closeMenu} />

      </Menu>
    </SideMenuStyle>
  )
}

export default SideLeftMenu;