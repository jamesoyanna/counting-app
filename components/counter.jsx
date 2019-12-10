import React, { Component } from 'react';

export class Counter extends Component {
    state = {
        value:this.props.counter.value

    }
   
 handleIncrement = ()=>{
   this.setState({value:this.state.value +1})
 }
    
 handleReset = ()=>{
     const counters = this.state.counters.map(c=>{
         c.value = 0;
         return c;
     });
     this.setState({counters})
 }
    render() {
    
        return (
            <div>
                
         <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
                <button 
                onClick={this.handleIncrement} 
                className="btn btn-secondary btn-sm">Incremental</button>
                <button 
                onClick={()=>this.props.onDelete(this.props.counter.id)} 
                className="btn btn-danger btn-sm m-2">Delete</button>
               
            </div>
        );
    }
    getBadgeClasses() {
        let classes = "badge m-2 badge-";
        classes += this.state.value === 0 ? "warning" : "primary";
        return classes;
    }

   formatCount(){
       const {value} = this.state
       return value === 0 ? "Zero": value;
   }

}

export default Counter;
