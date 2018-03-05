var $form = $('form#mc-form'),
    url = 'https://script.google.com/macros/s/AKfycby6wTHx9Cq2vqpNdIX8gLE0tnsXIWH2wPvcZoNMJLrrilTJl54/exec'

$('#notify-submit').on('click', function(e) {
  e.preventDefault();
  var jqxhr = $.ajax({
    url: url,
    method: "GET",
    dataType: "json",
    data: $form.serializeObject()
  }).success(
    // do something
  );
})
