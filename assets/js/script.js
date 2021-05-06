// 8c7e403a27389df68e6767e6fd7acaca
var latLonDataJson = {"coord":{"lon":-0.1257,"lat":51.5085},"weather":[{"id":804,"main":"Clouds","description":"overcast clouds","icon":"04d"}],"base":"stations","main":{"temp":281.48,"feels_like":280.34,"temp_min":280.37,"temp_max":282.59,"pressure":1010,"humidity":71},"visibility":10000,"wind":{"speed":2.06,"deg":240},"clouds":{"all":100},"dt":1620236249,"sys":{"type":1,"id":1414,"country":"GB","sunrise":1620188686,"sunset":1620242972},"timezone":3600,"id":2643743,"name":"London","cod":200};
console.log(latLonDataJson);

// http://api.openweathermap.org/data/2.5/onecall?lat=51.5085&lon=-0.1257&units=imperial&APPID=8c7e403a27389df68e6767e6fd7acaca

var weatherDataJson = {"lat":51.5085,"lon":-0.1257,"timezone":"Europe/London","timezone_offset":3600,"current":{"dt":1620238807,"sunrise":1620188686,"sunset":1620242972,"temp":45.9,"feels_like":42.93,"pressure":1010,"humidity":76,"dew_point":38.77,"uvi":0.17,"clouds":100,"visibility":10000,"wind_speed":5.75,"wind_deg":250,"weather":[{"id":500,"main":"Rain","description":"light rain","icon":"10d"}],"rain":{"1h":0.13}},"minutely":[{"dt":1620238860,"precipitation":0.1474},{"dt":1620238920,"precipitation":0.1618},{"dt":1620238980,"precipitation":0.1762},{"dt":1620239040,"precipitation":0.1906},{"dt":1620239100,"precipitation":0.205},{"dt":1620239160,"precipitation":0.2186},{"dt":1620239220,"precipitation":0.2322},{"dt":1620239280,"precipitation":0.2458},{"dt":1620239340,"precipitation":0.2594},{"dt":1620239400,"precipitation":0.273},{"dt":1620239460,"precipitation":0.4182},{"dt":1620239520,"precipitation":0.5634},{"dt":1620239580,"precipitation":0.7086},{"dt":1620239640,"precipitation":0.8538},{"dt":1620239700,"precipitation":0.999},{"dt":1620239760,"precipitation":1.1068},{"dt":1620239820,"precipitation":1.2146},{"dt":1620239880,"precipitation":1.3224},{"dt":1620239940,"precipitation":1.4302},{"dt":1620240000,"precipitation":1.538},{"dt":1620240060,"precipitation":1.6404},{"dt":1620240120,"precipitation":1.7428},{"dt":1620240180,"precipitation":1.8452},{"dt":1620240240,"precipitation":1.9476},{"dt":1620240300,"precipitation":2.05},{"dt":1620240360,"precipitation":1.9476},{"dt":1620240420,"precipitation":1.8452},{"dt":1620240480,"precipitation":1.7428},{"dt":1620240540,"precipitation":1.6404},{"dt":1620240600,"precipitation":1.538},{"dt":1620240660,"precipitation":1.4968},{"dt":1620240720,"precipitation":1.4556},{"dt":1620240780,"precipitation":1.4144},{"dt":1620240840,"precipitation":1.3732},{"dt":1620240900,"precipitation":1.332},{"dt":1620240960,"precipitation":1.3732},{"dt":1620241020,"precipitation":1.4144},{"dt":1620241080,"precipitation":1.4556},{"dt":1620241140,"precipitation":1.4968},{"dt":1620241200,"precipitation":1.538},{"dt":1620241260,"precipitation":1.6404},{"dt":1620241320,"precipitation":1.7428},{"dt":1620241380,"precipitation":1.8452},{"dt":1620241440,"precipitation":1.9476},{"dt":1620241500,"precipitation":2.05},{"dt":1620241560,"precipitation":2.05},{"dt":1620241620,"precipitation":2.05},{"dt":1620241680,"precipitation":2.05},{"dt":1620241740,"precipitation":2.05},{"dt":1620241800,"precipitation":2.05},{"dt":1620241860,"precipitation":1.9476},{"dt":1620241920,"precipitation":1.8452},{"dt":1620241980,"precipitation":1.7428},{"dt":1620242040,"precipitation":1.6404},{"dt":1620242100,"precipitation":1.538},{"dt":1620242160,"precipitation":1.4968},{"dt":1620242220,"precipitation":1.4556},{"dt":1620242280,"precipitation":1.4144},{"dt":1620242340,"precipitation":1.3732},{"dt":1620242400,"precipitation":1.332},{"dt":1620242460,"precipitation":1.332}],"hourly":[{"dt":1620237600,"temp":45.9,"feels_like":44.2,"pressure":1010,"humidity":76,"dew_point":38.77,"uvi":0.17,"clouds":100,"visibility":10000,"wind_speed":3.91,"wind_deg":318,"wind_gust":9.37,"weather":[{"id":500,"main":"Rain","description":"light rain","icon":"10d"}],"pop":1,"rain":{"1h":0.64}},{"dt":1620241200,"temp":45.57,"feels_like":42.94,"pressure":1010,"humidity":78,"dew_point":39.13,"uvi":0,"clouds":100,"visibility":10000,"wind_speed":5.1,"wind_deg":288,"wind_gust":10.92,"weather":[{"id":501,"main":"Rain","description":"moderate rain","icon":"10d"}],"pop":0.76,"rain":{"1h":1.54}},{"dt":1620244800,"temp":44.78,"feels_like":41.72,"pressure":1010,"humidity":80,"dew_point":39,"uvi":0,"clouds":100,"visibility":10000,"wind_speed":5.55,"wind_deg":268,"wind_gust":14.36,"weather":[{"id":804,"main":"Clouds","description":"overcast clouds","icon":"04n"}],"pop":0.72},{"dt":1620248400,"temp":43.34,"feels_like":39.25,"pressure":1009,"humidity":84,"dew_point":38.84,"uvi":0,"clouds":99,"visibility":10000,"wind_speed":6.82,"wind_deg":268,"wind_gust":17.81,"weather":[{"id":804,"main":"Clouds","description":"overcast clouds","icon":"04n"}],"pop":0.7},{"dt":1620252000,"temp":41.47,"feels_like":37.63,"pressure":1009,"humidity":88,"dew_point":38.19,"uvi":0,"clouds":90,"visibility":10000,"wind_speed":5.79,"wind_deg":268,"wind_gust":16.53,"weather":[{"id":804,"main":"Clouds","description":"overcast clouds","icon":"04n"}],"pop":0.56},{"dt":1620255600,"temp":39.7,"feels_like":35.85,"pressure":1009,"humidity":90,"dew_point":37.13,"uvi":0,"clouds":89,"visibility":10000,"wind_speed":5.37,"wind_deg":263,"wind_gust":15.35,"weather":[{"id":804,"main":"Clouds","description":"overcast clouds","icon":"04n"}],"pop":0.48},{"dt":1620259200,"temp":38.77,"feels_like":34.93,"pressure":1009,"humidity":90,"dew_point":36.32,"uvi":0,"clouds":91,"visibility":10000,"wind_speed":5.12,"wind_deg":256,"wind_gust":14.25,"weather":[{"id":804,"main":"Clouds","description":"overcast clouds","icon":"04n"}],"pop":0.42},{"dt":1620262800,"temp":38.01,"feels_like":34.52,"pressure":1009,"humidity":91,"dew_point":35.69,"uvi":0,"clouds":100,"visibility":10000,"wind_speed":4.54,"wind_deg":252,"wind_gust":12.5,"weather":[{"id":804,"main":"Clouds","description":"overcast clouds","icon":"04n"}],"pop":0},{"dt":1620266400,"temp":37.89,"feels_like":34.79,"pressure":1008,"humidity":91,"dew_point":35.33,"uvi":0,"clouds":100,"visibility":10000,"wind_speed":4.09,"wind_deg":244,"wind_gust":10.16,"weather":[{"id":804,"main":"Clouds","description":"overcast clouds","icon":"04n"}],"pop":0},{"dt":1620270000,"temp":37.4,"feels_like":34.2,"pressure":1008,"humidity":91,"dew_point":35.06,"uvi":0,"clouds":100,"visibility":10000,"wind_speed":4.12,"wind_deg":229,"wind_gust":9.04,"weather":[{"id":804,"main":"Clouds","description":"overcast clouds","icon":"04n"}],"pop":0},{"dt":1620273600,"temp":37.18,"feels_like":34.18,"pressure":1008,"humidity":91,"dew_point":35.01,"uvi":0,"clouds":100,"visibility":10000,"wind_speed":3.89,"wind_deg":225,"wind_gust":9.75,"weather":[{"id":804,"main":"Clouds","description":"overcast clouds","icon":"04n"}],"pop":0},{"dt":1620277200,"temp":37.63,"feels_like":35.22,"pressure":1007,"humidity":91,"dew_point":35.2,"uvi":0,"clouds":100,"visibility":10000,"wind_speed":3.4,"wind_deg":213,"wind_gust":8.08,"weather":[{"id":804,"main":"Clouds","description":"overcast clouds","icon":"04d"}],"pop":0},{"dt":1620280800,"temp":39.34,"feels_like":37,"pressure":1007,"humidity":86,"dew_point":35.71,"uvi":0.15,"clouds":100,"visibility":10000,"wind_speed":3.56,"wind_deg":208,"wind_gust":7.14,"weather":[{"id":804,"main":"Clouds","description":"overcast clouds","icon":"04d"}],"pop":0},{"dt":1620284400,"temp":41.4,"feels_like":38.44,"pressure":1006,"humidity":81,"dew_point":36.09,"uvi":0.22,"clouds":100,"visibility":10000,"wind_speed":4.56,"wind_deg":210,"wind_gust":8.68,"weather":[{"id":804,"main":"Clouds","description":"overcast clouds","icon":"04d"}],"pop":0},{"dt":1620288000,"temp":43.77,"feels_like":40.98,"pressure":1006,"humidity":73,"dew_point":35.67,"uvi":0.46,"clouds":100,"visibility":10000,"wind_speed":4.88,"wind_deg":206,"wind_gust":9.33,"weather":[{"id":804,"main":"Clouds","description":"overcast clouds","icon":"04d"}],"pop":0.02},{"dt":1620291600,"temp":45.99,"feels_like":43.56,"pressure":1006,"humidity":63,"dew_point":34.27,"uvi":0.76,"clouds":100,"visibility":10000,"wind_speed":4.92,"wind_deg":224,"wind_gust":8.63,"weather":[{"id":804,"main":"Clouds","description":"overcast clouds","icon":"04d"}],"pop":0.02},{"dt":1620295200,"temp":47.3,"feels_like":44.8,"pressure":1005,"humidity":60,"dew_point":34.23,"uvi":2.43,"clouds":100,"visibility":10000,"wind_speed":5.41,"wind_deg":254,"wind_gust":8.41,"weather":[{"id":804,"main":"Clouds","description":"overcast clouds","icon":"04d"}],"pop":0.12},{"dt":1620298800,"temp":47.95,"feels_like":46.02,"pressure":1005,"humidity":58,"dew_point":34,"uvi":2.95,"clouds":100,"visibility":10000,"wind_speed":4.68,"wind_deg":257,"wind_gust":6.44,"weather":[{"id":500,"main":"Rain","description":"light rain","icon":"10d"}],"pop":0.48,"rain":{"1h":0.15}},{"dt":1620302400,"temp":49.17,"feels_like":47.37,"pressure":1005,"humidity":55,"dew_point":33.93,"uvi":3.15,"clouds":100,"visibility":10000,"wind_speed":4.79,"wind_deg":250,"wind_gust":6.6,"weather":[{"id":804,"main":"Clouds","description":"overcast clouds","icon":"04d"}],"pop":0.52},{"dt":1620306000,"temp":48.79,"feels_like":46.53,"pressure":1005,"humidity":59,"dew_point":35.15,"uvi":4.34,"clouds":100,"visibility":10000,"wind_speed":5.46,"wind_deg":275,"wind_gust":7.09,"weather":[{"id":804,"main":"Clouds","description":"overcast clouds","icon":"04d"}],"pop":0.75},{"dt":1620309600,"temp":47.43,"feels_like":43.93,"pressure":1005,"humidity":67,"dew_point":37.35,"uvi":3.61,"clouds":100,"visibility":10000,"wind_speed":7.34,"wind_deg":308,"wind_gust":8.59,"weather":[{"id":500,"main":"Rain","description":"light rain","icon":"10d"}],"pop":0.77,"rain":{"1h":0.24}},{"dt":1620313200,"temp":47.98,"feels_like":44.91,"pressure":1005,"humidity":63,"dew_point":36.14,"uvi":2.6,"clouds":100,"visibility":10000,"wind_speed":6.69,"wind_deg":309,"wind_gust":10,"weather":[{"id":500,"main":"Rain","description":"light rain","icon":"10d"}],"pop":0.73,"rain":{"1h":0.18}},{"dt":1620316800,"temp":49.86,"feels_like":46.72,"pressure":1005,"humidity":53,"dew_point":33.28,"uvi":1.54,"clouds":100,"visibility":10000,"wind_speed":7.67,"wind_deg":316,"wind_gust":11.14,"weather":[{"id":804,"main":"Clouds","description":"overcast clouds","icon":"04d"}],"pop":0.66},{"dt":1620320400,"temp":49.87,"feels_like":46.13,"pressure":1005,"humidity":48,"dew_point":30.94,"uvi":0.78,"clouds":100,"visibility":10000,"wind_speed":9.26,"wind_deg":323,"wind_gust":12.59,"weather":[{"id":804,"main":"Clouds","description":"overcast clouds","icon":"04d"}],"pop":0.66},{"dt":1620324000,"temp":48.76,"feels_like":45.01,"pressure":1006,"humidity":52,"dew_point":32.05,"uvi":0.3,"clouds":95,"visibility":10000,"wind_speed":8.61,"wind_deg":316,"wind_gust":13.15,"weather":[{"id":804,"main":"Clouds","description":"overcast clouds","icon":"04d"}],"pop":0.6},{"dt":1620327600,"temp":46.4,"feels_like":43.02,"pressure":1006,"humidity":58,"dew_point":32.76,"uvi":0,"clouds":12,"visibility":10000,"wind_speed":6.69,"wind_deg":304,"wind_gust":13.91,"weather":[{"id":801,"main":"Clouds","description":"few clouds","icon":"02d"}],"pop":0.08},{"dt":1620331200,"temp":44.11,"feels_like":41.02,"pressure":1007,"humidity":63,"dew_point":32.34,"uvi":0,"clouds":6,"visibility":10000,"wind_speed":5.44,"wind_deg":293,"wind_gust":15.3,"weather":[{"id":800,"main":"Clear","description":"clear sky","icon":"01n"}],"pop":0.02},{"dt":1620334800,"temp":43.21,"feels_like":38.7,"pressure":1008,"humidity":59,"dew_point":30,"uvi":0,"clouds":4,"visibility":10000,"wind_speed":7.61,"wind_deg":311,"wind_gust":20.85,"weather":[{"id":800,"main":"Clear","description":"clear sky","icon":"01n"}],"pop":0},{"dt":1620338400,"temp":41.74,"feels_like":37.51,"pressure":1009,"humidity":61,"dew_point":29.19,"uvi":0,"clouds":3,"visibility":10000,"wind_speed":6.53,"wind_deg":298,"wind_gust":19.93,"weather":[{"id":800,"main":"Clear","description":"clear sky","icon":"01n"}],"pop":0},{"dt":1620342000,"temp":40.41,"feels_like":35.92,"pressure":1009,"humidity":64,"dew_point":29.3,"uvi":0,"clouds":2,"visibility":10000,"wind_speed":6.49,"wind_deg":290,"wind_gust":19.93,"weather":[{"id":800,"main":"Clear","description":"clear sky","icon":"01n"}],"pop":0},{"dt":1620345600,"temp":39.31,"feels_like":34.38,"pressure":1009,"humidity":66,"dew_point":29.14,"uvi":0,"clouds":2,"visibility":10000,"wind_speed":6.87,"wind_deg":284,"wind_gust":21.05,"weather":[{"id":800,"main":"Clear","description":"clear sky","icon":"01n"}],"pop":0},{"dt":1620349200,"temp":38.48,"feels_like":33.03,"pressure":1010,"humidity":69,"dew_point":29.34,"uvi":0,"clouds":0,"visibility":10000,"wind_speed":7.49,"wind_deg":281,"wind_gust":24.61,"weather":[{"id":800,"main":"Clear","description":"clear sky","icon":"01n"}],"pop":0},{"dt":1620352800,"temp":38.48,"feels_like":32.54,"pressure":1010,"humidity":71,"dew_point":29.98,"uvi":0,"clouds":3,"visibility":10000,"wind_speed":8.39,"wind_deg":283,"wind_gust":26.55,"weather":[{"id":800,"main":"Clear","description":"clear sky","icon":"01n"}],"pop":0},{"dt":1620356400,"temp":37.81,"feels_like":31.71,"pressure":1011,"humidity":72,"dew_point":29.77,"uvi":0,"clouds":4,"visibility":10000,"wind_speed":8.41,"wind_deg":276,"wind_gust":26.89,"weather":[{"id":800,"main":"Clear","description":"clear sky","icon":"01n"}],"pop":0},{"dt":1620360000,"temp":37.24,"feels_like":31.12,"pressure":1011,"humidity":74,"dew_point":29.98,"uvi":0,"clouds":5,"visibility":10000,"wind_speed":8.21,"wind_deg":274,"wind_gust":26.02,"weather":[{"id":800,"main":"Clear","description":"clear sky","icon":"01n"}],"pop":0},{"dt":1620363600,"temp":36.97,"feels_like":30.76,"pressure":1012,"humidity":76,"dew_point":30.27,"uvi":0,"clouds":5,"visibility":10000,"wind_speed":8.25,"wind_deg":270,"wind_gust":24.72,"weather":[{"id":800,"main":"Clear","description":"clear sky","icon":"01d"}],"pop":0},{"dt":1620367200,"temp":38.93,"feels_like":32.97,"pressure":1013,"humidity":73,"dew_point":31.08,"uvi":0.3,"clouds":5,"visibility":10000,"wind_speed":8.59,"wind_deg":272,"wind_gust":22.48,"weather":[{"id":800,"main":"Clear","description":"clear sky","icon":"01d"}],"pop":0},{"dt":1620370800,"temp":42.46,"feels_like":37.09,"pressure":1013,"humidity":67,"dew_point":32.36,"uvi":0.82,"clouds":6,"visibility":10000,"wind_speed":9.06,"wind_deg":286,"wind_gust":18.59,"weather":[{"id":800,"main":"Clear","description":"clear sky","icon":"01d"}],"pop":0},{"dt":1620374400,"temp":46.22,"feels_like":41.79,"pressure":1014,"humidity":60,"dew_point":33.37,"uvi":1.65,"clouds":6,"visibility":10000,"wind_speed":8.86,"wind_deg":295,"wind_gust":14.23,"weather":[{"id":800,"main":"Clear","description":"clear sky","icon":"01d"}],"pop":0},{"dt":1620378000,"temp":49.24,"feels_like":45.72,"pressure":1014,"humidity":54,"dew_point":33.49,"uvi":2.7,"clouds":6,"visibility":10000,"wind_speed":8.3,"wind_deg":296,"wind_gust":12.03,"weather":[{"id":800,"main":"Clear","description":"clear sky","icon":"01d"}],"pop":0},{"dt":1620381600,"temp":51.75,"feels_like":48.83,"pressure":1015,"humidity":47,"dew_point":32.34,"uvi":2.53,"clouds":10,"visibility":10000,"wind_speed":7.87,"wind_deg":289,"wind_gust":11.65,"weather":[{"id":800,"main":"Clear","description":"clear sky","icon":"01d"}],"pop":0},{"dt":1620385200,"temp":53.82,"feels_like":50.83,"pressure":1015,"humidity":41,"dew_point":30.92,"uvi":3.08,"clouds":11,"visibility":10000,"wind_speed":7.7,"wind_deg":285,"wind_gust":10.92,"weather":[{"id":801,"main":"Clouds","description":"few clouds","icon":"02d"}],"pop":0},{"dt":1620388800,"temp":55.42,"feels_like":52.39,"pressure":1015,"humidity":37,"dew_point":30.24,"uvi":3.29,"clouds":11,"visibility":10000,"wind_speed":7.85,"wind_deg":282,"wind_gust":10.38,"weather":[{"id":801,"main":"Clouds","description":"few clouds","icon":"02d"}],"pop":0},{"dt":1620392400,"temp":56.68,"feels_like":53.69,"pressure":1015,"humidity":35,"dew_point":29.73,"uvi":2.71,"clouds":66,"visibility":10000,"wind_speed":7.52,"wind_deg":283,"wind_gust":9.33,"weather":[{"id":803,"main":"Clouds","description":"broken clouds","icon":"04d"}],"pop":0},{"dt":1620396000,"temp":57.31,"feels_like":54.39,"pressure":1015,"humidity":35,"dew_point":29.79,"uvi":2.25,"clouds":80,"visibility":10000,"wind_speed":7.54,"wind_deg":293,"wind_gust":9.35,"weather":[{"id":803,"main":"Clouds","description":"broken clouds","icon":"04d"}],"pop":0},{"dt":1620399600,"temp":57.2,"feels_like":54.32,"pressure":1015,"humidity":36,"dew_point":30.65,"uvi":1.63,"clouds":85,"visibility":10000,"wind_speed":7.61,"wind_deg":303,"wind_gust":9.75,"weather":[{"id":804,"main":"Clouds","description":"overcast clouds","icon":"04d"}],"pop":0},{"dt":1620403200,"temp":55.87,"feels_like":53.04,"pressure":1015,"humidity":40,"dew_point":32.41,"uvi":1.63,"clouds":88,"visibility":10000,"wind_speed":7.02,"wind_deg":307,"wind_gust":8.9,"weather":[{"id":804,"main":"Clouds","description":"overcast clouds","icon":"04d"}],"pop":0},{"dt":1620406800,"temp":55,"feels_like":52.27,"pressure":1016,"humidity":44,"dew_point":33.6,"uvi":0.82,"clouds":88,"visibility":10000,"wind_speed":5.68,"wind_deg":302,"wind_gust":7.49,"weather":[{"id":804,"main":"Clouds","description":"overcast clouds","icon":"04d"}],"pop":0}],"daily":[{"dt":1620212400,"sunrise":1620188686,"sunset":1620242972,"moonrise":1620183120,"moonset":1620217620,"moon_phase":0.8,"temp":{"day":51.84,"min":36.99,"max":53.24,"night":41.47,"eve":45.91,"morn":36.99},"feels_like":{"day":48.56,"night":31.33,"eve":41.68,"morn":31.33},"pressure":1009,"humidity":39,"dew_point":28.18,"wind_speed":10.11,"wind_deg":279,"wind_gust":24.63,"weather":[{"id":501,"main":"Rain","description":"moderate rain","icon":"10d"}],"clouds":14,"pop":1,"rain":4.83,"uvi":4.49},{"dt":1620298800,"sunrise":1620274981,"sunset":1620329470,"moonrise":1620270600,"moonset":1620308400,"moon_phase":0.84,"temp":{"day":47.95,"min":37.18,"max":49.87,"night":41.74,"eve":49.87,"morn":37.63},"feels_like":{"day":46.02,"night":35.22,"eve":46.13,"morn":35.22},"pressure":1005,"humidity":58,"dew_point":34,"wind_speed":9.26,"wind_deg":323,"wind_gust":20.85,"weather":[{"id":500,"main":"Rain","description":"light rain","icon":"10d"}],"clouds":100,"pop":0.77,"rain":0.57,"uvi":4.34},{"dt":1620385200,"sunrise":1620361277,"sunset":1620415967,"moonrise":1620357900,"moonset":1620399060,"moon_phase":0.87,"temp":{"day":53.82,"min":36.97,"max":57.31,"night":45.05,"eve":55,"morn":36.97},"feels_like":{"day":50.83,"night":30.76,"eve":52.27,"morn":30.76},"pressure":1015,"humidity":41,"dew_point":30.92,"wind_speed":9.06,"wind_deg":286,"wind_gust":26.89,"weather":[{"id":500,"main":"Rain","description":"light rain","icon":"10d"}],"clouds":11,"pop":0.4,"rain":0.12,"uvi":3.29},{"dt":1620471600,"sunrise":1620447575,"sunset":1620502463,"moonrise":1620445140,"moonset":1620489600,"moon_phase":0.9,"temp":{"day":53.38,"min":42.33,"max":56.03,"night":55.62,"eve":56.03,"morn":44.87},"feels_like":{"day":52.93,"night":39.49,"eve":55.71,"morn":39.49},"pressure":1001,"humidity":96,"dew_point":52.43,"wind_speed":14.79,"wind_deg":210,"wind_gust":37.76,"weather":[{"id":501,"main":"Rain","description":"moderate rain","icon":"10d"}],"clouds":100,"pop":1,"rain":9.41,"uvi":0.66},{"dt":1620558000,"sunrise":1620533875,"sunset":1620588959,"moonrise":1620532320,"moonset":1620580080,"moon_phase":0.93,"temp":{"day":67.32,"min":52.03,"max":67.32,"night":53.94,"eve":58.48,"morn":53.78},"feels_like":{"day":66.24,"night":52.72,"eve":58.12,"morn":52.72},"pressure":993,"humidity":53,"dew_point":49.68,"wind_speed":13.96,"wind_deg":196,"wind_gust":33.84,"weather":[{"id":500,"main":"Rain","description":"light rain","icon":"10d"}],"clouds":100,"pop":1,"rain":2.15,"uvi":6.07},{"dt":1620644400,"sunrise":1620620177,"sunset":1620675455,"moonrise":1620619560,"moonset":1620670620,"moon_phase":0.96,"temp":{"day":59.85,"min":49.89,"max":60.15,"night":49.89,"eve":55.74,"morn":50.65},"feels_like":{"day":58.41,"night":49.46,"eve":54.07,"morn":49.46},"pressure":998,"humidity":61,"dew_point":46.54,"wind_speed":18.72,"wind_deg":207,"wind_gust":28.63,"weather":[{"id":500,"main":"Rain","description":"light rain","icon":"10d"}],"clouds":83,"pop":0.92,"rain":3.14,"uvi":7},{"dt":1620730800,"sunrise":1620706480,"sunset":1620761950,"moonrise":1620706920,"moonset":1620761160,"moon_phase":0,"temp":{"day":57.56,"min":46.89,"max":58.1,"night":51.42,"eve":53.35,"morn":48.9},"feels_like":{"day":55.74,"night":44.64,"eve":51.44,"morn":44.64},"pressure":1006,"humidity":58,"dew_point":42.78,"wind_speed":17.38,"wind_deg":203,"wind_gust":30.94,"weather":[{"id":500,"main":"Rain","description":"light rain","icon":"10d"}],"clouds":50,"pop":0.52,"rain":0.96,"uvi":7},{"dt":1620817200,"sunrise":1620792785,"sunset":1620848444,"moonrise":1620794460,"moonset":1620851700,"moon_phase":0.02,"temp":{"day":57.76,"min":48,"max":58.42,"night":48.52,"eve":55.44,"morn":48},"feels_like":{"day":55.4,"night":43.63,"eve":53.02,"morn":43.63},"pressure":1011,"humidity":46,"dew_point":37.06,"wind_speed":13.2,"wind_deg":216,"wind_gust":23.71,"weather":[{"id":500,"main":"Rain","description":"light rain","icon":"10d"}],"clouds":33,"pop":0.57,"rain":0.49,"uvi":7}]};
console.log(weatherDataJson);














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
var cityEl = $("#search-city");
var cityNameEl = $("#city-name");
var cityListEl = $("#city-list");
var cityDataEl = $("#city-data");
var cityCurrentEl = $("#city-current");

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

