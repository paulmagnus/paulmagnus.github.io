import styles from "./card.module.scss";

type CardProps = React.HTMLAttributes<HTMLDivElement>;

export default function Card(props: CardProps): React.ReactElement {
  return <div className={styles.card} {...props} />;
}