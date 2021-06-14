import styles from '../resume.module.css';

function Section(props) {
  return (
    <div className={styles.section}>
      <h2 className={styles.title}>{props.title}</h2>
      {props.children}
    </div>
  );
}

export default Section;
