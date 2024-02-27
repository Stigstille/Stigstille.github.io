document.addEventListener("DOMContentLoaded", function () {
    const buttons = document.querySelectorAll('.ContactButtons button');
    buttons.forEach(button => {
        button.addEventListener('mouseenter', function () {
            const videoLink = button.getAttribute('data-video-link');
            button.setAttribute('title', videoLink);
        });
    });
});
function sillyGoose() {
    alert("You should have seen this coming -_-");
}
