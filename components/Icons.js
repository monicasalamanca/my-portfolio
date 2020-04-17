import { Component } from "react";
import styled from 'styled-components';
import { Linkedin } from '@styled-icons/feather/Linkedin';
import { Github } from '@styled-icons/feather/Github';
import { Codepen } from '@styled-icons/feather/Codepen';

const MyStyling = styled.div`
  width: 40px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  font-size: 12px;

  ul li {
    margin: 14px 0;
  }
`

class Menu extends Component {
  render() {
    return (
      <MyStyling>
        <ul>
          <li>
            <a><Linkedin size="30" /></a>
          </li>
          <li>
            <a><Github size="30" /></a>
          </li>
          <li>
            <a><Codepen size="30" /></a>
          </li>
        </ul>
      </MyStyling> 
    )
  }
}

export default Menu;