import { Component } from "react";
import styled from 'styled-components';

const MyStyling = styled.div`
  height: 40px;
  margin: 0 80px;
  justify-content: flex-end;
  display: flex;
  line-height: 40px;
  color: #404040;
  font-size: 12px;
`

class BottomBar extends Component {
  render() {
    return (
      <MyStyling>
        <p>&copy; 2020</p>
      </MyStyling> 
    )
  }
}

export default BottomBar;