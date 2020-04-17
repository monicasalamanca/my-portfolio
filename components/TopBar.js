import { Component } from "react";
import styled from 'styled-components';

const MyStyling = styled.div`
  height: 40px;
  margin: 0 40px;
  justify-content: flex-end;
  display: flex;
  line-height: 40px;

  ul {
    display: flex;
    flex-direction: row;

    li {
      margin-left: 10px;
      color: #404040;
    }
  }
`

class TopBar extends Component {
  render() {
    return (
      <MyStyling>
        <ul>
          <li>
            <a>EN.</a>
          </li>
          <li>
            <a>FR.</a>
          </li>
          <li>
            <a>ES.</a>
          </li>
        </ul>
      </MyStyling> 
    )
  }
}

export default TopBar;