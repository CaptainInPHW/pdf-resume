import data from './data.json';
import Job from './components/job';
import Details from './components/details';
import Section from './components/section';
import Description from './components/description';

import styles from './resume.module.css';

function Resume() {
  return (
    <div className={styles.outerContainer}>
      <div className={styles.innerContainer}>
        <div className={styles.left}>
          <Section title={data.profile.title}>
            <Description>{data.profile.description}</Description>
          </Section>
          <Section title='工作经历'>
            {data.jobs.map(job => <Job key={job.company} {...job} />)}
          </Section>
          <Section title={data.education.title}>
            <a href={data.education.link} target='_blank' rel='noreferrer'>{data.education.university}</a>，
            {data.education.major}，
            {data.education.degree}，
            {data.education.duration}。
          </Section>
        </div>
        <div className={styles.right}>
          <div className={styles.name}>{data.name}</div>
          <Details details={data.details} />
        </div>
      </div>
    </div>
  );
}

export default Resume;
