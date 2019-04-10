import React, { Component } from "react";
import styled from 'styled-components';


const StyledHeader = styled.div`
  background: #FFFFFF;
  height: auto
  width: 100%;
  grid-row: 1;
  grid-column: 2;
`

export default class Header extends Component {
  render() {
    return <StyledHeader> Header </StyledHeader>
  }
}