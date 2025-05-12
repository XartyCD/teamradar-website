import styles from "../styles/pages/WelcomePage/WelcomePage.module.scss"
import { useEffect } from "react"
import Header from "../components/Header"

const WelcomePage = () => {
  useEffect(() => {
    const sections = document.querySelectorAll(`.${styles.fadeIn}`)
    sections.forEach((el) => {
      el.classList.add(styles.visible)
    })
  }, [])

  return (
    <div className={styles.wrapper}>
      <Header></Header>
      <section className={`${styles.hero} ${styles.fadeIn}`}>
        <h1>TeamRadar — платформа для кооперативных игр</h1>
        <div className="bg-red-500 text-white p-4 rounded-lg shadow-lg">
          Tailwind работает 🎉
        </div>

        <p className="text-">Хрусталев Иван Алексеевич</p>
        <p>
          Объединяем геймеров. Сайт помогает найти пати, а Discord-сервер
          создаёт для вас приватные каналы.
        </p>
        <a href="#how" className={styles.cta}>
          Как это работает
        </a>
      </section>

      <section className={`${styles.section} ${styles.fadeIn}`} id="features">
        <h2>🎮 Возможности платформы</h2>
        <div className={styles.featuresGrid}>
          <div>
            <h3>🔎 Поиск игроков</h3>
            <p>
              Фильтруй по играм, ролям и времени — находи себе пати на вечер.
            </p>
          </div>
          <div>
            <h3>🤖 Интеграция с Discord</h3>
            <p>
              Создаём голосовые и текстовые каналы автоматически, когда ты
              находишь тиммейтов.
            </p>
          </div>
          <div>
            <h3>📅 Гибкие заявки</h3>
            <p>Создавай свои заявки или присоединяйся к другим.</p>
          </div>
          <div>
            <h3>🔒 Приватные комнаты</h3>
            <p>
              Каждая команда получает своё личное пространство на
              Discord-сервере.
            </p>
          </div>
        </div>
      </section>

      <section className={`${styles.section} ${styles.fadeIn}`} id="how">
        <h2>🚀 Как это работает</h2>
        <ol>
          <li>Ты заходишь на сайт и создаёшь заявку на поиск команды.</li>
          <li>Находишь пати или к тебе присоединяются другие.</li>
          <li>Сайт отправляет информацию Discord-боту.</li>
          <li>На сервере создаётся канал — можно играть!</li>
        </ol>
      </section>

      <section className={`${styles.section} ${styles.fadeIn}`} id="about">
        <h2>🌐 О TeamRadar</h2>
        <p>
          Это проект, рожденный геймерами для геймеров. Мы устали искать
          тиммейтов рандомно — теперь всё организовано, красиво и удобно.
          TeamRadar — связующее звено между геймерами.
        </p>
      </section>

      <section className={`${styles.section} ${styles.fadeIn}`} id="join">
        <h2>🤝 Присоединяйся к нам</h2>
        <p>
          Мы постоянно развиваемся. Участвуй, предлагай идеи, формируй команды и
          помоги нам сделать кооператив удобным.
        </p>
        <a href="https://discord.gg/a4DTUfSMmy" className={styles.cta}>
          Discord сервер
        </a>
      </section>

      <footer className={`${styles.footer} ${styles.fadeIn}`}>
        <p>© 2025 TeamRadar prod. by Xarty</p>
      </footer>
    </div>
  )
}

export default WelcomePage
