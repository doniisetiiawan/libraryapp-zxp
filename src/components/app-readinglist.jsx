import React, { Component } from 'react';
import AppStore from '../stores/app-stores';
import RemoveFromReadingList from './app-removefromreadinglist';

function readingItems() {
  return { items: AppStore.getReadingList() };
}

class ReadingList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      items: AppStore.getReadingList(),
    };
  }

  // eslint-disable-next-line camelcase
  UNSAFE_componentWillMount() {
    AppStore.addChangeListener(this._onChange);
  }

  _onChange() {
    this.setState(readingItems());
  }

  render() {
    return (
      <table className="table table-hover">
        <thead>
          <tr>
            {/* eslint-disable-next-line jsx-a11y/control-has-associated-label */}
            <th />
            <th>Book Name</th>
            <th>Qty</th>
            {/* eslint-disable-next-line jsx-a11y/control-has-associated-label */}
            <th />
          </tr>
        </thead>
        <tbody>
          {this.state.items.map((item) => (
            <tr key={item.id}>
              <td>
                <RemoveFromReadingList index={item.id} />
              </td>
              <td>{item.title}</td>
              <td>{item.qty}</td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  }
}

export default ReadingList;
