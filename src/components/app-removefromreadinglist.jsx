import React, { Component } from 'react';
import AppActions from '../actions/app-actions';

class DeleteBookFromReadingList extends Component {
  handler() {
    AppActions.deleteBook(this.props.index);
  }

  render() {
    return (
      <button type="button" onClick={this.handler}>Book Completed</button>
    );
  }
}

export default DeleteBookFromReadingList;
