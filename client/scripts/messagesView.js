// MessagesView is an object which controls the DOM elements
// responsible for displaying messages.

// on initialize get a render object from messageView
// then renderMessage can call from that object with values of a specific message

var MessagesView = {

  // in body <div id="chats"></div>
  // this is where the messages will be added
  $chats: $('#chats'),
  templateRender: MessageView.render,


  initialize: function() {
    // TODO: Perform any work which needs to be done
    // when this view loads.
    // this.render();
    // ? what to do
  },

  renderRoomMessages: function(roomname) {
    // display messages from specified room
    // clear current messages
    // get messages for that room
    // render each message
    // this.$chats[0].empty();
    // this.$chats[0].html('')
    var olds = this.$chats[0].children;
    for (var i = 0; i < olds.length; i) {
      olds[i].remove();
    }
    var messes = Messages.getMessagesRoom(roomname);
    for (const mess of messes) {
      this.renderMessage(mess);
    }
  },

  render: function(data) {
    // TODO: Render _all_ the messages.
  },

  // get html from render with values of message parameter (call render(vars))
  // add html to chats class div
  renderMessage: function(message) {
    // TODO: Render a single message.
    // var $message = $(`<div class="chat">${message.username}: ${message.text}</div>`);
    var $message = MessageView.render(message);
    this.$chats.append($message);
  },

  handleClick: function(event) {
    // TODO: handle a user clicking on a message
    // (this should add the sender to the user's friend list).
    var username = $(event.target).data('username');
    if (username === undefined) { return; }
    Friends.toggleStatus(username);
  }
};