import g from '../global.module.css';

import bannerImage from '../assets/images/home-bg.jpg';

function SignUp() {

    return (
        <main style={{backgroundImage: `url(${bannerImage})`}} className={`${g['container']} ${g["full-width"]} ${g['banner']}`}>
            <div className={`${g['grid-container']} ${g["banner__content"]}`}>
                <div className={g['col-12']}>
                    <div className={`${g['card']} ${g['card--w-padding']}`}>
                        <h1 className={g['h1']}>Register</h1>
                        <form className={`${g['form-group']} ${g["form--full"]}`}>
                            <div >
                                <label htmlFor="email">Email</label>
                                <input type="email" id="email" name="email" />
                            </div>
                            <div >
                                <label htmlFor="password">Password</label>
                                <input type="password" id="password" name="password" />
                            </div>
                            <div >
                                <label htmlFor="confirm-password">Confirm Password</label>
                                <input type="password" id="confirm-password" name="confirm-password" />
                            </div>
                            <input type="submit" value="Register" className={`${g["button"]} ${g["success"]} `} />

                        </form>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default SignUp;