import { Component } from "react";
import styled from 'styled-components';

const BottomBarStyle = styled.div`
  height: 40px;
  margin: 0 16px;
  justify-content: flex-end;
  display: flex;
  line-height: 40px;
  color: #404040;
  font-size: 12px;

  @media (min-width: 800px) {
    margin: 0 80px;
  }
`

class BottomBar extends Component {
  render() {
    return (
      <BottomBarStyle>
        <p>&copy; 2020</p>
      </BottomBarStyle> 
    )
  }
}

export default BottomBar;