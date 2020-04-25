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

  componentDidMount = () => {
    AppStore.addChangeListener(this._onChange);
  }

  _onChange = () => {
    this.setState(readingItems());
  };

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
          {this.state.items.map((item, i) => (
            <tr key={i}>
              <td>
                <RemoveFromReadingList index={i} />
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
