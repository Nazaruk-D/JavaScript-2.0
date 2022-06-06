let arr = {
    "Minsk": {
        "id": 625144,
        "name": "Minsk",
        "state": "",
        "country": "BY",
        "coord": {
            "lon": 27.566668,
            "lat": 53.900002
        }
    },

    "Brest": {
        "id": 629634,
        "name": "Brest",
        "state": "",
        "country": "BY",
        "coord": {
            "lon": 23.700001,
            "lat": 52.099998
        }
     },

     "Vitebsk": {
        "id": 620127,
        "name": "Vitebsk",
        "state": "",
        "country": "BY",
        "coord": {
            "lon": 30.2033,
            "lat": 55.190479
        }
    }
}

let button = document.querySelector('.b-1'); 
let button2 = document.querySelector('.button-primary'); 
let inp = document.querySelector('.city-name'); 


let out = '';
function xxx () {
    for (let key in arr) {
        if (inp.value == "Minsk") {
            // out += arr[key]["id"];
                fetch ('http://api.openweathermap.org/data/2.5/weather?id=625144&appid=a58479c23c56b23c94e043ac27c9695c')
                    .then(function (resp) { return resp.json() })
                    .then(function (data) {
    console.log(data);
    document.querySelector('.package-name').textContent = data.name;
    document.querySelector('.price').innerHTML = Math.round(data.main.temp - 273) + '&deg;';
    document.querySelector('.disclaimer').textContent = data.weather[0]['description'];
    document.querySelector('.features li').innerHTML = `<img src="https://openweathermap.org/img/wn/${data.weather[0]['icon']}@2x.png">`    
    document.querySelector('.country').textContent = data.sys.country;})
    .catch(function () {
    //catch any errors
});
            break;
            // return arr[key]["id"];
        }
        if (inp.value == "Minsk") {
            // out += arr[key]["id"];
                fetch ('http://api.openweathermap.org/data/2.5/weather?id=625144&appid=a58479c23c56b23c94e043ac27c9695c')
                    .then(function (resp) { return resp.json() })
                    .then(function (data) {
    console.log(data);
    document.querySelector('.package-name').textContent = data.name;
    document.querySelector('.price').innerHTML = Math.round(data.main.temp - 273) + '&deg;';
    document.querySelector('.disclaimer').textContent = data.weather[0]['description'];
    document.querySelector('.features li').innerHTML = `<img src="https://openweathermap.org/img/wn/${data.weather[0]['icon']}@2x.png">`    
    document.querySelector('.country').textContent = data.sys.country;})
    .catch(function () {
    //catch any errors
});
            break;
            // return arr[key]["id"];
        }
        if (inp.value == "Brest") {
            // out += arr[key]["id"];
                fetch ('http://api.openweathermap.org/data/2.5/weather?id=629634&appid=a58479c23c56b23c94e043ac27c9695c')
                    .then(function (resp) { return resp.json() })
                    .then(function (data) {
    console.log(data);
    document.querySelector('.package-name').textContent = data.name;
    document.querySelector('.price').innerHTML = Math.round(data.main.temp - 273) + '&deg;';
    document.querySelector('.disclaimer').textContent = data.weather[0]['description'];
    document.querySelector('.features li').innerHTML = `<img src="https://openweathermap.org/img/wn/${data.weather[0]['icon']}@2x.png">`    
    document.querySelector('.country').textContent = data.sys.country;})
    .catch(function () {
    //catch any errors
});
            break;
            // return arr[key]["id"];
        }
        if (inp.value == "Vitebsk") {
            // out += arr[key]["id"];
                fetch ('http://api.openweathermap.org/data/2.5/weather?id=620127&appid=a58479c23c56b23c94e043ac27c9695c')
                    .then(function (resp) { return resp.json() })
                    .then(function (data) {
    console.log(data);
    document.querySelector('.package-name').textContent = data.name;
    document.querySelector('.price').innerHTML = Math.round(data.main.temp - 273) + '&deg;';
    document.querySelector('.disclaimer').textContent = data.weather[0]['description'];
    document.querySelector('.features li').innerHTML = `<img src="https://openweathermap.org/img/wn/${data.weather[0]['icon']}@2x.png">`    
    document.querySelector('.country').textContent = data.sys.country;})
    .catch(function () {
    //catch any errors
});
            break;
            // return arr[key]["id"];
        }
        else {
            out = false;
        }
    }
    document.querySelector('.out').innerHTML = out;
   
}
button.onclick = xxx;

























