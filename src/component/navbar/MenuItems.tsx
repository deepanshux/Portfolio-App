const MenuItems = () => {
    return (
        <div className="navbar-menu" style={styles.navbarMenu}>
            <label>Project</label>
            <label>Blog</label>
            <label>Experience</label>
        </div>
    )
}

const styles = {
    navbarMenu: {
        display: 'flex',
        gap: '16px',
        fontSize: '16px',
        fontWeight: '500',
    }
}
export default MenuItems;