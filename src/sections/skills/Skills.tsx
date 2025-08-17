import Card from "../../component/card/Card";
import { PrimaryText } from "../../component/PrimaryText";
import { SecondaryText } from "../../component/SecondaryText";
import { useTheme } from "../../context/ThemeContext";
import {
  EXPO_DARK_IMAGE,
  EXPO_WHITE_IMAGE,
  GITHUB_DARK_IMAGE,
  GITHUB_IMAGE,
  SKILL_LIST,
} from "../../global/Constant";
import { FontSize, FontWeight } from "../../global/GlobalStyle";
import "./Skills.css";

const SkillSection = () => {
  const { theme } = useTheme();
  return (
    <div className="skills-parent">
      <PrimaryText
        text="Skills"
        style={{ fontSize: FontSize.xxLarge, fontWeight: FontWeight.bold}}
      />
      <div className="skills-container">
        <SecondaryText
          text="Bringing Ideas to Life with these Technologies"
          style={{ fontSize: FontSize.large }}
        />
        <div className="skills-card-container">
          <Card
            type="skill"
            data={{
              title: "Expo",
              imageUrl: theme === "dark" ? EXPO_DARK_IMAGE : EXPO_WHITE_IMAGE,
            }}
          />
          {SKILL_LIST.map((skill, index) => (
            <Card key={index} type="skill" data={skill} />
          ))}
          <Card
            type="skill"
            data={{
              title: "Github",
              imageUrl: theme === "dark" ? GITHUB_DARK_IMAGE : GITHUB_IMAGE,
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default SkillSection;
