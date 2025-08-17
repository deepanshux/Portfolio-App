import { OpenUrl } from '../../global/commonUtils';
import Card from '../../component/card/Card';
import { PROJECT_LIST } from '../../global/Constant';
import { FontSize, FontWeight } from '../../global/GlobalStyle';
import './Project.css';
import { PrimaryText } from '../../component/PrimaryText';

const Project = () => {

    const onClickProject = (link: string | undefined) => {
        if (link) {
            OpenUrl(link);
        }
    }

    return (
        <div className="project-container">
            <PrimaryText text="Projects" style={{fontSize: FontSize.xxLarge, fontWeight: FontWeight.bold}}/>
            <div className="project-card-container">
                {PROJECT_LIST.map((project, index) =>
                    <Card
                        key={index}
                        data={project}
                        type="project"
                        onClick={() => onClickProject(project.link)}
                    />
                )}
            </div>
        </div>
    );
}

export default Project;