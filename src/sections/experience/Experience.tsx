import { ExperienceCard } from '../../component/card/ExperienceCard';
import { PrimaryText } from '../../component/PrimaryText';
import { EXPERIENCE_LIST } from '../../global/Constant';
import { FontSize, FontWeight } from '../../global/GlobalStyle';
import './Experience.css';

export const Experience = () => {
    return (
      <div className="experience-container">
        <PrimaryText
          text="Experience"
          style={{ fontSize: FontSize.xxLarge, fontWeight: FontWeight.bold }}
        />
        <div className="experience-content">
          <ExperienceCard data={EXPERIENCE_LIST} />
        </div>
      </div>
    );
}