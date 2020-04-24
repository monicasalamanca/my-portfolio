import { Component } from "react";
import styled from 'styled-components';
import { Menu as MenuBurger } from '@styled-icons/feather/Menu';

const MenuStyle = styled.div`
  display: none;

  @media (min-width: 800px) {
    width: 40px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    color: #404040;
  }
`

class Menu extends Component {
  render() {
    return (
      <MenuStyle>
        <MenuBurger />
      </MenuStyle> 
    )
  }
}

export default Menu;