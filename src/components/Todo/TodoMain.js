import React, { Component } from 'react';
import TodoInput from './TodoInput/TodoInput';
import TodoItems from './TodoItems/TodoItems';
import styles from './TodoMain.css';

class TodoMain extends Component {
  constructor() {
    super();
    this.state = {
      items: [],
      currentItem: {
        text: '',
        key: ''
      }
    }
  }

  handleInput = (event) => {
    const currentItem = { text: event.target.value, key: Date.now() }
    this.setState({ currentItem });
  }

  addItem = (event) => {
    event.preventDefault();
    const newItem = this.state.currentItem;
    if (newItem.text !== '') {
      const items = [...this.state.items, newItem];
      this.setState({
        items: items,
        currentItem: { text: '', key: ''}
      })
    }
  }

  deleteItem = (key) => {
    const filteredItems = this.state.items.filter(item => {
      return item.key !== key;
    })
    this.setState({ items: filteredItems });
  }

  render() {
    return (
      <div className={styles.TodoMain}>
        <h4 className={styles.title}>TODO list!!!</h4>
        <TodoInput
          addItem={this.addItem}
          handleInput={this.handleInput}
          currentItem={this.state.currentItem}
        />
        <TodoItems items={this.state.items} deleteItem={this.deleteItem} />
      </div>
    )
  }
}

export default TodoMain;
