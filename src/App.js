import './App.css';
import React, { Component } from 'react';
import Items from './components/item/items';
import AddItem from './components/addItem/addItem';
import Total from './components/total/total';

class App extends Component {
  state = {
    items: [
      { id: 1, product: 'Pen', price: 2 },
      { id: 2, product: 'Book', price: 10 },
    ],
  };
  constructor() {
    super();
    this.state.items.forEach((item) =>
      item.quantity ? item.quantity : Object.assign(item, { quantity: 1 })
    );
  }

  deleteItem = (id) => {
    let items = this.state.items;
    let i = items.findIndex((item) => item.id === id);
    items.splice(i, 1);
    this.setState({ items: items });
  };

  addItem = (item) => {
    this.state.items.length > 0
      ? (item.id = this.state.items[this.state.items.length - 1].id + 1)
      : (item.id = 1);
    console.log(item.id);
    let items = this.state.items;
    items.push(item);
    this.setState({ items: items });
  };
  increase = (id) => {
    const index = this.state.items.findIndex((cartItem) => cartItem.id === id);
    if (index !== -1) {
      const updatedItems = [...this.state.items];
      updatedItems[index].quantity < 1
        ? (updatedItems[index].quantity = 1)
        : (updatedItems[index].quantity += 1);
      console.log(updatedItems[index].quantity);
      this.setState({ items: updatedItems });
    }
  };
  decrease = (id) => {
    const index = this.state.items.findIndex((cartItem) => cartItem.id === id);
    if (index !== -1) {
      const updatedItems = [...this.state.items];
      if (updatedItems[index].quantity === 1) {
        updatedItems.splice(index, 1);
      } else {
        updatedItems[index].quantity -= 1;
      }
      this.setState({ items: updatedItems });
    }
  };
  render() {
    return (
      <div className="container">
        <h1>Product List React App</h1>
        <div className="table">
          <Items
            items={this.state.items}
            del={this.deleteItem}
            inc={this.increase}
            dec={this.decrease}
          />
          <AddItem add={this.addItem} />
          <Total items={this.state.items} />
        </div>
      </div>
    );
  }
}

export default App;
