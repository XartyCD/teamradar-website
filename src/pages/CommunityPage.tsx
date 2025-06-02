import { useState, useEffect, useMemo } from "react"

import {
  FaHeart,
  FaRegComment,
  FaPaperPlane,
  FaComments,
  FaQuestionCircle,
  FaWrench,
} from "react-icons/fa"
import styles from "../styles/Pages/CommunityPage/CommunityPage.module.scss"

interface Post {
  id: number
  author: string
  avatar: string
  content: string
  likes: number
  comments: Comment[]
}

interface Comment {
  id: number
  author: string
  content: string
}

const sectionData: Record<string, Post[]> = {
  Лента: [
    {
      id: 1,
      author: "@fpslegend",
      avatar: "/images/avatars/avatar1.png",
      content:
        "Сегодня апнул Иммортала в Valorant! Кто хочет катнуть — в ЛС 🚀",
      likes: 12,
      comments: [
        { id: 1, author: "@healerqueen", content: "Красава! 🔥" },
        { id: 2, author: "@weekendgamer", content: "Поздравляю!" },
      ],
    },
    {
      id: 2,
      author: "@coopmaster",
      avatar: "/images/avatars/avatar5.png",
      content: "Ищу тимму на вечер в Lethal Company. Мик есть, адекват. 🚀",
      likes: 7,
      comments: [],
    },
    {
      id: 3,
      author: "@aimqueen",
      avatar: "/images/avatars/avatar6.png",
      content: "Кто хочет просто пообщаться и поиграть в Stardew Valley? 🌾",
      likes: 5,
      comments: [],
    },
    {
      id: 4,
      author: "@nightwolf",
      avatar: "/images/avatars/avatar7.png",
      content: "Познакомлюсь с кем-нибудь для регулярных каток в Warzone 😎",
      likes: 9,
      comments: [],
    },
    {
      id: 5,
      author: "@justchill",
      avatar: "/images/avatars/avatar8.png",
      content: "Просто хочу поболтать, кто не токсик — welcome в ЛС! 💬",
      likes: 3,
      comments: [],
    },
    {
      id: 17,
      author: "@pixelhunt",
      avatar: "/images/avatars/avatar3.png",
      content: "Кто в Stardew или Terraria сегодня вечером?",
      likes: 6,
      comments: [{ id: 1, author: "@sunny", content: "Я в деле!" }],
    },
    {
      id: 18,
      author: "@fireblade",
      avatar: "/images/avatars/avatar9.png",
      content: "Скучно, кто поболтать в дискорде хочет? Без флейма и драмы.",
      likes: 2,
      comments: [],
    },
  ],
  Обсуждение: [
    {
      id: 6,
      author: "@strategist",
      avatar: "/images/avatars/avatar3.png",
      content:
        "Как вам последнее обновление в Apex? Кажется, баланс снова съехал...",
      likes: 4,
      comments: [
        { id: 1, author: "@balanced", content: "Полностью согласен." },
      ],
    },
    {
      id: 7,
      author: "@gameanalyst",
      avatar: "/images/avatars/avatar9.png",
      content:
        "Почему разработчики Valorant игнорируют фидбэк по новым агентам?",
      likes: 6,
      comments: [],
    },
    {
      id: 8,
      author: "@modfan",
      avatar: "/images/avatars/avatar10.png",
      content:
        "Моды в Skyrim — это лучшее, что случалось с игрой? Ваше мнение!",
      likes: 2,
      comments: [],
    },
    {
      id: 9,
      author: "@survivorpro",
      avatar: "/images/avatars/avatar11.png",
      content:
        "Как думаете, стоит ли ждать The Forest 3? Или хватит уже выживачей?",
      likes: 1,
      comments: [],
    },
    {
      id: 10,
      author: "@retrolover",
      avatar: "/images/avatars/avatar12.png",
      content: "Почему старые игры ощущаются душевнее? Разве не так? 🎮",
      likes: 5,
      comments: [],
    },
    {
      id: 19,
      author: "@fpsdad",
      avatar: "/images/avatars/avatar5.png",
      content: "Есть ли смысл в рейтинге в кооп-играх?",
      likes: 3,
      comments: [],
    },
    {
      id: 20,
      author: "@lorescholar",
      avatar: "/images/avatars/avatar8.png",
      content: "Теория: Dark Souls и Elden Ring — это одна вселенная?",
      likes: 9,
      comments: [{ id: 1, author: "@gitgud", content: "Есть схожести!" }],
    },
    {
      id: 21,
      author: "@patchwatch",
      avatar: "/images/avatars/avatar6.png",
      content: "Последний патч в Overwatch что-то совсем странный... Thoughts?",
      likes: 4,
      comments: [],
    },
  ],
  Вопросы: [
    {
      id: 11,
      author: "@newbie",
      avatar: "/images/avatars/avatar4.png",
      content:
        "Как отключить кроссплей в Call of Duty? Меня постоянно кидает к ПК-шникам.",
      likes: 3,
      comments: [],
    },
    {
      id: 12,
      author: "@troubleshooter",
      avatar: "/images/avatars/avatar13.png",
      content:
        "После обновы в Genshin всё лагает. Есть идеи, как это пофиксить?",
      likes: 4,
      comments: [],
    },
    {
      id: 13,
      author: "@builderguy",
      avatar: "/images/avatars/avatar14.png",
      content: "Можно ли как-то настроить перенос привата в Minecraft?",
      likes: 2,
      comments: [],
    },
    {
      id: 14,
      author: "@fpsfix",
      avatar: "/images/avatars/avatar15.png",
      content: "Очень низкий FPS в Fortnite на средних — кто сталкивался?",
      likes: 1,
      comments: [],
    },
    {
      id: 15,
      author: "@techtech",
      avatar: "/images/avatars/avatar16.png",
      content: "Ищу гайд, как правильно настроить Discord бота на Python.",
      likes: 3,
      comments: [],
    },
    {
      id: 16,
      author: "@archer",
      avatar: "/images/avatars/avatar4.png",
      content: "Какой самый оптимальный DPI для шутеров?",
      likes: 5,
      comments: [
        { id: 1, author: "@aimguru", content: "Около 800 — классика!" },
      ],
    },
    {
      id: 17,
      author: "@rookie",
      avatar: "/images/avatars/avatar6.png",
      content: "Почему меня не пускает в лобби в Valorant после обновления?",
      likes: 1,
      comments: [],
    },
    {
      id: 18,
      author: "@syshelper",
      avatar: "/images/avatars/avatar11.png",
      content: "Есть ли способ играть в Rust на слабом ноуте?",
      likes: 4,
      comments: [],
    },
    {
      id: 19,
      author: "@voicechatfail",
      avatar: "/images/avatars/avatar14.png",
      content:
        "Как настроить голосовой чат в PUBG, чтобы он не вылетал каждые 5 минут?",
      likes: 2,
      comments: [],
    },
    {
      id: 20,
      author: "@archer",
      avatar: "/images/avatars/avatar4.png",
      content: "Какой самый оптимальный DPI для шутеров?",
      likes: 5,
      comments: [
        { id: 1, author: "@aimguru", content: "Около 800 — классика!" },
      ],
    },
    {
      id: 21,
      author: "@rookie",
      avatar: "/images/avatars/avatar6.png",
      content: "Почему меня не пускает в лобби в Valorant после обновления?",
      likes: 1,
      comments: [],
    },
    {
      id: 22,
      author: "@syshelper",
      avatar: "/images/avatars/avatar11.png",
      content: "Есть ли способ играть в Rust на слабом ноуте?",
      likes: 4,
      comments: [],
    },
    {
      id: 23,
      author: "@voicechatfail",
      avatar: "/images/avatars/avatar14.png",
      content:
        "Как настроить голосовой чат в PUBG, чтобы он не вылетал каждые 5 мину?",
      likes: 2,
      comments: [],
    },
  ],
  Техподдержка: [],
}

