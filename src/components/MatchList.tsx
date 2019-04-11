import React, { Component } from "react";
import styled from 'styled-components';
import Card from "./Card";

const StyledList = styled.div`
  background: #EBECEE;
  display: flex;
  flex-direction:column
  height: 100vh;
  margin: 0 auto;
  width: 100%;
  max-width: 460px;
  grid-row: 2;
  grid-column: 2;
`

const rawData = [  
  {  
     "id":36063872,
     "state":"closed",
     "bracket":1,
     "round":1,
     "position":1,
     "participants":[  
        {  
           "id":12471748,
           "place":2,
           "points":[  
              0
           ]
        },
        {  
           "id":11151290,
           "place":1,
           "points":[  
              2
           ]
        }
     ],
     "beginAt":"2018-06-29T17:00:00.000Z"
  },
  {  
     "id":36063871,
     "state":"closed",
     "bracket":0,
     "round":0,
     "position":2,
     "participants":[  
        {  
           "id":12274969,
           "place":1,
           "points":[  
              1
           ]
        },
        {  
           "id":12471748,
           "place":2,
           "points":[  
              0
           ]
        }
     ],
     "beginAt":"2018-06-29T16:00:00.000Z"
  },
  {  
     "id":36063873,
     "state":"closed",
     "bracket":0,
     "round":1,
     "position":1,
     "participants":[  
        {  
           "id":12091998,
           "place":2,
           "points":[  
              1
           ]
        },
        {  
           "id":12274969,
           "place":1,
           "points":[  
              2
           ]
        }
     ],
     "beginAt":"2018-06-29T17:00:00.000Z"
  },
  {  
     "id":36063870,
     "state":"closed",
     "bracket":0,
     "round":0,
     "position":1,
     "participants":[  
        {  
           "id":12091998,
           "place":1,
           "points":[  
              5
           ]
        },
        {  
           "id":11151290,
           "place":2,
           "points":[  
              2
           ]
        }
     ],
     "beginAt":"2018-06-29T16:00:00.000Z"
  }
]



export default class MatchList extends Component <{}, { timerValue: string }>{


  constructor(props: any){
    super(props);
    this.state = { timerValue: 'Date \u25B2' };
  }

  handleOnClick(event: any) {
    if (event.target.value == "Date \u25BC") {
      console.log("sort Ascending")
      this.setState({ timerValue: "Date \u25B2" })
    }
    else if(event.target.value =="Date \u25B2"){
      console.log("sort Descending")
      this.setState({ timerValue: "Date \u25BC" })
    }
  }

  render() {

    const data =[{"name":"Black Lotus", "score":0},{"name":"Team Chandra", "score": 3}];
    let listItems = data.map(d=> <Card data={data}/>)
    listItems = [...listItems, ...listItems, ...listItems]

    return (
      <StyledList>
        <div style={{ background: "white", display: "flex", justifyContent: "flex-end", fontSize: "calc(10px + 2vmin)"}}>
          <input style={{ background: "white", padding:'.8em', fontSize: 'calc(1vmin)', borderRadius: '3px', margin: '2em 2em 0' }} type="button" value={this.state.timerValue} onClick={ e => this.handleOnClick(e) }/>
        </div>
        {listItems}
      </StyledList>
    );
  }
}