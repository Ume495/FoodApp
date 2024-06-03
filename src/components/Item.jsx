import styles from "./item.module.css";
export default function Item({ item }) {
  return (
    <div className={styles.Container}>
      <div className={styles.imageContainer}>
        <img
          className={styles.image}
          src={`https://spoonacular.com/cdn/ingredients_100x100/` + item.image}
        />
        <div className={styles.nameContainer}>
          <div className={styles.name}>{item.name}</div>
          <div className={styles.amount}>
            {item.amount} {item.unit}
          </div>
        </div>
      </div>
    </div>
  );
}
