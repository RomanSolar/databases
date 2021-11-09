// Whereas MessagesView controls the entire list of messages,
// MessageView is responsible for rendering a single message.

var MessageView = {
  // Learn more about Underscore's templating capability
  // here: https://underscorejs.org/#template.
  // TODO: Update this template accordingly.

  // var thing = MessageView.render
  // thing({username: 'stuff'}, text:'message text') --returns string of html with values assigned
  // thing({username: variableWithUserName}, text:variableWithText)
  render: _.template(`
      <div class="chat">
      <div class="username"><%- username %></div>
      <div class="text"><%- text %></div>
        <div></div>
      </div>
    `)
};