import React, { Component } from 'react';

import AppStore from '../stores/app-stores';
import AddBookToReadingList from './app-addbooktoreadinglist';

class BookList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      items: [],
    };
  }

  componentDidMount() {
    this.setState({
      items: AppStore.getLibrary(),
    });
  }

  render() {
    return (
      <table className="table table-hover">
        <tbody>
          {this.state.items.map((item) => (
            <tr key={item.id}>
              <td>{item.title}</td>
              <td><AddBookToReadingList item={item} /></td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  }
}

export default BookList;
