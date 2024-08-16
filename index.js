// Chapter-32: Extracting parts of date and time

// last class

// const now = new Date();
// console.log(now);

// get day
// const now = new Date();
// console.log(now.getDay());

// day name
// const dayNames = ["sun", "Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
// console.log(dayNames[now.getDay()]);

// get full year 
// const now = new Date();
// console.log(now.getFullYear());
// console.log(new Date().getFullYear());

// get hour
// const now = new Date();
// console.log(now.getHours());

// get minutes
// console.log(new Date().getMinutes());

// get date 
// const today date 
// var todayDate = new Date().getDate();
// console.log({todayDate});

// new Suff

// Getting month Name
// const monthNames = ["jan","feb","mar","apr","may","jun","july","aug","sep","oct","nov","dec"];

// // getting current month number 
// const currentMonthNumber = new Date().getMonth();
// console.log({currentMonthNumber});

// // printing month name 
// console.log(monthNames[currentMonthNumber]);

// printing hours and minutes in formated string
// var hours = new Date().getHours();
// var minutes = new Date().getMinutes();
// console.log({hours,minutes});
// console.log(`${hours},${minutes}`);

// without using variable hours minutes seconds
// console.log(`${new Date().getHours()}:${new Date().getMinutes()}:${new Date().getSeconds()}`);

// Deciding Am and Pm , hours > 11 pm Else am
// var hours = new Date().getHours();
// console.log(hours);
// if (hours > 11) {
//   console.log(`${hours}:PM`);
// } else {
//     console.log(`${hours}:AM`);
// }

