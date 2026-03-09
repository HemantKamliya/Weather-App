import axios from "axios"

const API_KEY = import.meta.env.VITE_WEATHER_API_KEY
const BASE_URL = "https://api.weatherapi.com/v1"

export const getWeather = async (city) => {
  if (!city || city.trim() === "") {
    throw new Error("City name cannot be empty")
  }

  if (!API_KEY) {
    throw new Error("Weather API key is not configured. Please set VITE_WEATHER_API_KEY in .env.local")
  }

  try {
    const response = await axios.get(
      `${BASE_URL}/forecast.json?key=${API_KEY}&q=${city}&days=5`
    )
    return response.data
  } catch (error) {
    if (error.response?.status === 400) {
      throw new Error(`City "${city}" not found`)
    } else if (error.response?.status === 403) {
      throw new Error("Invalid API key")
    } else if (error.message === "Network Error") {
      throw new Error("Network error. Please check your connection")
    }
    throw new Error(error.message || "Failed to fetch weather data")
  }
}