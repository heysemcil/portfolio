import styles from "./ProjectsStyles.module.css";
import BRC from "../../assets/BRCnail.jpg";
import BlogApp from "../../assets/BlogApp.jpg";
import StockApp from "../../assets/StockApp.jpg";
import MovieApp from "../../assets/movie-app.gif";
import fitLift from "../../assets/fitlift.png";
import ProjectCard from "../../common/ProjectCard";

function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectsContainer}>
        <div className={styles.box}>
          <ProjectCard
            src={BRC}
            link="https://brcnail.com"
            h3="BRC Nail Studio"
            p=""
          />
          <p>-</p>
          <h3>
            <a target="_blank" href="https://github.com/heysemcil/brc-nail">
              Githup Repo
            </a>
          </h3>
        </div>

        <div className={styles.box}>
          <ProjectCard
            src={BlogApp}
            link="https://my-block-app.vercel.app/"
            h3="Blog App"
            p=""
          />
          <p>-</p>
          <h3>
            <a target="_blank" href="https://github.com/heysemcil/blog-app">
              Githup Repo
            </a>
          </h3>
        </div>
        <div className={styles.box}>
          <ProjectCard
            src={StockApp}
            link="https://stock-app-puce-five.vercel.app/"
            h3="Stock Management App"
            p=""
          />
          <p>-</p>
          <h3>
            <a target="_blank" href="https://github.com/heysemcil/stock-app">
              Githup Repo
            </a>
          </h3>
        </div>
        <div className={styles.box}>
          <ProjectCard
            src={MovieApp}
            link="https://my-react-movie-app.vercel.app/"
            h3="Movie App"
            p="Fitness App"
          />
          <p>-</p>
          <h3>
            <a target="_blank" href="https://github.com/heysemcil/movie-app-react">
              Githup Repo
            </a>
          </h3>
        </div>
        
      </div>
    </section>
  );
}

export default Projects;
