import React from 'react';

//Stateless component
//const Counter = (props) => {
//const Counter = props => {
const Counter = ({ className, counter, onIncrement, onDelete }) => {
    console.log('Counter.render called');
    
    const zeroStyle = {
        backgroundColor: "Yellow"
    };

    const formatCounter = value => {
        return value === 0 ? <span style={zeroStyle}>Zero</span> : <span className="badge-primary">{value}</span>;
    }

    return (  
        // <React.Fragment>
        <div className={className}>
            <span className="badge ml-2 mr-2">{ formatCounter(counter.value) }</span>
            <button className="btn btn-secondary" onClick={() => { onIncrement(counter.id) }}>Increment</button>  
            <button className="btn btn-primary ml-2" onClick={() => { onDelete(counter.id) }}>Delete</button>
        </div>
        // </React.Fragment>
    );
}
  
export default Counter;