import { PrimaryText } from "../../component/PrimaryText";
import { useTheme } from "../../context/ThemeContext";
import {
  DEEPANSHU_JAIN,
  MY_DESCRIPTION,
  MY_PROFILE_IMAGE,
} from "../../global/Constant";
import { FontWeight } from "../../global/GlobalStyle";
import "./About.css";

type AboutProps = {
  onPressGetInTouch?: () => void;
}

const About = ({
  onPressGetInTouch
}: AboutProps) => {

  const {themeColors} = useTheme();
  return (
    <div className="about-container" style={{backgroundColor: themeColors.aboutSectionBackground}}>
      <img
        className="about-image"
        src={MY_PROFILE_IMAGE}
        alt={"Profile Photo"}
      />
        <PrimaryText
          text={DEEPANSHU_JAIN}
          style={{ fontWeight: FontWeight.normal, fontSize: '30px' }}
        />
         <PrimaryText text={MY_DESCRIPTION} 
          style={{maxWidth: '500px', fontSize: '30px', textAlign: 'center', fontWeight: FontWeight.light}}
        />
        <div className="about-button-container" style={{gap: 16, display: 'flex'}}>
          <a href='resume.pdf' download='Deepanshu resume.pdf'>
            <button className='about-button'>Resume</button>
          </a>
          <button className="about-button" onClick={onPressGetInTouch}>Get in Touch</button>
        </div>
    </div>
  );
};

export default About;
