var aqi=340;
if(aqi>300){
    console.log('air quality is bad');
}
else if(aqi>200){
    console.log('air quality is normal');
}
else if(aqi>100){
    console.log('air quality is good');
}
else{
    console.log('air quality is excellent');
}

//ternary operator

console.log(
    (aqi>300)
    ?'air quality is bad'
    :aqi>200
    ?'air quality is normal'
    :aqi>100
    ?'air quality is good'
    :'air quality is execellent');