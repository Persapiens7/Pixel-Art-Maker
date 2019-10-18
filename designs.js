// Creating height, width and color variables
var height, width, color;

// Using submit method to call the makeGrid function
$('#sizePicker').submit(function (event) {
  event.preventDefault();
  height = $('#inputHeight').val(); // Set height to inputHeight
  width = $('#inputWidth').val(); // Set width to inputWidth
  makeGrid(height, width);
})

// Function to create a grid of a specific height and width
function makeGrid(x, y) {

  $('tr').remove(); // To remove previously created grids

  // To determine height and width of grid
  for (var a = 1; a <= x; a++) {
    $('#pixelCanvas').append('<tr id=table' + a + '></tr>');
    for (var b = 1; b <=y; b++) {
      $('#table' + a).append('<td></td>');
    }
  }

  // To add or remove color to specific grid cell by clicking it
  $('td').click(function addColor() {
    color = $('#colorPicker').val();

    if ($(this).attr('style')) {
      $(this).removeAttr('style')
    } else {
      $(this).attr('style', 'background-color:' + color);
    }
  })
}
