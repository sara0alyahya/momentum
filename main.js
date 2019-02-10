function imageSuccess(response) {
    console.log(response);
    // const img = document.createElement('img');
    // img.src = response.data.urls.regular;
    //  document.body.appendChild(img);
    $("body").css('background-image', 'url("' + response.data.urls.regular + '")');
}
function imageFail(error) {
    console.log(error);
}
axios({
    method: 'get',
    url: 'https://api.unsplash.com/photos/random?client_id=6c2650ec756fdeee3cf6c073f6638a51f5ea19a83972140f447f19a486b1723e'
})
    .then(imageSuccess)
    .catch(imageFail);

