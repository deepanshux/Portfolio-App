import { useTheme } from '../../context/ThemeContext';
import { FontWeight } from '../../global/GlobalStyle';
import { PrimaryText } from '../PrimaryText';
import { SecondaryText } from '../SecondaryText';
import './Card.css';

type CardType = 'project' | 'blog' | 'skill';

export type CardData = {
    title?: string;
    description?: string;
    imageUrl?: string;
    link?: string
}

type ProjectCardProps = {
    data: CardData;
    onClick?: () => void;
}

type BlogCardProps = ProjectCardProps

type SkillCardProps = ProjectCardProps

type CardProps = {
    data: CardData
    type: CardType
    onClick?: () => void;
}

const Card = ({
    data,
    type,
    onClick
}: CardProps) => {
    switch(type) {
        case 'project':
            return <ProjectCard data={data} onClick={onClick}/>;
        case 'blog':
            return <BlogCard data={data} />;
        case 'skill':
            return <SkillCard data={data} />;
        default:
            return null;
    }
}

const ProjectCard = ({
    data,
    onClick
}: ProjectCardProps) => {
    return(
        <div className="project-card" onClick={onClick}>
            <img className="card-image" src={data.imageUrl}  alt={data.title} />
            <PrimaryText text={data.title} style={{fontWeight: FontWeight.bold, marginTop: 8}}/>
            <SecondaryText text={data.description} style={{marginTop: 8}}/>
        </div>
    )
}

const BlogCard = ({
    data
}: BlogCardProps) => {
    const {themeColors} = useTheme();
    return (
      <div
        className="blog-card">
        <div className="blog-card-content">
          <PrimaryText
            text={data.title}
            style={{ fontWeight: FontWeight.bold, marginTop: 8 }}
          />
          <SecondaryText text={data.description} style={{ marginTop: 8 }} />
          <a
            href={data.link}
            target="_blank"
            rel="noopener noreferrer"
            className="card-link"
            style={{ backgroundColor: themeColors.inputBackground, color: themeColors.primaryText }}
          >
            Click here to check full blog
          </a>
        </div>
        <div>
          <img
            className="blog-card-image"
            src={data.imageUrl}
            alt={data.title}
          />
        </div>
      </div>
    );
}

const SkillCard = ({
  data
}: SkillCardProps) => {
  const { themeColors } = useTheme();
    return (
        <div className="skill-card" style={{ backgroundColor: themeColors.primaryBackground }}>
            <img
                className="skill-card-image"
                src={data.imageUrl}
                alt="Skill Icon"
            />
            <PrimaryText text={data.title} style={{ fontWeight: FontWeight.bold }} />
        </div>
    );
}

export default Card;