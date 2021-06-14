import styles from '../resume.module.css';

function Description(props) {
  return (
    <p className={styles.description} dangerouslySetInnerHTML={{ __html: props.children }} />
  );
}

export default Description;
