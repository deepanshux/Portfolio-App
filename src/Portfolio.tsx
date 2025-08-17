import Blog from "./sections/blog/Blog";
import Navbar from "./component/navbar/Navbar";
import './Portfolio.css';
import About from "./sections/about/About";
import { Experience } from "./sections/experience/Experience";
import Project from "./sections/project/Project";
import { useTheme } from "./context/ThemeContext";
import { LightColors } from "./global/GlobalStyle";
import { Contact } from "./sections/contact/Contact";
import SkillSection from "./sections/skills/Skills";
import { useRef } from "react";

const Portfolio = () => {
  const { themeColors } = useTheme();
  const targetRef = useRef<HTMLDivElement | null>(null);

  const handleScroll = () => {
    targetRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="portfolio-container" style={{
          backgroundColor:
            themeColors === LightColors
              ? themeColors.primaryBackground
              : themeColors.secondaryBackground,
        }}>
      <Navbar />
      <About onPressGetInTouch={handleScroll}/>
      <div
        className="portfolio-body">
        <Experience />
        <Project />
        <SkillSection />
        <Blog />
        <Contact ref={targetRef}/>
      </div>
    </div>
  );
};

export default Portfolio;