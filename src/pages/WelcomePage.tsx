import "../styles/WelcomePage.scss"

const WelcomePage = () => {
  return (
    <div className="home-wrapper">
      <h1 className="text-4xl text-blue-500">Tailwind работает?</h1>

      <section className="hero-section text-center text-white">
        <h1 className="text-5xl font-extrabold leading-tight mb-4">
          TeamRadar — твоя команда всегда рядом
        </h1>
        <p className="text-lg text-gray-300 max-w-2xl mx-auto mb-6">
          Discord-бот нового поколения. Автоматическое создание комнат,
          управление ролями, голосовые лобби — всё в один клик.
        </p>
        <a
          href="https://discord.com/oauth2/authorize?client_id=ВАШ_ID&scope=bot+applications.commands&permissions=8"
          className="inline-block bg-blue-600 hover:bg-blue-700 transition px-6 py-3 rounded text-white font-semibold text-lg shadow"
        >
          ➕ Добавить TeamRadar в Discord
        </a>
      </section>

      <section className="features-section grid grid-cols-1 md:grid-cols-3 gap-6 px-6 py-16 text-white">
        <div className="feature-box">
          <h2 className="text-xl font-bold mb-2">📦 Автоматизация</h2>
          <p className="text-gray-300">
            Бот сам создаёт категории, каналы и роли — тебе остаётся только
            играть.
          </p>
        </div>
        <div className="feature-box">
          <h2 className="text-xl font-bold mb-2">🧠 Умная логика</h2>
          <p className="text-gray-300">
            Распознаёт команды, отслеживает активности, ведёт логи событий.
          </p>
        </div>
        <div className="feature-box">
          <h2 className="text-xl font-bold mb-2">🎮 Для геймеров</h2>
          <p className="text-gray-300">
            Поддержка голосовых комнат, ролей по играм, быстрых реакций и меток.
          </p>
        </div>
      </section>
    </div>
  )
}

export default WelcomePage
