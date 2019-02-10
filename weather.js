function weather(response) {
    console.log(response);
    // const tempe = $('h2').text(response.data.main.temp);
    const tempe = response.data.main.temp;
    console.log(response.data.main.temp);
    // console.log(response.data.name);

    const icon = $("img").attr("src", "http://openweathermap.org/img/w/" + response.data.weather.icon + ".png");
    console.log(icon);

    $('body').append('<h1>' + '☁️ ' + tempe + ' ℃' + '</h1>')
    // $('body').append('<h1>' + response.data.name + '</h1>')

    // const weather = response.data.weather.description;

    // const img = document.createElement('img');
    // img.src = response.data.weather[0].icon;

    // $('img').attr('src', 'http://openweathermap.org/img/w/10d.png')

}

function weatherError(error) {
    console.log(error);
}
axios({
    method: 'get',
    url: 'http://api.openweathermap.org/data/2.5/weather?q=Riyadh&units=metric&appid=9ee4b2bf5c6b9b5c9c522b122f62428d'
})
    .then(weather)
    .catch(weatherError)