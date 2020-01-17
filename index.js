function getDataFromUser(totalDistance, achievedDistance) {
    var percentage = (achievedDistance * 100) / totalDistance;
    var percentage = parseInt(percentage);
    jQuery("#PercentComplete").text(percentage + '% Complete');
    $(".progress-bar").progressbar({ 'value': achievedDistance, 'max': totalDistance});
    $(".progress-bar").css({ 'width': percentage + '%' });
    $(".center_pin").css({ 'left': percentage + '%' });
}

getDataFromUser(201, 150);