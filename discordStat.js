const apiUrl = 'https://api.lanyard.rest/v1/users/1073248324024537208';

// Make a GET request
fetch(apiUrl)
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  })
  .then(data => {
    console.log(data.data.activities[0].id);
    if (data.data.activities[0].id === "custom") {
        document.getElementById("please").innerHTML = "Discord Status: " + data.data.activities[0].state;
    }
    console.log(data);
  })
  .catch(error => {
    console.error('Error:', error);
  });

