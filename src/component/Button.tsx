type ButtonProps = {
    label?: string;
    onClick?: () => void;
    buttonStyle?: React.CSSProperties;
}

const Button = ({
    label = "Button",
    onClick,
    buttonStyle
}: ButtonProps) => {
    return (
        <button className="button" style={{...styles.button, ...buttonStyle}} onClick={onClick}>
            {label}
        </button>
    )
}

const styles = {
    button:{
        backgroundColor: '#D6E5F2',
        color: 'black',
        padding: '8px 16px',
        borderRadius: '20px',
        border: 'none',
        cursor: 'pointer',
        fontSize: '12px',
        maxWidth: '200px',
        fontWeight: '500',
    }
}

export default Button;