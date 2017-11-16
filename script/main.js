var lat;
var lon;

jQuery(document).ready(function(){
    
    console.log("running dude")
    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(function(position){
            lat = position.coords.latitude;
            lon = position.coords.longitude;
            Weather(lat,lon);
        });
    
    }
    else {
        $(".location").html("Can't locate your location");
    }
    
});

function Weather(lat,lon){
    
    var urls = "https://fcc-weather-api.glitch.me/api/current?lat="+ lat+"&lon="+lon;
    console.log(urls);
    jQuery.ajax({
        url : urls, success:function(data){
            $(".weathercasting").text(data.weather[0].main);
            $(".location").text(data.name);
            $(".temperature").text(data.main.temp);
        }
    });
}
//  https://fcc-weather-api.glitch.me/api/current?lat=35&lon=139  
//{"coord":{"lon":107.61,"lat":-6.9},"weather":[{"id":804,"main":"Clouds","description":"overcast clouds","icon":"https://cdn.glitch.com/6e8889e5-7a72-48f0-a061-863548450de5%2F04n.png?1499366020983"}],"base":"stations","main":{"temp":18.99,"pressure":915.45,"humidity":98,"temp_min":18.99,"temp_max":18.99,"sea_level":1021.42,"grnd_level":915.45},"wind":{"speed":0.81,"deg":115.502},"clouds":{"all":92},"dt":1510593636,"sys":{"message":0.176,"country":"ID","sunrise":1510525274,"sunset":1510569997},"id":1650357,"name":"Bandung","cod":200}