import { Component } from "react";
import styled from 'styled-components';
import { Linkedin } from '@styled-icons/feather/Linkedin';
import { Github } from '@styled-icons/feather/Github';
import { Codepen } from '@styled-icons/feather/Codepen';

const IconsStyle = styled.div`
  margin: 16px 0;
  font-size: 12px;

  ul {
    display: flex;
    flex-direction: row;
    justify-content: center;

    li {
      color: #404040;
      margin: 0 16px;
    }
  }
`

class Menu extends Component {
  render() {
    return (
      <IconsStyle>
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
      </IconsStyle> 
    )
  }
}

export default Menu;