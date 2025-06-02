import { useEffect, useState } from "react"
import {
  FaHeart,
  FaTimes,
  FaFilter,
  FaEdit,
  FaClock,
  FaCommentAlt,
} from "react-icons/fa"
import styles from "../styles/Pages/AnketsPage/AnketsPage.module.scss"
import { mockProfiles } from "../data/ankets"
import type { Profile } from "../data/ankets"

export default function AnketsPage() {
  const [profiles, setProfiles] = useState<Profile[]>([])
  const [likedProfiles, setLikedProfiles] = useState<number[]>([])
  const [mutualLikes, setMutualLikes] = useState<number[]>([])
  const [chatVisible, setChatVisible] = useState(false)
  const [animationClass, setAnimationClass] = useState<string>("")

  useEffect(() => {
    const timer = setTimeout(() => {
      setProfiles(mockProfiles)
      setAnimationClass(styles["card-enter"])
    }, 300)
    return () => clearTimeout(timer)
  }, [])

  const handleAction = (id: number, action: "like" | "dislike") => {
    const className =
      action === "like" ? styles["card-exit-like"] : styles["card-exit-dislike"]
    setAnimationClass(className)

    setTimeout(() => {
      setProfiles((prev) => prev.filter((p) => p.id !== id))

      if (action === "like") {
        setLikedProfiles((prev) => [...prev, id])
        if (likedProfiles.includes(id)) {
          setMutualLikes((prev) => [...prev, id])
        }
      }

      setTimeout(() => {
        setAnimationClass(styles["card-enter"])
      }, 100)
    }, 700)
  }

  const handleEditProfile = (id: number) => {
    alert(`Редактировать анкету пользователя с ID: ${id}`)
  }

  const toggleChat = () => setChatVisible(!chatVisible)

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-slate-900 to-slate-800 py-28 px-4 flex justify-center items-center overflow-hidden">
      {profiles.length > 0 && (
        <div className="flex items-start gap-6">
          {/* Панель управления */}
          <div className="flex flex-col gap-4 w-48 p-5 rounded-2xl bg-[#111827]/80 backdrop-blur-lg shadow-[0_4px_30px_rgba(0,0,0,0.3)] border border-[#2f3b5e]/40 z-50">
            <button className="flex items-center gap-3 px-3 py-2 bg-white/5 hover:bg-white/10 text-white rounded-xl transition duration-200 group">
              <FaFilter
                size={18}
                className="w-5 text-indigo-400 group-hover:text-indigo-300 transition"
              />
              <div className="w-full text-center">
                <span className="text-sm font-medium tracking-wide group-hover:text-white">
                  Фильтры
                </span>
              </div>
            </button>

            <button className="flex items-center gap-3 px-3 py-2 bg-white/5 hover:bg-white/10 text-white rounded-xl transition duration-200 group">
              <FaHeart
                size={18}
                className="w-5 text-pink-400 group-hover:text-pink-300 transition"
              />
              <div className="w-full text-center">
                <span className="text-sm font-medium tracking-wide group-hover:text-white">
                  Лайки
                </span>
              </div>
            </button>

            <button
              onClick={() => handleEditProfile(1)}
              className="flex items-center gap-3 px-3 py-2 bg-white/5 hover:bg-white/10 text-white rounded-xl transition duration-200 group"
            >
              <FaEdit
                size={18}
                className="w-5 text-yellow-400 group-hover:text-yellow-300 transition"
              />
              <div className="w-full text-center">
                <span className="text-sm font-medium tracking-wide group-hover:text-white">
                  Редактировать
                </span>
              </div>
            </button>

            <button
              onClick={toggleChat}
              className="flex items-center gap-3 px-3 py-2 bg-white/5 hover:bg-white/10 text-white rounded-xl transition duration-200 group"
            >
              <FaCommentAlt
                size={18}
                className="w-5 text-blue-400 group-hover:text-blue-300 transition"
              />
              <div className="w-full text-center">
                <span className="text-sm font-medium tracking-wide group-hover:text-white">
                  Чат
                </span>
              </div>
            </button>
          </div>

          {/* Анкета */}
          <div
            className={`w-full max-w-xl bg-[#1e1e2e] text-white p-8 rounded-3xl shadow-[0_10px_40px_rgba(0,0,0,0.6)] ${animationClass}`}
          >
            <div className="flex flex-col items-center gap-4">
              <div className="w-28 h-28 rounded-full overflow-hidden border-4 border-white shadow-lg">
                <img
                  src={profiles[0].avatar}
                  alt={profiles[0].username}
                  className="w-full h-full object-cover"
                />
              </div>
              <h2 className="text-3xl font-bold tracking-wide">
                {profiles[0].username}
              </h2>
              <p className="text-sm text-white/70">
                Возраст: {profiles[0].age} | Пол: {profiles[0].gender}
              </p>
              <div className="flex items-center gap-2 text-white/60">
                <FaClock className="text-yellow-300" /> {profiles[0].lastOnline}
              </div>

              <div className="w-full mt-4">
                <h3 className="text-sm font-semibold mb-1 text-white/70">
                  Любимые игры
                </h3>
                <div className="flex flex-wrap gap-2">
                  {profiles[0].favoriteGames.map((game, idx) => (
                    <span
                      key={idx}
                      className="bg-blue-600/40 px-3 py-1 rounded-full text-sm hover:bg-blue-600/60 transition"
                    >
                      {game}
                    </span>
                  ))}
                </div>
              </div>

              <div className="w-full mt-4">
                <h3 className="text-sm font-semibold mb-1 text-white/70">
                  Интересы
                </h3>
                <p className="text-white/80 text-sm">
                  {profiles[0].hobbies.join(", ")}
                </p>
              </div>

              <div className="mt-3 text-white/70 text-center">
                <p>
                  <strong>Кого ищет:</strong> {profiles[0].lookingFor}
                </p>
                <p className="mt-2">
                  <strong>О себе:</strong> {profiles[0].about}
                </p>
              </div>

              <div className="flex justify-center gap-8 mt-6">
                <button
                  onClick={() => handleAction(profiles[0].id, "dislike")}
                  className="w-12 h-12 flex justify-center items-center bg-red-600 hover:bg-red-700 rounded-full text-white text-xl shadow-md"
                >
                  <FaTimes />
                </button>
                <button
                  onClick={() => handleAction(profiles[0].id, "like")}
                  className="w-12 h-12 flex justify-center items-center bg-green-500 hover:bg-green-600 rounded-full text-white text-xl shadow-md"
                >
                  <FaHeart />
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Чат */}
      {chatVisible && (
        <div className="chat-window fixed bottom-0 right-0 w-96 h-80 bg-[#1e1e2e] text-white p-4 rounded-lg shadow-2xl z-20">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-xl font-semibold">Чат</h3>
            <button
              onClick={toggleChat}
              className="text-xl text-red-500 hover:text-red-700"
            >
              <FaTimes />
            </button>
          </div>
          <div className="chat-messages overflow-y-auto h-48 space-y-2 mb-3">
            <div className="bg-white/10 p-2 rounded-lg">
              <strong className="text-pink-300">user1:</strong> Привет! Как
              дела?
            </div>
            <div className="bg-white/10 p-2 rounded-lg">
              <strong className="text-blue-300">user2:</strong> Всё отлично! А
              ты?
            </div>
          </div>
          <input
            type="text"
            className="w-full p-2 rounded-md bg-gray-700 text-white placeholder:text-white/60"
            placeholder="Введите сообщение..."
          />
        </div>
      )}
    </section>
  )
}
