hours = { 
    'Spring': {
        'Monday': '7:30am - 5:30pm',
        'Tuesday': '7:30am - 5:30pm',
        'Wednesday': '7:30am - 5:30pm',
        'Thursday': '7:30am - 5:30pm',
        'Friday': '7:30am - 5:30pm',
        'Saturday': '8:00am - 4:30pm',
        'Sunday': 'CLOSED'
    }, 
    'Summer': {
        'Monday': '7:30am - 5:00pm',
        'Tuesday': '7:30am - 5:00pm',
        'Wednesday': '7:30am - 5:00pm',
        'Thursday': '7:30am - 5:00pm',
        'Friday': '7:30am - 5:00pm',
        'Saturday': '8:00am - 12:00 noon',
        'Sunday': 'CLOSED'
    },
    'Fall': {
        'Monday': '7:30am - 4:30pm',
        'Tuesday': '7:30am - 4:30pm',
        'Wednesday': '7:30am - 4:30pm',
        'Thursday': '7:30am - 4:30pm',
        'Friday': '7:30am - 4:30pm',
        'Saturday': '8:00am - 12:00 noon',
        'Sunday': 'CLOSED'
    },
    'Winter': {
        'Monday': '8:00am - 4:30pm',
        'Tuesday': '8:00am - 4:30pm',
        'Wednesday': '8:00am - 4:30pm',
        'Thursday': '8:00am - 4:30pm',
        'Friday': '8:00am - 4:30pm',
        'Saturday': 'CLOSED',
        'Sunday': 'CLOSED'
    }   
}

// Because now.getUTCDay() gives us our weekday as 0-6 integer value,
// we need to use that value to retrieve our String key for accessing
// our hours below
var days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];

var now = new Date();                          

// How do we define the seasons?
// Here we have defined them how their start dates, according to Google
var spring = new Date("March 20, " + now.getUTCFullYear() + " 7:00:00");
var summer = new Date("June 21, " + now.getUTCFullYear() + " 7:00:00");
var fall = new Date("September 23, " + now.getUTCFullYear() + " 7:00:00");
var winter = new Date("December 21, " + now.getUTCFullYear() + " 7:00:00");

// Lookup hours in 'hours' object
var openHours;
var weekday = now.getDay();
if (now < spring || now > winter) {
    openHours = hours.Winter[days[weekday]];
} else if (now < summer) {
    openHours = hours.Spring.days[weekday];
} else if (now < fall) {
    openHours = hours.Summer[days[weekday]];
} else {
    openHours = hours.Fall.days[weekday];
}

document.getElementById("demo").innerHTML = openHours;