const sections = [
  { name: "Лента", icon: <FaComments /> },
  { name: "Обсуждение", icon: <FaRegComment /> },
  { name: "Вопросы", icon: <FaQuestionCircle /> },
  { name: "Техподдержка", icon: <FaWrench /> },
]

export default function CommunityPage() {
  const [commentText, setCommentText] = useState<string>("")
  const [activePostId, setActivePostId] = useState<number | null>(null)
  const [activeSection, setActiveSection] = useState<string>("Лента")
  const [techSupportText, setTechSupportText] = useState<string>("")
  const [searchQuery, setSearchQuery] = useState<string>("")
  const [sectionPages, setSectionPages] = useState<Record<string, number>>({
    Лента: 1,
    Обсуждение: 1,
    Вопросы: 1,
  })

  const [currentTime, setCurrentTime] = useState(new Date())

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(new Date())
    }, 1000)

    return () => clearInterval(interval)
  }, [])

  const POSTS_PER_PAGE = 5

  const handleLike = (postId: number) => {
    sectionData[activeSection] = sectionData[activeSection].map((post) =>
      post.id === postId ? { ...post, likes: post.likes + 1 } : post
    )
  }

  const currentPage = sectionPages[activeSection] || 1

  const updatePage = (page: number) => {
    setSectionPages((prev) => ({
      ...prev,
      [activeSection]: page,
    }))
  }

  const handleAddComment = (postId: number) => {
    if (!commentText.trim()) return
    sectionData[activeSection] = sectionData[activeSection].map((post) => {
      if (post.id === postId) {
        const newComment: Comment = {
          id: Date.now(),
          author: "@you",
          content: commentText,
        }
        return { ...post, comments: [...post.comments, newComment] }
      }
      return post
    })
    setCommentText("")
    setActivePostId(null)
  }

  const layoutClass = () => {
    switch (activeSection) {
      case "Лента":
        return "space-y-8 max-w-md mx-auto"
      case "Обсуждение":
        return "grid grid-cols-1 md:grid-cols-2 gap-6"
      case "Вопросы":
        return "space-y-8 max-w-2xl mx-auto"
      default:
        return ""
    }
  }

  const filteredPosts =
    activeSection === "Обсуждение" || activeSection === "Вопросы"
      ? sectionData[activeSection].filter((post) =>
          post.content.toLowerCase().includes(searchQuery.toLowerCase())
        )
      : sectionData[activeSection]

  const totalPages = Math.ceil(filteredPosts.length / POSTS_PER_PAGE)
  const displayedPosts = filteredPosts.slice(
    (currentPage - 1) * POSTS_PER_PAGE,
    currentPage * POSTS_PER_PAGE
  )

  const stars = useMemo(() => {
    return [...Array(30)].map((_, i) => {
      const top = Math.random() * 100
      const left = Math.random() * 100
      const size = 2 + Math.random() * 5
      const delay = Math.random() * 5
      const duration = 2 + Math.random() * 3

      return (
        <div
          key={`twinkle-${i}`}
          className={styles.twinkleStar}
          style={
            {
              top: `${top}%`,
              left: `${left}%`,
              width: `${size}px`,
              height: `${size}px`,
              animationDelay: `${delay}s`,
              animationDuration: `${duration}s`,
            } as React.CSSProperties
          }
        />
      )
    })
  }, [])

  const renderPagination = () => {
    if (totalPages <= 1) return null
    return (
      <div className="flex justify-center mt-10 gap-3">
        <button
          disabled={currentPage === 1}
          onClick={() => updatePage(Math.max(currentPage - 1, 1))}
          className="px-4 py-2 rounded-lg bg-white/10 text-white/80 hover:bg-white/20 disabled:opacity-30 cursor-pointer"
        >
          &lt;
        </button>
        {Array.from({ length: totalPages }, (_, i) => (
          <button
            key={i + 1}
            onClick={() => updatePage(i + 1)}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-150 cursor-pointer ${
              currentPage === i + 1
                ? "bg-gradient-to-r from-indigo-500 to-purple-600 text-white shadow"
                : "bg-white/5 text-white/60 hover:bg-white/10"
            }`}
          >
            {i + 1}
          </button>
        ))}
        <button
          disabled={currentPage === totalPages}
          onClick={() => updatePage(Math.min(currentPage + 1, totalPages))}
          className="px-4 py-2 rounded-lg bg-white/10 text-white/80 hover:bg-white/20 disabled:opacity-30 cursor-pointer"
        >
          &gt;
        </button>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-[#0d0f1a] text-white px-4 pt-28 pb-10">
      <div className="flex justify-center mb-10 gap-3 flex-wrap">
        {sections.map((section) => {
          // определим модификатор для каждой кнопки
          const glowClassMap: Record<string, string> = {
            Лента: styles["glow-lenta"],
            Обсуждение: styles["glow-obsuzhdenie"],
            Вопросы: styles["glow-voprosy"],
            Техподдержка: styles["glow-support"],
          }

          return (
            <button
              key={section.name}
              onClick={() => {
                setActiveSection(section.name)
                setSearchQuery("")
                updatePage(1)
              }}
              onMouseMove={(e) => {
                const rect = e.currentTarget.getBoundingClientRect()
                const x = e.clientX - rect.left
                const y = e.clientY - rect.top
                e.currentTarget.style.setProperty("--x", `${x}px`)
                e.currentTarget.style.setProperty("--y", `${y}px`)
              }}
              className={`
        ${styles.glowButton} 
        ${glowClassMap[section.name]} 
        flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium cursor-pointer
        ${
          activeSection === section.name
            ? "border-none"
            : "border border-white/20 hover:bg-white/5"
        }
      `}
            >
              {section.icon}
              <span>{section.name}</span>
            </button>
          )
        })}
      </div>

      {(activeSection === "Обсуждение" || activeSection === "Вопросы") && (
        <div className="max-w-xl mx-auto mb-8">
          {activeSection === "Вопросы" && (
            <div className="flex justify-end mb-4">
              <button className="px-5 py-2 rounded-xl bg-gradient-to-r from-yellow-400 to-orange-500 text-black font-semibold shadow hover:scale-105 transition-transform cursor-pointer">
                Ваши вопросы
              </button>
            </div>
          )}
          <input
            type="text"
            placeholder={
              activeSection === "Вопросы"
                ? "Найдите интересующий вас вопрос..."
                : activeSection === "Обсуждение"
                ? "Поиск по обсуждениям..."
                : "Поиск по сообщениям..."
            }
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full px-4 py-2 rounded-xl bg-[#121624] border border-white/10 text-white placeholder-white/50 focus:outline-none"
          />
        </div>
      )}

      <div className={layoutClass()}>
        {activeSection === "Техподдержка" ? (
          <div className={styles.supportPanel}>
            {/* ✨ Живое небо */}
            <div className={styles.starField}>{stars}</div>

            <h2>
              <FaWrench /> Центр поддержки
            </h2>

            <div className={styles.infoBox}>
              Опишите проблему как можно подробнее. Ответ приходит в течение{" "}
              <span style={{ color: "#a5b4fc", fontWeight: 500 }}>
                24 часов
              </span>
              .
            </div>

            <div className={styles.inputGroup}>
              <input type="text" placeholder="Ваше имя" />
              <input type="email" placeholder="Email для ответа" />
            </div>

            <div className={styles.inputGroup}>
              <input type="text" placeholder="Тема обращения" />
              <div className={styles.selectWrapper}>
                <select required defaultValue="">
                  <option value="" disabled hidden>
                    Выберите категорию
                  </option>
                  <option value="error">Техническая ошибка</option>
                  <option value="payment">Оплата</option>
                  <option value="complaint">Жалоба</option>
                  <option value="other">Другое</option>
                </select>
                <span className={styles.customArrow}>▼</span>
              </div>
            </div>

            <textarea
              placeholder="Опишите вашу проблему..."
              value={techSupportText}
              onChange={(e) => setTechSupportText(e.target.value)}
            />

            <div className={styles.metaInfo}>
              Обращение от {currentTime.toLocaleDateString("ru-RU")} в{" "}
              {currentTime.toLocaleTimeString("ru-RU", {
                hour: "2-digit",
                minute: "2-digit",
                second: "2-digit",
              })}
            </div>

            <button className={styles.submitButton}>
              <FaPaperPlane /> Отправить
            </button>
          </div>
        ) : (
          displayedPosts.map((post) => (
            <div
              key={post.id}
              className={`bg-[#181c2f] border rounded-2xl p-6 shadow transition ${
                activeSection === "Лента"
                  ? "border-white/10"
                  : activeSection === "Обсуждение"
                  ? "border-purple-500/30"
                  : "border-yellow-500/30"
              }`}
            >
              <div className="flex items-center gap-4 mb-3">
                <img
                  src={post.avatar}
                  alt={post.author}
                  className="w-12 h-12 rounded-full border border-white/20 object-cover"
                />
                <span className="font-semibold text-base text-indigo-300">
                  {post.author}
                </span>
              </div>
              <p className="text-white/90 text-base leading-relaxed mb-4 whitespace-pre-line">
                {post.content}
              </p>
              <div className="flex items-center gap-6 text-sm text-gray-400">
                <button
                  onClick={() => handleLike(post.id)}
                  className="flex items-center gap-2 hover:text-pink-400 transition cursor-pointer"
                >
                  <FaHeart /> {post.likes}
                </button>
                <button
                  onClick={() =>
                    setActivePostId(activePostId === post.id ? null : post.id)
                  }
                  className="flex items-center gap-2 hover:text-blue-400 transition cursor-pointer"
                >
                  <FaRegComment /> {post.comments.length}
                </button>
              </div>

              {activePostId === post.id && (
                <div className="mt-5">
                  <div className="space-y-3 mb-4">
                    {post.comments.map((c) => (
                      <div
                        key={c.id}
                        className="bg-white/5 rounded-xl p-3 border border-white/10"
                      >
                        <span className="text-sm text-indigo-400">
                          {c.author}
                        </span>
                        <p className="text-sm text-white mt-1">{c.content}</p>
                      </div>
                    ))}
                  </div>
                  <div className="flex items-center gap-3">
                    <input
                      type="text"
                      placeholder="Ваш комментарий..."
                      className="flex-1 bg-[#121624] text-white p-2 rounded-xl border border-white/10 focus:outline-none"
                      value={commentText}
                      onChange={(e) => setCommentText(e.target.value)}
                    />
                    <button
                      onClick={() => handleAddComment(post.id)}
                      className="p-2 bg-blue-600 hover:bg-blue-700 rounded-xl cursor-pointer"
                    >
                      <FaPaperPlane />
                    </button>
                  </div>
                </div>
              )}
            </div>
          ))
        )}
      </div>
      {/* Пагинация */}
      {activeSection !== "Техподдержка" && renderPagination()}
    </div>
  )
}
