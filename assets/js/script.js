// load data from localStorage at startup
// add event handler for search, alert for blank entries
// look for city in stored data, if entry exists then get lat/lon from list
// else fetch it from api
// if fetch was successul, then 
    // - update citi list array and display in page, 
    // - store in local storage 
    // - fetch weather data and display in page (show error if fetch was unsuccesful)
// else show error message
// read following code from bottom up

// variables
var cities = [];
var city, cityIndex;
// left pane elements
var cityEl = $("#search-city");
var cityListEl = $("#city-list");
// right pane elements
var cityCurrentEl = $("#city-current");
var city5dayEl = $("#city-5day");

// current and forecast data
var cityData = {
    name: String,
    date: String,
    icon: String,
    temp: String,
    humidity: String,
    wind_speed: String,
    uvi: String,
    days: []
};

// URLs for API Calls, first one is for latitude/longitude, second one for weather data
var latLonUrl = "http://api.openweathermap.org/data/2.5/weather?APPID=8c7e403a27389df68e6767e6fd7acaca&q=";

var apiUrl = "http://api.openweathermap.org/data/2.5/onecall?units=imperial&APPID=8c7e403a27389df68e6767e6fd7acaca&";

// get weatherData
function getWeatherData(lat, lon) {
    // fetch goes here
    var url = apiUrl + "lat=" + lat + "&lon=" + lon;
    fetch(url, {cache: 'no-store'}) 
        .then(function(response) {
            // verify response and act accordingly
            if (response.ok) {
                return response.json();
            } else {
                throw new Error("Error: " + response.statusText);
            }
        })
        .then(function(data) {
            // process data
            // current data
            // console.log(data)
            cityData.name = city;
            cityData.icon = data.current.weather[0].icon;
            cityData.date = moment.unix(data.current.dt).format("MM/DD/YYYY");
            cityData.temp = data.current.temp;
            cityData.humidity = data.current.humidity;
            cityData.wind_speed = data.current.wind_speed;  
            cityData.uvi = data.current.uvi;

            // forecast data
            var day = {
                fdate: String,
                ficon: String,
                ftemp: String,
                fhumidity: String
            };
            // determione forecast days
            var numDays = 6;
            if (numDays > data.daily.length) {
                numDays = data.daily.length;
            }
            // empty days array first
            cityData.days = [];

            for (var i = 1; i < numDays; i++) {
                var newDay = new Object();
                newDay.fdate = moment.unix(data.daily[i].dt).format("MM/DD/YYYY");
                newDay.ficon = data.daily[i].weather[0].icon;
                newDay.ftemp = data.daily[i].temp.max;
                newDay.fhumidity = data.daily[i].humidity;      
                cityData.days.push(newDay);
            }
            displayCityData();
        })
        .catch(function(error) {
            cityCurrentEl.html("<h5 class='p-1 ml-2 mt-2'>" + error.message + "<h5>");
        });
    // console.log(cityData);
}

