import React, { Component } from 'react';


class Slot extends Component {
    constructor() {
        super()
        this.state = {
            direction: 1,
            amount: 0,
            id: null
        }
    }

    stopSlot = () => {
        //stopfunction's this is bound to Slot, so the next line refers to slot's state
        this.props.sendScore(this.state.amount)
        clearInterval(this.state.id)
    }
    slotStep = ()=>{
        if (Math.random() * 10 >= 8) {
            this.setState(st => ({ direction: -st.direction }))
        } else {
            this.setState(st => ({ amount: st.amount + 20*this.state.direction }))
        }
    }

    

    resetSlot = () => {
        //setInterval returns an ID for stopping the interval from executing, so we're gonna take it

        let id = setInterval(
            this.slotStep, 100)
        //and store it in the state
        this.setState({ id: id })
    }
    componentDidMount() {
        this.resetSlot()

    }
    render() {
        return (
            <div>
                {this.state.amount}
                <button onClick={this.stopSlot}>Stop Slot</button>

            </div>
        )
    }
}
export default Slot