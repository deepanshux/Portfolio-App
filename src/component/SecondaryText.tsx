import { useTheme } from "../context/ThemeContext";
import { FontSize, FontWeight } from "../global/GlobalStyle";

type SecondaryTextProps = {
    text?: string;
    style?: React.CSSProperties;
}

const DefaultStyle = {
    fontSize: FontSize.medium,
    fontWeight: FontWeight.normal,
}

export const SecondaryText = (props: SecondaryTextProps) => {
    const { themeColors } = useTheme();
    return(
        <label className="secondary-text"
            style={{
                ...DefaultStyle,
                ...props.style,
                color: themeColors.secondaryText
            }}>
            {props.text}
        </label>
    )
}