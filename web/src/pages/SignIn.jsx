import { useState } from 'react';
import g from '../global.module.css';
import bannerImage from '../assets/images/home-bg.jpg';

function SignIn() {
    const [formData, setFormData] = useState({
        email: '',
        password: '',
    });

    const handleSubmit = (e) => {
        e.preventDefault();

        fetch('http://localhost:3000/users/sign-in/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                email: formData.email,
                password: formData.password,
            }),
        })
        .then((response) => response.json())
        .then((response) => {
            console.log('Sign-in successful:', response.token);
            localStorage.setItem('token', response.token);
            // Handle successful sign-in (e.g., save token, redirect)
        });
    };

    return (
        <main style={{ backgroundImage: `url(${bannerImage})` }} className={`${g['container']} ${g["full-width"]} ${g['banner']}`}>
            <div className={`${g['grid-container']} ${g["banner__content"]}`}>
                <div className={g['col-12']}>
                    <div className={`${g['card']} ${g['card--w-padding']}`}>
                        <h1 className={g['h1']}>Sign In</h1>
                        <form className={`${g['form-group']} ${g["form--full"]}`} onSubmit={handleSubmit}>
                            <div>
                                <label htmlFor="email">Email</label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                    required
                                />
                            </div>
                            <div>
                                <label htmlFor="password">Password</label>
                                <input
                                    type="password"
                                    id="password"
                                    name="password"
                                    value={formData.password}
                                    onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                                    required
                                />
                            </div>
                            <input type="submit" value="Sign In" className={`${g["button"]} ${g["success"]}`} />
                        </form>
                    </div>
                </div>
            </div>
        </main>
    );
}

export default SignIn;