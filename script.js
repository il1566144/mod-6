<script type="text/javascript">
     var inputval = document.querySelector("#cityinput")
     var btn = document.querySelector("#add");
     var city = document.querySelector("#cityoutput");
     var description = document.querySelector("#description");
     var temp = document.querySelector("#temp");
     var wind = document.querySelector("#wind");


     //api ID
     apik = "66ef69c291cedac5da7ad144cdfd3524"

     function converstion(val){
        return (val - 273).tofixed(2)
     }

     btn.addEventListener('click', function(){
    fetch('api.openweathermap.org/data/2.5/forecast'+inputval.value+'&appid='+apik)
    .then(res => res.json())
     

    .then(data => {


    var nameval = data['name']
    var description = data['weather'][0]['description']
    var temperture = data['main']['temp']
    var windSpeed = data['wind']['speed']


    city.innerHTML=` Your Local Weather of <span>${nameval}</span>`
    temp.innerHTML= `temparture: <span>${covertion(tempature)}F</span>`
    description.innerHTML=`Sky Condition: <span>${description}</span>`
    wind.innerHTML=`Wind Speed: <span>${windSpeed}km/h</span>`



    })

    .catch(err => alert("You submited a wrong city name"))
     })

</script>