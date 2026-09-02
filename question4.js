
// Question 4: Dhaka CNG Fare Meter
function getCngFare(distance, isNight = false, waitingMinutes = 0) {
    let fare = 50; // সর্বনিম্ন ভাড়া ২ কিমি এর জন্য

    if (distance > 2) {
        fare = fare + (distance - 2) * 15;
    }

    fare = fare + (waitingMinutes * 2);

    if (isNight) {
        fare = fare + (fare * 0.20);
    }

    return fare;
}

console.log(getCngFare(2));                // 50
console.log(getCngFare(1));                // 50
console.log(getCngFare(5));                // 95
console.log(getCngFare(10));               // 170
console.log(getCngFare(5, false, 10));     // 115
console.log(getCngFare(5, true));          // 114
console.log(getCngFare(5, true, 10));      // 138