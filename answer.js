// Question 1: Value Detective
function describeValue(value) {
    let type = typeof value;
    let truthiness = value ? "truthy" : "falsy";
    return type + " | " + truthiness;
}


// Question 2: Bangladesh Weekend Machine
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


// Question 3: Username Gatekeeper
function validateUsername(username) {
    if (username.length < 4) {
        return "Too Short";
    }
    if (username.includes(" ")) {
        return "No Space Allowed";
    }
    if (username.toLowerCase().includes("admin")) {
        return "Reserved Word";
    }
    return "Available";
}


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


// Question 5: Run Chase Commentator
const getChaseVerdict = (target, scored, ballsLeft) => {
    let runsNeeded = target - scored;

    if (runsNeeded <= 0) {
        return "Won";
    }
    if (ballsLeft <= 0) {
        return "Lost";
    }

    let requiredRate = (runsNeeded / ballsLeft) * 6;
    let verdict = "";

    if (requiredRate <= 6) {
        verdict = "Comfortable";
    } else if (requiredRate <= 12) {
        verdict = "Tough";
    } else {
        verdict = "Almost Impossible";
    }

    return `Need ${runsNeeded} runs in ${ballsLeft} balls | ${verdict}`;
};
