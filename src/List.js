import React, { Component } from 'react';
import './List.css';
import ListItem from './ListItem';

class List extends Component {

    constructor(props){
        super(props);

        this.listItems = [
            {id:1, val: 65546, show: true},
            {id:2, val:546554, show: true},
            {id:3, val: 6548, show: true},
            {id:4, val: 64564, show: true},
            {id:5, val:846313, show: true}
        ];

        this.list = [];

        this.makeList();

        this.state = {
             //list: this.list,
        };

        //this.item = {};

        this.makeList = this.makeList.bind(this);
        this.toggleClick = this.toggleClick.bind(this);
     }

     makeList(){
         this.list = this.listItems.map((item, index) =>
             <ListItem key={index} id={index} val={'item: ' + item.val} show={item.show} onClick={this.toggleClick}/>
         )
         console.log(this.list);
     }

     toggleClick = (elem) => {
        // console.log(elem.props.id);

         //console.log(this.state.list[elem.props.id]);
         this.listItems[elem.props.id].show = false;
         this.makeList();

         //this.listItems[elem.props.id].show = false;
         //var aListItem = <ListItem key={elem.props.id} id={elem.props.id} val={'item: ' + this.listItems[elem.props.id].val} show={this.listItems[elem.props.id].show} onClick={this.toggleClick}/>

         this.setState(() => ({
                 list: this.list
             })
         );

         /*this.state.list.forEach(function(item){
             console.log(item);
        });*/

        //this.state.list[3].props.show = false;

     }

    addClick = () => {
        console.log("This: ", this);

        this.listItems.push({id:1000, val: 34546543213});

        this.makeList();

        this.setState(() => ({
                list: this.list
            })
        );
    }

    delClick = (e) => {
        console.log(e.target);
        //this.list = this.listItems.map()
    }

    showClick = () => {
         this.makeList();
         this.setState({list: this.list});
    }


    render(){
        return (
            <div>
                <ul className="list">
                    {this./*state.*/list}
                </ul>
                <button>Show all</button>
            </div>
        );
    }
}

export default List;