import styles from './us.module.css';

const UserStoryList = ({ userStories }) => {
  return (
    <div>
      <ul>
        {userStories.map((story) => (
          <UserStory key={story.id} story={story} />
        ))}
      </ul>
    </div>
  );
};

export default UserStoryList;


const UserStory = ({ story }) => {
  return (
    <li key={story.id} className={styles.container} id={story.id} style={{ marginBottom: '20px' }}>
      <div className={styles.header}>
        <p className={styles.name}>{story.nombre}</p>
        <p className={styles.points}>{story.puntos}</p>
      </div>

      <p className={styles.justification}>{story.justificacion}</p>
      <div className={styles.paragraphContainer}>
        <p className={styles.paragraph}><strong>Esfuerzo:</strong> {story.esfuerzo}</p>
        <p className={styles.paragraph}><strong>Complejidad:</strong> {story.complejidad}</p>
        <p className={styles.paragraph}><strong>Incertidumbre:</strong> {story.incertidumbre}</p>
      </div>
      
      <div className={styles.bubble}>
        <p style={{marginBottom: 0}}>
          <span className={styles.icon}>👨🏼‍💻</span>Asignado a:
          <span className={styles.responsible}>Leonel Cappiello</span>
        </p>
      </div>
    </li>
  );
};
