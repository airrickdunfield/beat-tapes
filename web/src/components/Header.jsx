import styles from './Header.module.css';

function Header() {
    return (
        <header className={styles.header}>
            <h2>Study Tapes</h2>
            <ul className={styles.menu}>
                <li>Artists</li>
                <li>Albums</li>
            </ul>
        </header>
    )
}

export default Header;