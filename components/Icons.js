import { Component } from "react";
import styled from 'styled-components';
import { Github } from '@styled-icons/feather/Github';
import { Codesandbox } from '@styled-icons/feather/Codesandbox';
import ReactGa from 'react-ga';

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

  analyticsHandler(category, action) {
    ReactGa.event({
      category: category,
      action: action
    })
  }

  render() {
    return (
      <IconsStyle>
        <ul>
          <li>
            <a href="https://github.com/monicasalamanca" onClick={this.analyticsHandler('Code', 'Github')}><Github size="40" /></a>
          </li>
          <li>
            <a href="https://codesandbox.io/u/monicasalamanca/sandboxes" onClick={this.analyticsHandler('Code', 'codesandbox')}><Codesandbox size="40" /></a>
          </li>
        </ul>
      </IconsStyle> 
    )
  }
}

export default Menu;