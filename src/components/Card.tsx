import React, { Component, FunctionComponent } from "react";
import styled from 'styled-components';

const StyledCard = styled.div`
  background: #EBECEE;
  display: flex;
  flex-direction:row
  justify-content: space-between;
  padding: .2em;

  border-radius: 3px;
  border-left: 5px solid red;
  
  span {
    color: red;
  }
  span.won {
    border-left: 5px solid green;
  }
`

interface IProps {
  name: string;
  score: number;
}


const Contestant: FunctionComponent<IProps> = (props) => {
  return (
    <div>
      <div> {props.name} </div>
      <div> {props.score}</div>
    </div>
  )
}

export default class Card extends Component<IProps>{
  render() {
    return (
      <StyledCard>
        <span>{this.props.name}</span>
        <span>{this.props.score}</span>
      </StyledCard>
    )
  }
}