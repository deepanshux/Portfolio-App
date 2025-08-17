import { useTheme } from "../context/ThemeContext";
import { FontSize, FontWeight } from "../global/GlobalStyle";

type PrimaryTextProps = {
    text?: string;
    style?: React.CSSProperties;
}

const DefaultStyle = {
    fontSize: FontSize.large,
    fontWeight: FontWeight.normal,
}

export const PrimaryText = (props: PrimaryTextProps) => {
    const { themeColors } = useTheme();
    return(
        <label className="primary-text"
            style={{ 
                ...DefaultStyle, 
                color: themeColors.primaryText,
                ...props.style,
                }}>
            {props.text}
        </label>
    )
}