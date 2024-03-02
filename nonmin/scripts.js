document.addEventListener('DOMContentLoaded', function () {
    // Generate nonce value
    let array = new Uint8Array(16);
    window.crypto.getRandomValues(array);
    let nonce = btoa(String.fromCharCode.apply(null, array));
    // Set nonce attribute for script tag
    document.querySelector('script').setAttribute('nonce', nonce);
    // Update CSP with the generated nonce
    let cspMetaTag = document.querySelector('meta[http-equiv="Content-Security-Policy"]');
    let cspContent = cspMetaTag.getAttribute('content').replace('nonce-placeholder', 'nonce-' + nonce);
    cspMetaTag.setAttribute('content', cspContent);
});
function sillyGoose() {
    alert("You should have seen this coming -_-");
}