// paint page with city data
function displayCityData() {
    // empty divs
    cityCurrentEl.empty();
    city5dayEl.empty();

    // weather icon url
    // var iconUrl = "http://openweathermap.org/img/wn/10d@2x.png"
    var iconUrl = "<img src=http://openweathermap.org/img/wn/"

    var divEl = $('<div>');
    // name
    var nameEl = $('<h5>');
    nameEl.addClass('p-1 ml-2 mt-2');
    var img = iconUrl + cityData.icon + "@2x.png>";
    nameEl.html(city + " (" + cityData.date + ") " + img);
    divEl.append(nameEl);

    // temperature
    var p1El = $('<p>');
    p1El.addClass("p-1 ml-2 mb-0 mt-0");
    p1El.html("Temperature: " + cityData.temp + "<span>&#8457;</span>");
    divEl.append(p1El);

    // humidity
    var p2El = $('<p>');
    p2El.addClass("p-1 ml-2 mb-0 mt-2");
    p2El.html("Humidity: " + cityData.humidity + "%");
    divEl.append(p2El);

    // wind speed
    var p3El = $('<p>');
    p3El.addClass("p-1 ml-2 mb-0 mt-2");
    p3El.html("Wind Speed: " + cityData.wind_speed + " MPH");
    divEl.append(p3El);

    // uvi
    var p4El = $('<p>');
    var bg_color, severity; 
    if (cityData.uvi >= 11) {
        bg_color = "p-2 bg-dark";
        severity = "Extreme";
    }
    else if (cityData.uvi > 7) {
        bg_color = "p-2 bg-danger";
        severity = "Very High";
    }
    else if (cityData.uvi > 5) {
        bg_color = "p-2 bg-secondary";
        severity = "High";
    }
    else if (cityData.uvi > 2) {
        bg_color = "p-2 bg-warning";
        severity = "Moderate";
    }
    else {
        bg_color = "p-2 bg-success";
        severity = "Low";
    }
    p4El.addClass("p-1 ml-2 mb-4 mt-2");
    p4El.html("UV Index: " + "<span class='" + bg_color + "'>" + cityData.uvi + "</span>");
    divEl.append(p4El);

    cityCurrentEl.append(divEl);

    // 5-day forecast
    // <div class="card" id="days">  
    var div5El = $('<div>');
    div5El.addClass("card");

    //     <h5 class="p-1 ml-2 mt-1" id="city-name">5-Day Forecast:</h5>
    var h5El = $('<h5>');
    h5El.addClass("p-1 ml-2 mt-4");
    h5El.text("5-Day Forecast:");
    div5El.append(h5El);

    // <div class="d-flex flex-lg-row flex-column"></div>
    var divFlex = $('<div>');
    divFlex.addClass("d-flex flex-lg-row flex-column");

    //         <div class="col-lg-2 col-12">
    //             <label class="btn btn-primary text-left">Day 1</label>
    //         </div>
    // day1
    var divClass = "col-lg-2 col-12";
    var labelClass = "btn btn-primary text-left";
    var divDay1 = $('<div>');
    divDay1.addClass(divClass);
    var label1 = $('<label>');
    label1.addClass(labelClass);
    img = iconUrl + cityData.days[0].ficon + "@2x.png>";
    var label1Text = "<span class=font-weight-bold>" + cityData.days[0].fdate + "</span> " + img + "<br>";
    label1Text += "Temp: " + cityData.days[0].ftemp + "<span>&#8457;</span>" + "<br>";
    label1Text += "Humidity: " + cityData.days[0].fhumidity + "%";
    label1.html(label1Text);
    divDay1.append(label1);
    divFlex.append(divDay1);

    // day 2
    var divDay2 = $('<div>');
    divDay2.addClass(divClass);
    var label2 = $('<label>');
    label2.addClass(labelClass);
    img = iconUrl + cityData.days[1].ficon + "@2x.png>";
    var label2Text = "<span class=font-weight-bold>" + cityData.days[1].fdate + "</span> "+ img + "<br>";
    label2Text += "Temp: " + cityData.days[1].ftemp + "<span>&#8457;</span>" + "<br>";
    label2Text += "Humidity: " + cityData.days[1].fhumidity + "%";
    label2.html(label2Text);
    divDay2.append(label2);
    divFlex.append(divDay2);

    // day 3
    var divDay3 = $('<div>');
    divDay3.addClass(divClass);
    var label3 = $('<label>');
    label3.addClass(labelClass);
    img = iconUrl + cityData.days[2].ficon + "@2x.png>";
    var label3Text = "<span class=font-weight-bold>" + cityData.days[2].fdate + "</span> "+ img + "<br>";
    label3Text += "Temp: " + cityData.days[2].ftemp + "<span>&#8457;</span>" + "<br>";
    label3Text += "Humidity: " + cityData.days[2].fhumidity + "%";
    label3.html(label3Text);
    divDay3.append(label3);
    divFlex.append(divDay3);

    // day 4
    var divDay4 = $('<div>');
    divDay4.addClass(divClass);
    var label4 = $('<label>');
    label4.addClass(labelClass);
    img = iconUrl + cityData.days[3].ficon + "@2x.png>";
    var label4Text = "<span class=font-weight-bold>" + cityData.days[3].fdate + "</span> "+ img + "<br>";
    label4Text += "Temp: " + cityData.days[3].ftemp + "<span>&#8457;</span>" + "<br>";
    label4Text += "Humidity: " + cityData.days[3].fhumidity + "%";
    label4.html(label4Text);
    divDay4.append(label4);
    divFlex.append(divDay4);

    // day 5
    var divDay5 = $('<div>');
    divDay5.addClass(divClass);
    var label5 = $('<label>');
    label5.addClass(labelClass);
    img = iconUrl + cityData.days[4].ficon + "@2x.png>";
    var label5Text = "<span class=font-weight-bold>" + cityData.days[4].fdate + "</span> "+ img + "<br>";
    label5Text += "Temp: " + cityData.days[4].ftemp + "<span>&#8457;</span>" + "<br>";
    label5Text += "Humidity: " + cityData.days[4].fhumidity + "%";
    label5.html(label5Text);
    divDay5.append(label5);
    divFlex.append(divDay5);

    div5El.append(divFlex);
    // finally add div5El to the top div
    city5dayEl.append(div5El);
}

