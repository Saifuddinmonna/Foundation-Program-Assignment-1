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

console.log(validateUsername("rahim123"));      // আউটপুট: Available
console.log(validateUsername("ab"));            // আউটপুট: Too Short
console.log(validateUsername("a b"));           // আউটপুট: Too Short
console.log(validateUsername("abcd"));          // আউটপুট: Available
console.log(validateUsername("rahim islam"));   // আউটপুট: No Space Allowed
console.log(validateUsername("superadmin99"));  // আউটপুট: Reserved Word
console.log(validateUsername("Admin_Rahim"));   // আউটপুট: Reserved Word