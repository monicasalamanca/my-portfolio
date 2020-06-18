import { Component } from "react";
import styled from 'styled-components';
import { Github } from '@styled-icons/feather/Github';
import { Codesandbox } from '@styled-icons/feather/Codesandbox';

const IconsStyle = styled.div`
  margin: 20px 0;
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
            <a href="https://github.com/monicasalamanca"><Github size="40" /></a>
          </li>
          <li>
            <a href="https://codesandbox.io/u/monicasalamanca/sandboxes"><Codesandbox size="40" /></a>
          </li>
        </ul>
      </IconsStyle> 
    )
  }
}

export default Menu;