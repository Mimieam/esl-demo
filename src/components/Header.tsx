import React, { Component } from "react";
import styled from 'styled-components';


const StyledHeader = styled.div`
  background: #FFFFFF;
  height: auto
  margin: 0 auto;
  width: 100%;
  max-width: 460px;
  grid-row: 1;
  grid-column: 2;
  display: flex;
  flex-direction:column
  text-align: left;

  .title, span {
    margin: 1em;
  }
  span {
    margin-top: -1em;
  }

    

  border-radius: 3px;
  border-top: 8px solid #32B565;
`

export default class Header extends Component {
  render() {
    return <StyledHeader>
      <h3 className="title">R6: Siege (PC) 5on5 Open Cup #34 - Spain</h3>
      <span>{ "2018-06-03T14:00:41+00:00"}</span>
    </StyledHeader>
  }
}