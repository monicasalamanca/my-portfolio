import React, { Component } from 'react';
import styled from 'styled-components';
import { Menu as BurgerIcon  } from '@styled-icons/feather/Menu';
import { Close as CloseIcon } from '@styled-icons/evil/Close';

const TopMenuStyle = styled.div`
  display: flex;
`;

class TopMenu extends Component {

  constructor(props) {
    super(props);
    this.handleClose = this.handleClose.bind(this);
    this.handleOpen = this.handleOpen.bind(this);
    this.state = { isOpen: true }
  }

  handleOpen() {
    console.log(this.state.isOpen);
    this.setState({isOpen: false});
  }

  handleClose() {
    console.log(this.state.isOpen);
    this.setState({isOpen: true});
  }

  render() {

    const open = this.state.isOpen;

    return (
      <TopMenuStyle >
        { open ? <BurgerBtn onClick={this.handleOpen} /> : <CloseBtn onClick={this.handleClose} /> }
      </TopMenuStyle>
    )
  }
} 

function BurgerBtn(props) {
  const BurgerStyle = styled.div`
    .burger-btn {
      border: none;
      background-color: transparent;
      padding: 0;
      width: 32px;
    }
  `;

  return (
    <BurgerStyle>
      <button className="burger-btn" onClick={props.onClick}>
        <BurgerIcon />
      </button>
    </BurgerStyle>
  )
}

function CloseBtn(props) {
  const CloseStyle = styled.div`
    .close-btn {
      border: none;
      background-color: transparent;
      padding: 0;
      width: 32px;
    }
  `;

  return (
    <CloseStyle>
      <button className="close-btn" onClick={props.onClick}>
        <CloseIcon />
      </button>
    </CloseStyle>
  )
}

export default TopMenu;