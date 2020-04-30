import React, { Component } from 'react';
import styled from 'styled-components';
// import { CSSTransitionGroup } from 'react-transition-group';
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
      <TopMenuStyle>

      </TopMenuStyle>
    )
  }
} 

export default TopMenu;