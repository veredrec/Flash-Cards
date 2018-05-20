var card = { level: false };
$('#submit').on('click', function() {
  card.back = $('#inputBack').val();
  card.front = $('#inputFront').val();
  console.log(card);
});

// set card content on enter for each input
$('.input').keydown(function(event) {
  if (event.which == 13) {
    event.preventDefault();
    var content = $(this).val();
    $(this)
      .next('p')
      .text(content)
      .removeClass('hide-element')
      .addClass('show-element');
  }
});
