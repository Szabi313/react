import React, {Component} from  'react';

class Box extends Component{

    constructor(props){
        super(props);


    }

    handleChange = (e) => {
        //console.log('change');
        this.props.onChange(e);
    }

    render(){
        return(
            <input id={this.props.id} className='boxClass' onChange={this.handleChange} value={this.props.value}/>
        )
    }
}

export default Box;