import { JSX } from "react";
import './ClickableIcon.css';

type ClickableIconProps = {
    icon: JSX.Element;
    onClick?: () => void;
}

const ClickableIcon = ({
    icon,
    onClick
}: ClickableIconProps) => {
    return (
        <span className="clickable-icon" onClick={onClick}>
            {icon}
        </span>
    );
}

export default ClickableIcon;