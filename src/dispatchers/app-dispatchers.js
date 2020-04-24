import { Dispatcher } from 'flux';

const AppDispatcher = new Dispatcher();

AppDispatcher.handleViewAction = function (action) {
  console.log('action', action);
  this.dispatch({
    source: 'VIEW_ACTION',
    action,
  });
};

export default AppDispatcher;
