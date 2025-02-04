import h from './Header.module.css';
import g from '../global.module.css';
import logo from '../assets/images/logo.svg';

function Header() {
    return (
        <header className={h['header']}>
            <div className={ `${g['container']} ${h['main-nav']}`}> 
                <img src={logo} width={100} alt="Lofi Tapes" />
                <p>lofi beats to code/design/study to.</p>
            </div>
        </header>
    )
}

export default Header;