// 4-hbnb.js

$(document).ready(function () {
  const url = 'http://0.0.0.0:5001/api/v1/places_search/';

  $('button').click(function () {
    const amenityList = [];
    $('input[type="checkbox"]').each(function () {
      if ($(this).is(':checked')) {
        amenityList.push($(this).parent().data('id'));
      }
    });

    $.ajax({
      type: 'POST',
      url: url,
      contentType: 'application/json',
      data: JSON.stringify({ amenities: amenityList }),
      success: function (data) {
        $('.places').empty();
        for (const place of data) {
          $('.places').append(
            '<article>' +
            '<div class="title_box">' +
            '<h2>' + place.name + '</h2>' +
            '<div class="price_by_night">$' + place.price_by_night + '</div>' +
            '</div>' +
            '<div class="information">' +
            '<div class="max_guest">' + place.max_guest + ' Guest' + (place.max_guest !== 1 ? 's' : '') + '</div>' +
            '<div class="number_rooms">' + place.number_rooms + ' Bedroom' + (place.number_rooms !== 1 ? 's' : '') + '</div>' +
            '<div class="number_bathrooms">' + place.number_bathrooms + ' Bathroom' + (place.number_bathrooms !== 1 ? 's' : '') + '</div>' +
            '</div>' +
            '<div class="description">' +
            place.description +
            '</div>' +
            '</article>'
          );
        }
      }
    });
  });
});
