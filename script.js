document.getElementById("search-btn").addEventListener("click", function () {
  const city = document.getElementById("city-input").value.trim();
  if (city === "") {
    alert("Please enter a city name.");
    return;
  }

  const apiKey = "cf7ee53691fe8ceb06814bad58750a56"; // Use your real API key
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;

  console.log("Fetching data from:", url); // Debugging log

  fetch(url)
    .then((response) => {
      console.log("Response status:", response.status); // Debugging log
      if (!response.ok) {
        throw new Error("City not found or API issue");
      }
      return response.json();
    })
    .then((data) => {
      console.log("Weather Data:", data); // Debugging log
      document.getElementById("city-name").innerText = data.name;
      document.getElementById("temperature").innerText = `${data.main.temp}°C`;
      document.getElementById("weather-description").innerText =
        data.weather[0].description;
      document.getElementById("humidity").innerText = data.main.humidity;
      document.getElementById("wind-speed").innerText = data.wind.speed;
    })
    .catch((error) => {
      console.error("Error:", error);
      alert(error.message);
    });
});
