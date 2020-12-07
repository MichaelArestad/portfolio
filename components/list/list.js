import PageMeta from '../page-meta'
import cn from 'classnames'
import styles from './list.module.scss'

export default function List({
  style,
  children
  }) {

  const styleType = () => {
    if ( style === 'minimal' ) {
      return styles.minimal;
    }
  };

  return (
    <ul className={ cn(styles.list, styleType() ) }>
      {children}
    </ul>
  )
}
