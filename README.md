# Weather App

This is a simple weather application made using **React** and **Tailwind CSS**.
The purpose of this project was to practice working with APIs and building responsive user interfaces in React.

The app allows users to search for a city and view the current weather along with a 5-day forecast.

---

## Features

* Search weather by city name
* Show current temperature
* Display weather condition and icon
* Show humidity
* Show wind speed
* Show "feels like" temperature
* Display 5 day forecast
* Loading indicator while fetching data
* Error message for invalid city
* Responsive layout (works on mobile and desktop)

---

## Technologies Used

* React (with Vite)
* Tailwind CSS
* JavaScript
* WeatherAPI

---

## Project Structure

```text
src
 ├─ components
 │   ├─ SearchBox.jsx
 │   ├─ CurrentWeather.jsx
 │   └─ Forecast.jsx
 │
 ├─ services
 │   └─ weatherService.js
 │
 ├─ App.jsx
 └─ main.jsx
```

---

## API Used

This project uses **WeatherAPI** to get weather data.

Example API request:

```text
https://api.weatherapi.com/v1/forecast.json?key=YOUR_API_KEY&q=CITY&days=5
```

This API returns:

* location information
* current weather data
* forecast data for the next days

---

## How to Run the Project

1. Clone the repository

```
git clone <your-repository-link>
```

2. Go to the project folder

```
cd weather-app
```

3. Install dependencies

```
npm install
```

4. Create a `.env` file in the root folder and add your API key

```
VITE_WEATHER_API_KEY=your_api_key_here
```

5. Run the project

```
npm run dev
```

Then open the local server shown in the terminal.

---

## What I Learned

While building this project I practiced:

* Fetching data from an API
* Handling loading and error states
* Working with React components
* Managing state with `useState`
* Creating responsive layouts using Tailwind CSS

---

## Future Improvements

Some features that could be added in the future:

* Detect user location automatically
* Add hourly forecast
* Improve UI design
* Add background changes based on weather

---

## Author

Created as a learning project while practicing **React and frontend development**.
