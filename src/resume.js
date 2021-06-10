import styles from './resume.module.css';

function Resume() {
  return (
    <div className={styles.outerContainer}>
      <header className='App-header'>
        <p>
          Edit <code>src/Resume.js</code> and save to reload.
        </p>
        <a
          className='App-link'
          href='https://reactjs.org'
          target='_blank'
          rel='noopener noreferrer'
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default Resume;
