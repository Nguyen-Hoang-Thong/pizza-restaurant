function initMap(){
    var uluru={
        lat: 10.714926,
        lng: 106.630406
    }
    var map = new google.maps.Map(document.getElementById("googleMap"), {zoom: 15 , center: uluru});
    var marker = new google.maps.Marker({position: uluru, map: map});

}