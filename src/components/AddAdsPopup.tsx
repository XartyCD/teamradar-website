import { useRef, useEffect, useState, useMemo } from "react"
import { FaTimes } from "react-icons/fa"
import { motion, AnimatePresence } from "framer-motion"
import { Range, getTrackBackground } from "react-range"
import "../styles/Components/ButtonAddAdsPopup.scss"

import games from "../data/games"

interface Props {
  onClose: () => void
}

interface Game {
  name: string
  gradient: string
  logo: string
}

export default function AddAdsPopup({ onClose }: Props) {
  const [players, setPlayers] = useState(4)
  const [selectedGames, setSelectedGames] = useState<Game[]>([])
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)
  const buttonRef = useRef<HTMLButtonElement>(null)

  const [showRange, setShowRange] = useState(false)

  const [searchTerm, setSearchTerm] = useState("")
  const STEP = 1
  const MIN = 16
  const MAX = 100
  const [ageRange, setAgeRange] = useState<[number, number]>([16, 30])

  useEffect(() => {
    document.body.style.overflow = "hidden"
    return () => {
      document.body.style.overflow = "auto"
    }
  }, [])

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node) &&
        !buttonRef.current?.contains(event.target as Node)
      ) {
        setIsDropdownOpen(false)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [])

  // фикс кривого ползунка при открытии Popup
  useEffect(() => {
    let raf: number
    let timeout: NodeJS.Timeout

    raf = requestAnimationFrame(() => {
      timeout = setTimeout(() => {
        setShowRange(true)
      }, 140) // чуть дольше времени анимации
    })

    return () => {
      cancelAnimationFrame(raf)
      clearTimeout(timeout)
    }
  }, [])

  const removeGame = (name: string) => {
    setSelectedGames((prev) => prev.filter((g) => g.name !== name))
  }

  const handleGameSelect = (game: Game) => {
    if (
      !selectedGames.some((g) => g.name === game.name) &&
      selectedGames.length < 3
    ) {
      setSelectedGames((prev) => [...prev, game])
    }
    setIsDropdownOpen(false)
    setSearchTerm("")
  }

  const fireflies = useMemo(() => {
    return Array.from({ length: 12 }).map((_, i) => ({
      id: i,
      top: `${Math.random() * 100}%`,
      left: `${Math.random() * 100}%`,
      delay: `${Math.random() * 5}s`,
      duration: `${3 + Math.random() * 3}s`,
    }))
  }, []) // один раз при монтировании

  return (
    <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center px-4">
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-xl p-4 sm:p-8 rounded-2xl bg-gradient-to-br from-[#1f1c2c] to-[#302b63] text-white shadow-2xl border border-white/10"
      >
        <button
          className="absolute top-4 right-4 text-white hover:text-red-400 transition cursor-pointer"
          onClick={onClose}
        >
          <FaTimes className="text-xl" />
        </button>

        <h3 className="text-xl sm:text-2xl font-bold mb-6">
          Разместить объявление
        </h3>

        <div className="mb-6">
          <label className="block mb-2 text-xs sm:text-sm font-medium text-gray-300">
            Количество игроков (включая вас)
          </label>
          <div className="flex gap-2">
            {[2, 3, 4, 5, 6].map((num) => (
              <button
                key={num}
                onClick={() => setPlayers(num)}
                className={`w-10 h-10 flex items-center justify-center rounded-lg border transition-all cursor-pointer
                  ${
                    players === num
                      ? "bg-pink-500 text-white"
                      : "bg-white/10 text-gray-300 hover:bg-white/20"
                  }`}
              >
                {num}
              </button>
            ))}
          </div>
        </div>

        <div className="mb-3 sm:mb-6">
          <label className="block text-sm font-medium text-gray-300">
            Возраст тиммейтов
          </label>

          <div className="flex justify-between items-center gap-4 mb-3">
            <div className="flex sm:flex-row sm:gap-2 flex-col-reverse items-center gap-0 mt-3">
              <span className="text-white/40">от</span>
              <input
                type="number"
                value={ageRange[0]}
                min={MIN}
                max={ageRange[1]}
                onChange={(e) => {
                  let val = Number(e.target.value)
                  if (isNaN(val)) return
                  val = Math.max(MIN, Math.min(val, ageRange[1])) // ограничиваем диапазон
                  setAgeRange([val, ageRange[1]])
                }}
                className="w-20 px-2 py-1 rounded-md bg-white/10 border border-white/10 text-white text-sm text-center focus:outline-none focus:ring-2 focus:ring-cyan-400"
              />
            </div>
            <div className="flex sm:flex-row sm:gap-2 flex-col-reverse items-center gap-0 mt-3">
              <span className="text-white/40">до</span>
              <input
                type="number"
                value={ageRange[1]}
                min={ageRange[0]}
                max={MAX}
                onChange={(e) => {
                  let val = Number(e.target.value)
                  if (isNaN(val)) return
                  val = Math.min(MAX, Math.max(val, ageRange[0])) // ограничиваем диапазон
                  setAgeRange([ageRange[0], val])
                }}
                className="w-20 px-2 py-1 rounded-md bg-white/10 border border-white/10 text-white text-sm text-center focus:outline-none focus:ring-2 focus:ring-cyan-400"
              />
            </div>
          </div>

          <div className="flex flex-col items-center gap-2 mt-4">
            {showRange && (
              <Range
                values={ageRange}
                step={STEP}
                min={MIN}
                max={MAX}
                onChange={(values) => setAgeRange(values as [number, number])}
                renderTrack={({ props, children }) => (
                  <div
                    {...props}
                    className="w-full h-3 rounded-full bg-gradient-to-r from-zinc-700 via-slate-600 to-zinc-700"
                    style={{
                      background: getTrackBackground({
                        values: ageRange,
                        colors: ["#334155", "#06b6d4", "#334155"],
                        min: MIN,
                        max: MAX,
                      }),
                    }}
                  >
                    {children}
                  </div>
                )}
                renderThumb={({ props }) => {
  const { key, ...restProps } = props
  return (
    <div
      key={key}
      {...restProps}
      className="w-5 h-5 bg-cyan-400 border-2 border-white rounded-full shadow-md"
    />
  )
}}

              />
            )}

            <p className="text-sm text-white/50 text-center w-full">
              Возраст: от{" "}
              <span className="text-white font-semibold">{ageRange[0]}</span> до{" "}
              <span className="text-white font-semibold">{ageRange[1]}</span>{" "}
              лет
            </p>
          </div>
        </div>

        <div className="mb-2">
          <div className="flex items-center justify-between mb-3">
            <span className="text-base font-semibold text-white">
              Выбери игру{" "}
              <span className="text-sm text-white/60">(до 3-х)</span>
            </span>
            <span className="text-sm font-medium text-pink-400">
              Всего игр: {games.length}
            </span>
          </div>

          <div className="relative">
            <button
              ref={buttonRef}
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              className="w-full p-3 rounded-lg bg-white/10 text-white border border-white/10 flex justify-between items-center focus:outline-none focus:ring-2 focus:ring-pink-500 cursor-pointer"
            >
              {selectedGames.length < 3 ? "— выбери игру —" : "лимит достигнут"}
              <span className="ml-2">▼</span>
            </button>

            <AnimatePresence>
              {isDropdownOpen && selectedGames.length < 3 && (
                <motion.div
                  ref={dropdownRef}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="absolute mt-2 z-50 w-full max-h-80 overflow-y-auto bg-white/10 backdrop-blur border border-white/10 rounded-lg shadow-lg"
                >
                  <div className="sticky top-0 bg-[#1f1c2c]/90 p-2 z-99">
                    <input
                      type="text"
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      placeholder="Поиск по играм..."
                      className="w-full px-3 py-2 rounded-md text-sm bg-white/10 border border-white/20 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-pink-500"
                    />
                  </div>
                  {games
                    .filter((game) =>
                      game.name
                        .toLowerCase()
                        .includes(searchTerm.trim().toLowerCase())
                    )
                    .map((game, index) => (
                      <div
                        key={index}
                        onClick={() => handleGameSelect(game)}
                        className="relative flex items-center gap-3 p-2 text-white group cursor-pointer transition-colors"
                      >
                        <span
                          className="absolute inset-0 rounded-md opacity-0 group-hover:opacity-100 transition-all duration-300"
                          style={{
                            backgroundImage: `linear-gradient(to right, var(--tw-gradient-stops))`,
                          }}
                        ></span>
                        <div
                          className={`absolute inset-0 z-0 rounded-md opacity-0 group-hover:opacity-100 transition-all duration-300 bg-gradient-to-r ${game.gradient}`}
                        />
                        <div className="relative z-10 flex items-center gap-3">
                          <img
                            src={game.logo}
                            alt={game.name}
                            className="w-10 h-10 shrink-0 rounded-md object-contain bg-black/20 p-1"
                          />
                          <span>{game.name}</span>
                        </div>
                      </div>
                    ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <div className="mt-4 flex flex-col gap-2">
            <AnimatePresence>
              {selectedGames.map((game) => (
                <motion.div
                  key={game.name}
                  onClick={() => removeGame(game.name)}
                  initial={{ opacity: 0, scale: 0.6, y: -20 }}
                  animate={{
                    opacity: 1,
                    scale: 1,
                    y: 0,
                    transition: { type: "spring", stiffness: 400, damping: 20 },
                  }}
                  exit={{
                    opacity: 0,
                    scale: 0.5,
                    rotate: -15,
                    y: 30,
                    transition: { duration: 0.5, ease: "easeOut" },
                  }}
                  className={`relative px-4 py-2 rounded-xl text-sm text-white flex items-center cursor-pointer group bg-gradient-to-r ${game.gradient} overflow-hidden`}
                >
                  <span className="absolute inset-0 bg-red-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out" />
                  <span className="relative z-10 flex items-center gap-2">
                    <img
                      src={game.logo}
                      alt={game.name}
                      className="w-6 h-6 rounded-sm object-cover"
                    />
                    {game.name}
                    <FaTimes className="ml-2 text-white text-xs opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out pointer-events-none" />
                  </span>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
        <div className="mt-8">
          <motion.button
            whileTap={{ scale: 0.97 }}
            whileHover={{ scale: 1.02 }}
            className="cursor-pointer relative overflow-hidden w-full px-3 py-3 sm:px-6 text-lg font-bold text-white rounded-xl bg-[#0f0f1f] shadow-md shadow-indigo-900 group transition-all duration-300 hover:bg-[#1c1b36]"
            onClick={() => {
              console.log("Объявление размещено!")
            }}
          >
            {/* Светлячки */}
            {fireflies.map((f) => (
              <span
                key={f.id}
                className="absolute w-[3px] h-[3px] rounded-full bg-white opacity-0 animate-firefly pointer-events-none"
                style={{
                  top: f.top,
                  left: f.left,
                  animationDelay: f.delay,
                  animationDuration: f.duration,
                }}
              />
            ))}

            {/* Мягкое сияние при наведении */}
            <span className="absolute inset-0 bg-gradient-to-r from-indigo-700 via-purple-700 to-blue-800 bg-[length:200%_100%] bg-left group-hover:bg-right opacity-0 group-hover:opacity-80 transition-all duration-1000 ease-in-out blur-md pointer-events-none" />

            {/* Блик */}
            <span className="absolute top-0 left-[-75%] w-[50%] h-full bg-gradient-to-r from-white/10 via-white/30 to-white/0 transform skew-x-[-20deg] opacity-0 group-hover:opacity-100 transition-opacity duration-700 group-hover:animate-shimmer pointer-events-none" />

            {/* Энергетическая волна */}
            <span className="absolute top-0 left-0 w-full h-full opacity-0 group-hover:opacity-100 animate-energy-wave pointer-events-none" />

            <span className="relative z-10 text-md sm:text-xl">
              Разместить объявление
            </span>
          </motion.button>
        </div>
      </motion.div>
    </div>
  )
}
