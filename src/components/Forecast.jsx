function Forecast({ data }) {
  const days = data.forecast.forecastday

  return (
    <div className="w-full flex flex-col gap-3">
      {days.map((day, index) => {
        const weekday = new Date(day.date).toLocaleDateString("en-US", { weekday: "short" })
        const fullDate = new Date(day.date).toLocaleDateString("en-US", { month: "short", day: "numeric" })
        const isToday = index === 0

        return (
          <div
            key={index}
            className={`flex items-center justify-between gap-3 rounded-2xl px-4 py-3 border transition-all duration-200 hover:-translate-y-0.5 hover:bg-white/10 ${
              isToday ? "bg-white/10 border-white/20" : "bg-white/4 border-white/8"
            }`}
          >
            {/* Day label */}
            <div className="w-16 shrink-0">
              <p className={`text-sm font-bold leading-none ${isToday ? "opacity-100" : "opacity-70"}`}>
                {isToday ? "Today" : weekday}
              </p>
              <p className="text-[10px] opacity-35 mt-0.5 font-medium tracking-wide">{fullDate}</p>
            </div>

            {/* Icon + condition */}
            <div className="flex items-center gap-2 flex-1 min-w-0">
              <img
                className="w-9 h-9 shrink-0 drop-shadow"
                src={"https:" + day.day.condition.icon}
                alt={day.day.condition.text}
              />
              <p className="text-xs opacity-50 truncate font-medium">{day.day.condition.text}</p>
            </div>

            {/* Temp range */}
            <div className="flex items-center gap-1.5 shrink-0 text-sm font-bold">
              <span className="opacity-40 text-xs font-medium">{day.day.mintemp_c}°</span>
              <span className="opacity-20 text-xs">—</span>
              <span>{day.day.maxtemp_c}°</span>
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default Forecast