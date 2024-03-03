// Function to generate a random nonce value
function generateNonce() {
    let array = new Uint32Array(8);
    window.crypto.getRandomValues(array);
    let nonce = '';
    for (let value of array) {
        nonce += ('0000' + value.toString(16)).slice(-4);
    }
    return nonce;
}
// Get the script elements
let scriptElements = document.querySelectorAll('script');
// Generate nonce
let nonce = generateNonce();
// Set nonce attribute for each script element
scriptElements.forEach(function (script) {
    script.setAttribute('nonce', "nonce-" + nonce);
});
function sillyGoose() {
    alert("You should have seen this coming -_-");
}
