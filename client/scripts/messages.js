// This object houses all the message _data_ for the app.
// Treat it like a data structure - add methods to interact
// with and manipulate the data.
var Messages = {

  // TODO: Define how you want to store your messages.
  _data: [],
  _ids: [],
  // TODO: Define methods which allow you to retrieve from,
  // add to, and generally interact with the messages.
  addMessages: function(dataObj) {
    var data = dataObj.results;
    for (var i = data.length - 1; i >= 0; i--) {
      // if (!this._ids.includes(data[i].message_id)) {
      this._data.push(data[i]);
      this._ids.push(data[i].message_id);
      // }
    }
    // for (const message of data) {
    //   if (!this._ids.includes(message.message_id)) {
    //     this._data.push(message);
    //     this._ids.push(message.message_id);
    //   }
    // }
  },
  // clearData: function() {
  //   this._data = [];
  // },
  // return array of messages from specified roomname

  //add room name called 'all'
  //
  getMessagesRoom: function(roomname) {
    if (roomname === 'All') {
      return this._data.slice();
    }
    var messes = this._data.filter(function(message) {
      return message.roomname === roomname;
    });
    return messes;
  }
  // this handles splitting into individual messages and adding to array
};

// addMessages just takes the data from server response parses it into individual messages and adds them to the _data array
