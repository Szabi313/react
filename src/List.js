import React, { Component } from 'react';
import './List.css';
import ListItem from './ListItem';
import Box from './Box';

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

       // this.makeList();

        this.state = {
             //list: this.list,
            listItems : [
                {id:1, val: 65546, show: true},
                {id:2, val:546554, show: true},
                {id:3, val: 6548, show: true},
                {id:4, val: 64564, show: true},
                {id:5, val:846313, show: true}
            ],
            text: [
                'vlamai',
                'még vlamai'
            ]
        };

        this.text = [];
        //this.item = {};
        this.makeList();

        this.makeList = this.makeList.bind(this);
        this.toggleClick = this.toggleClick.bind(this);
        //this.onChange = this.onChange.bind(this);
        this.makeText();
     }

     makeList(){
         this.list = this.state.listItems.map((item, index) =>
             <ListItem key={index} id={index} val={'item: ' + item.val} show={this.state.listItems[index].show} onClick={this.toggleClick}/>
         )
         console.log(this.list);
     }

     toggleClick = (elem) => {

         /*this.state.listItems[elem.props.id].show = false;
         this.makeList();

         this.setState(() => ({
                 list: this.list
             })
         );*/

         /*const IListItems = this.state.listItems;
         IListItems[elem.props.id].show = false;
         this.setState(() => {listItems: IListItems});
         this.makeList();*/

         this.setState(function(prevState) {
             const iListItems = prevState.listItems;
             iListItems[elem.props.id].show = false;
             this.makeList();
             return{listItems: iListItems}
         });

         //return {show: false};



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

    onChange = (e) => {
        //console.log('app change');

        this.setState(
            {text: e.target.value}
        )
    }

    makeText = () => {
        this.text = this.state.text.map(
            (item, index) => <Box key={index} id={index} onChange={this.onChange} value={this.state.text}/>

        )
        console.log(this.text)
    }


    render(){
        return (
            <div className="hideableList">
                <ul className="list">
                    {this./*state.*/list}
                </ul>
                <button>Show all</button>

                <div>

                    {this.text}

                    <Box id={1} onChange={this.onChange} value={this.state.text}/>
                    <Box id={2} onChange={this.onChange} value={this.state.text}/>
                </div>
            </div>
        );
    }
}

export default List;