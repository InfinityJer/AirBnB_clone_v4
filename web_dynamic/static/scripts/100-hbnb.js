// 100-hbnb.js

$(document).ready(function () {
  const url = 'http://0.0.0.0:5001/api/v1/places_search/';

  $('button').click(function () {
    const amenityList = [];
    const stateList = [];
    const cityList = [];

    $('input[type="checkbox"]').each(function () {
      if ($(this).is(':checked')) {
        if ($(this).parent().data('id')) {
          if ($(this).parent().data('name')) {
            cityList.push({ id: $(this).parent().data('id'), name: $(this).parent().data('name') });
          } else {
            stateList.push({ id: $(this).parent().data('id'), name: $(this).parent().data('name') });
          }
        } else {
          amenityList.push($(this).parent().data('id'));
        }
      }
    });

    const requestData = {
      amenities: amenityList,
      states: stateList,
      cities: cityList
    };

    $.ajax({
      type: 'POST',
      url: url,
      contentType: 'application/json',
      data: JSON.stringify(requestData),
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
