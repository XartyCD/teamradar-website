import { Link } from "react-router-dom"
import AboutSection from "../components/AboutSection"
import { motion } from "framer-motion"

const WelcomePage = () => {
  return (
    <div className="bg-gradient-to-br from-slate-900 via-black to-slate-900 text-white">
      {/* Hero Section */}
      <AboutSection />

      {/* Mission Section */}
      <section
        id="mission"
        className="py-24 px-6 lg:px-12 text-center flex flex-col items-center justify-center  gap-8"
      >
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-3xl sm:text-4xl font-bold mb-8"
        >
          Наша цель
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.7 }}
          className="max-w-4xl text-lg sm:text-xl text-gray-300"
        >
          Создать удобное пространство, где каждый игрок сможет найти команду по
          интересам, играм, или же уровню скилла. Алгоритмы подбора, фильтрация
          по играм, Discord-интеграция и мгновенное подключение к актуальным
          сессиям делают платформу идеальным решением для вечерних каток.
        </motion.p>
      </section>

      <section className="py-16 px-4 sm:px-6 bg-gradient-to-br from-[#0f0c29] via-[#302b63] to-[#24243e] text-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-10">
          {[
            {
              icon: "🚀",
              title: "Идея проекта",
              text: "TeamRadar появился из-за любви к кооперативным играм. Мы знаем, как сложно найти подходящую команду в нужное время. Поэтому мы создали сервис, который позволяет найти игроков мгновенно — без проблем и вечных ожиданий.",
              color: "from-pink-500 to-purple-500",
            },
            {
              icon: "🎮",
              title: "Кому это нужно?",
              text: "Тем, кто устал катать в соло. Тем, кто хочет играть в коопы когда хочется, а не когда удобно другим. Тем, кто ценит атмосферу командной игры, а не случайные матчи с молчащими напарниками.",
              color: "from-indigo-500 to-blue-500",
            },
            {
              icon: "✨",
              title: "Что нас отличает?",
              text: "Никаких афк комнат и долгих ожиданий напарников. Только живой поток игроков, фильтрация по играм и интеграции с Discord. Всё быстро, плавно, современно.",
              center: true,
              full: true,
              color: "from-purple-600 to-indigo-600",
            },
            {
              icon: "📈",
              title: "Будущие планы",
              text: "Больше гибкости, больше фана. Профили с расширенной кастомизацией, VIP-функционал, а также Discord бот, который синхронизирует твою активность, назначает роли и зовёт в пати, когда ты нужен команде. Мы строим не просто платформу — мы строим геймерскую экосистему.",
              color: "from-blue-500 to-cyan-500",
            },
            {
              icon: "🤝",
              title: "Как пользоваться?",
              text: (
                <>
                  Присоединяйся к нашему{" "}
                  <a
                    href="https://discord.gg/a4DTUfSMmy"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="!inline-block !font-semibold !bg-gradient-to-r !from-[#44e39c] !via-[#45ecff] !to-[#33fcdb] !bg-clip-text !text-transparent transition-all duration-500 ease-in-out hover:!drop-shadow-[0_0_10px_rgba(20,255,150,0.8)]"
                  >
                    Discord-серверу
                  </a>
                  , затем регистрируйся на сайте — желательно с привязкой
                  Discord-аккаунта. После этого можешь смело создавать или
                  находить пати в{" "}
                  <Link
                    to="/board"
                    className="!inline-block !font-semibold !bg-gradient-to-r !from-fuchsia-500 !via-pink-500 !to-red-500 !bg-clip-text !text-transparent transition-all duration-500 ease-in-out hover:!drop-shadow-[0_0_3px_rgba(183,122,23,0.8)]"
                  >
                    Доске объявлений
                  </Link>
                  , захочешь подобрать людей по интересам — тебе во вкладку{" "}
                  <Link
                    to="/forms"
                    className="!inline-block !font-semibold !bg-gradient-to-r !from-cyan-400 !via-sky-500 !to-indigo-500 !bg-clip-text !text-transparent transition-all duration-500 ease-in-out hover:!drop-shadow-[0_0_8px_rgba(56,189,248,0.8)]"
                  >
                    Анкеты
                  </Link>
                  .
                </>
              ),
              color: "from-rose-500 to-pink-500",
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.2 }}
              className={`relative p-6 sm:p-8 rounded-3xl bg-white/5 border border-white/10 shadow-lg backdrop-blur-lg w-full ${
                item.full ? "md:col-span-2" : ""
              }`}
            >
              {/* Градиентный фон */}
              <div
                className={`absolute inset-0 rounded-3xl z-0 bg-gradient-to-r ${item.color} opacity-10`}
              ></div>

              {/* Контент */}
              <div className="relative z-10 flex flex-col gap-2">
                <h3
                  className={`text-2xl sm:text-3xl font-black mb-3 flex items-center gap-2 ${
                    item.center ? "justify-center text-center" : ""
                  }`}
                >
                  <span className="text-white text-3xl sm:text-4xl drop-shadow">
                    {item.icon}
                  </span>
                  <span
                    className="relative inline-block text-white"
                    style={{
                      textShadow: `
                  0 0 12px rgba(255, 255, 255, 0.1),
                  0 0 20px ${
                    item.color.includes("pink")
                      ? "#ec4899"
                      : item.color.includes("blue")
                      ? "#3b82f6"
                      : "#a855f7"
                  }
                `,
                    }}
                  >
                    {item.title}
                  </span>
                </h3>

                <p
                  className={`text-gray-200 text-base sm:text-lg leading-relaxed ${
                    item.center ? "text-center" : ""
                  }`}
                >
                  {item.text}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-24 px-6 lg:px-12 flex flex-col items-center text-center gap-4">
        <motion.h2
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="text-3xl sm:text-4xl font-bold mb-8"
        >
          Готов найти тиммейтов?
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="max-w-2xl text-lg sm:text-xl text-gray-300 mb-8"
        >
          Присоединяйся к сообществу TeamRadar уже сейчас. Добавь проект в
          закладки и заходи перед каждой игровой сессией.
        </motion.p>

        <motion.a
          href="https://discord.gg/a4DTUfSMmy"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{
            scale: 1.05,
            rotate: -1,
            boxShadow: "0 0 20px rgba(147, 51, 234, 0.6)", // фиолетовое свечение
          }}
          transition={{
            type: "spring",
            stiffness: 250,
            damping: 15,
          }}
          className="mt-3 inline-block px-8 py-4 bg-gradient-to-r from-pink-600 via-purple-600 to-indigo-600 text-white font-semibold rounded-full text-lg tracking-wide shadow-md"
        >
          Discord сервер
        </motion.a>
      </section>
    </div>
  )
}

export default WelcomePage
