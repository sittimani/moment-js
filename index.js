const moment = require("moment-timezone")

// display time
function display(m) {
    console.log(`toString => ${m.toString()}`)
    console.log(`toISOString => ${m.toISOString()}`)
    console.log("--------------------------------------")
}
// current time
display(moment())

// my date
let date = moment("2000-03-15")
display(date)

// format date
date = moment("02/11/2021 09:41AM", "DD/MM/YYYY hh:mmA")
display(date)

// getters
date = moment()
console.log(`current date => ${date.date()}`)
console.log(`current hour => ${date.hour()}`)
console.log(`current month => ${date.month()}`)
console.log(`current seconds => ${date.seconds()}`)
console.log("--------------------------------------")

// setters
date = date.hour(01)
console.log(`hour at 1 => ${date.toString()}`)
date = date.month(12)
console.log(`month at 1 => ${date.toString()}`)
date = date.set("date", 05)
console.log(`date at 05 => ${date.toString()}`)
console.log("--------------------------------------")

// manipulating date and time
date = moment()
console.log(`orginal date => ${date.toString()}`)
date.add(4, "day")
console.log(`after modified day => ${date.toString()}`)
console.log("--------------------------------------")

date = moment()
console.log(`orginal date => ${date.toString()}`)
date.add(1, "hour").add(1, "y")
console.log(`after modified hour and year => ${date.toString()}`)
console.log("--------------------------------------")

date = moment()
console.log(`orginal date => ${date.toString()}`)
date.subtract(01, "M").subtract(1, "y")
console.log(`after modified month and year => ${date.toString()}`)
console.log("--------------------------------------")

date = moment().locale("en-au").format("L")
console.log(date.toString());

console.log("--------------------------------------")

date = moment()
let upcomingDate = moment("2021-12-02")
console.log(upcomingDate.diff(date, "days"));

console.log("--------------------------------------")

date = moment("2021-11-02 04:11:13")
let date2 = moment("2021-11-02 04:11:13")
console.log(date.isSame(date2))
console.log(date.isSame(date2, "hour"))

console.log("--------------------------------------")

date = moment.duration(5, "weeks").asDays()
console.log(date);

console.log(moment.duration(1, "day").humanize());
console.log(moment.duration(200, "day").humanize());

console.log("--------------------------------------")

var m = moment.tz("America/Toronto")
console.log(m.toString())