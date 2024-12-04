import styles from "./ProjectsStyles.module.css";
import BRC from "../../assets/BRCnail.jpg";
import BlogApp from "../../assets/fireblog.gif";
import HospitalAppointment from "../../assets/hospitalAppointment.png";
import NBACards from "../../assets/NBACards.png";
import StockApp from "../../assets/StockApp.jpg";
import MovieApp from "../../assets/movie-app.gif";
import RecipeApp from "../../assets/recipeApp.gif";
import LanguageCards from "../../assets/LanguageCards.gif";
import ProjectCard from "../../common/ProjectCard";

function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectsContainer}>
        <div className={styles.box}>
          <ProjectCard
            src={StockApp}
            link="https://stock-5yph086ga-heysems-projects.vercel.app/"
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
            src={BlogApp}
            link="https://blog-app-five-jet.vercel.app/"
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
            src={MovieApp}
            link="https://my-react-movie-app.vercel.app/"
            h3="Movie App"
            p="Fitness App"
          />
          <p>-</p>
          <h3>
            <a
              target="_blank"
              href="https://github.com/heysemcil/movie-app-react"
            >
              Githup Repo
            </a>
          </h3>
        </div>
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
      </div>
      <h2 className="sectionTitle2">Other Projects</h2>
      <div className={styles.projectsContainer}>
        <div className={styles.box}>
          <ProjectCard
            src={RecipeApp}
            link="https://recipe-app-two-jet.vercel.app/"
            h3="Recipe App"
            p=""
          />
          <p>-</p>
          <h3>
            <a target="_blank" href="https://github.com/heysemcil/recipe-app">
              Githup Repo
            </a>
          </h3>
        </div>
        <div className={styles.box}>
          <ProjectCard
            src={HospitalAppointment}
            link="https://hospital-appointment-sand.vercel.app/"
            h3="Hospital Appointment"
            p=""
          />
          <p>-</p>
          <h3>
            <a
              target="_blank"
              href="https://github.com/heysemcil/hospital-appointment"
            >
              Githup Repo
            </a>
          </h3>
        </div>
        <div className={styles.box}>
          <ProjectCard
            src={NBACards}
            link="https://nba-legends-jade.vercel.app/"
            h3="NBA Cards"
            p=""
          />
          <p>-</p>
          <h3>
            <a target="_blank" href="https://github.com/heysemcil/nba-legends">
              Githup Repo
            </a>
          </h3>
        </div>
        <div className={styles.box}>
          <ProjectCard
            src={LanguageCards}
            link="https://language-cart.vercel.app/"
            h3="Language Cards"
            p=""
          />
          <p>-</p>
          <h3>
            <a
              target="_blank"
              href="https://github.com/heysemcil/language-cart"
            >
              Githup Repo
            </a>
          </h3>
        </div>
      </div>
    </section>
  );
}

export default Projects;
