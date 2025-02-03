import h from './Header.module.css';
import g from '../global.module.css';
import logo from '../assets/images/logo.svg';

function Header() {
    return (
        <header className={h['header']}>
            <div className={ `${g['container']} ${h['main-nav']}`}> 
                <img src={logo} width={100} alt="Lofi Tapes" />
                <ul className={ `${g['inline-menu']}` }>
                    <li className={g['active-menu-item']}>All</li>
                    <li>Artists</li>
                    <li>Albums</li>
                </ul>
            </div>
        </header>
    )
}

export default Header;