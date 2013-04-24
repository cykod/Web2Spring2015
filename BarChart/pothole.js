$(function() {
      var mapOptions = {
      center: new google.maps.LatLng(42.3583,-71.0603 ),
        zoom: 12,
        mapTypeId: google.maps.MapTypeId.ROADMAP // ROADMAP, SATELLITE, HYBRID, TERRAIN
      };
      var myMap = new google.maps.Map($("#map-canvas")[0],mapOptions);


      var i = 0;
      while(i < potholes.length) {
        var pothole = potholes[i];
        var marker = new google.maps.Marker({
          position: new google.maps.LatLng(pothole.LATITUDE, pothole.LONGITUDE),
          title: pothole.Location,
          map: myMap
        });
        i++;
      }

    });

