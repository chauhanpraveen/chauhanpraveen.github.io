import AboutImage from "../../assets/praveensingh.jpg";
import CV from "../../assets/update1resume.docx";
import { HiDownload } from "react-icons/hi";
import data from "./data";
import Card from "../../components/Card";
import "./about.css";

const About = () => {
  return (
    <section id="about">
      <div className="container about__container">
        <div className="about__left">
          <div className="about__portrait">
            <img src={AboutImage} alt="About" />
          </div>
        </div>

        <div className="about__right">
          <h2>About Me</h2>
          <div className="about__cards">
            {
              data.map((item) => (
              <Card key={item.id} className="about__card">
                <span className="about__card-icon">{item.icon}</span>
                <h5>{item.title}</h5>
                <small>{item.desc}</small>
              </Card>
            ))}
          </div>
          <p>
            Hi my name is Praveen Singh Chauhan from Bangalore. I'm a full-stack
            web developer with a Bachelors degree in Computer. My top priority
            is to get your bussines online the right way,gicitry
          </p>
          <p>Hi im A full-stack Developer</p>
          <a href={CV} download className="btn primary">
            Download CV
            <HiDownload />
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