// get weatherData
function getWeatherData() {

    // fetch goes here

    // current data
    cityData.name = city;
    cityData.icon = weatherDataJson.current.weather[0].icon;
    cityData.date = moment.unix(weatherDataJson.current.dt).format("MM/DD/YYYY");
    cityData.temp = weatherDataJson.current.temp;
    cityData.humidity = weatherDataJson.current.humidity;
    cityData.wind_speed = weatherDataJson.current.wind_speed;  
    cityData.uvi = weatherDataJson.current.uvi;

    // forecast data
    var day = {
        fdate: String,
        ficon: String,
        ftemp: String,
        fhumidity: String
    };
    // determione forecast days
    var numDays = 6;
    if (numDays > weatherDataJson.daily.length) {
        numDays = weatherDataJson.daily.length;
    }

    for (var i = 1; i < numDays; i++) {
        var newDay = new Object();
        newDay.fdate = moment.unix(weatherDataJson.daily[i].dt).format("MM/DD/YYYY");
        newDay.ficon = weatherDataJson.daily[i].weather[0].icon;
        newDay.ftemp = weatherDataJson.daily[i].temp.max;
        newDay.fhumidity = weatherDataJson.daily[i].humidity;  
        console.log(newDay);     
        cityData.days.push(newDay);
    }
}

