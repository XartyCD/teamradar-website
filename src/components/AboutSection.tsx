import { useEffect, useState, useRef } from "react"
import { motion } from "framer-motion"
import { Link } from "react-router-dom"
import { Brain, Mic, Flame } from "lucide-react"

const AboutSection = () => {
  const [particles, setParticles] = useState<
    {
      id: string
      top: string
      left: string
      color: string
      shape: string
      opacity: number
      duration: number
      delay: number
    }[]
  >([])

  const [isLargeScreen, setIsLargeScreen] = useState(
    typeof window !== "undefined" ? window.innerWidth >= 1024 : false
  )
  const [videoSrc, setVideoSrc] = useState("")
  const prevVideo = useRef("")

  useEffect(() => {
    const handleResize = () => setIsLargeScreen(window.innerWidth >= 1024)
    window.addEventListener("resize", handleResize)
    handleResize() // запускаем при монтировании
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  const videoSources = [
    "/videos/lethal_1.mp4",
    "/videos/lethal_2.mp4",
    "/videos/phasma_1.mp4",
    "/videos/phasma_2.mp4",
    "/videos/ultimate_1.mp4",
    "/videos/ultimate_2.mp4",
    "/videos/ultimate_3.mp4",
    "/videos/west_1.mp4",
    "/videos/west_2.mp4",
    "/videos/west_3.mp4",
    "/videos/sonsoftheforest_1.mp4",
    "/videos/sonsoftheforest_2.mp4",
    // "/videos/pubg_1.mp4",
    // "/videos/pubg_2.mp4",
    // "/videos/dst_1.mp4",
    // "/videos/dst_2.mp4",
    // "/videos/terraria_1.mp4",
    // "/videos/kingdoms_1.mp4",
    // "/videos/kingdoms_2.mp4",
    // "/videos/theforest_1.mp4",
    // "/videos/theforest_2.mp4",
  ]

  /* ---------- блок выбора нового видео ---------- */
  const chooseNewVideo = () => {
    const prevGroup = prevVideo.current.split("_")[0]
    const filtered = videoSources.filter((src) => !src.includes(prevGroup))
    const pool = filtered.length ? filtered : videoSources
    const newVideo = pool[Math.floor(Math.random() * pool.length)]
    prevVideo.current = newVideo
    setVideoSrc(newVideo)
  }

  /* ---------- подгружаем видео ТОЛЬКО для больших экранов ---------- */
  useEffect(() => {
    if (isLargeScreen) {
      chooseNewVideo()
    } else {
      setVideoSrc("") // на всякий случай очищаем src
    }
  }, [isLargeScreen])

  useEffect(() => {
    const colors = [
      "#1e3a8a",
      "#C084FC",
      "#60A5FA",
      "#F87171",
      "#34D399",
      "#FCD34D",
    ]
    const shapes = [
      "rounded-full",
      "scale-150 blur-[1px]",
      "ring-2 ring-white",
      "rotate-[30deg]",
    ]

    const createParticle = () => ({
      id: `${Math.random()}`,
      top: `${Math.random() * 95}%`,
      left: `${Math.random() * 95}%`,
      color: colors[Math.floor(Math.random() * colors.length)],
      shape: shapes[Math.floor(Math.random() * shapes.length)],
      opacity: 1,
      duration: 3 + Math.random() * 3, // отображаются 3–6 секунд
      delay: 0,
    })

    const spawnParticle = (index: number) => {
      const newParticle = createParticle()
      setParticles((prev) => {
        const copy = [...prev]
        copy[index] = newParticle
        return copy
      })
      const lifetime = 1000 + newParticle.duration * 1000
      setTimeout(() => spawnParticle(index), lifetime)
    }

    const initial = Array.from({ length: 20 }, createParticle)
    setParticles(initial)
    initial.forEach((_, i) => {
      const timeout = 1000 + Math.random() * 2000
      setTimeout(() => spawnParticle(i), timeout)
    })
  }, [])

  return (
    <section
      id="head"
      className="relative min-h-screen flex flex-col items-center justify-center px-6 text-center overflow-hidden"
    >
      {isLargeScreen && videoSrc && (
        <video
          key={videoSrc}
          className="absolute top-0 left-0 w-full h-full object-cover z-1 opacity-50"
          autoPlay
          muted
          playsInline
          preload="auto"
          onEnded={chooseNewVideo}
        >
          {videoSrc && <source src={videoSrc} type="video/mp4" />}
        </video>
      )}

      <div className="pointer-events-none absolute top-0 left-0 w-full h-full z-20">
        <div className="w-full h-full bg-gradient-to-r from-black/60 via-transparent to-black/60"></div>
      </div>

      <div className="relative z-20 flex flex-col items-center justify-center max-w-6xl w-full py-16 px-6 gap-4 mt-24">
        <motion.h1
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="text-6xl sm:text-7xl font-extrabold mb-12 bg-gradient-to-r from-purple-400 via-fuchsia-500 to-red-500 bg-clip-text text-transparent drop-shadow-2xl"
        >
          TeamRadar
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
          className="text-lg sm:text-xl md:text-2xl max-w-3xl text-white text-opacity-90 leading-relaxed"
        >
          Больше никаких ожиданий — подключайся к игре с напарниками за секунды.
          Построй команду своей мечты. Для фанатов, стримеров, новичков.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.6 }}
          className="mt-10 flex justify-center"
        >
          <Link
            to="/board"
            className={`
    relative inline-block px-10 py-4 text-lg font-semibold tracking-wide
    text-white bg-gradient-to-r from-[#942de2] via-[#3505a3] to-[#9808a8]
    rounded-xl 
    overflow-hidden z-10
    transition-all duration-300 ease-in-out
    hover:scale-[1.05] active:scale-[0.97]
    hover:shadow-[0_0_20px_8px_rgba(75,19,120,0.8)]

    before:content-[''] before:absolute before:inset-0 before:z-0
    before:bg-[linear-gradient(120deg,transparent,rgba(255,255,255,0.15),transparent)]
    before:translate-x-[-100%] hover:before:translate-x-[100%]
    before:transition-transform before:duration-500 before:ease-in-out
  `}
          >
            <span className="relative z-10 cursor-pointer">🎮 Найти пати</span>
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.6, duration: 0.6 }}
          className="mt-16 w-full grid grid-cols-1 lg:grid-cols-3 gap-6 text-white"
        >
          {[
            {
              icon: <Brain size={40} />,
              title: "Алгоритм подбора",
              text: "Мы подбираем игроков по интересам, времени и скиллу. Забудь про случайных типов, сайт соберёт тебе идеальную пати.",
              color: "from-fuchsia-700 to-purple-900",
              hoverGlow: "hover:shadow-[0_0_20px_2px_#d946ef]",
            },
            {
              icon: <Mic size={40} />,
              title: "На связи",
              text: "Состав собран? Прекрасно, отдельный канал на Discord сервере уже ждёт вас!",
              color: "from-cyan-600 to-indigo-800",
              hoverGlow: "hover:shadow-[0_0_20px_2px_#06b6d4]",
            },
            {
              icon: <Flame size={40} />,
              title: "Активные сессии",
              text: "Показываем только активные сессии — тех, кто собирается прямо сейчас.",
              color: "from-rose-700 to-orange-700",
              hoverGlow: "hover:shadow-[0_0_20px_2px_#fb7185]",
            },
          ].map((card, idx) => (
            <motion.div
              key={idx}
              whileHover={{
                rotateX: 2,
                rotateY: -2,
              }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
              className={`
        relative group overflow-hidden 
        bg-gradient-to-br ${card.color} rounded-2xl p-6 border border-white/10
        ${card.hoverGlow}
        flex flex-col items-center justify-start text-center
        transform-gpu will-change-transform
        transition-shadow duration-700 ease-in-out

        before:absolute before:inset-0 before:rounded-2xl
        before:border-[1.5px] before:border-transparent before:pointer-events-none
        hover:before:border-white/30 before:transition-all before:duration-700

        after:content-[''] after:absolute after:inset-0 after:rounded-2xl
        after:bg-[linear-gradient(120deg,transparent,rgba(255,255,255,0.3),transparent)]
        after:translate-x-[-100%] hover:after:translate-x-[100%]
        after:transition-transform after:duration-500 after:ease-in-out
      `}
            >
              <div className="text-5xl mb-4">{card.icon}</div>
              <h3 className="text-2xl font-bold mb-2 text-white tracking-wide">
                {card.title}
              </h3>
              <p className="text-base text-gray-300 leading-relaxed max-w-xs">
                {card.text}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {particles.map((p) => (
        <div
          key={p.id}
          className={`absolute w-[8px] h-[8px] z-10 ${p.shape} animate-fadeInOut`}
          style={{
            top: p.top,
            left: p.left,
            backgroundColor: p.color,
            animationDuration: `2s`,
            filter: "brightness(1.4) blur(1px)",
          }}
        ></div>
      ))}

      <style>{`
        @keyframes fadeInOut {
          0% { opacity: 0; transform: scale(0.8); }
          15% { opacity: 1; transform: scale(1); }
          85% { opacity: 1; transform: scale(1); }
          100% { opacity: 0; transform: scale(1.4); }
        }
        .animate-fadeInOut {
          animation: fadeInOut linear forwards;
        }
      `}</style>
    </section>
  )
}

export default AboutSection
