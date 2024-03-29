import React, { Component } from 'react';
import Counter from "../components/counter";

export class Counters extends Component {
    state = {
     counters: [
        {id: 1, value: 4},
        {id: 2, value: 0},
        {id: 3, value: 0},
        {id: 4, value: 4},
    ]
      };

handleDelete = counterId=>{
const counters = this.state.counters.filter(c=>c.id !== counterId)
this.setState({counters})
};

    render() {
     
        return (
            <div>
                <button onClick={this.handleReset} className="btn btn-primary btn-sm m-2">Reset</button>
              {this.state.counters.map(counter=>
              <Counter key={counter.id} 
              onDelete={this.handleDelete} 
              counter={counter}
              >
                  
            </Counter>)}
            </div>
        );
    }
}

export default Counters;
