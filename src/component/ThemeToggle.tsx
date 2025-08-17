import { MoonIcon, SunIcon } from "../global/SvgIcons";
import { useTheme } from "../context/ThemeContext";

const ThemeToggle = () => {
    const { theme, toggleTheme } = useTheme();

    const onClickIcon = () => {
        const newTheme = theme === 'light' ? 'dark' : 'light';
        toggleTheme(newTheme);
    };

    return (
        <div className="theme-toggle" onClick={onClickIcon} style={{cursor: 'pointer'}}>
            {theme === 'light' ? SunIcon() : MoonIcon()}
        </div>
    );
}

export default ThemeToggle;