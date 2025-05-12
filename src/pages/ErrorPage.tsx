import { Link } from "react-router-dom"
import styles from "../styles/pages/ErrorPage/ErrorPage.module.scss"

const ErrorPage = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.content}>
        <h1>404</h1>
        <h2>Страница не найдена</h2>
        <p>
          Возможно, вы попали сюда по неверной ссылке, или эта страница была
          удалена.
        </p>
        <Link to="/" className={styles.button}>
          Вернуться на главную
        </Link>
      </div>
    </div>
  )
}

export default ErrorPage
