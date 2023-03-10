import styles from './Badge.module.scss';

export function Badge({ quantity = 0 }) {
  return <span className={styles.badge}>{quantity}</span>;
}
