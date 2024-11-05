function extractLastCharacters(str) {
 const LastChar = str.split('').map(mot =>mot.splice(-1) )
 
 // Your code here
}

// Example usage:
console.log(extractLastCharacters("Hello World")); // Expected output: ['o', 'd']
