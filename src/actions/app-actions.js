import AppConstants from '../constants/app-constants';
import AppDispatcher from '../dispatchers/app-dispatchers';

const AppActions = {
  addBook(item) {
    AppDispatcher.handleViewAction({
      actionType: AppConstants.ADD_BOOK,
      item,
    });
  },
  deleteBook(index) {
    AppDispatcher.handleViewAction({
      actionType: AppConstants.DELETE_BOOK,
      index,
    });
  },
  incBookCount(index) {
    AppDispatcher.handleViewAction({
      actionType: AppConstants.INC_BOOK_COUNT,
      item: index,
    });
  },
  decBookCount(index) {
    AppDispatcher.handleViewAction({
      actionType: AppConstants.DEC_BOOK_COUNT,
      item: index,
    });
  },
};

export default AppActions;
