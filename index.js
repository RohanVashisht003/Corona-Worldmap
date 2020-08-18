function updatemap()
{
    //console.log("updating map with real time data");
fetch("/records.json")
.then(response => response.json()
    .then(rsp => {
    console.log(rsp.records)
    rsp.records.forEach(element => {
        latitude = element.latitude;
        longitude = element.longitude;
        cases = element.infected;
        if(cases>255)
        {
            color="rgb(0,255,0)"; 
        }

        else
        {
            color=`rgb(0,${cases},0)`;
        }
        // Mark on the map
         new mapboxgl.Marker({
            draggable: false,
            color: color
            })
            .setLngLat([longitude, latitude])
            .addTo(map);
    });
}))
}

//let interval=2000;
//setInterval(updatemap,interval);
updatemap();