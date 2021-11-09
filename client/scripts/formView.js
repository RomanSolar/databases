// FormView is an object which houses all the message form functionality.
// Consider the provided code and complete the functionality.
// Apply what you learn here to other interactive views if necessary.

var FormView = {

  $form: $('form'),
  $message: $('#message'),

  initialize: function() {
    FormView.$form.on('submit', FormView.handleSubmit);
  },

  handleSubmit: function(event) {
    // Stop the browser from submitting the form
    event.preventDefault();
    var submittedText = $('#message').val();
    // TODO: Currently, this is all handleSubmit does.
    // Make this function actually send a message to the Parse API.

    // get username
    // get message text
    // get roomname
    // make obj with those 3
    // parse.send(obj)

    // window.location.search = '?username=adada'


    var msg = {
      username: window.location.search.slice(10),
      text: FormView.$message[0].value,
      roomname: RoomsView.$select[0].value,
    };
    Parse.create(msg);
    console.log('click!');
  },

  setStatus: function(active) {
    var status = active ? 'true' : null;
    FormView.$form.find('input[type=submit]').attr('disabled', status);
  }
};