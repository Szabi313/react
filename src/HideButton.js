import React, { Component } from 'react';

class HideButton extends Component{
    constructor(props){
        super(props);
    }

    /*handleClick = () => {
        console.log("This: ", this);
    }*/

    render(){
        return (
            <button onClick={this.props.onClick} key={this.props.key}>Hide</button>
        )
    }
}

export default HideButton;