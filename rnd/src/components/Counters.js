import React, { Component } from 'react';
import Counter from './Counter';

class Counters extends Component {

    constructor() {
        super();
        this.getCounters();
    }
   
    state = {
        counters: []
        //counters: [{ id: 1, value: 0 }, { id: 2, value: 0 }, { id: 3, value: 0 }, { id: 4, value: 0 }]
    };

    getCounters = () => {
        const counters = [{ id: 1, value: 0 }, { id: 2, value: 0 }, { id: 3, value: 0 }, { id: 4, value: 0 }];
        this.setState({ counters });
        console.log('getCounters is called');
    }

    handleIncreaseCounter = (id) => {
        const counters = [...this.state.counters];
        const counterIndex = this.state.counters.findIndex(c => c.id === id);
        counters[counterIndex].value++;
        this.setState({ counters });
        console.log('Button clicked !', this.state.counters[counterIndex].value);
    }

    handleDelete = (id) => {
        const counters = [...this.state.counters].filter(i => i.id !== id);
        this.setState({ counters });
    }

    handleReset = () => {
        this.getCounters();
    }

    render() { 
        return (  
            <div className="mt-2">
                <div>
                    <button className="btn btn-primary mb-2 ml-2" onClick={this.handleReset}>Reset counter values</button>
                </div>
                {
                    this.state.counters.map(c => {
                        return (<Counter key={c.id} className="row mb-2 ml-2" counter={c} onIncrement={this.handleIncreaseCounter} onDelete={this.handleDelete}></Counter>);
                    })
                };
            </div>
        );
    }
}
  
export default Counters;