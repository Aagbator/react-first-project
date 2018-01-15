import React, { Component } from 'react';
import Item from './Item/item';
import InputField from './InputField/InputField';
import ValidationComponent from './ValidationComponent/ValidationComponent';
import CharComponent from './charComponent/charComponent';
import Radium from 'radium';
import './App.css';
import './Item/item.css';
import foodItems from './data';

class App extends Component {

    state = {
        foodList : foodItems,
        totalcost : 0,
        display: false,
        text: '',
        charLists: []
    }

    updateCost = (price) => {
        var newPrice = price;
        this.setState({totalcost:newPrice});
    }

    reviewHandler = (event, itemId) => {

        const item = this.state.foodList.findIndex(indx=>{
            return indx.id === itemId;
        });

        //console.log(item);
        const review = event.target.value;

        const items = [...this.state.foodList];
        items[item].review = review;

       this.setState({foodList:items});

    }

    removeItem = (index) => {
        var items = this.state.text.split('');
        items.splice(index,1);

        const newItem = items.join("");

        this.setState({text:newItem});
    }

    textHandler = (event) => {

        var textInput = event.target.value;

        this.setState({text : textInput});

    }


    addItem = (itemIndex) => {

        let sum = 0;

        const price = this.state.foodList[itemIndex].price;
        const totalCost = this.state.totalcost;

         sum = parseInt(price,10) + parseInt(totalCost,10);
        this.setState({totalcost: sum});
    }

    deleteItem = (itemIndex) => {
        const newItems = this.state.foodList.slice();
         newItems.splice(itemIndex,1);
        this.setState({foodList:newItems});
    }

    toggleItems = () => {
        var status = this.state.display;
        this.setState({display:!status});

    }

  render() {


        const buttonStyle={
            border:'1px solid #fff',
            padding:'5px',
            color:'#fff',
            fontWeight:'700',
            backgroundColor:'#3b8806',
            marginBottom: '10px'
        }

      // var foodlist = foodItems.map(function(ele, index) {
      //     return <Item click={this.updateCost}  key={index} id={ele.id} title={ele.title} price={ele.price}/>;
      // });

      var elementList = this.state.text.split('').map((ele, index)=>{
          return <CharComponent removeItem={()=>this.removeItem(index)} key={index} character={ele}/>;
      });

      var items = null;

      var Style = {
          fontWeight:'700',
          backgroundColor:'yellow',
          ':hover':{
              backgroundColor:'pink',
              padding:'5px 40px'
          }
      };

      if(this.state.display){
          items = (
              <div>
                  {this.state.foodList.map((item, index)=>{
                     return <Item
                         key={item.id}
                         addToCart={this.addItem.bind(this,index)}
                         deleteClicked={this.deleteItem.bind(this,index)}
                         reviewHandler={(event)=>this.reviewHandler(event,item.id)}
                         id={item.id}
                         review={item.review}
                         title={item.title}
                         price={item.price}/>;
                  })}
              </div>
          );
          buttonStyle.backgroundColor = '#a10505';
          Style[':hover'] = {
              backgroundColor:'orange',
                  padding:'5px 20px',
                border:'2px solid pink'
          }
      }
      else{
          items = null;
      }


    return (
          <div className="App">
              <div className="display"> $ <span>{this.state.totalcost}</span></div>
              <button  style={buttonStyle}  onClick={this.toggleItems}>show / hide</button>
              <button style={Style}>hello world !</button>
              { items }

              <div>
                  <InputField textHandler={this.textHandler} currentValue={this.state.text} />
                  <ValidationComponent textLength={this.state.text.length}/>
                  <div>
                      {elementList}
                  </div>
              </div>
          </div>
    );
  }
}

export default Radium(App);
