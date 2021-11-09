// This object houses all the room _data_ for the app.
// Treat it like a data structure - add methods to interact
// with and manipulate the data.

var Rooms = {

  // TODO: Define how you want to store the list of rooms
  _data: ['All'],

  addRooms: function(dataObj) {
    var data = dataObj.results;
    for (const message of data) {
      if (!this._data.includes(message.roomname) && message.roomname !== null) {
        this._data.push(message.roomname);
      }
    }
  },

  add: function(roomname) {
    if (!this._data.includes(roomname) && roomname !== null && roomname !== '') {
      this._data.push(roomname);
      return true;
    }
    return false;
  },

  getRoomNames: function() {
    return JSON.parse(JSON.stringify(this._data));
  }
  // TODO: Define methods which allow you to add rooms, update the list,
  // mark a room as selected, etc.
};