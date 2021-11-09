// The Parse object represents your connection to outside world!
// Or... just the Parse API. Populate this object with methods
// which send requests to the RESTful Parse API.

var Parse = {

  //server: `https://app-hrsei-api.herokuapp.com/api/chatterbox/messages/${window.CAMPUS}`,
  server: 'http://127.0.0.1:3000/classes/messages/',

  // create: function(message, successCB, errorCB = null) {
  //   // TODO: send a request to the Parse API to save the message

  // },

  readAll: function(successCB, errorCB = null) {
    // console.log(Parse.server);
    $.ajax({
      url: Parse.server,
      type: 'GET',
      // data: {order: 'order'},
      ContentType: 'application/json',
      success: successCB,
      error: errorCB || function(error) {
        console.error('chatterbox: Failed to fetch messages', error);
      }
    });
  },

  create: function(mess, successCB, errorCB = null) {
    $.ajax({
      url: Parse.server,
      type: 'POST',
      data: JSON.stringify(mess),
      ContentType: 'application/json',
      success: function (data) {
        console.log('chatterbox: Message sent');
      },
      error: function (data) {
        // See: https://developer.mozilla.org/en-US/docs/Web/API/console.error
        console.log(data);
        console.error('chatterbox: Failed to send message', data);
      }
    });
  },

};