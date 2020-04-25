import React, { Component } from 'react';

import AppActions from '../actions/app-actions';

class AddBookToReadingList extends Component {
  handler() {
    AppActions.addBook(this.props.item);
  }

  render() {
    return (
      <button type="button" onClick={this.handler}>
        I want to borrow
        {' '}
      </button>
    );
  }
}

export default AddBookToReadingList;
