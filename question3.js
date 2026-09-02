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

console.log(validateUsername("rahim123"));      // result : Available
console.log(validateUsername("ab"));            // result : Too Short
console.log(validateUsername("a b"));           // result : Too Short
console.log(validateUsername("abcd"));          // result : Available
console.log(validateUsername("rahim islam"));   // result : No Space Allowed
console.log(validateUsername("superadmin99"));  // result : Reserved Word
console.log(validateUsername("Admin_Rahim"));   // result : Reserved Word