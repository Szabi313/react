import React, { Component } from 'react';

class DelButton extends Component{
    constructor(props){
        super(props);
    }

    /*handleClick = () => {
        console.log("This: ", this);
    }*/

    render(){
        return (
            <button onClick={this.props.onClick}>Click</button>
        )
    }
}

export default DelButton;