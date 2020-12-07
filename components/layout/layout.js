import Header from '../header/header'
import cn from 'classnames'
import PageMeta from '../page-meta'
import styles from './layout.module.scss'

export default function Layout({ children }) {
  return (
    <div className={ styles.container }>
      <PageMeta />
      <Header />
      {children}
    </div>
  )
}
