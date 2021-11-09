// This App object represents the Chatterbox application.
// It should initialize the other parts of the application
// and begin making requests to the Parse API for data.

var App = {

  $spinner: $('.spinner img'),

  username: 'anonymous',

  initialize: function() {
    App.username = window.location.search.substr(10);

    FormView.initialize();
    MessagesView.initialize();
    RoomsView.initialize();

    // Fetch initial batch of messages
    App.startSpinner();
    App.fetch(App.stopSpinner);
    MessagesView.render();

    // TODO: Make sure the app loads data from the API
    // continually, instead of just once at the start.
    setInterval(App.fetch, 10000);
  },

  fetch: function(callback = ()=>{}) {
    Parse.readAll((data) => {
      // examine the response from the server request:
      console.log(data);
      Messages.addMessages(data);
      Rooms.addRooms(data);
      //this should be called in roomsView initialize
      RoomsView.render();
      // TODO: Use the data to update Messages and Rooms
      // and re-render the corresponding views
      MessagesView.renderRoomMessages(RoomsView.$select[0].value);
      callback();
      // setTimeout(App.fetch.bind(this), 10000);

      //
    });
    //setInterval(App.fetch.bind(this), 6000);
  },

  startSpinner: function() {
    App.$spinner.show();
    FormView.setStatus(true);
  },

  stopSpinner: function() {
    App.$spinner.fadeOut('fast');
    FormView.setStatus(false);
  }
};
