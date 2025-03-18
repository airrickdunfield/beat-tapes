import g from '../global.module.css';
import h from './Home.module.css';

import bannerImage from '../assets/images/home-bg.jpg';

function Home() {

    return (
        <main style={{backgroundImage: `url(${bannerImage})`}} className={`${g['container']} ${g["full-width"]} ${h['home-banner']}`}>
            <div className={`${g['grid-container']} ${h["home-banner__content"]}`}>
                <div className={g['col-12']}>
                    <h1 className={g['h1']}>Welcome, collector.</h1>
                    <h3>Sign up to show off.</h3>
                    <div className={h["home-banner__buttons"]}>
                        <button className={`${g['button']} ${g["success"]}`}>Sign Up</button>
                        <button className={`${g['button']}`}>Sign In</button>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default Home;