// paint page with city data
function displayCityData() {
    console.log(cityData);
    // <div>
    //     <p class="p-1 ml-2 mb-0" id="temp">Temperature:</p>
    //     <p class="p-1 ml-2 mb-0" id="humidity">Humidity:</p>
    //     <p class="p-1 ml-2 mb-0" id="wind-speed">Wind Speed:</p>
    //     <p class="p-1 ml-2 mb-3" id="uv-index">UV Index:</p>
    // </div>
    // <div class="card" id="days">  
    //     <h5 class="p-1 ml-2 mt-1" id="city-name">5-Day Forecast:</h5>
    //     <div class="d-flex flex-row">
    //         <div class="col-sm-2">
    //             <!-- <label class="btn btn-primary text-left">5/4/2020<br>sdskdjf<br>Temp: <br> Humidity:</label> -->
    //             <label class="btn btn-primary text-left">Day 1</label>
    //         </div>
    //         <div class="col-sm-2">
    //             <label class="btn btn-primary">Day 2</label>
    //         </div>
    //         <div class="col-sm-2">
    //             <label class="btn btn-primary">Day 3</label>
    //         </div>
    //         <div class="col-sm-2">
    //             <label class="btn btn-primary">Day 4</label>
    //         </div>
    //         <div class="col-sm-2">
    //             <label class="btn btn-primary">Day 5</label>
    //         </div>
    //     </div>
    // </div>

    // weather icon url
    // var iconUrl = "http://openweathermap.org/img/wn/10d@2x.png"
    var iconUrl = "http://openweathermap.org/img/wn/"

    // name
    var img = "<img src=http://openweathermap.org/img/wn/" + cityData.icon + "@2x.png>";
    cityNameEl.html(city + " (" + cityData.date + ") " + img);
    var divEl = $('<div>');

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
    var bg_color; 
    if (cityData.uvi > 11) {
        bg_color = "p-2 bg-dark";
    }
    else if (cityData.uvi > 7) {
        bg_color = "p-2 bg-danger";
    }
    else if (cityData.uvi > 5) {
        bg_color = "p-2 bg-secondary";
    }
    else if (cityData.uvi > 2) {
        bg_color = "p-2 bg-warning";
    }
    else {
        bg_color = "p-2 bg-success";
    }
    p4El.addClass("p-1 ml-2 mb-4 mt-2");
    p4El.html("UV Index: " + "<span class='" + bg_color + "'>" + cityData.uvi + "</span");
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

    // <div class="d-flex flex-row"></div>
    var divFlex = $('<div>');
    divFlex.addClass("d-flex flex-row");

    //         <div class="col-sm-2">
    //             <!-- <label class="btn btn-primary text-left">5/4/2020<br>sdskdjf<br>Temp: <br> Humidity:</label> -->
    //             <label class="btn btn-primary text-left">Day 1</label>
    //         </div>
    // day1
    var divDay1 = $('<div>');
    divDay1.addClass("col-sm-2");
    var label1 = $('<label>');
    label1.addClass("btn btn-primary text-left");
    img = "<img src=http://openweathermap.org/img/wn/" + cityData.days[0].ficon + "@2x.png>";
    var label1Text = "<span class=font-weight-bold>" + cityData.days[0].fdate + "</span><br>";
    label1Text += img + "<br>";
    label1Text += "Temp: " + cityData.days[0].ftemp + "<span>&#8457;</span>" + "<br>";
    label1Text += "Humidity: " + cityData.days[0].fhumidity + "%";
    // console.log(label1Text);
    label1.html(label1Text);
    divDay1.append(label1);
    divFlex.append(divDay1);

    // day 2
    var divDay2 = $('<div>');
    divDay2.addClass("col-sm-2");
    var label2 = $('<label>');
    label2.addClass("btn btn-primary text-left");
    img = "<img src=http://openweathermap.org/img/wn/" + cityData.days[1].ficon + "@2x.png>";
    var label2Text = "<span class=font-weight-bold>" + cityData.days[1].fdate + "</span><br>";
    label2Text += img + "<br>";
    label2Text += "Temp: " + cityData.days[1].ftemp + "<span>&#8457;</span>" + "<br>";
    label2Text += "Humidity: " + cityData.days[1].fhumidity + "%";
    // console.log(label2Text);
    label2.html(label2Text);
    divDay2.append(label2);
    divFlex.append(divDay2);

    // day 3
    var divDay3 = $('<div>');
    divDay3.addClass("col-sm-2");
    var label3 = $('<label>');
    label3.addClass("btn btn-primary text-left");
    img = "<img src=http://openweathermap.org/img/wn/" + cityData.days[2].ficon + "@2x.png>";
    var label3Text = "<span class=font-weight-bold>" + cityData.days[2].fdate + "</span><br>";
    label3Text += img + "<br>";
    label3Text += "Temp: " + cityData.days[2].ftemp + "<span>&#8457;</span>" + "<br>";
    label3Text += "Humidity: " + cityData.days[2].fhumidity + "%";
    // console.log(label3Text);
    label3.html(label3Text);
    divDay3.append(label3);
    divFlex.append(divDay3);

    // day 4
    var divDay4 = $('<div>');
    divDay4.addClass("col-sm-2");
    var label4 = $('<label>');
    label4.addClass("btn btn-primary text-left");
    img = "<img src=http://openweathermap.org/img/wn/" + cityData.days[3].ficon + "@2x.png>";
    var label4Text = "<span class=font-weight-bold>" + cityData.days[3].fdate + "</span><br>";
    label4Text += img + "<br>";
    label4Text += "Temp: " + cityData.days[3].ftemp + "<span>&#8457;</span>" + "<br>";
    label4Text += "Humidity: " + cityData.days[3].fhumidity + "%";
    // console.log(label4Text);
    label4.html(label4Text);
    divDay4.append(label4);
    divFlex.append(divDay4);

    // day 5
    var divDay5 = $('<div>');
    divDay5.addClass("col-sm-2");
    var label5 = $('<label>');
    label5.addClass("btn btn-primary text-left");
    img = "<img src=http://openweathermap.org/img/wn/" + cityData.days[4].ficon + "@2x.png>";
    var label5Text = "<span class=font-weight-bold>" + cityData.days[4].fdate + "</span><br>";
    label5Text += img + "<br>";
    label5Text += "Temp: " + cityData.days[4].ftemp + "<span>&#8457;</span>" + "<br>";
    label5Text += "Humidity: " + cityData.days[4].fhumidity + "%";
    // console.log(label5Text);
    label5.html(label5Text);
    divDay5.append(label5);
    divFlex.append(divDay5);

    div5El.append(divFlex);
    // finally add div5El to the top div
    cityDataEl.append(div5El);
}

