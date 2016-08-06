const { combineReducers } = require('redux');

const wiresCollection = require('./wiresCollection')

module.exports = combineReducers({
  wiresCollection,
});
