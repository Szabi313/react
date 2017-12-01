import React, { Component } from 'react';
import HideButton from './HideButton';

class ListItem extends Component{

    constructor(props){
        super(props);
        this.hideClick = this.hideClick.bind(this);

        this.state = {
            show : true
        }
    }

    showClick() {
       // console.log("This: ", this);
        this.setState({show : true});
        return true;
    };

    hideClick() {
        // console.log("This: ", this);
        this.setState({show : false});
    };

    toggleClick = (e) => {
        console.log(e.target.value);
        this.props.onClick(this);
    }



    render(){
        //return React.createElement('li', {}, this.props.val);

        //if(!this.state.show){
        if(!this.props.show){
            return null;
        }

        return(
            <li id={this.props.id} show={this.props.show}>{this.props.val} <HideButton itsParent={this} onClick={this.toggleClick} key={this.props.key}/></li>
        )
    }
}



export default ListItem;