// event handler for city from list
function processCityFromList(event) {
    event.preventDefault();
    
    console.log($(event.target).parent());
    city = event.target.id;

    if (event.target.id.indexOf('close') > 0) {
        // console.log("Close");
        city = event.target.id.split('-')[0];
        // console.log(city);

        cityIndex = getCitiIndex();
        cities.splice(cityIndex);
        saveCities();
        $(event.target).parent().remove();
    }
    else {
        console.log("search");        
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
function getCitiIndex() {
    console.log(cities);
    for (var i = 0; i < cities.length; i++) {
        if (city == cities[i].name) {
            return i;
        }
    }
    // we came here because we didn't find city in local storage
    var citiData = new Object();
    citiData.name = city;
    citiData.lat = latLonDataJson.coord.lat;
    citiData.lon = latLonDataJson.coord.lon;
    cities.push(citiData);
    updateCityList();
    saveCities();
    return cities.length;
}

// process this city
function processCity() {
    cityIndex = getCitiIndex();        
    getWeatherData();
    displayCityData();
}

// search city in local storage, or fetch it from api
function searchCity(event) {
    event.preventDefault();

    city = cityEl.val();
    console.log(city);   
    // if nothing is entered, show error message 
    if (!city) {
        cityNameEl.text("Please enter a valid city name, it can't be blank!");
    }
    else {
        processCity();
    }
}

// add event handler for search, alert for blank entries
$('#searchBtn').on('click', searchCity);

// function to save cities to local storage
function saveCities() {
    console.log('saveCities');
    var str = JSON.stringify(cities);
    localStorage.setItem('cities', str);
}

// function load saved cities
function loadSavedCities() {
    console.log('loadSavedCities');
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
