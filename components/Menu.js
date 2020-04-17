import { Component } from "react";
import styled from 'styled-components';
import { Menu as MenuBurger } from '@styled-icons/feather/Menu';

const MyStyling = styled.div`
  width: 40px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: #404040;
`

class Menu extends Component {
  render() {
    return (
      <MyStyling>
        <MenuBurger />
      </MyStyling> 
    )
  }
}

export default Menu;