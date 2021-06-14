import styles from '../resume.module.css';

function Details(props) {
  return (
    <div className={styles.detail}>
      {props.details.map(detail => <p key={detail} dangerouslySetInnerHTML={{ __html: detail }} />)}
    </div>
  );
}

export default Details;
