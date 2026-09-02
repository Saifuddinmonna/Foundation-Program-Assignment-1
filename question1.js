// Question 1: Value Detective
function describeValue(value) {
    let type = typeof value;
    let truthiness = value ? "truthy" : "falsy";
    return type + " | " + truthiness;
}
const result= describeValue(25);
const result2 = describeValue("hello");
const result3= describeValue("");
const result4= describeValue(0);
const result5= describeValue(true);
const result6= describeValue(null);
const result7= describeValue(undefined);
console.log(result);
console.log(result2);
console.log(result3);
console.log(result4);
console.log(result5);
console.log(result6);
console.log(result7);






