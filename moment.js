console.log(moment().format('h:mm A'));
console.log(moment().format(' A'));
$('body').append('<h2>' + moment().format('h:mm A') + '</h2>')

const hours = new Date().getHours();
var message;
const morning = ('Good Morning');
const afternoon = ('Good Afternoon');
const evening = ('Good Evening');

if (hours >= 0 && hours < 12) {
    message = morning + ' , SARA';

} else if (hours >= 12 && hours < 17) {
    message = afternoon + ' , SARA';

} else if (hours >= 17 && hours < 24) {
    message = evening + ' , SARA';
}

$('.greeting').append(message);