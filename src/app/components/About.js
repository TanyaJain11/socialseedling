import Head from 'next/head'
import styles from '../styles/about.module.css'
import Link from 'next/link'

const About = () => {
  
  return (
    <div>
        <header  className={styles.header}>
          
          <div className={styles.appName}>socialSeedling</div>
          
         
        </header>
      <main className={`${styles.mainContent} centerContainer`}>
          
          <section className={styles.contentBlock} style={{"marginTop":"40px"}}>
              <img src="https://ik.imagekit.io/lrjseyuxi3m/todoapp/undraw_checklist__re_2w7v_1_EBpT5tUGgO.png?updatedAt=1636555587766" alt="" />
              <div className={styles.textBlock}>
                <h2>About the project</h2>
                <p>It&apos;s a simple <b>web app</b> project kind of a newsletter  build with the help of Unsplash Api</p>
                <p style={{"color":"white"}}>
                <Link className={styles.buttonlink} href="/newsLetter">
        Click here to check it
      </Link></p>
                <p>You can also view the different users post on clicking on any user profile</p>
              </div>
            </section>

            <section className={styles.contentBlock}>
              <div className={styles.textBlock}>
                <h2>Used techs and tools</h2>
                <p>I have Implemented it using next.js and native css</p>
                <p>For All the data used in the newsletter I used unsplashApi</p>
              </div>
              <img src="https://ik.imagekit.io/lrjseyuxi3m/todoapp/undraw_web_tech_xbG0aEh3UfI.png?updatedAt=1636583164512" alt="" />
            </section>

      </main>
     
    </div>
  )
}

export default About
