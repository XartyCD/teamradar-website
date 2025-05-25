import { Link } from "react-router-dom"
export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-slate-900 to-black text-gray-300 pt-12 pb-6 px-6 m">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10 text-center">
        {/* О проекте */}
        <div className="flex flex-col gap-2">
          <h4 className="text-xl font-semibold text-white mb-6 ">О проекте</h4>
          <div className="flex flex-col gap-1">
            <p className="space-y-2 text-sm">
              TeamRadar — платформа ценителей тимплея.
            </p>
            <p className="space-y-2 text-sm">
              Создавай объявления, фильтруй по играм, находи интересных людей в
              пару кликов.
            </p>
          </div>
        </div>

        {/* Разделы */}
        <div className="flex flex-col gap-2">
          <h4 className="text-xl font-semibold text-white mb-4">Разделы</h4>
          <ul className="space-y-2 text-sm">
            <li>
              <Link to="/" className="group">
                <span className="text-gray-400 group-hover:text-white transition duration-200">
                  Главная
                </span>
              </Link>
            </li>
            <li>
              <Link to="/board" className="group">
                <span className="text-gray-400 group-hover:text-white transition duration-200">
                  Доска объявлений
                </span>
              </Link>
            </li>
            <li>
              <Link to="/forms" className="group">
                <span className="text-gray-400 group-hover:text-white transition duration-200">
                  Анкеты
                </span>
              </Link>
            </li>
            <li>
              <Link to="/community" className="group">
                <span className="text-gray-400 group-hover:text-white transition duration-200">
                  Сообщество
                </span>
              </Link>
            </li>
            <li>
              <Link to="/about" className="group">
                <span className="text-gray-400 group-hover:text-white transition duration-200">
                  О проекте
                </span>
              </Link>
            </li>
          </ul>
        </div>

        {/* Контакты  https://discord.gg/a4DTUfSMmy*/}
        <div className="flex flex-col gap-2">
          <h4 className="text-xl font-semibold text-white mb-4">Контакты</h4>
          <ul className="space-y-2 text-sm">
            <li>
              <span className="text-gray-400">Telegram:</span>{" "}
              <a
                href="https://t.me/kpectox"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition duration-200"
              >
                @kpectox
              </a>
            </li>

            <li>
              <span className="text-gray-400">Discord:</span>{" "}
              <span className="text-gray-400">.lafferty</span>
            </li>

            <li>
              <a
                href="https://discord.gg/a4DTUfSMmy"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-3 px-5 py-2 text-sm font-semibold text-white bg-gradient-to-r from-indigo-600 to-purple-600 rounded-full shadow-lg hover:-translate-y-1 hover:brightness-110 transition-all duration-300"
              >
                Discord-сервер
              </a>
            </li>
          </ul>
        </div>

        {/* Подписка или бренд */}
        <div className="flex flex-col gap-2">
          <h4 className="text-xl font-semibold text-white mb-4">Подпишись</h4>
          <p className="text-sm mb-3">
            Оставь свою почту и получай новости о новых функциях.
          </p>
          <form className="flex items-center">
            <input
              type="email"
              placeholder="Email"
              className="w-full px-3 py-2 rounded-l-md bg-slate-800 text-white focus:outline-none text-sm"
            />
            <button
              type="submit"
              className="bg-pink-600 hover:bg-pink-700 text-white px-4 py-2 rounded-r-md text-sm"
            >
              ➤
            </button>
          </form>
        </div>
      </div>

      <div className="mt-10 text-center text-gray-500 text-xs border-t border-slate-700 pt-6">
        © 2025 TeamRadar. Made with ❤️ by Xarty
      </div>
    </footer>
  )
}
