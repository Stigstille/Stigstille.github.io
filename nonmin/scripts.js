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
// Call the function so nonce attributes are set for dark reader styles too
updateStyleNonce();
// function to do the above
function updateStyleNonce() {
    let styles = document.querySelectorAll('style.darkreader.darkreader--sync');
    styles.forEach(function (style) {
        style.setAttribute('nonce', "nonce-" + nonce);
    });
}
document.addEventListener('DOMContentLoaded', function () {
    let favoriteVideoButton = document.getElementById('favorite-video-button');
    favoriteVideoButton.addEventListener('click', function (event) {
        event.preventDefault();
        sillyGoose();
    });
});
function sillyGoose() {
    alert("You should have seen this coming -_-");
}
