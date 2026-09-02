// Question No. 2: Bangladesh Weekend Machine
function getDayType(day) {
    let formattedDay = day.toLowerCase();
    switch (formattedDay) {
        case "friday":
        case "saturday":
            return "Weekend";
        case "sunday":
        case "monday":
        case "tuesday":
        case "wednesday":
        case "thursday":
            return "Working Day";
        default:
            return "Invalid Day";
    }
}

console.log(getDayType("Friday"));	
console.log(getDayType("saturday"));	
console.log(getDayType("MONDAY"));	 
console.log(getDayType("Bandarban")); 
console.log(getDayType("Bandarban")) ;