import React from 'react';

class Child extends React.Component{
    render(){
        return(
            <div>
                <h1>{this.props.name}</h1>
        <h3>{this.props.price}</h3>
        <button onClick={this.props.get_data("Saimoon")}>Send data</button>
            </div>
        )
    }
}

export default Child;