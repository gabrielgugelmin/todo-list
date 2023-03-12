import styles from './Badge.module.scss';

interface BadgeProps {
  text: string;
}

export function Badge({ text }: BadgeProps) {
  return <span className={styles.badge}>{text}</span>;
}
