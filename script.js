$(document).ready(function() {
  $('form').submit(function(event) {
    // prevent the form from submitting in the traditional way
    event.preventDefault();
    
    // get the chemical potential value from the form
    var value = $('#chemical-potential').val();
    
    // make an AJAX request to the Python script
    $.ajax({
      url: 'http://your-server-url/calculate-chemical-potential',
      type: 'POST',
      data: JSON.stringify({value: value}),
      contentType: 'application/json',
      success: function(response) {
        // display the result in a message box or console log it
        alert('The result is ' + response.result);
      },
      error: function(xhr, status, error) {
        // handle any errors
        alert('An error occurred: ' + error);
      }
    });
  });
});
