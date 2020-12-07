import PageMeta from '../page-meta'
import cn from 'classnames'
import styles from './list.module.scss'

export default function List({
  minimal,
  children
  }) {

  const styleType = () => {
    if ( minimal === true ) {
      return styles.minimal;
    }
  };

  return (
    <ul className={ cn(styles.list, styleType() ) }>
      {children}
    </ul>
  )
}
