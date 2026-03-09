import { useState } from "react"

function SearchBox({ onSearch }) {
  const [city, setCity] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault()
    if (city.trim()) {
      onSearch(city.trim())
      setCity("")
    }
  }

  return (
    <form onSubmit={handleSubmit} className="flex items-center gap-2 w-full">
      <input
        className="flex-1 bg-transparent text-inherit placeholder:opacity-40 text-lg font-normal focus:outline-none min-w-0 text-white"
        placeholder="Search city..."
        value={city}
        onChange={(e) => setCity(e.target.value)}
        aria-label="City search"
      />
      <button
        type="submit"
        disabled={!city.trim()}
        className="shrink-0 px-4 py-2 rounded-xl text-xs font-bold tracking-widest uppercase bg-white/15 border border-white/20 hover:bg-white/25 active:scale-95 transition-all duration-200 disabled:opacity-30 disabled:cursor-not-allowed backdrop-blur-sm"
      >
        Go
      </button>
    </form>
  )
}

export default SearchBox