import React, { Component } from 'react';
import Slot from "./Slot"
import logo from "../dice.jpg"

let machineStyle = { border: "1px solid black", 
padding: "25px", 
display: 'flex', 
flexDirection: "column", 
alignContent: "center", 
alignItems: "center" }

let slotsStyle = {
    width: "50%",
    margin: "10px auto 25px",
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'nowrap',
    justifyContent: "center"
}

class SlotMachine extends Component {

    constructor() {
        super()
        this.state = {
            score: 0,
            times: 0
        }
    }
    reportScore = (amount) => {
        this.setState(st => ({
            score: st.score + amount,
            times: st.times + 1
        }))
    }


    render() {
        return (
            <div style={machineStyle}>
                <img width="100" alt="dice logo here" src={logo} />
                <div style={slotsStyle}>
                    <Slot sendScore={this.reportScore} />
                    <Slot sendScore={this.reportScore} />
                    <Slot sendScore={this.reportScore} />

                </div>
                <div>Your Score Is: {this.state.times >= 3 ? this.state.score : ""}</div>
            </div>
        )
    }
}

export default SlotMachine