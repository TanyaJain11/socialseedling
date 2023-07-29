// import Feed from '../app/components/Feed';



// const Home = () => {
//   return (
//     <div>
//       <h1>Home</h1>
//       <Feed/>
//     </div>
//   );
// };

// export default Home;
import styles from './Home.module.css';
import Card from '../app/components/Card';


const Home = () => {
  return (
    <div className={styles.container}>
      <div className={styles.cardContainer}>
        <Card />
      </div>
      <div className={styles.cardContainer}>
        <Card />
      </div>
    </div>
  );
};




export default Home;