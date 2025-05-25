import { useState, useEffect } from "react"
import { Link, useLocation } from "react-router-dom"

interface NavItem {
  name: string
  path: string
}

export default function LendingMenu() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [navHaveBackground, setNavHaveBackground] = useState(false)
  const location = useLocation()
  const isHome = location.pathname === "/"

  const navItems: NavItem[] = [
    { name: "Главная", path: "/" },
    { name: "Доска объявлений", path: "/board" },
    { name: "Анкеты", path: "/forms" },
    { name: "Сообщество", path: "/community" },
    { name: "О проекте", path: "/about" },
    { name: "Профиль", path: "/profile" },
  ]

  const itemColorMap = {
    "/": "from-purple-500 to-indigo-500",
    "/board": "from-red-500 to-orange-400",
    "/forms": "from-pink-400 to-rose-500",
    "/community": "from-green-400 to-lime-400",
    "/about": "from-blue-500 to-cyan-400",
    "/profile": "from-pink-500 to-rose-400",
  }

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)

  useEffect(() => {
    const handleScroll = () => {
      setNavHaveBackground(window.scrollY > 100)
    }

    window.addEventListener("scroll", handleScroll)
    handleScroll()

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  return (
    <nav
      className={`fixed w-full z-50 flex flex-row items-center justify-end lg:justify-center text-white h-16 lg:h-20 transition-all px-6 duration-200 ${
        navHaveBackground
          ? "bg-black bg-opacity-80 shadow-lg top-0"
          : `${isHome ? "top-5.5" : "top-0"} bg-transparent`
      }`}
    >
      {/* Desktop */}
      <div className="hidden lg:flex gap-10 xl:gap-16">
        {navItems.map((item, index) => (
          <Link
            key={index}
            to={item.path}
            className={`relative px-3 py-2 text-xl font-medium cursor-pointer transition-all duration-300 ease-in-out
              ${
                location.pathname === item.path
                  ? "text-white"
                  : "text-gray-300 hover:text-white"
              }
              group
            `}
          >
            <span className="relative z-10">{item.name}</span>
            <span
              className={`absolute left-0 bottom-0 h-[2px] w-full rounded-full transform scale-x-0 group-hover:scale-x-100 origin-center transition-transform duration-500
                ${location.pathname === item.path ? "scale-x-100" : ""}
                bg-gradient-to-r ${
                  itemColorMap[item.path as keyof typeof itemColorMap]
                }
              `}
            />
          </Link>
        ))}
      </div>

      {/* Burger icon */}
      <div className="lg:hidden flex">
        <button onClick={toggleMenu} className="text-white cursor-pointer">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            strokeWidth="2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={`lg:hidden fixed inset-0 bg-gray-900 bg-opacity-95 z-40 transition-transform duration-300 ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
        onClick={toggleMenu}
      >
        <div
          className="flex justify-end p-4"
          onClick={(e) => e.stopPropagation()}
        >
          <button onClick={toggleMenu} className="text-white cursor-pointer">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        <ul className="flex flex-col items-center justify-center gap-8 mt-16 text-xl">
          {navItems.map((item, index) => (
            <li key={index}>
              <Link
                to={item.path}
                onClick={toggleMenu}
                className={`relative px-4 py-2 cursor-pointer group transition-all duration-300 ease-in-out
                  ${
                    location.pathname === item.path
                      ? "text-white font-bold"
                      : "text-gray-300 hover:text-white"
                  }
                `}
              >
                <span className="relative z-10">{item.name}</span>
                <span
                  className={`absolute left-0 bottom-0 h-[2px] w-full transform scale-x-0 group-hover:scale-x-100 origin-center transition-transform duration-300
                    ${location.pathname === item.path ? "scale-x-100" : ""}
                    bg-gradient-to-r ${
                      itemColorMap[item.path as keyof typeof itemColorMap]
                    }
                  `}
                />
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  )
}
