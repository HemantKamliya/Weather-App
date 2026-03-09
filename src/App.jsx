import { useState } from "react"
import SearchBox from "./components/SearchBox"
import { getWeather } from "./services/weatherService"
import CurrentWeather from "./components/CurrentWeather"
import Forecast from "./components/Forecast"

export default function App() {

  const [weather, setWeather] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const [revealed, setRevealed] = useState(false)

  const condition = weather?.current?.condition?.text

  const date = new Date().toLocaleDateString("en-US", {
    weekday: "long",
    month: "long",
    day: "numeric",
  })

  const handleSearch = async (city) => {

    if (!city) return

    setLoading(true)
    setError(null)
    setRevealed(false)

    try {

      const data = await getWeather(city)

      if (data.error) {
        throw new Error(data.error.message)
      }

      setWeather(data)

      setTimeout(() => {
        setRevealed(true)
      }, 80)

    } catch (err) {

      setError(err.message || "Failed to fetch weather data")
      setWeather(null)

    } finally {

      setLoading(false)

    }
  }

  return (

    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex flex-col items-center px-5 py-14">

      {/* Grid texture */}
      <div
        className="pointer-events-none fixed inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(white 1px, transparent 1px), linear-gradient(90deg, white 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      {/* Glow effects */}
      <div className="pointer-events-none fixed top-0 left-1/2 -translate-x-1/2 w-150 h-75 bg-sky-500/10 rounded-full blur-3xl" />
      <div className="pointer-events-none fixed bottom-0 right-0 w-80 h-80 bg-indigo-600/10 rounded-full blur-3xl" />

      <div className="relative z-10 w-full flex flex-col items-center">

        {/* Header */}
        <div className="text-center mb-10">

          <p className="text-[10px] font-semibold tracking-[0.3em] uppercase text-sky-400/60 mb-2">
            Real-time forecast
          </p>

          <h1 className="text-6xl font-black tracking-tighter leading-none text-white">
            Weather<span className="text-sky-400"> ForeCast</span>
          </h1>

          <p className="text-xs mt-3 text-white/30 tracking-widest font-light">
            {date}
          </p>

        </div>

        {/* Search */}
        <div className="w-full max-w-md mb-4">

          <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-4 py-3.5 backdrop-blur-xl transition-all duration-300 focus-within:border-sky-400/30 focus-within:bg-white/8 focus-within:shadow-[0_0_0_3px_rgba(56,189,248,0.06)]">

            <svg
              className="w-4 h-4 shrink-0 text-white/30"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              viewBox="0 0 24 24"
            >
              <circle cx="11" cy="11" r="8" />
              <path d="m21 21-4.35-4.35" />
            </svg>

            <SearchBox onSearch={handleSearch} />

          </div>

        </div>

        {/* Loading */}
        {loading && (

          <div className="flex flex-col items-center gap-4 mt-16">

            <div className="relative w-10 h-10">

              <div className="absolute inset-0 rounded-full border-2 border-white/5" />

              <div className="absolute inset-0 rounded-full border-2 border-transparent border-t-sky-400 animate-spin" />

            </div>

            <p className="text-[11px] uppercase tracking-[0.25em] text-white/30 font-medium">
              Fetching conditions
            </p>

          </div>

        )}

        {/* Error */}
        {error && (

          <div className="w-full max-w-md mt-8 flex items-start gap-3 bg-red-500/8 border border-red-400/15 rounded-2xl px-5 py-4 backdrop-blur-md">

            <span className="text-red-400 mt-0.5 shrink-0">⚠</span>

            <p className="text-red-300/80 text-sm leading-relaxed">
              {error}
            </p>

          </div>

        )}

        {/* Weather Section */}
        {weather && (

          <div
            className={`w-full max-w-5xl grid grid-cols-1 md:grid-cols-2 gap-6 mt-6 transform-gpu transition-all duration-500 ${
              revealed
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-4"
            }`}
          >

            {/* Current Weather */}
            <div className="rounded-3xl border border-white/8 bg-white/4 backdrop-blur-2xl p-6 shadow-xl shadow-black/20 ring-1 ring-inset ring-white/5 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-2xl hover:shadow-black/30">

              {condition && (
                <div className="flex justify-center mb-4">

                  <span className="inline-flex items-center gap-2 text-[11px] font-semibold tracking-[0.18em] uppercase px-4 py-1.5 rounded-full border border-sky-400/20 bg-sky-400/8 text-sky-300 backdrop-blur-md">

                    <span className="w-1.5 h-1.5 rounded-full bg-sky-400 animate-pulse" />

                    {condition}

                  </span>

                </div>
              )}

              <CurrentWeather data={weather} />

            </div>

            {/* Forecast */}
            <div className="rounded-3xl border border-white/8 bg-white/4 backdrop-blur-2xl p-6 shadow-xl shadow-black/20 ring-1 ring-inset ring-white/5 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-2xl hover:shadow-black/30">

              <h3 className="text-[11px] font-semibold tracking-[0.22em] uppercase text-white/40 mb-4 text-center">
                5-Day Forecast
              </h3>

              <Forecast data={weather} />

            </div>

          </div>

        )}

        {/* Empty state */}
        {!weather && !loading && !error && (

          <div className="mt-20 text-center text-white/20">

            <div className="text-5xl mb-4 opacity-40">
              ⛅
            </div>

            <p className="text-[11px] tracking-[0.25em] uppercase font-medium">
              Search a city to begin
            </p>

          </div>

        )}

      </div>

    </div>
  )
}