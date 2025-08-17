import React from "react";
import './ExperienceCard.css';
import { PrimaryText } from "../PrimaryText";
import { FontSize, FontWeight } from "../../global/GlobalStyle";
import { SecondaryText } from "../SecondaryText";

export type ExperienceCardModel = {
    title: string;
    company: string;
    duration: string;
    description: string[];
    icon: React.ReactNode;
}

type ExperienceCardProps = {
    data: ExperienceCardModel[];
}  

export const ExperienceCard: React.FC<ExperienceCardProps> = ({ 
    data
}) => {
    return (
        <div className="experience-card-parent">
            <div className="timeline"></div>
            {data.map((item, index) => (
                <ExperienceCardView 
                    key={index}
                    title={item.title}
                    company={item.company}
                    duration={item.duration}
                    icon={item.icon}
                    description={item.description}
                />
            ))}
        </div>
    );
}

export const ExperienceCardView: React.FC<ExperienceCardModel> = ({ 
    title,
    company,
    duration,
    icon,
    description
}) => {
    return (
        <div className="experience-card-container">
            <div className="experience-card-icon-container">
                {icon}
            </div>
            <div className="experience-card-details">
                <PrimaryText text={`${title} | ${company}`} style={{fontWeight: FontWeight.bold}}/>
                <SecondaryText text={duration} style={{marginTop: 4}}/>
                <ul className="experience-card-description">
                    {description.map((desc, index) => (
                        <li key={index}>
                            <PrimaryText text={desc} style={{ marginTop: 4, fontSize: FontSize.large }} />
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}