console.log('Hello Console!');

/**
 *  1. ASK VISITOR FOR HIS NAME
 *  2. ASK VISITOR FOR HIS LAST NAME
 *  3. ASK VISITOR FOR HIS FAVOURITE COLOR
 *  4. GENERATE THE PASSWORD FOR THE VISITOR
 * */
 
// VARIABLES

var visitorName = prompt("What's your Name?");
var visitorLastName = prompt("What's your Last Name?");
var visitorFavouriteColor = prompt("What's your favourite color?");
var visitorPassword = visitorName + visitorLastName + visitorFavouriteColor;

// EVENTS

console.log(visitorName);
console.log(typeof (visitorName));
console.log(visitorLastName);
console.log(typeof (visitorLastName));
console.log(visitorFavouriteColor);
console.log(typeof (visitorFavouriteColor));
console.log(visitorPassword);
console.log(typeof (visitorPassword));

document.getElementById('password').innerHTML = visitorPassword + '21';
