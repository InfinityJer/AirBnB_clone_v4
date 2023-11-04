// 1-hbnb.js

$(document).ready(function () {
  const amenityDict = {};

  $('input[type="checkbox"]').change(function () {
    if ($(this).is(':checked')) {
      amenityDict[$(this).parent().data('id')] = $(this).parent().data('name');
    } else {
      delete amenityDict[$(this).parent().data('id')];
    }

    const amenityList = Object.values(amenityDict);
    $('.amenities h4').text(amenityList.join(', '));
  });
});
