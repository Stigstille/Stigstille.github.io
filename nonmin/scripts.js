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
