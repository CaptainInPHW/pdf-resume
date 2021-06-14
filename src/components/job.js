import styles from '../resume.module.css';

function Job(props) {
  return (
    <div className={styles.job}>
      <div className={styles.jobTitle}>
        <h4 className={styles.jobCompany}>{props.company}</h4>
        <span className={styles.jobDuration}>{props.duration}</span>
      </div>
      <div className={styles.jobSummary} dangerouslySetInnerHTML={{ __html: props.summary }} />
      {props.details
        ? (
          <ul className={styles.jobDetails}>
            {props.details.map(detail =>
              <li key={detail} className={styles.jobDetail} dangerouslySetInnerHTML={{ __html: detail }} />,
            )}
          </ul>
        )
        : null
      }
    </div>
  );
}

export default Job;
