import React from 'react';

function Counter(props) {
    return (  
        // <React.Fragment>
        <div className={props.className}>
            <span className="badge badge-primary ml-2 mr-2">{props.counter.value}</span>
            <button className="btn btn-secondary" onClick={() => { props.onIncrement(props.counter.id) }}>Increment</button>  
            <button className="btn btn-primary ml-2" onClick={() => { props.onDelete(props.counter.id) }}>Delete</button>
        </div>
        // </React.Fragment>
    );
}
  
export default Counter;