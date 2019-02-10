function quotes(response) {
    const text = response.data.quoteText
    console.log(response);
    $('body').append('<p>' + response.data.quoteAuthor + '</p>')
    $('body').append('<p>' + response.data.quoteText + '</p>')

}

function quoteError(error) {
    console.log(error);
}
axios({
    method: 'get',
    url: 'https://api.forismatic.com/api/1.0/?method=getQuote&format=json&lang=en'
})
    .then(quotes)
    .catch(quoteError)