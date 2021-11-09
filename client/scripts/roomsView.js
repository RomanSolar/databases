// RoomsView is an object which controls the DOM elements
// responsible for displaying and selecting rooms.

var RoomsView = {

  $button: $('#rooms button'),
  $select: $('#rooms select'),
  $addRoom: $('#rooms input'),

  //  <select name="cars" id="cars">
  //    <option value="volvo">Volvo</option>
  //    <option value="saab">Saab</option>
  //    <option value="mercedes">Mercedes</option>
  //    <option value="audi">Audi</option>
  //  </select>

  initialize: function() {
    // TODO: Perform any work which needs to be done
    // when this view loads.
    // attach event handlers!

    this.$select.change(this.handleChange);
    this.$button.click(this.handleClick);
  },

  render: function() {
    // TODO: Render out the list of rooms.
    // ie add all room names to select list

    // get list of roonmnames from rooms
    // add each to select with renderRoom
    // this.$select[0].children = [];

    var allRooms = Rooms.getRoomNames();
    if (this.$select[0].length !== allRooms.length) {
      var olds = this.$select[0].children;
      for (var i = 0; i < olds.length; i) {
        olds[i].remove();
      }
      for (const room of allRooms) {
        this.renderRoom(room);
      }
    }
  },

  renderRoom: function(roomname) {
    // TODO: Render out a single room. ie add roomname to list
    // create room html option element, append to select
    var $room = $(`<option value=${roomname}>${roomname}</option>`);
    this.$select.append($room);
  },

  handleChange: function(event) {
    // TODO: Handle a user selecting a different room.
    var roomname = RoomsView.$select[0].value;
    // user selects different room, display messages from new room?
    MessagesView.renderRoomMessages(roomname);
  },

  handleClick: function(event) {
    // TODO: Handle the user clicking the "Add Room" button.

    // get text from input box
    // add to rooms

    //should add a room when clicking add test - failing
    var toAdd;
    // if statement is just for spec runner being stupid
    // spec runner calling stuff incorrectly
    if (RoomsView.$addRoom[0] !== undefined) {
      toAdd = RoomsView.$addRoom[0].value;
    } else {
      toAdd = '';
    }

    if (Rooms.add(toAdd)) {
      RoomsView.renderRoom(toAdd);
    }
    // Rooms.add(toAdd);
    // RoomsView.renderRoom(toAdd);

  }
};
