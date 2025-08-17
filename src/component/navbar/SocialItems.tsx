import { useTheme } from "../../context/ThemeContext";
import { OpenUrl } from "../../global/commonUtils";
import { GITHUB_LINK, LINKEDIN_LINK, MEDIUM_LINK } from "../../global/Constant";
import { GithubDarkIcon, GithubLightIcon, LinkedinDarkIcon, LinkedinIcon, MediumDarkIcon, MediumIcon } from "../../global/SvgIcons";
import ClickableIcon from "../ClickableIcon";
import ThemeToggle from "../ThemeToggle";

const SocialItems = () => {

    const {theme} = useTheme();
    
    const onClickMedium = () => {
        OpenUrl(MEDIUM_LINK);
    }

    const onClickGithub = () => {
        OpenUrl(GITHUB_LINK);
    }   

    const onClickLinkedIn = () => {
        OpenUrl(LINKEDIN_LINK);
    }

    return (
        <div className="social-container" style={{display: 'flex', gap: 8}}>
            <ClickableIcon icon={theme === 'dark' ? LinkedinDarkIcon() : LinkedinIcon()} onClick={onClickLinkedIn}/>
            <ClickableIcon icon={theme === 'dark' ? MediumDarkIcon() : MediumIcon()} onClick={onClickMedium}/>
            <ClickableIcon icon={theme === 'dark' ? GithubDarkIcon() : GithubLightIcon()} onClick={onClickGithub}/>
            <ThemeToggle />
        </div>
    )
}

export default SocialItems;