// get index of city from the list
function getCitiIndex() {
    for (var i = 0; i < cities.length; i++) {
        if (city == cities[i].name) {
            return i;
        }
    } 
}

// event handler for city from list
function processCityFromList(event) {
    event.preventDefault();
    
    // console.log($(event.target).parent());
    city = event.target.id;

    // if city id has '-close' in it then remove otherwise search weather
    if (event.target.id.indexOf('close') > 0) {
        city = event.target.id.split('-')[0];
        cityIndex = getCitiIndex();
        cities.splice(cityIndex);
        saveCities();
        $(event.target).parent().remove();
        cityCurrentEl.empty();
        city5dayEl.empty();
    }
    else {    
        processCity();
    }
}

// update city list and also save to local storage
function updateCityList() {
    // template
    // <li class="list-group-item p-2 ml-2 mr-2">An item<span class="btn close btn-secondary">X</span></li>

    // list item
    var liEl = $('<li>');
    liEl.addClass('list-group-item p-2 ml-2 mr-2 mb-1 mt-0');
    liEl.attr('id', city);
    liEl.text(city);
    liEl.on('click', processCityFromList);

    // close button
    var spanEl = $('<span>');
    spanEl.addClass('btn close btn-secondary');
    spanEl.text('X');
    spanEl.attr('id', city+'-close');

    // add close button to list item
    liEl.append(spanEl);

    // add list item to ul
    cityListEl.append(liEl);

    //  clear search field
    cityEl.val('');
}

// get index of city for lat/lon, first from local storage, otherwise fetch
// if we fetch then save city data
function processCity() {
    // find city in list
    var found = false;
    var lat, lon;
    for (var i = 0; i < cities.length; i++) {
        if (city == cities[i].name) {
            cityIndex = i;
            found = true;
            break;
        }
    }

    // get weather data
    if (found) {
        lat = cities[cityIndex].lat;
        lon = cities[cityIndex].lon;
        getWeatherData(lat, lon);
    } 
    else {
        // we came here because we didn't find city in local storage
        // fetch data by making api call
        var url = latLonUrl + city;
        fetch(url, {cache: 'reload'}) 
            .then(function(response) {
                // verify response and act accordingly
                console.log(response);
                if (response.ok) {
                    return response.json();
                } else {
                    cityCurrentEl.empty();
                    city5dayEl.empty();
                    throw new Error("Error: " + city + " " + response.statusText);
                }
            })
            .then(function(data) {
                // process data
                // update city list
                lat = data.coord.lat;
                lon = data.coord.lon;

                var citiData = new Object();
                citiData.name = city;
                citiData.lat = lat;
                citiData.lon = lon;
                cities.push(citiData);
                cityIndex = cities.length;
                updateCityList();
                saveCities();
                getWeatherData(lat, lon);
            })
            .catch(function(error) {
                cityCurrentEl.html("<h5 class='p-1 ml-2 mt-2'>" + error.message + "<h5>");
            });
    }
}

// search city in local storage, or fetch it from api
function searchCity(event) {
    event.preventDefault();

    city = cityEl.val();
    // if nothing is entered, show error message 
    if (!city) {
        cityCurrentEl.html("<h5 class='p-1 ml-2 mt-2'>Please enter a valid city name, it can't be blank!<h5>");
    }
    else {
        processCity();
    }
}

// add event handler for search, alert for blank entries
$('#searchBtn').on('click', searchCity);

// function to save cities to local storage
function saveCities() {
    var str = JSON.stringify(cities);
    localStorage.setItem('cities', str);
}

// function load saved cities
function loadSavedCities() {
    var str = localStorage.getItem('cities');
    cities = JSON.parse(str);
    if (!cities) {
        cities = [];
    }
    else {
        for (var i = 0; i < cities.length; i++){
            city = cities[i].name;
            updateCityList();
        }        
    }
}

// load data from localStorage at startup
$(document).ready(loadSavedCities);
