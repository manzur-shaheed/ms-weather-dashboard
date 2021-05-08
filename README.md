# ms-weather-dashboard
Dashboard for weather outlook for multiple cities.

Create a Weather Dashboard application that allows a user to to retrieve weather data for cities. The documentation includes a section called "How to start" that provides basic setup and usage instructions.

## Getting Started
Code: [Code](https://github.com/manzur-shaheed/ms-weather-dashboard)

Live: [github pages](https://manzur-shaheed.github.io/ms-weather-dashboard/)

You can clone code from [github link](https://github.com/manzur-shaheed/ms-weather-dashboard) and run it locally on your computer.

### Prerequisites

A computer with browser that supports javascript. To clone code from github, you need to have aceess to Internet. Also your computer should have Terminal (Unix) software installed. For Windows users, you can get it from https://www.cygwin.com/. For Mac users, it comes pre-installed with MacOS. 

### How to start
#### Installing and running

- Open a terminal.  
- Create a directory for this project.
- Change current directory to this project direcory.
- Issue the following command -

```
git clone git@github.com:manzur-shaheed/ms-weather-dashboard.git
```
You can then run this tool by opening index.html page from this directory in a browser.

#### Basic guide
Application features a weather dashboard. User is presented with a screen to input a city name with a ```Search 🔍 ``` button. It shows error message if user clicks on search button without entering any city name, or with an invalid city name. For any valid city, it fetches data from [OpenWeather](api.openweathermap.org), first it fetches Latitude/Longitude data for the city and then gets detail weatherdata in second api call with latitude/longitude data for that city. City name is stored in the left pane city list alongwith latitude/longtude data, so if user clicks on a city from the list it makes only the second api call for detail weather data. For each city in the city list there is a delete button at right, so when user clicks on it, that city gets removed from the list.

The following animation demonstrates the application functionality:

![initial_window](./assets/images/ms-weather-dashboard.gif)


## Built With

* [HTML](https://developer.mozilla.org/en-US/docs/Web/HTML)
* [Bootstrap](https://getbootstrap.com/)
* [jQuery](https://jquery.com/)
* [Moment](https://momentjs.com/)
* [Font Awesome](https://fontawesome.com/)
* [Javascript](https://developer.mozilla.org/en-US/docs/Web/JavaScript)

## Acknowledgments
* **Billie Thompson** - [PurpleBooth](https://github.com/PurpleBooth) for the README Template.
* [**OpenWeather**](api.openweathermap.org)
