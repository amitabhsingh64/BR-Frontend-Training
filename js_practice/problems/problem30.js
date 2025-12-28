//30. Create a function that will add two positive numbers of indefinite size.
// The numbers are received as strings and the result should be also provided as string.
let num1 = "8233545687364810783316042301024573458802626375641929613095503809186983154706849514822614518900174141";
let num2 = "6871089093752011708957527852048947245658857392080056591512343263837669460276273192096317935108177146";

function solveSum(n1, n2) {
    let i = n1.length - 1; // Pointer for num1 (start at the end)
    let j = n2.length - 1; // Pointer for num2 (start at the end)
    let carry = 0;         // Defined OUTSIDE the loop
    let result = "";

    // Loop continues if there are digits left in n1 OR n2 OR there is a carry left
    while (i >= 0 || j >= 0 || carry > 0) {
        
        // Get the digit, or 0 if we ran out of digits in this string
        let digit1 = i >= 0 ? Number(n1.charAt(i)) : 0;
        let digit2 = j >= 0 ? Number(n2.charAt(j)) : 0;

        // Calculate sum
        let sum = digit1 + digit2 + carry;

        // Update carry for the NEXT loop (get the tens place)
        carry = Math.floor(sum / 10);

        // Update result string (get the ones place)
        // We add to the front because we are calculating right-to-left
        result = (sum % 10) + result;

        // Move pointers to the left
        i--;
        j--;
    }
    return result;
}

let calculated_answer = solveSum(num1, num2);
let ans = "15104634781116822492273570153073520704461483767721986204607847073024652614983122706918932454008351287";

console.log("Calculated:", calculated_answer);
console.log("Match:", calculated_answer === ans);