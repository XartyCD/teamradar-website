import { Link } from "react-router-dom"
import { motion } from "framer-motion"
import { useEffect, useMemo, useState } from "react"
import styles from "../styles/pages/ErrorPage/ErrorPage.module.scss"

import { useLockPageScroll } from "../utils/useLockBodyScroll"

interface Blip {
  id: number
  top: string
  left: string
  angle: number
}

interface Star {
  id: number
  top: string
  left: string
  size: string
}

const generateBlips = (count: number): Blip[] => {
  return Array.from({ length: count }, (_, i) => {
    const angle = Math.random() * 360
    const radius = Math.random() * 40 + 20
    const rad = (angle * Math.PI) / 180

    const x = 50 + Math.cos(rad) * (radius / 2)
    const y = 50 + Math.sin(rad) * (radius / 2)

    return {
      id: i,
      top: `${y}%`,
      left: `${x}%`,
      angle,
    }
  })
}

const ErrorPage = () => {
  const [blipsLeft, setBlipsLeft] = useState<Blip[]>([])
  const [blipsRight, setBlipsRight] = useState<Blip[]>([])
  const [sweepAngle, setSweepAngle] = useState(0)

  useLockPageScroll(true)

  const stars = useMemo<Star[]>(
    () =>
      Array.from({ length: 150 }).map((_, i) => ({
        id: i,
        top: `${Math.random() * 100}%`,
        left: `${Math.random() * 100}%`,
        size: `${Math.random() * 1.5 + 0.5}px`,
      })),
    []
  )

  const [twinklingIds, setTwinklingIds] = useState<Set<number>>(new Set())

  useEffect(() => {
    const interval = setInterval(() => {
      const availableStars = stars.filter(() => Math.random() < 0.1)
      if (availableStars.length === 0) return

      const chosen =
        availableStars[Math.floor(Math.random() * availableStars.length)]
      if (!chosen) return

      setTwinklingIds((prev) => {
        const updated = new Set(prev)
        updated.add(chosen.id)
        return updated
      })

      setTimeout(() => {
        setTwinklingIds((prev) => {
          const updated = new Set(prev)
          updated.delete(chosen.id)
          return updated
        })
      }, 1500) // столько длится анимация
    }, 400) // каждые 200 мс вспыхивает новая

    return () => clearInterval(interval)
  }, [stars])

  useEffect(() => {
    setBlipsLeft(generateBlips(3))
    setBlipsRight(generateBlips(3))

    const duration = 3000
    const interval = setInterval(() => {
      const now = Date.now() % duration
      const angle = (now / duration) * 360
      setSweepAngle(angle)
    }, 50)

    return () => clearInterval(interval)
  }, [])

  const renderBlips = (blips: Blip[], side: string) => {
    return blips.map((blip) => {
      const diff = Math.abs(sweepAngle - blip.angle)
      const visible = diff < 6 || diff > 354
      return (
        visible && (
          <div
            key={`${side}-${blip.id}`}
            className={styles.blip}
            style={{ top: blip.top, left: blip.left }}
          />
        )
      )
    })
  }

  return (
    <div className={styles.errorWrapper}>
      <div className={styles.backgroundFog} />

      {/* Звёзды */}
      <div className={styles.starryLayer}>
        <div className={styles.starsMoving}>
          {stars.map((star) => (
            <span
              key={star.id}
              className={`${styles.star} ${
                twinklingIds.has(star.id) ? styles.twinklePulse : ""
              }`}
              style={{
                top: star.top,
                left: star.left,
                width: star.size,
                height: star.size,
              }}
            />
          ))}
        </div>
      </div>

      {/* Радара */}
      <div className={styles.radars}>
        <div className={`${styles.radar} ${styles.radarBottomLeft}`}>
          <div className={styles.sweep}></div>
          {renderBlips(blipsLeft, "left")}
        </div>

        <div className={`${styles.radar} ${styles.radarTopRight}`}>
          <div className={styles.sweep}></div>
          {renderBlips(blipsRight, "right")}
        </div>
      </div>

      {/* Терминал */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className={styles.errorTerminal}
      >
        <div className={styles.terminalHeader}>
          <span className={styles.redDot}></span>
          <span className={styles.yellowDot}></span>
          <span className={styles.greenDot}></span>
        </div>
        <div className={styles.terminalContent}>
          <h1 className={styles.codeLine}>[ERROR 404]</h1>
          <p className={styles.codeLine}>Навигационный сбой. Путь не найден.</p>
          <p className={styles.codeLine}>
            Ошибка навигации... В какой момент вы свернули не туда?
          </p>
          <Link to="/" className={styles.codeLineLink}>
            &gt; Перейти на главную
          </Link>
        </div>
      </motion.div>
    </div>
  )
}

export default ErrorPage
