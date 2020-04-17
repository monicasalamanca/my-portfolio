import { Component } from "react";
import styled from 'styled-components';

const MyStyling = styled.div`
  height: 40px;
  margin: 0 40px;
  justify-content: flex-end;
  display: flex;
  line-height: 40px;
  color: #404040;
`

class BottomBar extends Component {
  render() {
    return (
      <MyStyling>
        <p>2020</p>
      </MyStyling> 
    )
  }
}

export default BottomBar;