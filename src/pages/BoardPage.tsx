import { useState } from "react"
import { motion } from "framer-motion"
import { FaPlus } from "react-icons/fa"
import AddAdsPopup from "../components/AddAdsPopup"

import { useLockPageScroll } from "../utils/useLockBodyScroll"

const mockAds = [
  {
    id: 1,
    user: "@gamerx",
    games: ["Valorant", "Overwatch 2"],
    description:
      "Ищу команду для вечерних каток. Желательно с микрофоном. Возраст 18+",
    time: "Сегодня в 20:00",
  },
  {
    id: 2,
    user: "@support_lady",
    games: ["League of Legends", "Apex Legends"],
    description: "Нужен тиммейт для ранкеда. Играю на саппорте/поддержке.",
    time: "Сейчас онлайн",
  },
  {
    id: 3,
    user: "@vibe_duo",
    games: ["Phasmophobia", "It Takes Two"],
    description: "Ищу напарника для расслабленных игр на выходных.",
    time: "Завтра в 17:00",
  },
]

export default function AnnouncementBoard() {
  const [isPopupOpen, setIsPopupOpen] = useState(false)
  useLockPageScroll(isPopupOpen)

  return (
    <section className="relative py-24 px-6 bg-gradient-to-br from-[#0f0c29] via-[#302b63] to-[#24243e] text-white min-h-screen">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-10">
          <h2 className="text-4xl sm:text-5xl font-extrabold bg-gradient-to-r from-pink-400 via-purple-400 to-blue-500 bg-clip-text text-transparent">
            Доска объявлений
          </h2>
          <button
            onClick={() => setIsPopupOpen(true)}
            className="flex items-center gap-2 px-5 py-3 bg-gradient-to-r from-pink-600 via-purple-700 to-indigo-700 text-white rounded-full shadow-lg hover:scale-105 transition cursor-pointer"
          >
            <FaPlus className="text-sm" /> Разместить объявление
          </button>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {mockAds.map((ad) => (
            <motion.div
              key={ad.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="relative p-6 rounded-2xl bg-white/5 border border-white/10 shadow-md backdrop-blur-xl hover:border-purple-400 transition"
            >
              <div className="mb-2 text-sm text-gray-300">{ad.time}</div>
              <h3 className="text-xl font-bold text-white mb-2">{ad.user}</h3>
              <p className="text-gray-300 mb-3 text-sm">{ad.description}</p>
              <div className="flex flex-wrap gap-2 mt-2">
                {ad.games.map((game, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 text-xs bg-gradient-to-r from-purple-700 to-indigo-600 text-white rounded-full"
                  >
                    {game}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Подключение popup */}
      {isPopupOpen && <AddAdsPopup onClose={() => setIsPopupOpen(false)} />}
    </section>
  )
}
