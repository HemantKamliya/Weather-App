function CurrentWeather({ data }) {
  const { location, current } = data

  const stats = [
    { label: "Humidity", value: `${current.humidity}%`, icon: "💧" },
    { label: "Wind", value: `${current.wind_kph} km/h`, icon: "💨" },
    { label: "Feels like", value: `${current.feelslike_c}°C`, icon: "🌡️" },
  ]

  return (
    <div className="flex flex-col items-center text-center w-full">

      {/* Location */}
      <h2 className="text-2xl font-black tracking-tight leading-none">
        {location.name}
      </h2>
      <p className="text-xs mt-1 opacity-50 tracking-widest uppercase font-medium">
        {location.country}
      </p>
      <p className="text-xs mt-1 opacity-40 font-light">
        {location.localtime}
      </p>

      {/* Icon + Temp */}
      <div className="relative my-4">
        <div className="absolute inset-0 rounded-full blur-2xl opacity-20 bg-white scale-75" />
        <img
          className="mx-auto w-20 h-20 drop-shadow-lg relative z-10"
          src={"https:" + current.condition.icon}
          alt={current.condition.text}
        />
      </div>

      <div className="text-6xl font-black tracking-tighter leading-none">
        {current.temp_c}
        <span className="text-3xl font-light opacity-60 align-top mt-2 inline-block">°C</span>
      </div>

      <p className="mt-2 text-sm font-medium opacity-60 tracking-wide">
        {current.condition.text}
      </p>

      {/* Divider */}
      <div className="w-full h-px bg-white/10 my-5" />

      {/* Stats */}
      <div className="grid grid-cols-3 gap-2 w-full">
        {stats.map(({ label, value, icon }) => (
          <div
            key={label}
            className="flex flex-col items-center gap-1 bg-white/5 rounded-2xl py-3 px-2 border border-white/8 hover:bg-white/10 transition-colors duration-200"
          >
            <span className="text-base">{icon}</span>
            <span className="text-sm font-bold leading-none">{value}</span>
            <span className="text-[10px] opacity-40 uppercase tracking-wider font-medium">{label}</span>
          </div>
        ))}
      </div>

    </div>
  )
}

export default CurrentWeather