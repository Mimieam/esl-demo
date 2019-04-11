import React, { Component, FunctionComponent } from "react";
import styled, { StyledFunction } from 'styled-components';

interface IStatus {
  won: boolean;
}
interface IProps {
  name: string;
  score: number;
}

const StyledContestant = styled.div<IStatus>` 
  background: #FFFFFF;
  display: flex;
  flex-direction:row
  justify-content: space-between;
  padding: .2em;

  border-radius: 3px;
  border-left: 5px solid red;
  span {
    color: #333333;
    padding-left: .5em;
  }
  margin: 1em;
  ${
    props => props.won && "\
        border-left: 5px solid green;  \
        span:nth-child(2){ \
          font-weight: bold; \
        }"
  }
  }
`

const StyledTimer = styled.div`
  display: flex;
  margin: 1em 1em -0.5em 1em;
  color: #818F8F
` 
const StyledCard = styled.div`
  background-color: #FFFFFF
  margin-bottom: 2px;
  padding-bottom: 0.5em;
`

const Contestant: FunctionComponent<IProps & IStatus> = (props) => {
  return (
    <StyledContestant {...props}>
      <span> {props.name} </span>
      <span> {props.score}</span>
    </StyledContestant>
  )
}


const Timer: FunctionComponent = (props) => {
  return (
    <StyledTimer>
      {props.children}
    </StyledTimer>
  )
}

export default class Card extends Component<{ data: Array<IProps> }>{
  render() {
    let [contestant1, contestant2] = this.props.data
    
    return (
      <StyledCard >
        <Timer>12:51  </Timer>
        <Contestant name={contestant1.name} score={contestant1.score} won={true}></Contestant>
        <Contestant name={contestant2.name} score={contestant2.score} won={false}></Contestant>
      </StyledCard>
    )
  }
}