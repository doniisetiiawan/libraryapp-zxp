import { EventEmitter } from 'events';
import AppDispatcher from '../dispatchers/app-dispatchers';
import AppConstants from '../constants/app-constants';

const CHANGE_EVENT = 'change';

const _library = [];

for (let i = 1; i < 6; i++) {
  _library.push({
    id: `Book_${i}`,
    title: `Sherlock Holmes Story ${i}`,
    description:
      'Sherlock Series by Sir Arthur Conan Doyle',
  });
}

const _readingItems = [];

function _removeItem(index) {
  _readingItems[index].inReadingList = false;
  _readingItems.splice(index, 1);
}

function _increaseItem(index) {
  _readingItems[index].qty++;
}

function _decreaseItem(index) {
  if (_readingItems[index].qty > 1) {
    _readingItems[index].qty--;
  } else {
    _removeItem(index);
  }
}

function _addItem(item) {
  if (!item.inReadingList) {
    item.qty = 1;
    item.inReadingList = true;
    _readingItems.push(item);
  } else {
    _readingItems.forEach((cartItem, i) => {
      if (cartItem.id === item.id) {
        _increaseItem(i);
      }
    });
  }
}

class AppStores extends EventEmitter {
  emitChange() {
    this.emit(CHANGE_EVENT);
  }

  addChangeListener(callback) {
    this.on(CHANGE_EVENT, callback);
  }

  removeChangeListener(callback) {
    this.removeListener(CHANGE_EVENT, callback);
  }

  // eslint-disable-next-line class-methods-use-this
  getReadingList() {
    return _readingItems;
  }

  // eslint-disable-next-line class-methods-use-this
  getLibrary() {
    return _library;
  }
}

const AppStore = new AppStores();

export default AppStore;

AppDispatcher.register((payload) => {
  const { action } = payload; // this is our action from handleViewAction
  switch (action.actionType) {
    case AppConstants.ADD_BOOK:
      _addItem(payload.action.item);
      break;

    case AppConstants.DELETE_BOOK:
      _removeItem(payload.action.index);
      break;

    case AppConstants.INC_BOOK_COUNT:
      _increaseItem(payload.action.index);
      break;

    case AppConstants.DEC_BOOK_COUNT:
      _decreaseItem(payload.action.index);
      break;
    default:
      break;
  }

  AppStore.emitChange();

  return true;
});
